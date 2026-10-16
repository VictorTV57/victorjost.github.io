import ImperiumExplorer from './ImperiumExplorer.astro';

/** Blocs interactifs rattachés à un projet, par identifiant (nom du fichier .md). */
export const projectExtras: Record<string, typeof ImperiumExplorer | undefined> = {
  imperium: ImperiumExplorer,
};
