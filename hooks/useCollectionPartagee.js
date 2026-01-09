'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export function useCollectionPartagee() {
  const searchParams = useSearchParams()
  const [collectionChargee, setCollectionChargee] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const code = searchParams.get('c')
    
    if (code) {
      chargerCollection(code)
    }
  }, [searchParams])

  const chargerCollection = async (code) => {
    setLoading(true)

    try {
      const { data, error } = await supabase
        .from('collections_partagees')
        .select('*')
        .eq('code', code)
        .single()

      if (error) throw error

      // Vérifier si le lien n'a pas expiré
      if (data.expires_at && new Date(data.expires_at) < new Date()) {
        alert('Ce lien de partage a expiré.')
        return
      }

      setCollectionChargee(data)

      // Afficher un message de confirmation
      const count = data.lieux_data?.length || data.lieux_ids?.length || 0
      console.log(`✅ Collection partagée chargée : ${count} lieux`)

    } catch (error) {
      console.error('Erreur chargement collection:', error)
      if (error.code === 'PGRST116') {
        alert('Ce lien de partage n\'existe pas ou a été supprimé.')
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    collectionChargee,
    loading,
    hasCollection: !!collectionChargee
  }
}