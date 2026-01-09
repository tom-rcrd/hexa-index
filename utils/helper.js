

// utils/helpers.js

import { NOUVEAU_CONFIG } from '@/lib/constants'

/**
 * Normalise une chaîne pour la recherche/comparaison
 * Supprime les accents, met en minuscules, trim
 * 
 * @param {string} str - La chaîne à normaliser
 * @returns {string} Chaîne normalisée
 */
export function normalizeString(str) {
  if (!str || typeof str !== 'string') return ''
  
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

/**
 * Vérifie si un lieu est récent (affiché comme "NOUVEAU")
 * 
 * @param {string|Date} createdAt - Date de création
 * @returns {boolean} true si le lieu est considéré comme nouveau
 */
export function isNew(createdAt) {
  if (!createdAt) return false
  
  const now = new Date()
  const created = new Date(createdAt)
  const diffInDays = (now - created) / (1000 * 60 * 60 * 24)
  
  return diffInDays <= NOUVEAU_CONFIG.JOURS_AFFICHAGE
}

/**
 * Formate une date en français
 * 
 * @param {string|Date} date - Date à formater
 * @param {Object} options - Options de formatage
 * @returns {string} Date formatée
 */
export function formatDate(date, options = {}) {
  if (!date) return ''
  
  const defaultOptions = {
    dateStyle: 'short',
    ...options
  }
  
  return new Date(date).toLocaleDateString('fr-FR', defaultOptions)
}

/**
 * Formate une heure en français
 * 
 * @param {string|Date} date - Date à formater
 * @returns {string} Heure formatée
 */
export function formatTime(date) {
  if (!date) return ''
  
  return new Date(date).toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

/**
 * Génère un code aléatoire court (pour partage, etc.)
 * 
 * @param {number} length - Longueur souhaitée
 * @returns {string} Code aléatoire
 */
export function generateRandomCode(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length)
}

/**
 * Sanitize une URL pour éviter XSS
 * 
 * @param {string} url - URL à sanitizer
 * @returns {string|null} URL sanitizée ou null si invalide
 */
export function sanitizeUrl(url) {
  if (!url) return null
  
  try {
    const parsedUrl = new URL(url)
    
    // Autoriser uniquement http et https
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      return null
    }
    
    return parsedUrl.toString()
  } catch {
    return null
  }
}

/**
 * Sanitize un handle Instagram
 * 
 * @param {string} handle - Handle Instagram
 * @returns {string} URL Instagram complète
 */
export function sanitizeInstagramHandle(handle) {
  if (!handle) return null
  
  // Si c'est déjà une URL complète
  if (handle.startsWith('http')) {
    return sanitizeUrl(handle)
  }
  
  // Nettoyer le @
  const cleanHandle = handle.replace('@', '').trim()
  
  if (!cleanHandle) return null
  
  return `https://instagram.com/${cleanHandle}`
}

/**
 * Debounce une fonction
 * 
 * @param {Function} func - Fonction à debounce
 * @param {number} wait - Délai en ms
 * @returns {Function} Fonction debouncée
 */
export function debounce(func, wait = 300) {
  let timeout
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Filtre les lieux selon des critères
 * 
 * @param {Array} lieux - Liste des lieux
 * @param {Object} filtres - Filtres à appliquer {types: [], villes: []}
 * @returns {Array} Lieux filtrés
 */
export function filterLieux(lieux, filtres = { types: [], villes: [] }) {
  if (!lieux || !Array.isArray(lieux)) return []
  
  return lieux.filter(lieu => {
    const matchTypes = filtres.types.length === 0 || 
      filtres.types.some(t => lieu.types?.includes(t))
    
    const matchVilles = filtres.villes.length === 0 || 
      filtres.villes.includes(lieu.ville)
    
    return matchTypes && matchVilles
  })
}

/**
 * Trie les suggestions par pertinence
 * 
 * @param {Array} items - Items à trier
 * @param {string} query - Requête de recherche
 * @returns {Array} Items triés
 */
export function sortSuggestions(items, query) {
  if (!query) return items
  
  const normalized = normalizeString(query)
  
  return items.sort((a, b) => {
    const aNorm = normalizeString(a)
    const bNorm = normalizeString(b)
    
    // Priorité aux correspondances exactes au début
    const aStarts = aNorm.startsWith(normalized)
    const bStarts = bNorm.startsWith(normalized)
    
    if (aStarts && !bStarts) return -1
    if (!aStarts && bStarts) return 1
    
    // Puis ordre alphabétique
    return a.localeCompare(b, 'fr')
  })
}

/**
 * Copie du texte dans le presse-papier de manière robuste
 * 
 * @param {string} text - Texte à copier
 * @returns {Promise<boolean>} true si succès
 */
export async function copyToClipboard(text) {
  try {
    // Méthode moderne
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback pour navigateurs anciens
    try {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      const success = document.execCommand('copy')
      document.body.removeChild(textarea)
      return success
    } catch {
      return false
    }
  }
}