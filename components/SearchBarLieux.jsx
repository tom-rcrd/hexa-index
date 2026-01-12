'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { getColorForType } from '@/utils/utils'

export default function SearchBarLieux({ 
  lieux, 
  validatedChips, 
  setValidatedChips,
  filtresActifs, // ✨ Nouveau
  setFiltresActifs // ✨ Nouveau
}) {  
  const [currentInput, setCurrentInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0)
  const inputRef = useRef(null)
  const suggestionsRef = useRef(null)

  // Détecter les préfixes communs
  const commonPrefixes = useMemo(() => {
    const allVilles = [...new Set(lieux.map(l => l.ville))]
    const allTypes = [...new Set(lieux.flatMap(l => l.types))]
    const allNoms = lieux.map(l => l.nom)
    const allTerms = [...allVilles, ...allTypes, ...allNoms]
    
    const firstWords = {}
    allTerms.forEach(term => {
      const words = term.split(/[\s\-]+/)
      if (words.length > 1) {
        const firstWord = words[0].toLowerCase()
        firstWords[firstWord] = (firstWords[firstWord] || 0) + 1
      }
    })
    
    return Object.keys(firstWords).filter(word => firstWords[word] > 1)
  }, [lieux])

  // Générer les suggestions
  const suggestions = useMemo(() => {
    if (!currentInput.trim() || currentInput.trim().length < 2) return []
    
    const inputLower = currentInput.trim().toLowerCase()
    const allVilles = [...new Set(lieux.map(l => l.ville))]
    const allTypes = [...new Set(lieux.flatMap(l => l.types))]
    const allNoms = [...new Set(lieux.map(l => l.nom))]
    
    const matches = []
    
    allTypes.forEach(type => {
      if (type.toLowerCase().includes(inputLower) && !validatedChips.includes(type)) {
        matches.push({
          value: type,
          type: 'type',
          color: getColorForType(type),
          priority: type.toLowerCase().startsWith(inputLower) ? 0 : 1
        })
      }
    })
    
    allVilles.forEach(ville => {
      if (ville.toLowerCase().includes(inputLower) && !validatedChips.includes(ville)) {
        matches.push({
          value: ville,
          type: 'ville',
          color: '#60A5FA',
          priority: ville.toLowerCase().startsWith(inputLower) ? 0 : 1
        })
      }
    })
    
    allNoms.forEach(nom => {
      if (nom.toLowerCase().includes(inputLower) && !validatedChips.includes(nom)) {
        matches.push({
          value: nom,
          type: 'lieu',
          color: '#34D399',
          priority: nom.toLowerCase().startsWith(inputLower) ? 0 : 1
        })
      }
    })
    
    return matches
      .sort((a, b) => {
        if (a.priority !== b.priority) return a.priority - b.priority
        return a.value.localeCompare(b.value)
      })
      .slice(0, 8)
  }, [currentInput, lieux, validatedChips])

  // Analyser les chips validés
  const chipsAnalysis = useMemo(() => {
    if (validatedChips.length === 0) return []
    
    const allVilles = [...new Set(lieux.map(l => l.ville))]
    const allTypes = [...new Set(lieux.flatMap(l => l.types))]
    
    return validatedChips.map(word => {
      const wordLower = word.toLowerCase()

      const matchingType = allTypes.find(type => {
        const typeLower = type.toLowerCase()
        const typeWords = typeLower.split(/[\s\/\-]+/)
        
        if (typeLower === wordLower) return true
        if (typeWords.length === 1) return typeWords[0] === wordLower
        return typeWords.some(part => part === wordLower)
      })
      if (matchingType) {
        return { word: matchingType, type: 'type', color: getColorForType(matchingType) }
      }
      
      const matchingVille = allVilles.find(v => {
        const villeLower = v.toLowerCase()
        const villeWords = villeLower.split(/[\s\-]+/)
        
        if (villeLower === wordLower) return true
        if (villeWords.length > 1 && villeWords[0] === wordLower) return false
        return villeWords.some(part => part === wordLower)
      })
      if (matchingVille) {
        return { word: matchingVille, type: 'ville', color: '#60A5FA' }
      }
      
      const matchingLieu = lieux.find(l => {
        const nomLower = l.nom.toLowerCase()
        const nomWords = nomLower.split(/[\s\-]+/)
        
        if (nomLower === wordLower) return true
        if (nomWords.length > 1 && nomWords[0] === wordLower) return false
        return nomWords.some(part => part === wordLower)
      })
      if (matchingLieu) {
        return { word: word, type: 'lieu', color: '#34D399' }
      }
      
      return { word: word, type: 'unknown', color: '#E5E7EB' }
    })
  }, [validatedChips, lieux])

  const isIncompletePrefix = (word) => {
    const wordLower = word.toLowerCase()
    
    if (commonPrefixes.includes(wordLower)) {
      const allVilles = [...new Set(lieux.map(l => l.ville))]
      const allTypes = [...new Set(lieux.flatMap(l => l.types))]
      const allNoms = lieux.map(l => l.nom)
      
      const hasMultiWordTerms = [...allVilles, ...allTypes, ...allNoms].some(term => {
        const words = term.toLowerCase().split(/[\s\-]+/)
        return words.length > 1 && words[0] === wordLower
      })
      
      return hasMultiWordTerms
    }
    
    return false
  }

  const validateChip = (value = null) => {
    const chipValue = value || currentInput.trim()
    
    if (chipValue && !validatedChips.includes(chipValue)) {
      setValidatedChips([...validatedChips, chipValue])
    }
    setCurrentInput('')
    setShowSuggestions(false)
    setSelectedSuggestionIndex(0)
    inputRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    if (showSuggestions && suggestions.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedSuggestionIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        )
        return
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedSuggestionIndex(prev => prev > 0 ? prev - 1 : 0)
        return
      }
      if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault()
        validateChip(suggestions[selectedSuggestionIndex].value)
        return
      }
      if (e.key === 'Escape') {
        setShowSuggestions(false)
        setSelectedSuggestionIndex(0)
        return
      }
    }
    
    if ((e.key === ' ' || e.key === 'Enter' || e.key === 'Tab') && currentInput.trim()) {
      const word = currentInput.trim()
      
      if (e.key === 'Tab' && suggestions.length > 0) {
        e.preventDefault()
        validateChip(suggestions[0].value)
        return
      }
      
      if (e.key === ' ' && isIncompletePrefix(word)) {
        return
      }
      
      if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault()
      }
      
      if (isIncompletePrefix(word)) {
        return
      }
      
      e.preventDefault()
      validateChip()
    } else if (e.key === 'Backspace' && !currentInput && validatedChips.length > 0) {
      e.preventDefault()
      setValidatedChips(validatedChips.slice(0, -1))
    }
  }

  useEffect(() => {
    if (currentInput.trim().length >= 2 && suggestions.length > 0) {
      setShowSuggestions(true)
      setSelectedSuggestionIndex(0)
    } else {
      setShowSuggestions(false)
    }
  }, [currentInput, suggestions.length])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target) &&
          inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const removeChip = (chipToRemove) => {
    setValidatedChips(validatedChips.filter(c => c !== chipToRemove))
    
    // ✨ Désactiver aussi le filtre correspondant
    if (filtresActifs && setFiltresActifs) {
      // Vérifier si c'est un type
      const allTypes = [...new Set(lieux.flatMap(l => l.types))]
      if (allTypes.includes(chipToRemove)) {
        setFiltresActifs(prev => ({
          ...prev,
          types: prev.types.filter(t => t !== chipToRemove)
        }))
      }
      
      // Vérifier si c'est une ville
      const allVilles = [...new Set(lieux.map(l => l.ville))]
      if (allVilles.includes(chipToRemove)) {
        setFiltresActifs(prev => ({
          ...prev,
          villes: prev.villes.filter(v => v !== chipToRemove)
        }))
      }
    }
  }

  const clearAll = () => {
    setValidatedChips([])
    setCurrentInput('')
    setShowSuggestions(false)
        if (setFiltresActifs) {
      setFiltresActifs({ types: [], villes: [] })
    }
  }

  return (
    <div className="relative">
      {/* Input avec chips */}
      <div 
        ref={inputRef}
        className="relative border rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent min-h-[42px] flex flex-wrap items-center gap-2 p-2 bg-white"
      >
        <Search className="text-gray-400 flex-shrink-0" size={20} />
        
        {/* Chips validés */}
        {chipsAnalysis.map((chip, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium transition-all"
            style={{
              backgroundColor: chip.color,
              color: chip.type === 'unknown' ? '#9CA3AF' : '#202020',
              border: chip.type === 'unknown' ? '1px dashed #D1D5DB' : 'none'
            }}
          >
            <span>{chip.word}</span>
            <button
              onClick={() => removeChip(chip.word)}
              className="hover:opacity-70 transition-opacity"
              aria-label={`Retirer ${chip.word}`}
            >
              <X size={14} />
            </button>
          </div>
        ))}
        
        {/* Input pour taper */}
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 min-w-[120px] outline-none bg-transparent"
          placeholder={chipsAnalysis.length === 0 ? "Rechercher par nom, type ou ville..." : ""}
        />
        
        {(validatedChips.length > 0 || currentInput) && (
          <button
            onClick={clearAll}
            className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            aria-label="Tout effacer"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Dropdown de suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-64 overflow-y-auto"
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => validateChip(suggestion.value)}
              className={`
                w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-2
                ${index === selectedSuggestionIndex ? 'bg-blue-50' : ''}
              `}
            >
              <span 
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: suggestion.color }}
              />
              <span className="flex-1">{suggestion.value}</span>
              <span className="text-xs text-gray-400 capitalize">{suggestion.type}</span>
            </button>
          ))}
        </div>
      )}
      
      {/* Légende */}
      {(validatedChips.length > 0 || currentInput) && (
        <div className="mt-2 space-y-1">
          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-full" style={{backgroundColor: '#60A5FA'}}></span>
              Ville
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-full bg-purple-400"></span>
              Type
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-full" style={{backgroundColor: '#34D399'}}></span>
              Nom
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-full border border-dashed border-gray-400" style={{backgroundColor: '#E5E7EB'}}></span>
              Non trouvé
            </span>
          </div>
          <p className="text-xs text-gray-500">
            💡 <kbd className="px-1 py-0.5 bg-gray-100 border rounded text-xs">Tab</kbd> ou <kbd className="px-1 py-0.5 bg-gray-100 border rounded text-xs">↵</kbd> pour valider • <kbd className="px-1 py-0.5 bg-gray-100 border rounded text-xs">↑↓</kbd> pour naviguer
          </p>
          {isIncompletePrefix(currentInput.trim()) && (
            <p className="text-xs text-blue-600">
              ℹ️ Continuez à taper pour compléter "{currentInput.trim()}"
            </p>
          )}
          {chipsAnalysis.some(c => c.type === 'unknown') && (
            <p className="text-xs text-orange-600">
              ⚠️ Certains termes ne correspondent à aucun résultat
            </p>
          )}
        </div>
      )}
    </div>
  )
}