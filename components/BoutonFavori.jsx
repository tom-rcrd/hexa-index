'use client'

// components/BoutonFavori.jsx - VERSION OPTIMISÉE

import { memo, useState } from 'react'
import { Heart } from 'lucide-react'
import { useFavoris } from '@/contexts/FavorisContext'

function BoutonFavori({ lieu, size = 24, className = '' }) {
  const { estFavori, toggleFavori } = useFavoris()
  const [isAnimating, setIsAnimating] = useState(false)
  
  const isFavori = estFavori(lieu.id)

  const handleClick = (e) => {
    e.stopPropagation() // Empêche la propagation
    
    // Animation de clic
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 600)
    
    toggleFavori(lieu)
  }

  return (
    <button
      onClick={handleClick}
      className={`
     
        ${className}
      `}
      title={isFavori ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      aria-label={isFavori ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      aria-pressed={isFavori}
    >
      <Heart 
        size={size} 
        className={`
          ${isFavori 
            ? 'fill-red-500 text-red-500' 
            : 'text-gray-400 group-hover:text-red-400 group-hover:scale-100'
          }
          ${isAnimating ? 'animate-heart-beat' : ''}
        `}
      />
      

    </button>
  )
}

// Mémoïser pour éviter les re-renders inutiles
export default memo(BoutonFavori, (prevProps, nextProps) => {
  return prevProps.lieu.id === nextProps.lieu.id
})

// Styles CSS à ajouter dans globals.css
