/**
 * Dessine un code d'erreur case par case, sur la grille de 24px du site.
 * Chaque chiffre fait 5 × 7 cases. Le calcul se fait au build : la page reçoit du HTML déjà dessiné.
 */

/** Mise en scène propre à chaque erreur. */
export type Variant =
  | 'plain' //  400 : le code seul
  | 'ghost' //  404 : le « 0 » du milieu n'est plus qu'un contour, la case manquante est posée dessous
  | 'broken' // 500 : trois cases du dernier chiffre se décrochent et tombent
  | 'gap' //    502 : un trou entre les blocs, la liaison clignote sans passer
  | 'works' //  503 : une rubalise de chantier sous le code
  | 'lock' //   403 : un cadenas à droite du code
  | 'key' //    401 : une clé à droite du code, il faut se connecter
  | 'erased' // 410 : le chiffre du milieu s'efface case par case, il n'en reste qu'une trace
  | 'overflow' // 429 : des cases s'empilent sur le dernier chiffre et une case déborde
  | 'timeout'; // 504 : une barre de chargement en cases qui ralentit puis cale avant la fin

export interface Cell {
  /** Colonne et ligne de départ, à partir de 0. */
  col: number;
  row: number;
  colSpan?: number;
  rowSpan?: number;
  className: string;
  /** Propriétés CSS personnalisées propres à la case (--k, --d). */
  vars?: Record<string, number>;
}

export interface PixelCode {
  cols: number;
  rows: number;
  cells: Cell[];
}

type Glyph = readonly [string, string, string, string, string, string, string];

const GLYPHS: Record<string, Glyph> = {
  '0': ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  '1': ['00100', '01100', '00100', '00100', '00100', '00100', '01110'],
  '2': ['01110', '10001', '00001', '00010', '00100', '01000', '11111'],
  '3': ['11110', '00001', '00001', '01110', '00001', '00001', '11110'],
  '4': ['00010', '00110', '01010', '10010', '11111', '00010', '00010'],
  '5': ['11111', '10000', '11110', '00001', '00001', '10001', '01110'],
  '6': ['00110', '01000', '10000', '11110', '10001', '10001', '01110'],
  '7': ['11111', '00001', '00010', '00100', '01000', '01000', '01000'],
  '8': ['01110', '10001', '10001', '01110', '10001', '10001', '01110'],
  '9': ['01110', '10001', '10001', '01111', '00001', '00010', '01100'],
};

const GLYPH_W = 5;
const GLYPH_H = 7;

export function drawCode(code: string, variant: Variant): PixelCode {
  const gap = variant === 'gap' ? 3 : 1;
  const extraRows = ['broken', 'ghost', 'works', 'overflow', 'timeout'].includes(variant) ? 3 : 0;
  // 429 : la pile se dessine au-dessus du code, qui descend de 3 cases
  const top = variant === 'overflow' ? 3 : 0;
  const codeCols = code.length * GLYPH_W + (code.length - 1) * gap;
  const cells: Cell[] = [];
  let falls = 0;
  let erased = 0;

  [...code].forEach((ch, d) => {
    const glyph = GLYPHS[ch];
    if (!glyph) throw new Error(`Chiffre sans dessin dans pixel-code.ts : « ${ch} »`);
    const x0 = d * (GLYPH_W + gap);

    glyph.forEach((line, r) => [...line].forEach((bit, c) => {
      if (bit !== '1') return;
      if (variant === 'broken' && d === 2 && ((r === 6 && c === 2) || (r === 3 && c === 4) || (r === 1 && c === 0))) {
        cells.push({
          col: x0 + c, row: r,
          className: falls === 1 ? 'px fall hl' : 'px fall',
          vars: { '--k': falls, '--d': 9 - r - (falls % 2) },
        });
        falls++;
        return;
      }
      if (variant === 'erased' && d === 1) {
        cells.push({ col: x0 + c, row: r, className: 'px erase', vars: { '--k': erased++ } });
        return;
      }
      cells.push({ col: x0 + c, row: top + r, className: variant === 'ghost' && d === 1 ? 'px ghost' : 'px' });
    }));
  });

  let cols = codeCols;

  switch (variant) {
    case 'ghost':
      cells.push({ col: GLYPH_W + gap + 2, row: 9, className: 'px hl' });
      break;
    case 'gap':
      for (let d = 0; d < code.length - 1; d++) {
        const g = d * (GLYPH_W + gap) + GLYPH_W;
        cells.push({ col: g, row: 3, className: 'px hl bridge' });
        cells.push({ col: g + gap - 1, row: 3, className: 'px hl bridge' });
      }
      break;
    case 'works':
      cells.push({ col: 0, row: 8, colSpan: codeCols, className: 'stripe' });
      break;
    case 'lock': {
      cols = codeCols + 8;
      const x = codeCols + 2;
      for (const [c, r] of [[1, 1], [2, 0], [3, 0], [4, 1], [1, 2], [4, 2]]) {
        cells.push({ col: x + c, row: r + 1, className: 'px dark' });
      }
      cells.push({ col: x, row: 3, colSpan: 6, rowSpan: 4, className: 'lock-body' });
      cells.push({ col: x + 3, row: 5, className: 'px hl' });
      cells.push({ col: x + 3, row: 6, className: 'px hl' });
      break;
    }
    case 'key': {
      cols = codeCols + 9;
      const x = codeCols + 2;
      const ring = [[0, 2], [1, 2], [2, 2], [0, 3], [2, 3], [0, 4], [1, 4], [2, 4]];
      const shaft = [[3, 3], [4, 3], [5, 3], [6, 3]];
      const teeth = [[5, 4], [6, 4], [6, 5]];
      for (const [c, r] of [...ring, ...shaft, ...teeth]) cells.push({ col: x + c, row: r, className: 'px hl' });
      break;
    }
    case 'overflow': {
      cols = codeCols + 2;
      const x0 = (code.length - 1) * (GLYPH_W + gap);
      const pile = [
        ...[0, 1, 2, 3, 4].map((c) => [c, 2]),
        ...[1, 2, 3].map((c) => [c, 1]),
        [2, 0],
      ];
      pile.forEach(([c, r], k) => cells.push({ col: x0 + c, row: r, className: 'px pile', vars: { '--k': k } }));
      // La case de trop, tombée à côté du chiffre
      cells.push({ col: x0 + GLYPH_W + 1, row: top + GLYPH_H - 1, className: 'px pile hl', vars: { '--k': pile.length + 2 } });
      break;
    }
    case 'timeout': {
      cells.push({ col: 0, row: 8, colSpan: codeCols, className: 'track' });
      const filled = codeCols - 3;
      for (let k = 0; k < filled; k++) cells.push({ col: k, row: 8, className: 'px load', vars: { '--k': k } });
      // La case suivante n'arrive jamais : elle clignote en attendant
      cells.push({ col: filled, row: 8, className: 'px hl wait', vars: { '--k': filled } });
      break;
    }
  }

  return { cols, rows: GLYPH_H + extraRows, cells };
}

/** Style en ligne d'une case : position sur la grille, rang d'apparition (--i) et variables propres. */
export function cellStyle(cell: Cell, index: number): string {
  const col = cell.colSpan ? `${cell.col + 1} / span ${cell.colSpan}` : `${cell.col + 1}`;
  const row = cell.rowSpan ? `${cell.row + 1} / span ${cell.rowSpan}` : `${cell.row + 1}`;
  const vars = Object.entries(cell.vars ?? {}).map(([k, v]) => `;${k}:${v}`).join('');
  return `grid-column:${col};grid-row:${row};--i:${index}${vars}`;
}
