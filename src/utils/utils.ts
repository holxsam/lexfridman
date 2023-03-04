export const fuzzy = (term: string, filter: string) =>
  term.toLowerCase().includes(filter.toLowerCase());

export const clamp = (num: number, min: number, max: number) =>
  Math.max(min, Math.min(num, max));

export const zeroPad = (num: number, zeroes: number) =>
  String(num).padStart(zeroes, "0");
