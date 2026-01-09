'use client'

import { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const TAG_COLORS = [
  "#9FFFCA", "#FFAEFF", "#FFAC88", "#C6BBFF", "#F9FFBD",
  "#A8FFD8", "#FC9F9F", "#FF8FD4", "#FFB7E3", "#FFB39A",
  "#FFD1B8", "#B8C7FF", "#D6D0FF", "#FFF3A0", "#EFFF9F",
  "#8FD6FF", "#AEE8FF", "#BFF2E8", "#FFDDEB"
]

function getColorForType(type) {
  let hash = 0
  for (let i = 0; i < type.length; i++) {
    hash = type.charCodeAt(i) + ((hash << 5) - hash)
  }
  return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length]
}

export default function Map({ lieux = [], villes = [], filtresActifs = { types: [], villes: [] }, onLieuClick }) {
  const mapContainer = useRef(null)
  const mapRef = useRef(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const popupRef = useRef(null)

  useEffect(() => {
    if (mapRef.current) return

    mapRef.current = new maplibregl.Map({
      container: mapContainer.current,
      style: '/map-style.json',
      center: [2.3522, 46.8566],
      zoom: 5
    })

    mapRef.current.addControl(new maplibregl.NavigationControl())

    mapRef.current.on('load', () => {
      console.log('✅ Carte chargée')
      setMapLoaded(true)
    })

    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return

    console.log('📍 Lieux reçus:', lieux.length)
    console.log('🏙️ Villes avec coords:', villes)

    // Créer un map des villes pour lookup rapide
    const villesMap = {}
    villes.forEach(v => {
      if (v.latitude && v.longitude) {
        villesMap[v.nom] = { lat: v.latitude, lng: v.longitude }
      }
    })

    // Filtrer les lieux
    const lieuxFiltres = lieux.filter(lieu => {
      const matchTypes = filtresActifs.types.length === 0 || 
        filtresActifs.types.some(t => lieu.types.includes(t))
      const matchVilles = filtresActifs.villes.length === 0 || 
        filtresActifs.villes.includes(lieu.ville)
      const hasVilleCoords = villesMap[lieu.ville]
      
      if (!hasVilleCoords) {
        console.log(`⚠️ Ville "${lieu.ville}" n'a pas de coordonnées`)
      }
      
      return matchTypes && matchVilles && hasVilleCoords
    })

    console.log('📌 Lieux affichables:', lieuxFiltres.length)

    // Grouper les lieux par ville pour compter
    const lieuxParVille = {}
    lieuxFiltres.forEach(lieu => {
      if (!lieuxParVille[lieu.ville]) {
        lieuxParVille[lieu.ville] = []
      }
      lieuxParVille[lieu.ville].push(lieu)
    })

    // Créer le GeoJSON avec un point par ville (couleur grise)
    const geojsonData = {
      type: 'FeatureCollection',
      features: Object.entries(lieuxParVille).map(([ville, lieuxVille]) => {
        const coords = villesMap[ville]
        const types = [...new Set(lieuxVille.flatMap(l => l.types))]
        
        return {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [coords.lng, coords.lat]
          },
          properties: {
            ville: ville,
            count: lieuxVille.length,
            lieux: JSON.stringify(lieuxVille.map(l => ({ 
              id: l.id, 
              nom: l.nom, 
              types: l.types,
              description: l.description,
              website: l.website,
              instagram: l.instagram,
              created_at: l.created_at
            }))),
            types: JSON.stringify(types),
            color: '#6B7280'
          }
        }
      })
    }

    console.log('🗺️ Points sur la carte:', geojsonData.features.length)

    // Mettre à jour ou créer la source
    if (mapRef.current.getSource('lieux')) {
      mapRef.current.getSource('lieux').setData(geojsonData)
    } else {
      mapRef.current.addSource('lieux', {
        type: 'geojson',
        data: geojsonData
      })

      // Layer de cercles avec taille proportionnelle au nombre de lieux
      mapRef.current.addLayer({
        id: 'lieux-circles',
        type: 'circle',
        source: 'lieux',
        paint: {
          'circle-radius': [
            'interpolate', ['linear'], ['get', 'count'],
            1, 10,
            5, 15,
            10, 20,
            20, 25
          ],
          'circle-color': '#c5c5c5ff',
          'circle-opacity': 0.8,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#FFFFFF'
        }
      })

      // Layer de labels avec le nombre de lieux
      mapRef.current.addLayer({
        id: 'lieux-labels',
        type: 'symbol',
        source: 'lieux',
        layout: {
          'text-field': ['concat', ['get', 'ville'], '\n(', ['get', 'count'], ')'],
          'text-font': ['Open Sans Regular', 'Arial Unicode MS Regular'],
          'text-size': 12,
          'text-offset': [0, 0],
          'text-anchor': 'center'
        },
        paint: {
          'text-color': '#5e5e5eff',
        }
      })

      // Popup au clic
      mapRef.current.on('click', 'lieux-circles', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice()
        const { ville, count, lieux: lieuxJson, types } = e.features[0].properties

        const lieuxArray = JSON.parse(lieuxJson)
        const typesArray = JSON.parse(types)

        const lieuxHTML = lieuxArray
          .map(l => {
            const typesTags = l.types.map(t => 
              `<span style="background-color: ${getColorForType(t)}; color: #202020; padding: 1px 6px; border-radius: 3px; font-size: 11px; margin-left: 4px;">${t}</span>`
            ).join('')

            let nouveauBadge = ''
            if (l.created_at) {
              const now = new Date()
              const created = new Date(l.created_at)
              const diffInDays = (now - created) / (1000 * 60 * 60 * 24)
              if (diffInDays <= 3) {
                nouveauBadge = `<span style="background-color: #10b981; color: white; font-size: 10px; font-weight: bold; padding: 2px 6px; border-radius: 3px; margin-left: 4px;">NOUVEAU</span>`
              }
            }



            return `<div 
              data-lieu-id="${l.id}"
              style="
                margin: 4px 0; 
                padding: 8px; 
                background: #f9f9f9; 
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.2s;
              "
              onmouseover="this.style.backgroundColor='#e5e7eb'"
              onmouseout="this.style.backgroundColor='#f9f9f9'"
            >
                <div><strong>${l.nom}</strong>${nouveauBadge}${typesTags}</div>
      
            </div>`
          })
          .join('')

        const typesHTML = typesArray
          .map(type => `<span style="background-color: ${getColorForType(type)}; color: #202020; padding: 3px 8px; border-radius: 4px; font-size: 12px; display: inline-block; margin: 2px;">${type}</span>`)
          .join('')

        if (popupRef.current) {
          popupRef.current.remove()
        }

        popupRef.current = new maplibregl.Popup({ maxWidth: '600px' })
          .setLngLat(coordinates)
          .setHTML(`
            <div style="padding: 12px; max-height: 400px; overflow-y: auto;">
              <h3 style="margin: 0 0 8px 0; font-weight: bold; font-size: 18px;">📍 ${ville}</h3>
              <p style="margin: 0 0 12px 0; color: #666; font-size: 14px;">${count} lieu${count > 1 ? 'x' : ''}</p>
              
              <div style="margin-bottom: 12px;">
                <strong style="font-size: 12px; color: #666;">Types présents :</strong>
                <div style="margin-top: 4px;">${typesHTML}</div>
              </div>
              
              <div style="border-top: 1px solid #ddd; padding-top: 8px;">
                <strong style="font-size: 12px; color: #666;">Cliquez sur un lieu pour plus d'infos :</strong>
                <div style="margin-top: 8px;">${lieuxHTML}</div>
              </div>
            </div>
          `)
          .addTo(mapRef.current)

        // Ajouter les event listeners après que la popup soit dans le DOM
        setTimeout(() => {
          lieuxArray.forEach(lieu => {
            const element = document.querySelector(`[data-lieu-id="${lieu.id}"]`)
            if (element && onLieuClick) {
              element.addEventListener('click', () => {
                const lieuComplet = lieux.find(l => l.id === lieu.id)
                if (lieuComplet) {
                  onLieuClick(lieuComplet)
                  if (popupRef.current) {
                    popupRef.current.remove()
                  }
                }
              })
            }
          })
        }, 100)
      })

      mapRef.current.on('mouseenter', 'lieux-circles', () => {
        mapRef.current.getCanvas().style.cursor = 'pointer'
      })
      mapRef.current.on('mouseleave', 'lieux-circles', () => {
        mapRef.current.getCanvas().style.cursor = ''
      })
    }

    // Ajuster la vue
    if (geojsonData.features.length > 0) {
      const bounds = new maplibregl.LngLatBounds()
      geojsonData.features.forEach(feature => {
        bounds.extend(feature.geometry.coordinates)
      })
      mapRef.current.fitBounds(bounds, { 
        padding: 50, 
        maxZoom: 10,
        duration: 1000
      })
    } else {
      console.log('⚠️ Aucun lieu à afficher sur la carte')
    }

  }, [lieux, villes, filtresActifs, mapLoaded, onLieuClick])

  return (
    <div
      ref={mapContainer}
      style={{ width: '100%', height: '100%' }}
    />
  )
}