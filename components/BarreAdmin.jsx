'use client'

import { LogIn, LogOut, Download, Upload, Plus } from 'lucide-react'
import { exporterDonnees, importerDonnees } from '@/utils/utils'
import { supabase } from '@/lib/supabase'

export default function BarreAdmin({ auth, lieuxData, villesData, categoriesData, onAddClick }) {
  const handleExport = () => {
    exporterDonnees(lieuxData.lieux, categoriesData.categories, villesData.villes)
  }

  const handleImport = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      await importerDonnees(file, supabase, () => {
        lieuxData.loadLieux()
        villesData.loadVilles()
        categoriesData.loadCategories()
      })
    } catch (error) {
      console.error('Erreur import:', error)
    }

    e.target.value = '' // Reset input
  }

  return (
    <div className="flex gap-3 mt-4">
      {!auth.isAdmin ? (
        <button
          onClick={() => auth.setShowLogin(true)}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center gap-2"
        >
          <LogIn size={20} />
          Connexion
        </button>
      ) : (
        <>
          <button
            onClick={handleExport}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
          >
            <Download size={20} />
            Exporter
          </button>
          
          <label className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center gap-2 cursor-pointer">
            <Upload size={20} />
            Importer
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </label>
          
          <button
            onClick={onAddClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus size={20} />
            Ajouter
          </button>
          
          <button
            onClick={auth.logout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center gap-2"
          >
            <LogOut size={20} />
            Déconnexion
          </button>
        </>
      )}
    </div>
  )
}