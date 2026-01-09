'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import MainMenu from '@/components/MainMenu'
import { Globe, Instagram, ExternalLink, RefreshCw, Sparkles } from 'lucide-react'
import { isNew } from '@/utils/helper'
import BoutonFavori from '@/components/BoutonFavori'

export default function RandomPage() {
  const [lieux, setLieux] = useState([])
  const [categories, setCategories] = useState([])
  const [villes, setVilles] = useState([])
  const [lieuActuel, setLieuActuel] = useState(null)
  const [loading, setLoading] = useState(false)
  const [filtres, setFiltres] = useState({ types: [], villes: [] })
  const [showFilters, setShowFilters] = useState(false)

  const TAG_COLORS = [
    "#9FFFCA", "#FFAEFF", "#FFAC88", "#C6BBFF", "#F9FFBD", "#A8FFD8",
    "#FC9F9F", "#FF8FD4", "#FFB7E3", "#FFB39A", "#FFD1B8", "#B8C7FF",
    "#D6D0FF", "#FFF3A0", "#EFFF9F", "#8FD6FF", "#AEE8FF", "#BFF2E8", "#FFDDEB",
  ]

  function getColorForType(type) {
    let hash = 0
    for (let i = 0; i < type.length; i++) {
      hash = type.charCodeAt(i) + ((hash << 5) - hash)
    }
    return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length]
  }

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const { data: lieuxData } = await supabase
      .from('lieux')
      .select('*')
      .order('nom', { ascending: true })

    const { data: categoriesData } = await supabase
      .from('categories')
      .select('nom')
      .order('nom', { ascending: true })

    const { data: villesData } = await supabase
      .from('villes')
      .select('*')
      .order('nom', { ascending: true })

    if (lieuxData) setLieux(lieuxData)
    if (categoriesData) setCategories(categoriesData.map(c => c.nom))
    if (villesData) setVilles(villesData)
  }

  const toggleFiltre = (type, value) => {
    setFiltres(prev => {
      const arr = prev[type]
      const newArr = arr.includes(value)
        ? arr.filter(v => v !== value)
        : [...arr, value]
      return { ...prev, [type]: newArr }
    })
  }

  const lieuxFiltres = lieux.filter(lieu => {
    const matchTypes = filtres.types.length === 0 || 
      filtres.types.some(t => lieu.types.includes(t))
    const matchVilles = filtres.villes.length === 0 || 
      filtres.villes.includes(lieu.ville)
    return matchTypes && matchVilles
  })

  const tirerAuSort = () => {
    if (lieuxFiltres.length === 0) {
      alert('Aucun lieu disponible avec ces filtres !')
      return
    }

    setLoading(true)
    
    // Animation de "tirage au sort"
    let counter = 0
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * lieuxFiltres.length)
      setLieuActuel(lieuxFiltres[randomIndex])
      counter++
      
      if (counter >= 10) {
        clearInterval(interval)
        setLoading(false)
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4">
      <div className="w-[95%] max-w-[95rem] mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">🎲 Lieu Aléatoire</h1>
          <p className="text-gray-600 mb-4">
            Laissez le hasard vous faire découvrir de nouvelles ressources !
          </p>
          <MainMenu />
        </div>

        {/* Filtres optionnels */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-between text-left"
          >
            <div>
              <h3 className="font-semibold text-gray-800">Filtres optionnels</h3>
              <p className="text-sm text-gray-500">
                {filtres.types.length + filtres.villes.length > 0 
                  ? `${filtres.types.length + filtres.villes.length} filtre(s) actif(s)`
                  : 'Aucun filtre - tous les lieux disponibles'}
              </p>
            </div>
            <span className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          {showFilters && (
            <div className="mt-4 grid md:grid-cols-2 gap-6 pt-4 border-t">
              <div>
                <h4 className="font-medium mb-2 text-sm text-gray-700">Types de lieux</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => toggleFiltre('types', cat)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        filtres.types.includes(cat)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 border hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-sm text-gray-700">Villes</h4>
                <div className="flex flex-wrap gap-2">
                  {villes.map(ville => (
                    <button
                      key={ville.nom}
                      onClick={() => toggleFiltre('villes', ville.nom)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        filtres.villes.includes(ville.nom)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 border hover:bg-gray-200'
                      }`}
                    >
                      {ville.nom}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bouton principal */}
        <div className="flex justify-center mb-8">
          <button
            onClick={tirerAuSort}
            disabled={loading || lieuxFiltres.length === 0}
            className={`
              group relative px-12 py-6 rounded-2xl font-bold text-xl
              bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
              text-white shadow-2xl hover:shadow-3xl
              transform transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed
              ${!loading ? 'hover:scale-105 hover:-translate-y-1' : 'animate-pulse'}
            `}
          >
            <div className="flex items-center gap-3">
              {loading ? (
                <>
                  <RefreshCw className="animate-spin" size={28} />
                  Tirage en cours...
                </>
              ) : (
                <>
                  <Sparkles size={28} />
                  {lieuActuel ? 'Nouveau tirage !' : 'Découvrir un lieu'}
                  <Sparkles size={28} />
                </>
              )}
            </div>
          </button>
        </div>

        {/* Résultat */}
        {lieuActuel && !loading && (
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto transform transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-2xl">
                🎯
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide"> <BoutonFavori lieu={lieuActuel} size={28} /> Votre lieu surprise</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl font-bold text-gray-800">{lieuActuel.nom}</h2>
                  {isNew(lieuActuel.created_at) && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      NOUVEAU
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-600 flex items-center gap-2 mb-3">
                <span className="text-xl">📍</span>
                <span className="font-medium">{lieuActuel.ville}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {lieuActuel.types.map(type => (
                  <span 
                    key={type}
                    style={{ backgroundColor: getColorForType(type), color: '#202020ff' }}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {lieuActuel.description && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">À propos</h3>
                <p className="text-gray-600 leading-relaxed">{lieuActuel.description}</p>
              </div>
            )}

            {(lieuActuel.website || lieuActuel.instagram) && (
              <div className="space-y-3">
                {lieuActuel.website && (
                  <a 
                    href={lieuActuel.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <Globe size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">Visiter le site web</p>
                      <p className="text-sm text-gray-500 truncate">{lieuActuel.website}</p>
                    </div>
                    <ExternalLink size={18} className="text-gray-400 group-hover:text-blue-600" />
                  </a>
                )}
                
                {lieuActuel.instagram && (
                  <a 
                    href={lieuActuel.instagram.startsWith('http') ? lieuActuel.instagram : `https://instagram.com/${lieuActuel.instagram.replace('@', '')}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Instagram size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">Voir sur Instagram</p>
                      <p className="text-sm text-gray-500">{lieuActuel.instagram}</p>
                    </div>
                    <ExternalLink size={18} className="text-gray-400 group-hover:text-pink-600" />
                  </a>
                )}
              </div>
            )}
          </div>
        )}

        {/* État initial */}
        {!lieuActuel && !loading && (
          <div className="text-center py-16 max-w-2xl mx-auto">
            <div className="text-8xl mb-6">🎲</div>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Prêt pour une découverte ?
            </h2>
            <p className="text-gray-500 text-lg">
              Cliquez sur le bouton ci-dessus pour découvrir un lieu au hasard parmi les {lieuxFiltres.length} lieux disponibles
            </p>
          </div>
        )}

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}   