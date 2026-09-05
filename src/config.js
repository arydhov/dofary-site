const DEFAULT_BACKEND_URL = 'https://script.google.com/macros/s/AKfycbyXOa3601oTsuyN5CrJMlLhTk5hpJft7qCYY93pebFe0N_smPZwyswT2CZB74LNmH397g/exec';

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || DEFAULT_BACKEND_URL;

// NOTE: This PIN is client-side by design in the reconstructed legacy flow.
// It is not a security boundary. Move authentication server-side before using
// this admin UI for sensitive data.
export const ADMIN_PIN = '100794';
