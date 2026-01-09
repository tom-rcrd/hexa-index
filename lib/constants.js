// lib/constants.js

/**
 * Palette de couleurs pour les tags de catégories
 * Utilisée de manière déterministe via hash du nom de la catégorie
 */
export const TAG_COLORS = [
  "#9FFFCA", // Vert menthe
  "#FFAEFF", // Rose vif
  "#FFAC88", // Orange pêche
  "#C6BBFF", // Violet pastel
  "#F9FFBD", // Jaune citron
  "#A8FFD8", // Turquoise
  "#FC9F9F", // Rose saumon
  "#FF8FD4", // Rose bonbon
  "#FFB7E3", // Rose clair
  "#FFB39A", // Corail
  "#FFD1B8", // Pêche clair
  "#B8C7FF", // Bleu lavande
  "#D6D0FF", // Lilas
  "#FFF3A0", // Jaune vanille
  "#EFFF9F", // Vert lime
  "#8FD6FF", // Bleu ciel
  "#AEE8FF", // Bleu clair
  "#BFF2E8", // Cyan pastel
  "#FFDDEB", // Rose poudré
]

/**
 * Configuration de la durée d'expiration des liens de partage
 */
export const PARTAGE_CONFIG = {
  DUREE_EXPIRATION_JOURS: 90,
  CODE_LENGTH: 8,
}

/**
 * Configuration de l'indicateur "NOUVEAU"
 */
export const NOUVEAU_CONFIG = {
  JOURS_AFFICHAGE: 7, // Affiche "NOUVEAU" pendant 7 jours
}

/**
 * Messages de confirmation
 */
export const MESSAGES = {
  CONFIRMER_SUPPRESSION: 'Êtes-vous sûr de vouloir supprimer ce lieu ?',
  CONFIRMER_VALIDATION: (nom) => `Valider et publier "${nom}" ?`,
  CONFIRMER_REJET: 'Rejeter cette contribution ?',
  CONFIRMER_SUPPRESSION_CONTRIBUTION: 'Supprimer définitivement cette contribution ?',
  
  SUCCESS_AJOUT: 'Lieu ajouté avec succès !',
  SUCCESS_MODIFICATION: 'Lieu modifié avec succès !',
  SUCCESS_SUPPRESSION: 'Lieu supprimé !',
  SUCCESS_VALIDATION: 'Contribution validée ! Un email a été envoyé au contributeur.',
  SUCCESS_REJET: 'Contribution rejetée',
  SUCCESS_CONTRIBUTION: 'Merci pour votre contribution !',
  SUCCESS_MODIFICATIONS_SAUVEGARDEES: 'Modifications sauvegardées',
  
  ERROR_CHAMPS_REQUIS: 'Veuillez remplir tous les champs obligatoires',
  ERROR_DOUBLON: (nom) => `Un lieu nommé "${nom}" existe déjà dans la base de données.`,
  ERROR_AUCUN_FAVORI: 'Vous devez avoir au moins un favori pour partager !',
  ERROR_AUCUN_LIEU_FILTRE: 'Aucun lieu disponible avec ces filtres !',
}

/**
 * Configuration de la carte
 */
export const MAP_CONFIG = {
  CENTER: [2.3522, 46.8566], // Centre de la France
  INITIAL_ZOOM: 5,
  POPUP_MAX_WIDTH: '600px',
  POPUP_MAX_HEIGHT: '400px',
}

/**
 * Limites et validations
 */
export const VALIDATION = {
  NOM_MIN_LENGTH: 2,
  NOM_MAX_LENGTH: 100,
  DESCRIPTION_MAX_LENGTH: 500,
  TYPES_MIN: 1,
  TYPES_MAX: 10,
}