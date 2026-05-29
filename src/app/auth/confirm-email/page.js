'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

// Reads token_hash + type from either the query string (?token_hash=...) or the
// URL fragment (#token_hash=...) — Supabase puts the token in different places
// depending on the email-template variable used.
function readParams() {
  if (typeof window === 'undefined') return {};
  const search = new URLSearchParams(window.location.search);
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
  const get = (k) => search.get(k) || hash.get(k) || '';
  return { token_hash: get('token_hash'), type: get('type') || 'email_change' };
}

export default function ConfirmEmailPage() {
  const [status, setStatus] = useState('verifying'); // verifying | success | error
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { token_hash, type } = readParams();
      if (!token_hash) {
        if (!cancelled) {
          setStatus('error');
          setErrorMsg('This link is missing its confirmation token. Please request a new one from the app.');
        }
        return;
      }
      try {
        const { error } = await supabase.auth.verifyOtp({
          type: type === 'email_change' ? 'email_change' : 'email',
          token_hash,
        });
        if (cancelled) return;
        if (error) {
          setStatus('error');
          setErrorMsg(error.message || 'The link could not be confirmed. It may have expired.');
        } else {
          setStatus('success');
        }
      } catch (e) {
        if (cancelled) return;
        setStatus('error');
        setErrorMsg(e instanceof Error ? e.message : 'Something went wrong while confirming your email.');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-primary flex items-center justify-center px-6">
      <main className="w-full max-w-md text-center">
        <div className="mb-10 text-2xl font-heading font-bold tracking-tight text-primary">
          Voiceit<span className="text-accent">.</span>
        </div>

        {status === 'verifying' && (
          <div className="font-sans">
            <Loader2 size={40} className="mx-auto mb-6 animate-spin text-primary/40" aria-hidden="true" />
            <h1 className="font-heading text-2xl font-bold mb-3">Confirming your email…</h1>
            <p className="text-primary/60 leading-relaxed">One moment while we verify your new address.</p>
          </div>
        )}

        {status === 'success' && (
          <div className="font-sans">
            <CheckCircle2 size={48} className="mx-auto mb-6 text-accent" aria-hidden="true" />
            <h1 className="font-heading text-2xl font-bold mb-3">Email confirmed</h1>
            <p className="text-primary/60 leading-relaxed mb-8">
              Your Voiceit account email has been updated. You can close this tab and return to the app — your
              account refreshes automatically.
            </p>
            <a
              href="voiceit://auth-callback?type=email_change"
              className="inline-flex items-center justify-center rounded-lg bg-accent text-background font-semibold px-6 py-3 transition-opacity hover:opacity-90"
            >
              Open Voiceit
            </a>
          </div>
        )}

        {status === 'error' && (
          <div className="font-sans">
            <XCircle size={48} className="mx-auto mb-6 text-primary/40" aria-hidden="true" />
            <h1 className="font-heading text-2xl font-bold mb-3">Couldn&apos;t confirm this link</h1>
            <p className="text-primary/60 leading-relaxed mb-2">{errorMsg}</p>
            <p className="text-primary/40 text-sm leading-relaxed">
              Open Voiceit, go to Account → Change email, and request a fresh confirmation link.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
