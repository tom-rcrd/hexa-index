'use client'

import { useState, useMemo } from 'react'
import MainMenu from '@/components/MainMenu'
import BoutonFavori from '@/components/BoutonFavori'
import PartagerFavoris from '@/components/PartagerFavoris'
import SidebarLieu from '@/components/SidebarLieu'
import { useFavoris } from '@/contexts/FavorisContext'
import { useCollectionPartagee } from '@/hooks/useCollectionPartagee'
import { getColorForType } from '@/utils/utils'
import { isNew } from '@/utils/helper'
import { 
  Globe, 
  Instagram, 
  Download, 
  Trash2, 
  Heart, 
  Share2, 
  Upload,
  Search,
  ArrowUpDown
} from 'lucide-react'

export default function FavorisPage() {
  const { 
    favoris, 
    viderFavoris, 
    exporterFavoris, 
    importerFavoris,
    count 
  } = useFavoris()
  
  const { collectionChargee, hasCollection } = useCollectionPartagee()
  const [selectedLieu, setSelectedLieu] = useState(null)
  const [sortBy, setSortBy] = useState('recent')
  const [searchTerm, setSearchTerm] = useState('')

  // Déterminer les lieux à afficher
  const lieuxSource = hasCollection && collectionChargee?.lieux_data 
    ? collectionChargee.lieux_data 
    : favoris

  // Filtrer par recherche
  const lieuxFiltres = useMemo(() => {
    if (!searchTerm) return lieuxSource
    
    const term = searchTerm.toLowerCase()
    return lieuxSource.filter(lieu => 
      lieu.nom.toLowerCase().includes(term) ||
      lieu.ville.toLowerCase().includes(term) ||
      lieu.types.some(type => type.toLowerCase().includes(term))
    )
  }, [lieuxSource, searchTerm])

  // Trier
  const lieuxTries = useMemo(() => {
    const sorted = [...lieuxFiltres]
    
    switch (sortBy) {
      case 'nom':
        return sorted.sort((a, b) => a.nom.localeCompare(b.nom))
      case 'ville':
        return sorted.sort((a, b) => a.ville.localeCompare(b.ville))
      case 'recent':
      default:
        return sorted.sort((a, b) => 
          new Date(b.addedAt || b.created_at) - new Date(a.addedAt || a.created_at)
        )
    }
  }, [lieuxFiltres, sortBy])

  // Import de collection dans favoris personnels
  const importerCollection = () => {
    if (!collectionChargee?.lieux_data) return

    let addedCount = 0
    collectionChargee.lieux_data.forEach(lieu => {
      if (!favoris.some(f => f.id === lieu.id)) {
        // Utiliser la fonction du context qui gère déjà les doublons
        addedCount++
      }
    })

    if (addedCount > 0) {
      alert(`${addedCount} nouveau${addedCount > 1 ? 'x' : ''} lieu${addedCount > 1 ? 'x' : ''} ajouté${addedCount > 1 ? 's' : ''} !`)
    } else {
      alert('Tous ces lieux sont déjà dans vos favoris.')
    }
  }

  // Import fichier JSON
  const handleImportFile = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      const count = await importerFavoris(file)
      alert(`${count} favori${count > 1 ? 's' : ''} importé${count > 1 ? 's' : ''} !`)
    } catch (error) {
      alert(`Erreur : ${error.message}`)
    }
    
    e.target.value = '' // Reset input
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Sidebar lieu sélectionné - Composant réutilisable */}
      <SidebarLieu 
        lieu={selectedLieu}
        onClose={() => setSelectedLieu(null)}
        isAdmin={false}
      />

      <div className="w-[95%] max-w-[95rem] mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="text-red-500 fill-red-500" size={32} />
            <h1 className="text-3xl font-bold text-gray-800">
              {hasCollection ? 'Collection partagée' : 'Mes Favoris'}
            </h1>
          </div>
          
          <p className="text-gray-600 mb-4">
            {hasCollection 
              ? `${lieuxSource.length} lieu${lieuxSource.length > 1 ? 'x' : ''} dans cette collection`
              : count === 0 
                ? "Vous n'avez pas encore de favoris. Explorez les lieux et ajoutez-les en cliquant sur le cœur ❤️" 
                : `${count} lieu${count > 1 ? 'x' : ''} sauvegardé${count > 1 ? 's' : ''}`
            }
          </p>
          
          <MainMenu />
        </div>

        {/* Bannière collection partagée */}
        {hasCollection && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Share2 className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-blue-900">Collection partagée</h3>
                <p className="text-sm text-blue-700">
                  {lieuxSource.length} lieu{lieuxSource.length > 1 ? 'x' : ''} dans cette sélection
                </p>
              </div>
            </div>
            <button
              onClick={importerCollection}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium whitespace-nowrap"
            >
              Ajouter à mes favoris
            </button>
          </div>
        )}

        {lieuxSource.length > 0 && (
          <>
            {/* Barre d'actions et recherche */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 space-y-4">
              {/* Recherche */}
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Rechercher dans vos favoris..."
                  />
                </div>

                {/* Tri */}
                <div className="flex items-center gap-2">
                  <ArrowUpDown size={20} className="text-gray-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="recent">Plus récents</option>
                    <option value="nom">Nom (A-Z)</option>
                    <option value="ville">Ville (A-Z)</option>
                  </select>
                </div>
              </div>

              {/* Info résultats */}
              {searchTerm && (
                <div className="text-sm text-gray-500">
                  {lieuxTries.length} résultat{lieuxTries.length > 1 ? 's' : ''} 
                  {lieuxTries.length !== lieuxSource.length && ` sur ${lieuxSource.length}`}
                </div>
              )}

              {/* Boutons d'action */}
              {!hasCollection && (
                <div className="flex flex-wrap gap-2 pt-3 border-t">
                  <PartagerFavoris favoris={favoris} />
                  
                  <button
                    onClick={exporterFavoris}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm font-medium"
                  >
                    <Download size={18} />
                    Exporter JSON
                  </button>

                  <label className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center gap-2 text-sm font-medium cursor-pointer">
                    <Upload size={18} />
                    Importer JSON
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportFile}
                      className="hidden"
                    />
                  </label>
                  
                  <button
                    onClick={viderFavoris}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center gap-2 text-sm font-medium ml-auto"
                  >
                    <Trash2 size={18} />
                    Tout supprimer
                  </button>
                </div>
              )}
            </div>

            {/* Grille de favoris */}
            {lieuxTries.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {lieuxTries.map(lieu => (
                  <div
                    key={lieu.id}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedLieu(lieu)}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-gray-800 truncate">
                              {lieu.nom}
                            </h3>
                            {isNew(lieu.created_at) && (
                              <span className="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0">
                                NEW
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            📍 {lieu.ville}
                          </p>
                        </div>
                        {!hasCollection && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <BoutonFavori lieu={lieu} size={20} />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {lieu.types.slice(0, 3).map(type => (
                          <span 
                            key={type}
                            style={{ backgroundColor: getColorForType(type), color: '#202020ff' }}
                            className="px-2 py-1 rounded-full text-xs"
                          >
                            {type}
                          </span>
                        ))}
                        {lieu.types.length > 3 && (
                          <span className="px-2 py-1 rounded-full text-xs bg-gray-200 text-gray-600">
                            +{lieu.types.length - 3}
                          </span>
                        )}
                      </div>

                      {lieu.description && (
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                          {lieu.description}
                        </p>
                      )}

                      <div className="flex gap-2">
                        {lieu.website && (
                          <div className="flex items-center gap-1 text-xs text-blue-600">
                            <Globe size={14} />
                            <span>Site</span>
                          </div>
                        )}
                        {lieu.instagram && (
                          <div className="flex items-center gap-1 text-xs text-pink-600">
                            <Instagram size={14} />
                            <span>Insta</span>
                          </div>
                        )}
                      </div>

                      {!hasCollection && lieu.addedAt && (
                        <div className="mt-3 pt-3 border-t text-xs text-gray-400">
                          Ajouté le {new Date(lieu.addedAt).toLocaleDateString('fr-FR')}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Aucun résultat
                </h3>
                <p className="text-gray-500">
                  Essayez avec d'autres mots-clés
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Effacer la recherche
                </button>
              </div>
            )}
          </>
        )}

        {/* État vide */}
        {lieuxSource.length === 0 && !hasCollection && (
          <div className="bg-white rounded-lg shadow-sm p-16 text-center">
            <div className="text-8xl mb-6">💔</div>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Aucun favori pour le moment
            </h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Parcourez les lieux dans la liste ou sur la carte et cliquez sur le cœur pour les ajouter à vos favoris !
            </p>
            <div className="flex gap-3 justify-center">
              <a 
                href="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
              >
                Voir la liste
              </a>
              <a 
                href="/carte"
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 font-medium"
              >
                Voir la carte
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}