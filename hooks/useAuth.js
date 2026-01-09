'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export function useAuth() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [loginData, setLoginData] = useState({ email: '', password: '' })

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    setIsAdmin(!!session)
    setLoading(false)
  }

  const login = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      })
      
      if (error) throw error
      
      setIsAdmin(true)
      setShowLogin(false)
      setLoginData({ email: '', password: '' })
      alert('Connexion réussie !')
    } catch (error) {
      alert('Erreur de connexion : ' + error.message)
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setIsAdmin(false)
    alert('Déconnexion réussie')
  }

  return {
    isAdmin,
    loading,
    showLogin,
    setShowLogin,
    loginData,
    setLoginData,
    login,
    logout
  }
}