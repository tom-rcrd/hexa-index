'use client'

// app/contribuer/page.js - VERSION OPTIMISÉE avec autocomplétion villes

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { Send, CheckCircle, AlertCircle, X, Plus, Trash2 } from 'lucide-react'
import MainMenu from '@/components/MainMenu'

export default function Contribuer() {
  const [lieux, setLieux] = useState([{
    id: Date.now(),
    nomLieu: '',
    typesDeLieux: [],
    ville: '',
    description: '',
    website: '',
    instagram: ''
  }])
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [villes, setVilles] = useState([])
  const [typeInputs, setTypeInputs] = useState({})
  const [villeInputs, setVilleInputs] = useState({})
  const [showTypeSuggestions, setShowTypeSuggestions] = useState({})
  const [showVilleSuggestions, setShowVilleSuggestions] = useState({})
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState({})
  const [selectedVilleSuggestionIndex, setSelectedVilleSuggestionIndex] = useState({})

  const TAG_COLORS = [
    "#9FFFCA", "#FFAEFF", "#FFAC88", "#C6BBFF", "#F9FFBD",
    "#A8FFD8", "#FC9F9F", "#FF8FD4", "#FFB7E3", "#FFB39A",
    "#FFD1B8", "#B8C7FF", "#D6D0FF", "#FFF3A0", "#EFFF9F",
    "#8FD6FF", "#AEE8FF", "#BFF2E8", "#FFDDEB",
  ]

  function getColorForType(type) {
    let hash = 0
    for (let i = 0; i < type.length; i++) {
      hash = type.charCodeAt(i) + ((hash << 5) - hash)
    }
    return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length]
  }

  const normalizeString = (str) => {
    if (!str || typeof str !== 'string') return ''
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
  }

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const { data: categoriesData } = await supabase
      .from('categories')
      .select('nom')
      .order('nom', { ascending: true })
    
    const { data: villesData } = await supabase
      .from('villes')
      .select('nom')
      .order('nom', { ascending: true })
    
    if (categoriesData) setCategories(categoriesData.map(c => c.nom))
    if (villesData) setVilles(villesData.map(v => v.nom))
  }

  const ajouterLieu = useCallback(() => {
    setLieux(prev => [...prev, {
      id: Date.now(),
      nomLieu: '',
      typesDeLieux: [],
      ville: '',
      description: '',
      website: '',
      instagram: ''
    }])
  }, [])

  const supprimerLieu = useCallback((id) => {
    if (lieux.length > 1) {
      setLieux(prev => prev.filter(l => l.id !== id))
      setTypeInputs(prev => {
        const newInputs = { ...prev }
        delete newInputs[id]
        return newInputs
      })
      setVilleInputs(prev => {
        const newInputs = { ...prev }
        delete newInputs[id]
        return newInputs
      })
    }
  }, [lieux.length])

  const updateLieu = useCallback((id, field, value) => {
    setLieux(prev => prev.map(l => l.id === id ? { ...l, [field]: value } : l))
  }, [])

  // ========== GESTION DES TYPES ==========
  const getTypeSuggestions = (id) => {
    const typeInput = typeInputs[id] || ''
    if (!typeInput) return []
    
    const lieu = lieux.find(l => l.id === id)
    const normalized = normalizeString(typeInput)
    return categories
      .filter(c => !lieu.typesDeLieux.includes(c))
      .filter(c => normalizeString(c).includes(normalized))
      .sort((a, b) => {
        const aNorm = normalizeString(a)
        const bNorm = normalizeString(b)
        const aStarts = aNorm.startsWith(normalized)
        const bStarts = bNorm.startsWith(normalized)
        if (aStarts && !bStarts) return -1
        if (!aStarts && bStarts) return 1
        return a.localeCompare(b, 'fr')
      })
  }

  const handleTypeInputKeyDown = (e, id) => {
    const suggestions = getTypeSuggestions(id)
    
    if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault()
      const selectedType = selectedSuggestionIndex[id] >= 0 
        ? suggestions[selectedSuggestionIndex[id]] 
        : suggestions[0]
      ajouterType(id, selectedType)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedSuggestionIndex(prev => ({
        ...prev,
        [id]: (prev[id] || -1) < suggestions.length - 1 
          ? (prev[id] || -1) + 1 
          : (prev[id] || -1)
      }))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedSuggestionIndex(prev => ({
        ...prev,
        [id]: (prev[id] || 0) > 0 ? prev[id] - 1 : -1
      }))
    } else if (e.key === 'Enter' && (selectedSuggestionIndex[id] || -1) >= 0) {
      e.preventDefault()
      ajouterType(id, suggestions[selectedSuggestionIndex[id]])
    }
  }

  const ajouterType = (id, type) => {
    const lieu = lieux.find(l => l.id === id)
    if (type && !lieu.typesDeLieux.includes(type)) {
      updateLieu(id, 'typesDeLieux', [...lieu.typesDeLieux, type])
    }
    setTypeInputs(prev => ({ ...prev, [id]: '' }))
    setShowTypeSuggestions(prev => ({ ...prev, [id]: false }))
    setSelectedSuggestionIndex(prev => ({ ...prev, [id]: -1 }))
  }

  const retirerType = (id, type) => {
    const lieu = lieux.find(l => l.id === id)
    updateLieu(id, 'typesDeLieux', lieu.typesDeLieux.filter(t => t !== type))
  }

  // ========== GESTION DES VILLES ==========
  const getVilleSuggestions = (id) => {
    const villeInput = villeInputs[id] || ''
    if (!villeInput) return []
    
    const normalized = normalizeString(villeInput)
    return villes
      .filter(v => normalizeString(v).includes(normalized))
      .sort((a, b) => {
        const aNorm = normalizeString(a)
        const bNorm = normalizeString(b)
        const aStarts = aNorm.startsWith(normalized)
        const bStarts = bNorm.startsWith(normalized)
        if (aStarts && !bStarts) return -1
        if (!aStarts && bStarts) return 1
        return a.localeCompare(b, 'fr')
      })
  }

  const handleVilleInputKeyDown = (e, id) => {
    const suggestions = getVilleSuggestions(id)
    
    if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault()
      const selectedVille = selectedVilleSuggestionIndex[id] >= 0 
        ? suggestions[selectedVilleSuggestionIndex[id]] 
        : suggestions[0]
      selectionnerVille(id, selectedVille)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedVilleSuggestionIndex(prev => ({
        ...prev,
        [id]: (prev[id] || -1) < suggestions.length - 1 
          ? (prev[id] || -1) + 1 
          : (prev[id] || -1)
      }))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedVilleSuggestionIndex(prev => ({
        ...prev,
        [id]: (prev[id] || 0) > 0 ? prev[id] - 1 : -1
      }))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if ((selectedVilleSuggestionIndex[id] || -1) >= 0 && suggestions.length > 0) {
        selectionnerVille(id, suggestions[selectedVilleSuggestionIndex[id]])
      } else {
        // Si Enter sans sélection, utiliser le texte saisi comme nouvelle ville
        const input = villeInputs[id]?.trim()
        if (input) {
          selectionnerVille(id, input)
        }
      }
    }
  }

  const selectionnerVille = (id, ville) => {
    updateLieu(id, 'ville', ville)
    setVilleInputs(prev => ({ ...prev, [id]: '' }))
    setShowVilleSuggestions(prev => ({ ...prev, [id]: false }))
    setSelectedVilleSuggestionIndex(prev => ({ ...prev, [id]: -1 }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Vérifier que tous les lieux ont au moins nom, type et ville
    const isValid = lieux.every(l => 
      l.nomLieu.trim() && l.typesDeLieux.length > 0 && l.ville.trim()
    )
    
    if (!isValid) {
      setStatus('error')
      return
    }

    setLoading(true)

    try {
      const contributions = lieux.map(lieu => ({
        nom_lieu: lieu.nomLieu.trim(),
        types_de_lieux: lieu.typesDeLieux.join(', '),
        ville: lieu.ville.trim(),
        description: lieu.description.trim() || null,
        website: lieu.website.trim() || null,
        instagram: lieu.instagram.trim() || null,
        email: email.trim() || null,
        statut: 'en_attente',
        created_at: new Date().toISOString()
      }))

      const { error } = await supabase
        .from('contributions')
        .insert(contributions)

      if (error) throw error

      setStatus('success')
      setLieux([{
        id: Date.now(),
        nomLieu: '',
        typesDeLieux: [],
        ville: '',
        description: '',
        website: '',
        instagram: ''
      }])
      setEmail('')
      setTypeInputs({})
      setVilleInputs({})
      
      // Scroll vers le haut pour voir le message de succès
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Erreur:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="w-[95%] max-w-[95rem] mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Contribuer à Hexa Index</h1>
            <p className="text-gray-600 mt-2">
              Vous connaissez des ressources qui ne sont pas encore référencées ? Proposez-les !
            </p>
            <div className="mt-4">
              <MainMenu />
            </div>
          </div>

          {status === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <CheckCircle className="text-green-600 mt-0.5" size={20} />
              <div className="flex-1">
                <h3 className="font-semibold text-green-800">Contribution envoyée !</h3>
                <p className="text-sm text-green-700 mt-1">
                  Merci pour votre contribution. {lieux.length > 1 ? 'Vos lieux seront examinés' : 'Elle sera examinée'} et {lieux.length > 1 ? 'ajoutés' : 'ajoutée'} prochainement.
                </p>
              </div>
              <button
                onClick={() => setStatus(null)}
                className="text-green-600 hover:text-green-800 p-1"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="text-red-600 mt-0.5" size={20} />
              <div className="flex-1">
                <h3 className="font-semibold text-red-800">Erreur</h3>
                <p className="text-sm text-red-700 mt-1">
                  Veuillez remplir tous les champs obligatoires (nom, type et ville) pour chaque lieu.
                </p>
              </div>
              <button
                onClick={() => setStatus(null)}
                className="text-red-600 hover:text-red-800 p-1"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* En-têtes du tableau */}
            <div className="hidden md:grid md:grid-cols-[1.5fr_1.5fr_1fr_2fr_1.2fr_1.2fr_auto] gap-4 pb-2 border-b font-medium text-sm text-gray-700">
              <div>Nom du lieu <span className="text-red-500">*</span></div>
              <div>Type(s) <span className="text-red-500">*</span></div>
              <div>Ville <span className="text-red-500">*</span></div>
              <div>Description</div>
              <div>Site web</div>
              <div>Instagram</div>
              <div></div>
            </div>

            {/* Lignes de lieux */}
            <div className="space-y-6">
              {lieux.map((lieu, index) => (
                <div key={lieu.id} className="border rounded-lg p-4 bg-gray-50">
                  <div className="md:hidden text-sm font-medium text-gray-600 mb-3">
                    Lieu #{index + 1}
                  </div>
                  <div className="grid md:grid-cols-[1.5fr_1.5fr_1fr_2fr_1.2fr_1.2fr_auto] gap-4 items-start">
                    {/* Nom du lieu */}
                    <div>
                      <label className="block md:hidden text-sm font-medium mb-1">
                        Nom du lieu <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={lieu.nomLieu}
                        onChange={(e) => updateLieu(lieu.id, 'nomLieu', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ex: Atelier Supersérigraphie"
                        required
                      />
                    </div>

                    {/* Types de lieu */}
                    <div className="relative">
                      <label className="block md:hidden text-sm font-medium mb-1">
                        Type(s) de lieu <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={typeInputs[lieu.id] || ''}
                        onChange={(e) => {
                          setTypeInputs(prev => ({ ...prev, [lieu.id]: e.target.value }))
                          setShowTypeSuggestions(prev => ({ ...prev, [lieu.id]: true }))
                          setSelectedSuggestionIndex(prev => ({ ...prev, [lieu.id]: -1 }))
                        }}
                        onKeyDown={(e) => handleTypeInputKeyDown(e, lieu.id)}
                        onFocus={() => setShowTypeSuggestions(prev => ({ ...prev, [lieu.id]: true }))}
                        onBlur={() => setTimeout(() => setShowTypeSuggestions(prev => ({ ...prev, [lieu.id]: false })), 200)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Rechercher..."
                      />
                      {showTypeSuggestions[lieu.id] && typeInputs[lieu.id] && (
                        <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {getTypeSuggestions(lieu.id).map((cat, idx) => (
                            <div
                              key={cat}
                              onClick={() => ajouterType(lieu.id, cat)}
                              className={`px-3 py-2 cursor-pointer text-sm ${
                                idx === (selectedSuggestionIndex[lieu.id] || -1)
                                  ? 'bg-blue-100' 
                                  : 'hover:bg-blue-50'
                              }`}
                            >
                              {cat}
                              {idx === 0 && <span className="text-xs text-gray-500 ml-2">(Tab)</span>}
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {lieu.typesDeLieux.map(type => {
                          const color = getColorForType(type)
                          return (
                            <span 
                              key={type} 
                              style={{ backgroundColor: color, color: '#202020ff' }}
                              className="px-2 py-0.5 rounded-full text-xs flex items-center gap-1"
                            >
                              {type}
                              <X size={12} className="cursor-pointer" onClick={() => retirerType(lieu.id, type)} />
                            </span>
                          )
                        })}
                      </div>
                    </div>

                    {/* Ville avec autocomplétion */}
                    <div className="relative">
                      <label className="block md:hidden text-sm font-medium mb-1">
                        Ville <span className="text-red-500">*</span>
                      </label>
                      {lieu.ville ? (
                        // Affichage de la ville sélectionnée
                        <div className="w-full px-3 py-2 border rounded-lg bg-white flex items-center justify-between">
                          <span className="text-gray-800">{lieu.ville}</span>
                          <button
                            type="button"
                            onClick={() => {
                              updateLieu(lieu.id, 'ville', '')
                              setVilleInputs(prev => ({ ...prev, [lieu.id]: '' }))
                            }}
                            className="text-gray-400 hover:text-gray-600 p-1"
                            aria-label="Changer de ville"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ) : (
                        // Input avec autocomplétion
                        <>
                          <input
                            type="text"
                            value={villeInputs[lieu.id] || ''}
                            onChange={(e) => {
                              setVilleInputs(prev => ({ ...prev, [lieu.id]: e.target.value }))
                              setShowVilleSuggestions(prev => ({ ...prev, [lieu.id]: true }))
                              setSelectedVilleSuggestionIndex(prev => ({ ...prev, [lieu.id]: -1 }))
                            }}
                            onKeyDown={(e) => handleVilleInputKeyDown(e, lieu.id)}
                            onFocus={() => setShowVilleSuggestions(prev => ({ ...prev, [lieu.id]: true }))}
                            onBlur={() => setTimeout(() => setShowVilleSuggestions(prev => ({ ...prev, [lieu.id]: false })), 200)}
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Rechercher ou créer..."
                            required
                          />
                          {showVilleSuggestions[lieu.id] && villeInputs[lieu.id] && (
                            <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                              {getVilleSuggestions(lieu.id).map((ville, idx) => (
                                <div
                                  key={ville}
                                  onClick={() => selectionnerVille(lieu.id, ville)}
                                  className={`px-3 py-2 cursor-pointer text-sm ${
                                    idx === (selectedVilleSuggestionIndex[lieu.id] || -1)
                                      ? 'bg-blue-100' 
                                      : 'hover:bg-blue-50'
                                  }`}
                                >
                                  {ville}
                                  {idx === 0 && <span className="text-xs text-gray-500 ml-2">(Tab)</span>}
                                </div>
                              ))}
                              {/* Option pour créer une nouvelle ville */}
                              {villeInputs[lieu.id] && 
                               !villes.some(v => normalizeString(v) === normalizeString(villeInputs[lieu.id])) && (
                                <div
                                  onClick={() => selectionnerVille(lieu.id, villeInputs[lieu.id].trim())}
                                  className="px-3 py-2 cursor-pointer text-sm hover:bg-green-50 border-t text-green-700 font-medium"
                                >
                                  + Créer "{villeInputs[lieu.id].trim()}" <span className="text-xs text-gray-500 ml-2">(Enter)</span>
                                </div>
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block md:hidden text-sm font-medium mb-1">
                        Description
                      </label>
                      <textarea
                        value={lieu.description}
                        onChange={(e) => updateLieu(lieu.id, 'description', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Infos complémentaires..."
                        rows="2"
                      />
                    </div>

                    {/* Site web */}
                    <div>
                      <label className="block md:hidden text-sm font-medium mb-1">
                        Site web
                      </label>
                      <input
                        type="url"
                        value={lieu.website}
                        onChange={(e) => updateLieu(lieu.id, 'website', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://..."
                      />
                    </div>

                    {/* Instagram */}
                    <div>
                      <label className="block md:hidden text-sm font-medium mb-1">
                        Instagram
                      </label>
                      <input
                        type="text"
                        value={lieu.instagram}
                        onChange={(e) => updateLieu(lieu.id, 'instagram', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="@pseudo"
                      />
                    </div>

                    {/* Bouton supprimer */}
                    <div className="flex items-start pt-1">
                      {lieux.length > 1 && (
                        <button
                          type="button"
                          onClick={() => supprimerLieu(lieu.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Supprimer ce lieu"
                        >
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton ajouter un lieu */}
            <button
              type="button"
              onClick={ajouterLieu}
              className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              Ajouter un autre lieu
            </button>

            {/* Email */}
            <div className="border-t pt-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Votre email (optionnel)
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="votre@email.com"
              />
              <p className="text-xs text-gray-500 mt-1">
                Pour être tenu au courant de l'ajout de votre contribution
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-all shadow-md hover:shadow-lg"
            >
              {loading ? (
                'Envoi en cours...'
              ) : (
                <>
                  <Send size={20} />
                  Envoyer {lieux.length > 1 ? `les ${lieux.length} contributions` : 'la contribution'}
                </>
              )}
            </button>
          </form>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Pourquoi contribuer ?</h3>
          <p className="text-sm text-blue-800">
            Hexa Index est une base collaborative qui vit grâce aux contributions de la communauté. 
            En partageant vos découvertes, vous aidez d'autres graphistes à trouver les ressources 
            dont ils ont besoin partout en France !
          </p>
        </div>
      </div>
    </div>
  )
}