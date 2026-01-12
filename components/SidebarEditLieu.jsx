'use client'

import { useState, useEffect, useRef } from 'react'
import { X, Save } from 'lucide-react'
import { getColorForType, normalizeString } from '@/utils/utils'

export default function SidebarEditLieu({ 
  show, 
  onClose, 
  lieuToEdit = null,
  lieuxData, 
  villesData, 
  categoriesData 
}) {
  const sidebarRef = useRef(null)
  const [formData, setFormData] = useState({
    nom: '',
    types: [],
    ville: '',
    description: '',
    website: '',
    instagram: ''
  })
  const [typeInput, setTypeInput] = useState('')
  const [villeInput, setVilleInput] = useState('')
  const [showTypeSuggestions, setShowTypeSuggestions] = useState(false)
  const [showVilleSuggestions, setShowVilleSuggestions] = useState(false)
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const [selectedVilleSuggestionIndex, setSelectedVilleSuggestionIndex] = useState(-1)

  // ✨ Détecter les clics en dehors de la sidebar
  useEffect(() => {
    if (!show) return

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleClose()
      }
    }

    // Petit délai pour éviter que le clic qui ouvre la sidebar la ferme immédiatement
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [show])

  // Charger les données du lieu à éditer
  useEffect(() => {
    if (lieuToEdit) {
      setFormData({
        nom: lieuToEdit.nom,
        types: lieuToEdit.types,
        ville: lieuToEdit.ville,
        description: lieuToEdit.description || '',
        website: lieuToEdit.website || '',
        instagram: lieuToEdit.instagram || ''
      })
    } else {
      resetForm()
    }
  }, [lieuToEdit])

  const resetForm = () => {
    setFormData({
      nom: '',
      types: [],
      ville: '',
      description: '',
      website: '',
      instagram: ''
    })
    setTypeInput('')
    setVilleInput('')
    setSelectedSuggestionIndex(-1)
    setSelectedVilleSuggestionIndex(-1)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const handleSave = async () => {
    if (!formData.nom || formData.types.length === 0 || !formData.ville) {
      alert('Veuillez remplir tous les champs obligatoires')
      return
    }

    // Vérifier les doublons
    if (lieuxData.checkDuplicate(formData.nom, lieuToEdit?.id)) {
      alert(`Un lieu nommé "${formData.nom}" existe déjà dans la base de données.`)
      return
    }

    try {
      const lieuData = {
        nom: formData.nom,
        types: formData.types,
        ville: formData.ville,
        description: formData.description || null,
        website: formData.website || null,
        instagram: formData.instagram || null
      }

      if (lieuToEdit) {
        await lieuxData.modifierLieu(lieuToEdit.id, lieuData)
        alert('Lieu modifié !')
      } else {
        await lieuxData.ajouterLieu(lieuData)
        // Ajouter la ville si elle n'existe pas
        await villesData.ajouterVille(formData.ville)
        alert('Lieu ajouté !')
      }

      handleClose()
    } catch (error) {
      alert('Erreur : ' + error.message)
    }
  }

  // Autocomplétion types
  const getTypeSuggestions = () => {
    if (!typeInput) return []
    
    const normalized = normalizeString(typeInput)
    return categoriesData.categories
      .filter(c => !formData.types.includes(c))
      .filter(c => normalizeString(c).includes(normalized))
      .sort((a, b) => {
        const aNorm = normalizeString(a)
        const bNorm = normalizeString(b)
        const aStarts = aNorm.startsWith(normalized)
        const bStarts = bNorm.startsWith(normalized)
        if (aStarts && !bStarts) return -1
        if (!aStarts && bStarts) return 1
        return a.localeCompare(b)
      })
  }

  const handleTypeInputKeyDown = (e) => {
    const suggestions = getTypeSuggestions()
    
    if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault()
      const selectedType = selectedSuggestionIndex >= 0 
        ? suggestions[selectedSuggestionIndex] 
        : suggestions[0]
      ajouterType(selectedType)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedSuggestionIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedSuggestionIndex(prev => prev > 0 ? prev - 1 : -1)
    } else if (e.key === 'Enter' && selectedSuggestionIndex >= 0) {
      e.preventDefault()
      ajouterType(suggestions[selectedSuggestionIndex])
    }
  }

  const ajouterType = async (type) => {
    if (type && !formData.types.includes(type)) {
      setFormData({ ...formData, types: [...formData.types, type] })
    }
    
    // Ajouter la catégorie si elle n'existe pas
    await categoriesData.ajouterCategorie(type)
    
    setTypeInput('')
    setShowTypeSuggestions(false)
    setSelectedSuggestionIndex(-1)
  }

  const retirerType = (type) => {
    setFormData({ ...formData, types: formData.types.filter(t => t !== type) })
  }

  // Autocomplétion villes
  const getVilleSuggestions = () => {
    if (!villeInput) return []

    const normalizedInput = normalizeString(villeInput)

    return villesData.villes
      .filter(v => normalizeString(v.nom).includes(normalizedInput))
      .sort((a, b) => {
        const aNorm = normalizeString(a.nom)
        const bNorm = normalizeString(b.nom)
        const aStarts = aNorm.startsWith(normalizedInput)
        const bStarts = bNorm.startsWith(normalizedInput)
        if (aStarts && !bStarts) return -1
        if (!aStarts && bStarts) return 1
        return a.nom.localeCompare(b.nom)
      })
  }

  const handleVilleInputKeyDown = (e) => {
    const suggestions = getVilleSuggestions()

    if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault()
      const selectedVille = selectedVilleSuggestionIndex >= 0
        ? suggestions[selectedVilleSuggestionIndex]
        : suggestions[0]
      selectionnerVille(selectedVille.nom)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedVilleSuggestionIndex(prev =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedVilleSuggestionIndex(prev => prev > 0 ? prev - 1 : -1)
    } else if (e.key === 'Enter' && selectedVilleSuggestionIndex >= 0) {
      e.preventDefault()
      selectionnerVille(suggestions[selectedVilleSuggestionIndex].nom)
    }
  }

  const selectionnerVille = (villeNom) => {
    setFormData({ ...formData, ville: villeNom })
    setVilleInput('')
    setShowVilleSuggestions(false)
    setSelectedVilleSuggestionIndex(-1)
  }

  const typesSuggestions = getTypeSuggestions()
  const villesSuggestions = getVilleSuggestions()

  if (!show) return null

  return (
    <div 
      ref={sidebarRef}
      className="fixed right-0 top-0 h-full w-[90vw] max-w-[500px] bg-white shadow-2xl z-50 overflow-y-auto animate-slide-in"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {lieuToEdit ? 'Modifier le lieu' : 'Nouveau lieu'}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 p-2 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Nom */}
          <div>
            <label className="block text-sm font-medium mb-2">Nom *</label>
            <input
              type="text"
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Nom du lieu"
            />
            {formData.nom && lieuxData.checkDuplicate(formData.nom, lieuToEdit?.id) && (
              <p className="text-red-600 text-sm mt-1">⚠️ Un lieu avec ce nom existe déjà</p>
            )}
          </div>

          {/* Types */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2">
              Types *
              {typesSuggestions.length > 0 && (
                <span className="text-xs text-gray-500 ml-2">(Tab ou ↓↑)</span>
              )}
            </label>
            <input
              type="text"
              value={typeInput}
              onChange={(e) => {
                setTypeInput(e.target.value)
                setShowTypeSuggestions(true)
                setSelectedSuggestionIndex(-1)
              }}
              onKeyDown={handleTypeInputKeyDown}
              onFocus={() => setShowTypeSuggestions(true)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Rechercher un type..."
            />
            {showTypeSuggestions && typeInput && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {typesSuggestions.map((cat, index) => (
                  <div
                    key={cat}
                    onClick={() => ajouterType(cat)}
                    className={`px-4 py-2 cursor-pointer ${
                      index === selectedSuggestionIndex ? 'bg-blue-100' : 'hover:bg-blue-50'
                    }`}
                  >
                    {cat}
                    {index === 0 && <span className="text-xs text-gray-500 ml-2">(Tab)</span>}
                  </div>
                ))}
                {typeInput && !categoriesData.categories.some(c => normalizeString(c) === normalizeString(typeInput)) && (
                  <div
                    onClick={() => ajouterType(typeInput)}
                    className="px-4 py-2 hover:bg-green-50 cursor-pointer text-green-700 font-medium border-t"
                  >
                    + Créer "{typeInput}"
                  </div>
                )}
              </div>
            )}
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.types.map(type => (
                <span 
                  key={type} 
                  style={{ backgroundColor: getColorForType(type), color: '#202020ff' }}
                  className="px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {type}
                  <X size={14} className="cursor-pointer" onClick={() => retirerType(type)} />
                </span>
              ))}
            </div>
          </div>

          {/* Ville */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2">
              Ville *
              {villesSuggestions.length > 0 && (
                <span className="text-xs text-gray-500 ml-2">(Tab ou ↓↑)</span>
              )}
            </label>
            <input
              type="text"
              value={villeInput || formData.ville}
              onChange={(e) => {
                setVilleInput(e.target.value)
                setShowVilleSuggestions(true)
                setSelectedVilleSuggestionIndex(-1)
              }}
              onKeyDown={handleVilleInputKeyDown}
              onFocus={() => setShowVilleSuggestions(true)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Rechercher une ville..."
            />
            {showVilleSuggestions && villeInput && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {villesSuggestions.map((ville, index) => (
                  <div
                    key={ville.id || ville.nom + index}
                    onClick={() => selectionnerVille(ville.nom)}
                    className={`px-4 py-2 cursor-pointer ${
                      index === selectedVilleSuggestionIndex ? 'bg-blue-100' : 'hover:bg-blue-50'
                    }`}
                  >
                    {ville.nom}
                    {index === 0 && <span className="text-xs text-gray-500 ml-2">(Tab)</span>}
                  </div>
                ))}
                {villeInput && !villesData.villes.some(v => normalizeString(v.nom) === normalizeString(villeInput)) && (
                  <div
                    onClick={() => selectionnerVille(villeInput)}
                    className="px-4 py-2 hover:bg-green-50 cursor-pointer text-green-700 font-medium border-t"
                  >
                    + Créer "{villeInput}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
              placeholder="Décrivez le lieu..."
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-medium mb-2">Site web</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://exemple.com"
            />
          </div>

          {/* Instagram */}
          <div>
            <label className="block text-sm font-medium mb-2">Instagram</label>
            <input
              type="text"
              value={formData.instagram}
              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="@nomducompte"
            />
          </div>

          {/* Boutons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSave}
              disabled={formData.nom && lieuxData.checkDuplicate(formData.nom, lieuToEdit?.id)}
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
            >
              <Save size={20} />
              {lieuToEdit ? 'Modifier' : 'Ajouter'}
            </button>
            <button
              onClick={handleClose}
              className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 font-medium"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}