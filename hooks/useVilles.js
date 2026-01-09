'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export function useVilles() {
  const [villes, setVilles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadVilles()
  }, [])

  const loadVilles = async () => {
    const { data, error } = await supabase
      .from('villes')
      .select('*')
      .order('nom', { ascending: true })
    
    if (!error && data) {
      setVilles(data)
    }
    setLoading(false)
  }

  const ajouterVille = async (nomVille) => {
    // Vérifier si la ville existe déjà
    const normalize = (str) => {
      if (!str || typeof str !== 'string') return ''
      return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
    }

    if (villes.some(v => normalize(v.nom) === normalize(nomVille))) {
      return // Ville existe déjà
    }

    // Géocoder la ville
    const coords = await geocodeVille(nomVille)

    const nouvelleVille = coords
      ? { nom: nomVille, latitude: coords.latitude, longitude: coords.longitude }
      : { nom: nomVille }

    const { data, error } = await supabase
      .from('villes')
      .insert([nouvelleVille])
      .select()

    if (error) throw error
    
    await loadVilles() // Recharger la liste
    return data[0]
  }

  const supprimerVille = async (nomVille) => {
    const { error } = await supabase
      .from('villes')
      .delete()
      .eq('nom', nomVille)

    if (error) throw error
    await loadVilles()
  }

  const geocodeVille = async (nomVille) => {
    if (!nomVille || typeof nomVille !== 'string') return null

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?` + 
        new URLSearchParams({
          q: `${nomVille}, France`,
          format: 'json',
          limit: 1,
          countrycodes: 'fr'
        }),
        {
          headers: {
            'User-Agent': 'HexaIndex/1.0'
          }
        }
      )

      const data = await response.json()
      if (data && data.length > 0) {
        return {
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon)
        }
      }

      return null
    } catch (error) {
      console.error('Erreur de géocodage:', error)
      return null
    }
  }

  return {
    villes,
    loading,
    loadVilles,
    ajouterVille,
    supprimerVille,
    geocodeVille
  }
}