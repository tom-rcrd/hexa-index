'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { CheckCircle, XCircle, Clock, Mail, Edit2, X, Save } from 'lucide-react'

export default function AdminContributions() {
  const [contributions, setContributions] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState(null)
  const [categories, setCategories] = useState([])
  const [villes, setVilles] = useState([])

  const TAG_COLORS = [
    "#9FFFCA", "#FFAEFF", "#FFAC88", "#C6BBFF", "#F9FFBD", "#A8FFD8",
    "#FC9F9F", "#FF8FD4", "#FFB7E3", "#FFB39A", "#FFD1B8", "#B8C7FF",
    "#D6D0FF", "#FFF3A0", "#EFFF9F", "#8FD6FF", "#AEE8FF", "#BFF2E8", "#FFDDEB",
  ]

  function getColorForType(type) {
    let hash = 0
    for (let i = 0; i < type.length; i++) {
      hash = type.charCodeAt(i) + ((hash << 5) - hash)
    }
    return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length]
  }

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    await Promise.all([loadContributions(), loadCategories(), loadVilles()])
    setLoading(false)
  }

  const loadContributions = async () => {
    const { data, error } = await supabase
      .from('contributions')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data) {
      setContributions(data)
    }
  }

  const loadCategories = async () => {
    const { data } = await supabase
      .from('categories')
      .select('nom')
      .order('nom', { ascending: true })
    
    if (data) setCategories(data.map(c => c.nom))
  }

  const loadVilles = async () => {
    const { data } = await supabase
      .from('villes')
      .select('*')
      .order('nom', { ascending: true })
    
    if (data) setVilles(data)
  }

  const startEditing = (contribution) => {
    setEditingId(contribution.id)
    setEditForm({
      nom_lieu: contribution.nom_lieu,
      types_de_lieux: contribution.types_de_lieux,
      ville: contribution.ville,
      description: contribution.description || '',
      email: contribution.email || ''
    })
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditForm(null)
  }

  const saveEdits = async (id) => {
    const { error } = await supabase
      .from('contributions')
      .update({
        nom_lieu: editForm.nom_lieu,
        types_de_lieux: editForm.types_de_lieux,
        ville: editForm.ville,
        description: editForm.description,
        email: editForm.email
      })
      .eq('id', id)

    if (!error) {
      alert('✅ Modifications sauvegardées')
      setEditingId(null)
      setEditForm(null)
      loadContributions()
    } else {
      alert('Erreur : ' + error.message)
    }
  }

  const validerContribution = async (contribution) => {
    if (!confirm(`Valider et publier "${contribution.nom_lieu}" ?`)) return

    try {
      // 1. Vérifier/créer la ville si elle n'existe pas
      const villeExiste = villes.some(v => v.nom === contribution.ville)
      if (!villeExiste) {
        const coords = await geocodeVille(contribution.ville)
        const nouvelleVille = coords
          ? { nom: contribution.ville, latitude: coords.latitude, longitude: coords.longitude }
          : { nom: contribution.ville }
        
        await supabase.from('villes').insert([nouvelleVille])
      }

      // 2. Ajouter le lieu dans la table lieux
      const typesArray = contribution.types_de_lieux.split(',').map(t => t.trim())
      
      const { error: lieuError } = await supabase
        .from('lieux')
        .insert([{
          nom: contribution.nom_lieu,
          types: typesArray,
          ville: contribution.ville,
          description: contribution.description,
          website: null,
          instagram: null
        }])

      if (lieuError) throw lieuError

      // 3. Mettre à jour le statut de la contribution à "valide"
      const { error: updateError } = await supabase
        .from('contributions')
        .update({ statut: 'valide' })
        .eq('id', contribution.id)

      if (updateError) throw updateError

      alert('✅ Contribution validée ! Un email a été envoyé au contributeur.')
      loadContributions()
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur : ' + error.message)
    }
  }

  const geocodeVille = async (nomVille) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?` + 
        new URLSearchParams({
          q: `${nomVille}, France`,
          format: 'json',
          limit: 1,
          countrycodes: 'fr'
        }),
        { headers: { 'User-Agent': 'HexaIndex/1.0' } }
      )
      const data = await response.json()
      if (data && data.length > 0) {
        return {
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon)
        }
      }
      return null
    } catch (error) {
      console.error('Erreur géocodage:', error)
      return null
    }
  }

  const rejeterContribution = async (id) => {
    if (!confirm('Rejeter cette contribution ?')) return

    const { error } = await supabase
      .from('contributions')
      .update({ statut: 'rejete' })
      .eq('id', id)

    if (!error) {
      alert('Contribution rejetée')
      loadContributions()
    }
  }

  const supprimerContribution = async (id) => {
    if (!confirm('Supprimer définitivement cette contribution ?')) return

    const { error } = await supabase
      .from('contributions')
      .delete()
      .eq('id', id)

    if (!error) {
      alert('Contribution supprimée')
      loadContributions()
    }
  }

  if (loading) {
    return <div className="p-8 text-center">Chargement...</div>
  }

  const contributionsEnAttente = contributions.filter(c => c.statut === 'en_attente')
  const contributionsValidees = contributions.filter(c => c.statut === 'valide')
  const contributionsRejetees = contributions.filter(c => c.statut === 'rejete')

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Gestion des contributions</h1>
          <div className="flex gap-4 text-sm">
            <span className="text-orange-600 font-medium">{contributionsEnAttente.length} en attente</span>
            <span className="text-green-600 font-medium">{contributionsValidees.length} validées</span>
            <span className="text-red-600 font-medium">{contributionsRejetees.length} rejetées</span>
          </div>
        </div>

        {/* En attente de validation */}
        {contributionsEnAttente.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Clock className="text-orange-600" size={24} />
              En attente de validation ({contributionsEnAttente.length})
            </h2>
            <div className="space-y-4">
              {contributionsEnAttente.map(contrib => (
                <div key={contrib.id} className="border-2 border-orange-200 rounded-lg p-5 bg-orange-50">
                  {editingId === contrib.id ? (
                    // Mode édition
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Nom du lieu *</label>
                        <input
                          type="text"
                          value={editForm.nom_lieu}
                          onChange={(e) => setEditForm({ ...editForm, nom_lieu: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Types (séparés par des virgules) *</label>
                        <input
                          type="text"
                          value={editForm.types_de_lieux}
                          onChange={(e) => setEditForm({ ...editForm, types_de_lieux: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg"
                          placeholder="Atelier, Sérigraphie, Imprimeur"
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                          {editForm.types_de_lieux.split(',').filter(Boolean).map((type, i) => (
                            <span 
                              key={i}
                              style={{ backgroundColor: getColorForType(type.trim()), color: '#202020ff' }}
                              className="px-3 py-1 rounded-full text-sm"
                            >
                              {type.trim()}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Ville *</label>
                        <input
                          type="text"
                          value={editForm.ville}
                          onChange={(e) => setEditForm({ ...editForm, ville: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                          value={editForm.description}
                          onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg"
                          rows="3"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Email du contributeur</label>
                        <input
                          type="email"
                          value={editForm.email}
                          onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>

                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => saveEdits(contrib.id)}
                          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
                        >
                          <Save size={16} />
                          Sauvegarder les modifications
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                        >
                          Annuler
                        </button>
                      </div>
                    </div>
                  ) : (
                    // Mode lecture
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-gray-800">{contrib.nom_lieu}</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {contrib.types_de_lieux.split(',').map((type, i) => (
                              <span 
                                key={i}
                                style={{ backgroundColor: getColorForType(type.trim()), color: '#202020ff' }}
                                className="px-3 py-1 rounded-full text-sm"
                              >
                                {type.trim()}
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-600 mt-2">📍 {contrib.ville}</p>
                          {contrib.description && (
                            <p className="text-gray-700 mt-2 bg-white p-3 rounded">{contrib.description}</p>
                          )}
                          <div className="flex items-center gap-3 mt-3 text-sm text-gray-500">
                            {contrib.email && (
                              <span className="flex items-center gap-1">
                                <Mail size={14} />
                                {contrib.email}
                              </span>
                            )}
                            <span>
                              Reçu le {new Date(contrib.created_at).toLocaleDateString('fr-FR')} à {new Date(contrib.created_at).toLocaleTimeString('fr-FR')}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-3 border-t">
                        <button
                          onClick={() => startEditing(contrib)}
                          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
                        >
                          <Edit2 size={16} />
                          Modifier
                        </button>
                        <button
                          onClick={() => validerContribution(contrib)}
                          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2"
                        >
                          <CheckCircle size={16} />
                          Valider et publier
                        </button>
                        <button
                          onClick={() => rejeterContribution(contrib.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center gap-2"
                        >
                          <XCircle size={16} />
                          Rejeter
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {contributionsEnAttente.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center mb-6">
            <Clock className="mx-auto text-gray-400 mb-3" size={48} />
            <p className="text-gray-500">Aucune contribution en attente</p>
          </div>
        )}

        {/* Validées (historique) */}
        {contributionsValidees.length > 0 && (
          <details className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <summary className="cursor-pointer text-lg font-bold text-gray-800 flex items-center gap-2">
              <CheckCircle className="text-green-600" size={24} />
              Contributions validées ({contributionsValidees.length})
            </summary>
            <div className="mt-4 space-y-2">
              {contributionsValidees.map(contrib => (
                <div key={contrib.id} className="border rounded-lg p-3 text-sm bg-green-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{contrib.nom_lieu}</span>
                      <span className="text-gray-500 ml-2">
                        {contrib.ville} • {new Date(contrib.created_at).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </details>
        )}

        {/* Rejetées (historique) */}
        {contributionsRejetees.length > 0 && (
          <details className="bg-white rounded-lg shadow-sm p-6">
            <summary className="cursor-pointer text-lg font-bold text-gray-800 flex items-center gap-2">
              <XCircle className="text-red-600" size={24} />
              Contributions rejetées ({contributionsRejetees.length})
            </summary>
            <div className="mt-4 space-y-2">
              {contributionsRejetees.map(contrib => (
                <div key={contrib.id} className="border rounded-lg p-3 text-sm bg-red-50 opacity-60">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{contrib.nom_lieu}</span>
                      <span className="text-gray-500 ml-2">
                        {contrib.ville} • {new Date(contrib.created_at).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </details>
        )}
      </div>
    </div>
  )
}