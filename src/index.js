// calcule la moyenne d'une liste de notes sur 20, arrondie au centième
export function moyenne(notes) {
  if (!Array.isArray(notes) || notes.length === 0) {
    throw new Error("il faut au moins une note");
  }
  for (const note of notes) {
    if (typeof note !== "number" || note < 0 || note > 20) {
      throw new Error(`note invalide : ${note}`);
    }
  }
  const somme = notes.reduce((total, note) => total + note, 0);
  return Math.round((somme / notes.length) * 100) / 100;
}

// donne la mention qui correspond à une moyenne
export function mention(moyenne) {
  if (moyenne >= 16) return "très bien";
  if (moyenne >= 14) return "bien";
  if (moyenne >= 12) return "assez bien";
  if (moyenne >= 10) return "passable";
  return "ajourné";
}
