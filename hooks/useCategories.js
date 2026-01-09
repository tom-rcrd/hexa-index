'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export function useCategories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('nom')
      .order('nom', { ascending: true })
    
    if (!error && data) {
      setCategories(data.map(c => c.nom))
    }
    setLoading(false)
  }

  const ajouterCategorie = async (nomCategorie) => {
    // Vérifier si la catégorie existe déjà (insensible à la casse)
    const normalize = (str) => {
      if (!str || typeof str !== 'string') return ''
      return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
    }

    if (categories.some(c => normalize(c) === normalize(nomCategorie))) {
      return // Catégorie existe déjà
    }

    const { data, error } = await supabase
      .from('categories')
      .insert([{ nom: nomCategorie }])
      .select()

    if (error) throw error
    
    await loadCategories() // Recharger la liste
    return data[0]
  }

  const supprimerCategorie = async (nomCategorie) => {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('nom', nomCategorie)

    if (error) throw error
    await loadCategories()
  }

  return {
    categories,
    loading,
    loadCategories,
    ajouterCategorie,
    supprimerCategorie
  }
}