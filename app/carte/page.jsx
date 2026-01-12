'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useAuth } from '@/hooks/useAuth'
import { useLieux } from '@/hooks/useLieux'
import { useVilles } from '@/hooks/useVilles'
import { useCategories } from '@/hooks/useCategories'
import MainMenu from '@/components/MainMenu'
import ModalLogin from '@/components/ModalLogin'
import SidebarLieu from '@/components/SidebarLieu'
import SidebarEditLieu from '@/components/SidebarEditLieu'
import BarreAdmin from '@/components/BarreAdmin'
import FiltresLieux from '@/components/FiltresLieux'
import SearchBarLieux from '@/components/SearchBarLieux'

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false
})

export default function CartePage() {
  // 🔐 Hooks de données
  const auth = useAuth()
  const lieuxData = useLieux()
  const villesData = useVilles()
  const categoriesData = useCategories()

  // 🎨 États UI locaux
  const [selectedLieu, setSelectedLieu] = useState(null)
  const [lieuToEdit, setLieuToEdit] = useState(null)
  const [showEditSidebar, setShowEditSidebar] = useState(false)
  const [filtresActifs, setFiltresActifs] = useState({ types: [], villes: [] })
  const [validatedChips, setValidatedChips] = useState([]) // ✅ validatedChips au lieu de searchChips

  // 📝 Handlers
  const handleEdit = (lieu) => {
    setLieuToEdit(lieu)
    setShowEditSidebar(true)
  }

  const handleAdd = () => {
    setLieuToEdit(null)
    setShowEditSidebar(true)
  }

  const handleDelete = async (id, ville) => {
    if (!confirm('Supprimer ce lieu ?')) return

    try {
      await lieuxData.supprimerLieu(id)

      const lieuxRestants = lieuxData.lieux.filter(l => l.ville === ville && l.id !== id)
      if (lieuxRestants.length === 0) {
        await villesData.supprimerVille(ville)
      }

      alert('Lieu supprimé !')
    } catch (error) {
      alert('Erreur : ' + error.message)
    }
  }

  const handleCloseSidebar = () => {
    setShowEditSidebar(false)
    setLieuToEdit(null)
  }

  // ✨ Filtrer les lieux avec recherche + filtres
  const lieuxFiltres = lieuxData.lieux.filter(lieu => {
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

  // Loading state
  if (auth.loading || lieuxData.loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Chargement...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="w-[95%] max-w-[95rem] mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Carte des lieux</h1>
              <h3 className="text-xl font-bold text-gray-800">
                Index de ressources pour design·euse·r·s graphiques
              </h3>
              {auth.isAdmin && (
                <p className="text-sm text-green-600 mt-1">Mode administrateur</p>
              )}
            </div>

            {/* Boutons admin */}
            <BarreAdmin 
              auth={auth} 
              lieuxData={lieuxData}
              villesData={villesData}
              categoriesData={categoriesData}
              onAddClick={handleAdd}
            />
          </div>

          <div className="mt-4">
            <MainMenu />
          </div>

          {/* Info et filtres */}
          <div className="mt-4">
            <div className="text-sm text-gray-500 mb-4">
              {lieuxFiltres.length} lieu{lieuxFiltres.length > 1 ? 'x' : ''} affiché{lieuxFiltres.length > 1 ? 's' : ''}
            </div>
            
            <FiltresLieux 
              categories={categoriesData.categories}
              villes={villesData.villes}
              filtresActifs={filtresActifs}
              setFiltresActifs={setFiltresActifs}
            />
          </div>
        </div>

        {/* Carte avec barre de recherche intégrée */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* ✨ Barre de recherche */}
          <div className="mb-4">
<SearchBarLieux 
  lieux={lieuxData.lieux}
  validatedChips={validatedChips}
  setValidatedChips={setValidatedChips}
  filtresActifs={filtresActifs} // ✨ Ajouter
  setFiltresActifs={setFiltresActifs} // ✨ Ajouter
/>
          </div>

          {/* Carte */}
          <div style={{ height: 'calc(100vh - 450px)', minHeight: '600px' }}>
            <Map 
              lieux={lieuxFiltres} 
              villes={villesData.villes} 
              filtresActifs={filtresActifs}
              onLieuClick={setSelectedLieu}
            />
          </div>
        </div>

        {/* Modals & Sidebars */}
        <ModalLogin auth={auth} />
        
        <SidebarLieu 
          lieu={selectedLieu}
          onClose={() => setSelectedLieu(null)}
          isAdmin={auth.isAdmin}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        
        <SidebarEditLieu 
          show={showEditSidebar}
          onClose={handleCloseSidebar}
          lieuToEdit={lieuToEdit}
          lieuxData={lieuxData}
          villesData={villesData}
          categoriesData={categoriesData}
        />
      </div>
    </div>
  )
}