'use client'

import { useState } from 'react'
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
import TableauLieux from '@/components/TableauLieux'

export default function Home() {
  // 🔐 Hooks de données
  const auth = useAuth()
  const lieuxData = useLieux()
  const villesData = useVilles()
  const categoriesData = useCategories()

  // 🎨 États UI locaux
  const [selectedLieu, setSelectedLieu] = useState(null) // ✨ État pour le lieu sélectionné
  const [lieuToEdit, setLieuToEdit] = useState(null)
  const [showEditSidebar, setShowEditSidebar] = useState(false)
  const [filtresActifs, setFiltresActifs] = useState({ types: [], villes: [] })

  // 📝 Handlers
  const handleLieuClick = (lieu) => {
    setSelectedLieu(lieu)
  }

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

      // Vérifier si la ville a encore des lieux
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
              <h1 className="text-3xl font-bold text-gray-800">Liste des lieux</h1>
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

          {/* Filtres */}
          <div className="mt-4">
            <FiltresLieux 
              categories={categoriesData.categories}
              villes={villesData.villes}
              filtresActifs={filtresActifs}
              setFiltresActifs={setFiltresActifs}
            />
          </div>
        </div>

        {/* Tableau des lieux */}
        <TableauLieux 
          lieux={lieuxData.lieux}
          filtresActifs={filtresActifs}
          setFiltresActifs={setFiltresActifs}
          onLieuClick={handleLieuClick}
          isAdmin={auth.isAdmin}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

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