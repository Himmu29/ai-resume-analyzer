import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter';

export const meta = () => ([
  { title: 'Log In | EnhancResume – AI ATS Resume Checker' },
  { name: 'description', content: 'Log in to your EnhancResume account to access your AI-powered ATS resume checker, resume scores, and improvement feedback.' },
  { name: 'robots', content: 'noindex, nofollow' },
]);

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();

  const next = new URLSearchParams(location.search).get('next') || '/';

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next, { replace: true });
    }
  }, [auth.isAuthenticated, next, navigate]);

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Log In to Continue Your Job Journey</h2>
          </div>

          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse">
                <p>Signing you in...</p>
              </button>
            ) : auth.isAuthenticated ? (
              <button className="auth-button" onClick={auth.signOut}>
                <p>Log Out</p>
              </button>
            ) : (
              <button className="auth-button" onClick={auth.signIn}>
                <p>Log In</p>
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;
