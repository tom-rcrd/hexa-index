'use client'

import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'

const FavorisContext = createContext()

const MAX_FAVORIS = 500 // Limite pour éviter de surcharger localStorage
const STORAGE_KEY = 'hexa-favoris'

export function FavorisProvider({ children }) {
  const [favoris, setFavoris] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [lastDeleted, setLastDeleted] = useState(null) // Pour l'undo

  // Charger les favoris au montage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setFavoris(Array.isArray(parsed) ? parsed : [])
      } catch (e) {
        console.error('Erreur chargement favoris:', e)
        setFavoris([])
      }
    }
    setIsLoaded(true)
  }, [])

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favoris))
      } catch (e) {
        console.error('Erreur sauvegarde favoris:', e)
        // Si quota dépassé, supprimer les plus anciens
        if (e.name === 'QuotaExceededError') {
          const reduced = favoris.slice(-MAX_FAVORIS / 2)
          setFavoris(reduced)
          alert(`Limite de stockage atteinte. ${favoris.length - reduced.length} favoris les plus anciens ont été supprimés.`)
        }
      }
    }
  }, [favoris, isLoaded])

  // Memoize la Map pour des lookups O(1) au lieu de O(n)
  const favorisMap = useMemo(() => {
    return new Map(favoris.map(f => [f.id, f]))
  }, [favoris])

  const estFavori = useCallback((lieuId) => {
    return favorisMap.has(lieuId)
  }, [favorisMap])

  const ajouterFavori = useCallback((lieu) => {
    if (favorisMap.has(lieu.id)) {
      return // Déjà dans les favoris
    }

    if (favoris.length >= MAX_FAVORIS) {
      alert(`Vous avez atteint la limite de ${MAX_FAVORIS} favoris.`)
      return
    }

    setFavoris(prev => [...prev, {
      id: lieu.id,
      nom: lieu.nom,
      types: lieu.types,
      ville: lieu.ville,
      description: lieu.description,
      website: lieu.website,
      instagram: lieu.instagram,
      created_at: lieu.created_at,
      addedAt: new Date().toISOString()
    }])
  }, [favorisMap, favoris.length])

  const retirerFavori = useCallback((lieuId) => {
    const favoriSupprime = favoris.find(f => f.id === lieuId)
    if (favoriSupprime) {
      setLastDeleted(favoriSupprime)
      setFavoris(prev => prev.filter(f => f.id !== lieuId))
      
      // Auto-clear du lastDeleted après 10 secondes
      setTimeout(() => setLastDeleted(null), 10000)
    }
  }, [favoris])

  const toggleFavori = useCallback((lieu) => {
    if (favorisMap.has(lieu.id)) {
      retirerFavori(lieu.id)
    } else {
      ajouterFavori(lieu)
    }
  }, [favorisMap, ajouterFavori, retirerFavori])

  const undoDelete = useCallback(() => {
    if (lastDeleted) {
      setFavoris(prev => [...prev, lastDeleted])
      setLastDeleted(null)
    }
  }, [lastDeleted])

  const viderFavoris = useCallback(() => {
    if (confirm(`Supprimer tous les ${favoris.length} favoris ?`)) {
      setLastDeleted({ multiple: true, data: favoris }) // Pour undo global
      setFavoris([])
    }
  }, [favoris])

  const exporterFavoris = useCallback(() => {
    const data = {
      favoris,
      exportedAt: new Date().toISOString(),
      count: favoris.length,
      version: '1.0'
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `mes-favoris-hexa-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }, [favoris])

  const importerFavoris = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result)
          
          if (!data.favoris || !Array.isArray(data.favoris)) {
            throw new Error('Format de fichier invalide')
          }

          const newFavoris = data.favoris.filter(f => !favorisMap.has(f.id))
          
          if (favoris.length + newFavoris.length > MAX_FAVORIS) {
            reject(new Error(`L'import dépasserait la limite de ${MAX_FAVORIS} favoris`))
            return
          }

          setFavoris(prev => [...prev, ...newFavoris])
          resolve(newFavoris.length)
        } catch (error) {
          reject(error)
        }
      }
      reader.onerror = () => reject(new Error('Erreur de lecture du fichier'))
      reader.readAsText(file)
    })
  }, [favoris.length, favorisMap])

  const trierFavoris = useCallback((critere) => {
    setFavoris(prev => {
      const sorted = [...prev]
      switch (critere) {
        case 'nom':
          return sorted.sort((a, b) => a.nom.localeCompare(b.nom))
        case 'ville':
          return sorted.sort((a, b) => a.ville.localeCompare(b.ville))
        case 'recent':
          return sorted.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt))
        case 'ancien':
          return sorted.sort((a, b) => new Date(a.addedAt) - new Date(b.addedAt))
        default:
          return sorted
      }
    })
  }, [])

  const value = useMemo(() => ({
    favoris,
    ajouterFavori,
    retirerFavori,
    toggleFavori,
    estFavori,
    viderFavoris,
    exporterFavoris,
    importerFavoris,
    undoDelete,
    trierFavoris,
    count: favoris.length,
    lastDeleted,
    maxFavoris: MAX_FAVORIS
  }), [
    favoris,
    ajouterFavori,
    retirerFavori,
    toggleFavori,
    estFavori,
    viderFavoris,
    exporterFavoris,
    importerFavoris,
    undoDelete,
    trierFavoris,
    lastDeleted
  ])

  return (
    <FavorisContext.Provider value={value}>
      {children}
    </FavorisContext.Provider>
  )
}

export function useFavoris() {
  const context = useContext(FavorisContext)
  if (!context) {
    throw new Error('useFavoris doit être utilisé dans un FavorisProvider')
  }
  return context
}