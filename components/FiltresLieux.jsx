'use client'

import { useState, useMemo, memo, useRef, useEffect } from 'react'
import { Filter, X } from 'lucide-react'
import { getColorForType } from '@/utils/colors'

function FiltresLieux({ categories, villes, filtresActifs, setFiltresActifs }) {
  const [showFilters, setShowFilters] = useState(false)
  const filtersPanelRef = useRef(null)

  // Mémoïser le total de filtres actifs
  const totalFiltres = useMemo(
    () => filtresActifs.types.length + filtresActifs.villes.length,
    [filtresActifs.types.length, filtresActifs.villes.length]
  )

  // ✨ Détecter les clics en dehors du panneau de filtres
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filtersPanelRef.current && !filtersPanelRef.current.contains(event.target)) {
        setShowFilters(false)
      }
    }

    if (showFilters) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showFilters])

  const toggleFiltre = (type, value) => {
    setFiltresActifs(prev => {
      const arr = prev[type]
      const newArr = arr.includes(value)
        ? arr.filter(v => v !== value)
        : [...arr, value]
      return { ...prev, [type]: newArr }
    })
  }

  const resetFiltres = () => {
    setFiltresActifs({ types: [], villes: [] })
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6" ref={filtersPanelRef}>
      <button
        onClick={() => setShowFilters(!showFilters)}
        className={`
          w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
          ${showFilters 
            ? 'bg-grey-200 text-white shadow-md' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }
        `}
        aria-expanded={showFilters}
        aria-controls="filtres-panel"
      >
        <div className="flex items-center gap-3">
          <Filter size={20} aria-hidden="true" />
          <span className="font-medium">Filtres</span>
          {totalFiltres > 0 && (
            <span 
              className={`
                rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold
                ${showFilters ? 'bg-white text-blue-600' : 'bg-grey-200 text-white'}
              `}
              aria-label={`${totalFiltres} filtre${totalFiltres > 1 ? 's' : ''} actif${totalFiltres > 1 ? 's' : ''}`}
            >
              {totalFiltres}
            </span>
          )}
        </div>
        <span 
          className={`transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      {showFilters && (
        <div 
          id="filtres-panel"
          className="bg-gray-50 p-4 rounded-lg mt-4 border animate-slide-down"
          role="region"
          aria-label="Panneau de filtres"
        >
          {/* Bouton reset */}
          {totalFiltres > 0 && (
            <div className="mb-4 flex justify-end">
              <button
                onClick={resetFiltres}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 px-3 py-1.5 rounded-lg hover:bg-white transition-colors"
              >
                <X size={16} />
                Réinitialiser les filtres
              </button>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Filtres Types */}
            <div>
              <h3 className="font-medium mb-3 text-gray-700">
                Types de lieux
                {filtresActifs.types.length > 0 && (
                  <span className="text-sm text-gray-500 ml-2">
                    ({filtresActifs.types.length})
                  </span>
                )}
              </h3>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filtres par type">
                {categories.map(cat => {
                  const isActive = filtresActifs.types.includes(cat)
                  return (
                    <FiltreButton
                      key={cat}
                      label={cat}
                      isActive={isActive}
                      onClick={() => toggleFiltre('types', cat)}
                      color={getColorForType(cat)}
                    />
                  )
                })}
              </div>
            </div>

            {/* Filtres Villes */}
            <div>
              <h3 className="font-medium mb-3 text-gray-700">
                Villes
                {filtresActifs.villes.length > 0 && (
                  <span className="text-sm text-gray-500 ml-2">
                    ({filtresActifs.villes.length})
                  </span>
                )}
              </h3>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filtres par ville">
                {villes.map(ville => {
                  const isActive = filtresActifs.villes.includes(ville.nom)
                  return (
                    <FiltreButton
                      key={ville.id || ville.nom}
                      label={ville.nom}
                      isActive={isActive}
                      onClick={() => toggleFiltre('villes', ville.nom)}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Composant de bouton de filtre mémoïsé
const FiltreButton = memo(function FiltreButton({ label, isActive, onClick, color }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => !isActive && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
        ${isActive
          ? 'bg-grey-200 text-white shadow-md scale-105'
          : 'bg-white border border-gray-300 hover:border-gray-400 text-gray-700'
        }
      `}
      style={
        !isActive && isHovered && color
          ? { backgroundColor: color, color: '#202020', borderColor: 'transparent' }
          : {}
      }
      aria-pressed={isActive}
    >
      {label}
    </button>
  )
})

// Mémoïser le composant pour éviter les re-renders inutiles
export default memo(FiltresLieux, (prevProps, nextProps) => {
  return (
    prevProps.filtresActifs.types === nextProps.filtresActifs.types &&
    prevProps.filtresActifs.villes === nextProps.filtresActifs.villes &&
    prevProps.categories === nextProps.categories &&
    prevProps.villes === nextProps.villes
  )
})

// Style CSS à ajouter dans globals.css
export const filtresStyles = `
@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slide-down 0.2s ease-out;
}
`