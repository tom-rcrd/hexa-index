// Palette de couleurs pour les tags
export const TAG_COLORS = [
  "#9FFFCA", "#FFAEFF", "#FFAC88", "#C6BBFF", "#F9FFBD", "#A8FFD8",
  "#FC9F9F", "#FF8FD4", "#FFB7E3", "#FFB39A", "#FFD1B8", "#B8C7FF",
  "#D6D0FF", "#FFF3A0", "#EFFF9F", "#8FD6FF", "#AEE8FF", "#BFF2E8", "#FFDDEB",
]

// Fonction pour obtenir une couleur basée sur le type
export function getColorForType(type) {
  let hash = 0
  for (let i = 0; i < type.length; i++) {
    hash = type.charCodeAt(i) + ((hash << 5) - hash)
  }
  return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length]
}

// Fonction de normalisation pour la comparaison fuzzy
export function normalizeString(str) {
  if (!str || typeof str !== 'string') return ''
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // retire les accents
    .trim()
}

// Fonction pour exporter les données
export function exporterDonnees(lieux, categories, villes) {
  const data = { lieux, categories, villes }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `lieux-export-${new Date().toISOString().split('T')[0]}.json`
  a.click()
  URL.revokeObjectURL(url)
}

// Fonction pour importer les données
export async function importerDonnees(file, supabase, onSuccess) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = async (event) => {
      try {
        const data = JSON.parse(event.target.result)
        if (data.lieux && confirm('Importer ces données ? Cela remplacera vos données actuelles.')) {
          await supabase.from('lieux').delete().neq('id', 0)
          await supabase.from('lieux').insert(data.lieux.map(l => ({
            nom: l.nom,
            types: l.types,
            ville: l.ville,
            description: l.description,
            website: l.website,
            instagram: l.instagram
          })))
          
          onSuccess?.()
          alert('Données importées avec succès !')
          resolve(true)
        }
      } catch (error) {
        alert('Erreur lors de l\'import : ' + error.message)
        reject(error)
      }
    }
    reader.readAsText(file)
  })
}