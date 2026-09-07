// Semillas de desarrollo: espejo JSON de la base de datos (contratos).
// La forma de cada fila es la que devolverá la API real (ver docs/openapi.yml).
// articles es pesado (miles de filas): se sirve en runtime desde /data/articles.json
// y NO se importa aquí para no inflar el bundle.

export const ARTICLES_SEED_URL = '/data/articles.json'

export { default as users } from './users.json'
export { default as universes } from './universes.json'
export { default as glossary } from './glossary.json'
export { default as categories } from './categories.json'
export { default as imagesWithText } from './images-with-text.json'
export { default as erratas } from './erratas.json'
export { default as recruitment } from './recruitment.json'
export { default as monthlyChanges } from './monthly-changes.json'
export { default as notifications } from './notifications.json'