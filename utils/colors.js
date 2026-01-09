// utils/colors.js

import { TAG_COLORS } from '@/lib/constants'

/**
 * Génère une couleur déterministe pour un type donné
 * Utilise un simple hash pour assurer la cohérence
 * 
 * @param {string} type - Le nom du type/catégorie
 * @returns {string} Code couleur hexadécimal
 */
export function getColorForType(type) {
  if (!type || typeof type !== 'string') return TAG_COLORS[0]
  
  let hash = 0
  for (let i = 0; i < type.length; i++) {
    hash = type.charCodeAt(i) + ((hash << 5) - hash)
  }
  
  return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length]
}

/**
 * Vérifie si une couleur de fond nécessite du texte sombre ou clair
 * Calcul basé sur la luminance relative
 * 
 * @param {string} hexColor - Couleur au format hex (#RRGGBB)
 * @returns {string} 'light' ou 'dark'
 */
export function getContrastColor(hexColor) {
  // Convertir hex en RGB
  const r = parseInt(hexColor.slice(1, 3), 16)
  const g = parseInt(hexColor.slice(3, 5), 16)
  const b = parseInt(hexColor.slice(5, 7), 16)
  
  // Calculer la luminance relative
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  
  return luminance > 0.5 ? 'dark' : 'light'
}