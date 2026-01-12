'use client'

import { useState, useMemo } from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import BoutonFavori from './BoutonFavori'
import SearchBarLieux from './SearchBarLieux'
import { getColorForType } from '@/utils/utils'
import { isNew } from '@/utils/helper'

export default function TableauLieux({ 
  lieux, 
  filtresActifs, 
  setFiltresActifs, // ✨ Ajout de setFiltresActifs
  onLieuClick, 
  isAdmin, 
  onEdit, 
  onDelete 
}) {
  const [validatedChips, setValidatedChips] = useState([])
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })

  // ✨ Fonction pour ajouter un filtre (chip + filtre actif)
  const handleTypeClick = (type) => {
    // Ajouter dans les chips de recherche si pas déjà présent
    if (!validatedChips.includes(type)) {
      setValidatedChips([...validatedChips, type])
    }
    
  }

  // ✨ Fonction pour ajouter un filtre ville
  const handleVilleClick = (ville) => {
    // Ajouter dans les chips de recherche si pas déjà présent
    if (!validatedChips.includes(ville)) {
      setValidatedChips([...validatedChips, ville])
    }
    
  }

  // Filtrer les lieux
  const lieuxFiltres = useMemo(() => {
    return lieux.filter(lieu => {
      // Filtrage par recherche (chips)
      if (validatedChips.length > 0) {
        const matchSearch = validatedChips.every(word => {
          const wordLower = word.toLowerCase()
          return lieu.nom.toLowerCase().includes(wordLower) ||
            lieu.types.some(type => type.toLowerCase().includes(wordLower)) ||
            lieu.ville.toLowerCase().includes(wordLower)
        })
        if (!matchSearch) return false
      }

      // Filtrage par filtres actifs
      const matchTypes = filtresActifs.types.length === 0 || 
        filtresActifs.types.some(t => lieu.types.includes(t))
      const matchVilles = filtresActifs.villes.length === 0 || 
        filtresActifs.villes.includes(lieu.ville)
      
      return matchTypes && matchVilles
    })
  }, [lieux, validatedChips, filtresActifs])

  // Trier les lieux
const lieuxTries = useMemo(() => {
  if (!sortConfig.key) return lieuxFiltres

  return [...lieuxFiltres].sort((a, b) => {
    let aValue, bValue
    
    if (sortConfig.key === 'nom') {
      aValue = a.nom
      bValue = b.nom
    } else if (sortConfig.key === 'types') {
      aValue = a.types.join(', ')
      bValue = b.types.join(', ')
    } else if (sortConfig.key === 'ville') {
      aValue = a.ville
      bValue = b.ville
    }
    
    // ✨ Utiliser localeCompare avec l'option pour ignorer casse et accents
    const compareResult = aValue.localeCompare(bValue, 'fr', { 
      sensitivity: 'base' // Ignore la casse et les accents
    })
    
    return sortConfig.direction === 'asc' ? compareResult : -compareResult
  })
}, [lieuxFiltres, sortConfig])

  const handleSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return <ArrowUpDown size={16} className="text-gray-400" />
    }
    return sortConfig.direction === 'asc' 
      ? <ArrowUp size={16} className="text-blue-600" />
      : <ArrowDown size={16} className="text-blue-600" />
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Barre de recherche */}
      <div className="p-4 border-b">
        <div className="flex gap-4 items-start">
          <div className="flex-1">
<SearchBarLieux 
  lieux={lieux}
  validatedChips={validatedChips}
  setValidatedChips={setValidatedChips}
  filtresActifs={filtresActifs} // ✨ Ajouter
  setFiltresActifs={setFiltresActifs} // ✨ Ajouter
/>
          </div>
          
          <div className="text-sm text-gray-500 whitespace-nowrap pt-2">
            {lieuxTries.length} lieu{lieuxTries.length > 1 ? 'x' : ''} affiché{lieuxTries.length > 1 ? 's' : ''}
            {lieux.length !== lieuxTries.length && ` sur ${lieux.length} au total`}
          </div>
        </div>
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th 
                onClick={() => handleSort('nom')}
                className="text-left px-6 py-3 font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors"
              >
                <div className="flex items-center gap-2">
                  Nom
                  {getSortIcon('nom')}
                </div>
              </th>
              <th 
                onClick={() => handleSort('types')}
                className="text-left px-6 py-3 font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors"
              >
                <div className="flex items-center gap-2">
                  Type de lieux
                  {getSortIcon('types')}
                </div>
              </th>
              <th 
                onClick={() => handleSort('ville')}
                className="text-left px-6 py-3 font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors"
              >
                <div className="flex items-center gap-2">
                  Ville
                  {getSortIcon('ville')}
                </div>
              </th>
              {isAdmin && (
                <th className="text-center px-6 py-3 font-semibold text-gray-700">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {lieuxTries.length === 0 ? (
              <tr>
                <td colSpan={isAdmin ? "4" : "3"} className="text-center py-12 text-gray-500">
                  {lieux.length === 0 
                    ? 'Aucun lieu dans la base de données.'
                    : 'Aucun résultat ne correspond à vos filtres.'}
                </td>
              </tr>
            ) : (
              lieuxTries.map(lieu => (
                <tr key={lieu.id} className="border-b hover:bg-gray-50">
                  <td 
                    className="px-6 py-4 font-medium cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => onLieuClick(lieu)}
                  >
                    <div className="flex items-center gap-2">
                      <BoutonFavori lieu={lieu} size={20} />
                      {lieu.nom}
                      {isNew(lieu.created_at) && (
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          NOUVEAU
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {lieu.types.map((type) => (
                        <span
                          key={type}
                          onClick={(e) => {
                            e.stopPropagation() // ✨ Empêcher le clic de remonter
                            handleTypeClick(type)
                          }}
                          style={{
                            backgroundColor: getColorForType(type),
                            color: '#202020ff',
                          }}
                          className="px-2 py-1 rounded text-sm cursor-pointer hover:opacity-80 hover:scale-105 transition-all"
                          title="Cliquer pour filtrer"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </td>
 <td 
  className="px-6 py-4"
>
  <span
    onClick={(e) => {
      e.stopPropagation()
      handleVilleClick(lieu.ville)
    }}
    className="inline-block px-3 py-1 rounded-full text-sm border border-gray-300 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
    title="Cliquer pour filtrer"
  >
    {lieu.ville}
  </span>
</td>
                  {isAdmin && (
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => onEdit(lieu)}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => onDelete(lieu.id, lieu.ville)}
                          className="text-red-600 hover:text-red-800 font-medium"
                        >
                          Supprimer
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}