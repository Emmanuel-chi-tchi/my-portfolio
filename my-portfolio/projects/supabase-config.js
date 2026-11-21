// Vite exposes only VITE_ variables to browser code. Use the project's public
// publishable key here; never add a service_role key to this frontend.
export const supabaseConfig = Object.freeze({
  url: import.meta.env.VITE_SUPABASE_URL || '',
  publishableKey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || ''
});
