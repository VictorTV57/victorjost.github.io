import type { Localized } from '.';
import type { Variant } from '../lib/pixel-code';

export type ErrorCode = '400' | '401' | '403' | '404' | '410' | '429' | '500' | '502' | '503' | '504';
export type ErrorAction = 'home' | 'projects' | 'contact' | 'retry';

interface ErrorInfo {
  variant: Variant;
  /** Le premier bouton est plein, le second en contour. */
  actions: [ErrorAction, ErrorAction];
  /** Affiche l'adresse demandée sous le message. */
  showPath?: boolean;
  title: Localized;
  message: Localized;
}

export const ERRORS: Record<ErrorCode, ErrorInfo> = {
  '400': {
    variant: 'plain', actions: ['home', 'contact'],
    title: { fr: 'Requête invalide', en: 'Bad request' },
    message: {
      fr: "Le serveur n'a pas compris la demande. Vérifie l'adresse ou le lien que tu as suivi, puis réessaie.",
      en: "The server couldn't understand the request. Check the address or the link you followed, then try again.",
    },
  },
  '401': {
    variant: 'key', actions: ['home', 'contact'],
    title: { fr: 'Connexion requise', en: 'Sign-in required' },
    message: {
      fr: 'Cette page demande de se connecter. Si tu penses devoir y avoir accès, écris-moi.',
      en: 'This page requires signing in. If you think you should have access, write to me.',
    },
  },
  '403': {
    variant: 'lock', actions: ['home', 'contact'],
    title: { fr: 'Accès refusé', en: 'Access denied' },
    message: {
      fr: "Cette page existe, mais elle n'est pas publique. Si tu penses que c'est une erreur, écris-moi.",
      en: "This page exists, but it isn't public. If you think it's a mistake, write to me.",
    },
  },
  '404': {
    variant: 'ghost', actions: ['home', 'projects'], showPath: true,
    title: { fr: 'Page introuvable', en: 'Page not found' },
    message: {
      fr: "Cette page n'existe pas, ou elle a changé d'adresse. Le reste du portfolio, lui, est toujours là.",
      en: "This page doesn't exist, or it has moved. The rest of the portfolio is still here.",
    },
  },
  '410': {
    variant: 'erased', actions: ['home', 'projects'], showPath: true,
    title: { fr: 'Page supprimée', en: 'Page removed' },
    message: {
      fr: "Cette page a existé, mais je l'ai retirée pour de bon. Le reste du portfolio, lui, est toujours là.",
      en: 'This page existed, but I removed it for good. The rest of the portfolio is still here.',
    },
  },
  '429': {
    variant: 'overflow', actions: ['retry', 'home'],
    title: { fr: 'Trop de requêtes', en: 'Too many requests' },
    message: {
      fr: 'Beaucoup de demandes en très peu de temps. Patiente quelques secondes, puis réessaie.',
      en: 'Lots of requests in very little time. Wait a few seconds, then try again.',
    },
  },
  '500': {
    variant: 'broken', actions: ['retry', 'home'],
    title: { fr: 'Erreur du serveur', en: 'Server error' },
    message: {
      fr: 'Quelque chose a cassé de mon côté, pas du tien. Réessaie dans un instant.',
      en: 'Something broke on my side, not yours. Try again in a moment.',
    },
  },
  '502': {
    variant: 'gap', actions: ['retry', 'home'],
    title: { fr: 'Mauvaise passerelle', en: 'Bad gateway' },
    message: {
      fr: "Un serveur intermédiaire n'a pas reçu de réponse valide. C'est souvent passager : recharge la page dans quelques secondes.",
      en: "An intermediate server didn't get a valid response. It's usually temporary: reload the page in a few seconds.",
    },
  },
  '503': {
    variant: 'works', actions: ['retry', 'contact'],
    title: { fr: 'Site en maintenance', en: 'Under maintenance' },
    message: {
      fr: 'Je mets le portfolio à jour. Il revient très vite.',
      en: "I'm updating the portfolio. It'll be back very soon.",
    },
  },
  '504': {
    variant: 'timeout', actions: ['retry', 'home'],
    title: { fr: 'Délai dépassé', en: 'Gateway timeout' },
    message: {
      fr: "Le serveur a mis trop de temps à répondre. C'est souvent passager : réessaie dans un instant.",
      en: "The server took too long to respond. It's usually temporary: try again in a moment.",
    },
  },
};

export const ERROR_UI = {
  error: { fr: 'Erreur', en: 'Error' },
  on: { fr: 'sur', en: 'on' },
  home: { fr: "Retour à l'accueil", en: 'Back to home' },
  projects: { fr: 'Voir les projets', en: 'See projects' },
  contact: { fr: 'Me contacter', en: 'Contact me' },
  retry: { fr: 'Réessayer', en: 'Try again' },
} satisfies Record<string, Localized>;
