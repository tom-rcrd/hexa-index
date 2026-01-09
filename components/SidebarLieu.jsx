'use client'

import { X, Globe, Instagram, ExternalLink } from 'lucide-react'
import BoutonFavori from './BoutonFavori'
import { getColorForType } from '@/utils/utils'
import { isNew } from '@/utils/helper'

export default function SidebarLieu({ lieu, onClose, isAdmin, onEdit, onDelete }) {
  if (!lieu) return null

  return (
    <div className="fixed right-0 top-0 h-full w-[90vw] max-w-[400px] bg-white shadow-2xl z-50 overflow-y-auto animate-slide-in">
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold text-gray-800">{lieu.nom}</h2>
              <BoutonFavori lieu={lieu} size={24} />
              {isNew(lieu.created_at) && (
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  NOUVEAU
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {lieu.types.map(type => (
                <span 
                  key={type}
                  style={{ backgroundColor: getColorForType(type), color: '#202020ff' }}
                  className="px-3 py-1 rounded-full text-sm"
                >
                  {type}
                </span>
              ))}
            </div>
            <p className="text-gray-600">📍 {lieu.ville}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 transition-colors flex-shrink-0"
          >
            <X size={24} />
          </button>
        </div>

        {/* Description */}
        {lieu.description && (
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{lieu.description}</p>
          </div>
        )}

        {/* Liens */}
        {(lieu.website || lieu.instagram) && (
          <div className="space-y-3 mb-6">
            {lieu.website && (
              <a 
                href={lieu.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Globe size={20} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Voir le site web</span>
                <ExternalLink size={16} className="text-gray-400 ml-auto flex-shrink-0" />
              </a>
            )}
            
            {lieu.instagram && (
              <a 
                href={lieu.instagram.startsWith('http') ? lieu.instagram : `https://instagram.com/${lieu.instagram.replace('@', '')}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Instagram size={20} className="text-pink-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Voir sur Instagram</span>
                <ExternalLink size={16} className="text-gray-400 ml-auto flex-shrink-0" />
              </a>
            )}
          </div>
        )}

        {/* Actions admin */}
        {isAdmin && (
          <div className="pt-6 border-t flex gap-2">
            <button
              onClick={() => {
                onEdit(lieu)
                onClose()
              }}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Modifier
            </button>
            <button
              onClick={() => {
                onDelete(lieu.id, lieu.ville)
                onClose()
              }}
              className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Supprimer
            </button>
          </div>
        )}
      </div>
    </div>
  )
}