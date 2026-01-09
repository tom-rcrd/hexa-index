'use client'

import { useEffect, useState } from 'react'
import { useFavoris } from '@/contexts/FavorisContext'
import { X, RotateCcw } from 'lucide-react'

export default function ToastUndo() {
  const { lastDeleted, undoDelete } = useFavoris()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (lastDeleted) {
      setShow(true)
    }
  }, [lastDeleted])

  useEffect(() => {
    if (show && !lastDeleted) {
      setShow(false)
    }
  }, [lastDeleted, show])

  const handleUndo = () => {
    undoDelete()
    setShow(false)
  }

  const handleClose = () => {
    setShow(false)
  }

  if (!show || !lastDeleted) return null

  const message = lastDeleted.multiple 
    ? `${lastDeleted.data.length} favoris supprimés`
    : `"${lastDeleted.nom}" retiré des favoris`

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] animate-slide-up">
      <div className="bg-gray-900 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4 min-w-[300px]">
        <span className="flex-1 font-medium">{message}</span>
        
        <button
          onClick={handleUndo}
          className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded transition-colors font-medium"
        >
          <RotateCcw size={16} />
          Annuler
        </button>

        <button
          onClick={handleClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}