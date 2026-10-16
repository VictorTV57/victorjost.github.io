import type { Lang } from '../i18n';
// Les PDF restent dans cv_resume/ : les remplacer suffit, le build les recopie avec un nom versionné
import cvFr from '../../cv_resume/CV_ONLINE.pdf?url';
import cvEn from '../../cv_resume/RESUME_ONLINE.pdf?url';

/** CV à télécharger, dans la langue de la page. `filename` est le nom proposé à l'enregistrement. */
export const cv: Record<Lang, { href: string; filename: string }> = {
  fr: { href: cvFr, filename: 'CV-Victor-Jost.pdf' },
  en: { href: cvEn, filename: 'Resume-Victor-Jost.pdf' },
};
