'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Share2, Copy, Check, X, Loader2 } from 'lucide-react'

export default function PartagerFavoris({ favoris }) {
  const [showModal, setShowModal] = useState(false)
  const [lienPartage, setLienPartage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const genererLienPartage = async () => {
    if (favoris.length === 0) {
      alert('Vous devez avoir au moins un favori pour partager !')
      return
    }

    setLoading(true)

    try {
      // Générer un code unique court
      const code = Math.random().toString(36).substring(2, 10)
      
      // Préparer les données
      const collectionData = {
        code: code,
        lieux_ids: favoris.map(f => f.id),
        lieux_data: favoris, // Sauvegarde les données complètes au cas où
        created_at: new Date().toISOString(),
        expires_at: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString() // Expire après 90 jours
      }

      // Sauvegarder dans Supabase
      const { error } = await supabase
        .from('collections_partagees')
        .insert([collectionData])

      if (error) throw error

      // Générer le lien
      const baseUrl = window.location.origin
      const lien = `${baseUrl}/favoris?c=${code}`
      
      setLienPartage(lien)
      setShowModal(true)
    } catch (error) {
      console.error('Erreur génération lien:', error)
      alert('Erreur lors de la génération du lien : ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const copierLien = async () => {
    try {
      await navigator.clipboard.writeText(lienPartage)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      const textarea = document.createElement('textarea')
      textarea.value = lienPartage
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <>
      <button
        onClick={genererLienPartage}
        disabled={loading || favoris.length === 0}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
          ${favoris.length > 0
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }
        `}
        title={favoris.length === 0 ? 'Ajoutez des favoris pour partager' : 'Générer un lien de partage'}
      >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Génération...
          </>
        ) : (
          <>
            <Share2 size={20} />
            Partager mes favoris
          </>
        )}
      </button>

      {/* Modal de partage */}
      {showModal && lienPartage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Share2 className="text-blue-600" size={20} />
                </div>
                <h2 className="text-xl font-bold">Lien de partage créé !</h2>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">
                Partagez vos {favoris.length} lieu{favoris.length > 1 ? 'x' : ''} favori{favoris.length > 1 ? 's' : ''} avec ce lien :
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-xs text-yellow-800">
                  ⏳ Ce lien expirera dans 90 jours
                </p>
              </div>

              {/* Lien à copier */}
              <div className="relative">
                <input
                  type="text"
                  value={lienPartage}
                  readOnly
                  className="w-full px-4 py-3 pr-12 border rounded-lg bg-gray-50 text-sm text-gray-700 font-mono"
                  onClick={(e) => e.target.select()}
                />
                <button
                  onClick={copierLien}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  title="Copier le lien"
                >
                  {copied ? (
                    <Check size={20} className="text-green-600" />
                  ) : (
                    <Copy size={20} className="text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Bouton de copie principal */}
            <button
              onClick={copierLien}
              className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                copied
                  ? 'bg-green-600 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {copied ? (
                <>
                  <Check size={20} />
                  Lien copié !
                </>
              ) : (
                <>
                  <Copy size={20} />
                  Copier le lien
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  )
}