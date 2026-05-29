import { createClient } from '@supabase/supabase-js';

// Public Supabase client for the email-change confirmation bridge page.
// The anon key is public by design (RLS protects all data); it is the same
// key already shipped inside the Voiceit macOS binary. Both values are baked
// in at build time via NEXT_PUBLIC_* env vars (set locally in .env.local and
// in the Vercel project settings).
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kgmiusazbjjxdeyaqtss.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    // The bridge page is a one-shot verifier; it must not try to persist or
    // refresh a session in the browser (no login UI here).
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
