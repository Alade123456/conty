import { useState } from 'react';

interface SignInPageProps {
  onNavigateToSignUp: () => void;
}

export default function SignInPage({ onNavigateToSignUp }: SignInPageProps) {
  const [email, setEmail] = useState('elena@studio.com');
  const [password, setPassword] = useState('secretMasterworkKey2025');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Enter a valid email address');
      return;
    }
    setEmailError(null);
    // Mock sign-in — no real authentication in this build.
  };

  return (
    <div className="min-h-screen bg-[#F5F4EF] text-[#1A1A1A] flex flex-col font-sans antialiased selection:bg-[#C7F236] selection:text-black">
      {/* Top navigation */}
      <header className="w-full px-6 lg:px-10 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-[#111111] flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#C7F236] border border-[#F5F4EF]"></span>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#111111]">Conty</span>
          <span className="hidden md:block text-[#D6D2C4]">|</span>
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE9E0] text-[11px] font-medium text-[#3A3A3A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F236]"></span>
            Editorial Studio v1.2
          </span>
        </div>
        <div className="flex items-center space-x-6 text-xs">
          <span className="text-[#6B6B60] hidden lg:inline">For writers, creators &amp; studio founders</span>
          <a className="font-semibold text-[#111111] hover:underline underline-offset-4" href="#">
            Studio Manifesto
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 lg:px-10 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: sign-in form column */}
        <section className="lg:col-span-6 flex flex-col justify-center min-h-[540px]">
          <div className="max-w-[520px] w-full">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#E9F5C8] text-[#2A2A20] text-[10px] font-bold tracking-[0.12em] uppercase">
                Creator Workspace
              </span>
              <span className="text-[#B4B0A2]">/</span>
              <span className="font-mono text-xs text-[#8A867A] lowercase">authentication</span>
            </div>

            <h1 className="font-serif text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-[#111111] mb-5">
              Welcome back.
            </h1>
            <p className="text-base lg:text-lg text-[#5A574D] leading-relaxed max-w-md mb-8">
              Your next great post starts with one honest thought. Step back into your focus
              sanctuary.
            </p>

            <button
              className="w-full h-12 bg-white border border-[#E3E0D4] rounded-lg flex items-center justify-center space-x-2.5 text-sm font-medium text-[#1A1A1A] shadow-sm hover:bg-[#FBFAF6] transition-colors duration-200 mb-7 cursor-pointer"
              type="button"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  fill="#EA4335"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="relative flex items-center justify-end mb-7" data-purpose="form-divider">
              <div className="border-t border-[#E3E0D4] w-full absolute left-0"></div>
              <span className="relative bg-[#F5F4EF] pl-4 text-[11px] font-mono text-[#8A867A] uppercase tracking-wider text-right leading-tight">
                or continue
                <br />
                with email
              </span>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label
                  className="block text-[11px] font-bold text-[#1A1A1A] uppercase tracking-[0.08em] mb-2"
                  htmlFor="email"
                >
                  Work Email
                </label>
                <div className="relative">
                  <input
                    aria-invalid={Boolean(emailError)}
                    className={`w-full h-12 px-4 pr-11 rounded-lg bg-white border text-sm text-[#1A1A1A] placeholder-[#B4B0A2] focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent transition-all shadow-sm ${
                      emailError ? 'border-red-400' : 'border-[#E3E0D4]'
                    }`}
                    id="email"
                    placeholder="elena@studio.com"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(null);
                    }}
                  />
                  <svg
                    className="w-4 h-4 text-[#8A867A] absolute right-4 top-1/2 -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                {emailError && (
                  <p className="mt-1.5 text-xs text-red-500">{emailError}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-[11px] font-bold text-[#1A1A1A] uppercase tracking-[0.08em] mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="w-full h-12 px-4 pr-11 rounded-lg bg-white border border-[#E3E0D4] text-sm text-[#1A1A1A] placeholder-[#B4B0A2] focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent transition-all shadow-sm"
                    id="password"
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A867A] hover:text-[#1A1A1A] focus:outline-none"
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input
                    checked={rememberMe}
                    className="sr-only peer"
                    type="checkbox"
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="w-[18px] h-[18px] rounded-md border border-[#D6D2C4] bg-white peer-checked:bg-[#111111] peer-checked:border-[#111111] flex items-center justify-center transition-colors">
                    {rememberMe && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      </svg>
                    )}
                  </span>
                  <span className="text-xs text-[#5A574D]">Remember me for 30 days</span>
                </label>
                <a
                  className="text-xs text-[#5A574D] hover:text-[#111111] hover:underline underline-offset-4"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>

              <button
                className="w-full h-[52px] bg-[#111111] hover:bg-[#232323] text-white rounded-full flex items-center justify-center space-x-2.5 text-sm font-medium transition-colors duration-200 group cursor-pointer shadow-md"
                type="submit"
              >
                <span>Sign in to Studio</span>
                <span className="w-6 h-6 rounded-full bg-[#3A3A3A] group-hover:bg-[#C7F236] group-hover:text-[#111111] flex items-center justify-center transition-colors duration-200">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-[#E3E0D4] flex items-center justify-between">
              <p className="text-xs text-[#5A574D]">
                New to Conty?{' '}
                <button
                  className="font-semibold text-[#111111] hover:underline underline-offset-4"
                  type="button"
                  onClick={onNavigateToSignUp}
                >
                  Create your studio account
                </button>
              </p>
              <span className="font-mono text-[11px] text-[#8A867A]">
                Fast onboarding (under 2 min)
              </span>
            </div>
          </div>
        </section>

        {/* Right: visual showcase card */}
        <section className="lg:col-span-6 flex items-start justify-center">
          <div className="w-full max-w-[440px] bg-[#EBE9E0] rounded-[28px] p-4 shadow-[0_20px_50px_-20px_rgba(21,21,21,0.15)]">
            <div className="relative rounded-[22px] overflow-hidden aspect-[4/4.2] bg-[#D8D4C6]">
              <img
                alt="Overhead view of an oak writing desk with cream envelopes, an open journal, and a ceramic vase of dried flowers"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                src="https://images.pexels.com/photos/5706260/pexels-photo-5706260.jpeg?auto=compress&cs=tinysrgb&w=1200"
              />
              {/* Status chip */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#C7F236]"></span>
                <span className="text-xs font-semibold text-[#1A1A1A]">Story Arc Engine Ready</span>
              </div>

              {/* Quote card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F4]/95 backdrop-blur rounded-2xl p-5 shadow-lg">
                <p className="font-serif text-lg lg:text-xl leading-snug text-[#1A1A1A]">
                  “From messy thought to publish-ready story in minutes.”
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-8 h-8 rounded-full bg-[#111111] text-[#FAF9F4] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      EV
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#1A1A1A] truncate">Elena Vance</p>
                      <p className="text-[10px] text-[#8A867A] truncate">Substack Creator &amp; Essayist</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-[#E9F5C8] text-[10px] font-semibold text-[#2A2A20]">
                      94% Resonance
                    </span>
                    <p className="text-[10px] text-[#8A867A] mt-1">14.2k readers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-2 pt-3 pb-1 font-mono text-[10px] tracking-wider text-[#8A867A] uppercase">
              <span>FIG 01. Narrative Workflow</span>
              <span>Porcelain &amp; Oak Desk</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#E3E0D4] px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]">
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
            />
          </svg>
          <span className="font-semibold text-[#1A1A1A]">Encrypted &amp; Private</span>
          <span className="text-[#8A867A]">Content never trains public models</span>
        </div>
        <div className="flex items-center gap-6">
          <a className="text-[#5A574D] hover:text-[#1A1A1A]" href="#">
            Terms of Service
          </a>
          <a className="text-[#5A574D] hover:text-[#1A1A1A]" href="#">
            Privacy Policy
          </a>
          <span className="font-mono text-[#8A867A]">
            SYSTEM: <span className="text-[#111111]">99.98%</span> UP
          </span>
        </div>
      </footer>
    </div>
  );
}
