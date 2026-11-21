import { createClient } from '@supabase/supabase-js';
import { supabaseConfig } from './supabase-config.js';

function isPublicSupabaseKey(key) {
  if (key.startsWith('sb_publishable_')) return true;
  try {
    const encodedPayload = key.split('.')[1];
    if (!encodedPayload) return false;
    const payload = JSON.parse(atob(encodedPayload.replace(/-/g, '+').replace(/_/g, '/')));
    return payload.role === 'anon';
  } catch {
    return false;
  }
}

export const isSupabaseConfigured = (
  /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(supabaseConfig.url)
  && isPublicSupabaseKey(supabaseConfig.publishableKey)
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseConfig.url, supabaseConfig.publishableKey)
  : null;
