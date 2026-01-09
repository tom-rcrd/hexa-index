'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { CheckCircle, XCircle, Clock, Mail, Edit2, Save, X, ChevronDown, ChevronUp } from 'lucide-react'

export default function ContributionsAdmin() {
  const [contributions, setContributions] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState(null)
  const [expanded, setExpanded] = useState(true)

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
    loadContributions()
  }, [])

  const loadContributions = async () => {
    const { data, error } = await supabase
      .from('contributions')
      .select('*')
      .eq('statut', 'en_attente')
      .order('created_at', { ascending: false })

    if (!error && data) {
      setContributions(data)
    }
    setLoading(false)
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
      // Ajouter le lieu
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

      // Mettre à jour le statut → déclenche l'email
      const { error: updateError } = await supabase
        .from('contributions')
        .update({ statut: 'valide' })
        .eq('id', contribution.id)

      if (updateError) throw updateError

      alert('✅ Contribution validée ! Email envoyé.')
      loadContributions()
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur : ' + error.message)
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

  if (loading) return null
  if (contributions.length === 0) return null

  return (
    <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4 mb-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between mb-4"
      >
        <div className="flex items-center gap-2">
          <Clock className="text-orange-600" size={24} />
          <h3 className="text-lg font-bold text-orange-900">
            Contributions en attente ({contributions.length})
          </h3>
        </div>
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {expanded && (
        <div className="space-y-3">
          {contributions.map(contrib => (
            <div key={contrib.id} className="bg-white border border-orange-200 rounded-lg p-4">
              {editingId === contrib.id ? (
                // Mode édition
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">Nom du lieu</label>
                    <input
                      type="text"
                      value={editForm.nom_lieu}
                      onChange={(e) => setEditForm({ ...editForm, nom_lieu: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">Types (séparés par virgules)</label>
                    <input
                      type="text"
                      value={editForm.types_de_lieux}
                      onChange={(e) => setEditForm({ ...editForm, types_de_lieux: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">Ville</label>
                    <input
                      type="text"
                      value={editForm.ville}
                      onChange={(e) => setEditForm({ ...editForm, ville: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">Description</label>
                    <textarea
                      value={editForm.description}
                      onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg text-sm"
                      rows="2"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">Email</label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg text-sm"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => saveEdits(contrib.id)}
                      className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 flex items-center gap-1"
                    >
                      <Save size={14} />
                      Sauvegarder
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="bg-gray-300 text-gray-700 px-3 py-1.5 rounded text-sm hover:bg-gray-400"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              ) : (
                // Mode lecture
                <div>
                  <h4 className="font-bold text-gray-800">{contrib.nom_lieu}</h4>
                  <div className="flex flex-wrap gap-1.5 my-2">
                    {contrib.types_de_lieux.split(',').map((type, i) => (
                      <span 
                        key={i}
                        style={{ backgroundColor: getColorForType(type.trim()), color: '#202020ff' }}
                        className="px-2 py-0.5 rounded-full text-xs"
                      >
                        {type.trim()}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">📍 {contrib.ville}</p>
                  {contrib.description && (
                    <p className="text-sm text-gray-600 mt-1">{contrib.description}</p>
                  )}
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    {contrib.email && (
                      <span className="flex items-center gap-1">
                        <Mail size={12} />
                        {contrib.email}
                      </span>
                    )}
                    <span>
                      {new Date(contrib.created_at).toLocaleDateString('fr-FR')}
                    </span>
                  </div>

                  <div className="flex gap-2 mt-3 pt-3 border-t">
                    <button
                      onClick={() => startEditing(contrib)}
                      className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 flex items-center gap-1"
                    >
                      <Edit2 size={14} />
                      Modifier
                    </button>
                    <button
                      onClick={() => validerContribution(contrib)}
                      className="bg-green-600 text-white px-3 py-1.5 rounded text-sm hover:bg-green-700 flex items-center gap-1"
                    >
                      <CheckCircle size={14} />
                      Valider
                    </button>
                    <button
                      onClick={() => rejeterContribution(contrib.id)}
                      className="bg-red-600 text-white px-3 py-1.5 rounded text-sm hover:bg-red-700 flex items-center gap-1"
                    >
                      <XCircle size={14} />
                      Rejeter
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}