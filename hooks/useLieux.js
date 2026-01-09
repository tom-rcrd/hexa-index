'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export function useLieux() {
  const [lieux, setLieux] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadLieux()

    // Abonnement temps réel aux changements
    const lieuxSubscription = supabase
      .channel('lieux_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'lieux' }, loadLieux)
      .subscribe()

    return () => {
      lieuxSubscription.unsubscribe()
    }
  }, [])

  const loadLieux = async () => {
    const { data, error } = await supabase
      .from('lieux')
      .select('*')
      .order('nom', { ascending: true })
    
    if (!error && data) {
      setLieux(data)
    }
    setLoading(false)
  }

  const ajouterLieu = async (lieuData) => {
    const { data, error } = await supabase
      .from('lieux')
      .insert([lieuData])
      .select()
    
    if (error) throw error
    return data[0]
  }

  const modifierLieu = async (id, lieuData) => {
    const { data, error } = await supabase
      .from('lieux')
      .update(lieuData)
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data[0]
  }

  const supprimerLieu = async (id) => {
    const { error } = await supabase
      .from('lieux')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }

  // Fonction helper pour vérifier les doublons
  const checkDuplicate = (nom, excludeId = null) => {
    const normalize = (str) => {
      if (!str || typeof str !== 'string') return ''
      return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
    }

    const normalizedNom = normalize(nom)
    return lieux.some(lieu => 
      lieu.id !== excludeId && normalize(lieu.nom) === normalizedNom
    )
  }

  return {
    lieux,
    loading,
    loadLieux,
    ajouterLieu,
    modifierLieu,
    supprimerLieu,
    checkDuplicate
  }
}