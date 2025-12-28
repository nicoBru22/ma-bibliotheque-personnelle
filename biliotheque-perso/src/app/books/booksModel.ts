
export interface Book {
    id?: string, // le ? car quand l objet est en cours de création, il n'a pas d'Id, ce sera à la création réelle qu'il en aura un.
    titre: string,
    auteur: string,
    edition: string,
    anneeEdition: number
};

export const BOOK_RULES = {
    PATTERN: /^[a-zA-Z0-9àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ](.*[a-zA-Z0-9àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ])?$/,
    MAX_TITRE: 30,
    MIN_TITRE: 2,
    MAX_AUTEUR: 20,
    MIN_AUTEUR: 2,
    MAX_EDITION: 30,
    MIN_EDITION: 2,
    MIN_ANNEE: 1450,
    MAX_ANNEE: new Date().getFullYear()
}