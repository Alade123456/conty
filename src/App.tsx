import { useState } from 'react';
import CreateStudioPage from '@/pages/CreateStudioPage';
import SignInPage from '@/pages/SignInPage';

export default function App() {
  const [view, setView] = useState<'signup' | 'signin'>('signup');

  return view === 'signup' ? (
    <CreateStudioPage onNavigateToSignIn={() => setView('signin')} />
  ) : (
    <SignInPage onNavigateToSignUp={() => setView('signup')} />
  );
}
