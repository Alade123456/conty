import { useState } from 'react';

interface RoleOption {
  id: string;
  value: string;
  label: string;
}

const ROLES: RoleOption[] = [
  { id: 'role-founder', value: 'founder', label: 'Founder / Exec' },
  { id: 'role-solo', value: 'solo', label: 'Solo Creator' },
  { id: 'role-lead', value: 'lead', label: 'Marketing Lead' },
  { id: 'role-writer', value: 'writer', label: 'Writer' },
];

interface RegistrationFormProps {
  onNavigateToSignIn: () => void;
}

export default function RegistrationForm({ onNavigateToSignIn }: RegistrationFormProps) {
  const [fullName, setFullName] = useState('Elena Vance');
  const [workEmail, setWorkEmail] = useState('elena@company.com');
  const [password, setPassword] = useState('ContyStudio24');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('founder');

  const passwordStrength =
    password.length >= 12
      ? 'Strong · 12+ characters'
      : password.length >= 8
        ? 'Good · 8+ characters'
        : 'Weak · under 8 characters';

  return (
    <section
      className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center px-2 lg:px-8 py-2"
      data-purpose="registration-form-area"
    >
      <div className="max-w-xl mx-auto w-full">
        <div className="flex items-center justify-between mb-4" data-purpose="form-header-badge">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#151515] text-[#FAF9F4] flex items-center justify-center font-bold text-sm shadow-subtle">
              C
            </div>
            <div>
              <span className="font-bold text-base tracking-tight text-[#151515]">Conty</span>
              <span className="text-[11px] text-[#8C887B] block -mt-1 font-mono uppercase tracking-wider">
                Studio Workspace
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EAE7DF] text-[#151515] border border-[#E3DFD5]">
            Studio Registration
          </span>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl lg:text-[34px] font-semibold tracking-tight text-[#151515]">
            Create your Conty studio.
          </h1>
          <p className="text-sm text-[#8C887B] mt-1.5 font-sans leading-relaxed">
            Begin shaping your raw convictions into high-impact native content.
          </p>
        </div>

        <button
          className="w-full h-12 bg-white hover:bg-[#F5F4EF] text-[#151515] border border-[#E3DFD5] rounded-full flex items-center justify-center space-x-3 transition-colors duration-200 shadow-subtle group mb-5 cursor-pointer"
          data-purpose="google-oauth-button"
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
          <span className="text-sm font-medium tracking-tight group-hover:text-black">
            Sign up with Google
          </span>
        </button>

        <div
          className="relative flex items-center justify-center my-5"
          data-purpose="form-divider"
        >
          <div className="border-t border-[#E3DFD5] w-full"></div>
          <span className="bg-[#FAF9F4] px-4 text-xs font-mono text-[#8C887B] uppercase tracking-wider relative">
            or register with your email
          </span>
        </div>

        <form
          className="space-y-4"
          data-purpose="registration-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div data-purpose="input-group-name">
            <label
              className="block text-xs font-semibold text-[#151515] uppercase tracking-wider mb-1.5"
              htmlFor="full-name"
            >
              Full Name
            </label>
            <input
              className="w-full h-11 px-4 rounded-xl bg-white border border-[#E3DFD5] text-[#151515] placeholder-[#8C887B]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#151515] focus:border-transparent transition-all shadow-sm"
              id="full-name"
              name="fullName"
              placeholder="Elena Vance"
              required
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div data-purpose="input-group-email">
            <label
              className="block text-xs font-semibold text-[#151515] uppercase tracking-wider mb-1.5"
              htmlFor="work-email"
            >
              Work Email
            </label>
            <input
              className="w-full h-11 px-4 rounded-xl bg-white border border-[#E3DFD5] text-[#151515] placeholder-[#8C887B]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#151515] focus:border-transparent transition-all shadow-sm"
              id="work-email"
              name="workEmail"
              placeholder="elena@company.com"
              required
              type="email"
              value={workEmail}
              onChange={(e) => setWorkEmail(e.target.value)}
            />
          </div>

          <div data-purpose="input-group-password">
            <div className="flex items-center justify-between mb-1.5">
              <label
                className="block text-xs font-semibold text-[#151515] uppercase tracking-wider"
                htmlFor="password"
              >
                Password
              </label>
              <div
                className="inline-flex items-center space-x-1.5 bg-[#EAE7DF] px-2.5 py-0.5 rounded-full border border-[#E3DFD5]"
                data-purpose="password-strength-badge"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7F236]"></span>
                <span className="text-[10px] font-semibold text-[#151515] tracking-tight">
                  {passwordStrength}
                </span>
              </div>
            </div>
            <div className="relative">
              <input
                className="w-full h-11 px-4 pr-10 rounded-xl bg-white border border-[#E3DFD5] text-[#151515] text-sm focus:outline-none focus:ring-2 focus:ring-[#151515] focus:border-transparent transition-all shadow-sm font-mono"
                id="password"
                name="password"
                required
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                aria-label="Toggle password visibility"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C887B] hover:text-[#151515] focus:outline-none"
                type="button"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    />
                    <path
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="pt-1" data-purpose="role-selection-group">
            <label className="block text-xs font-semibold text-[#151515] uppercase tracking-wider mb-2">
              What best describes your primary craft?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {ROLES.map((role) => (
                <div className="role-pill" key={role.id}>
                  <input
                    checked={selectedRole === role.value}
                    className="sr-only"
                    id={role.id}
                    name="creator_role"
                    type="radio"
                    value={role.value}
                    onChange={() => setSelectedRole(role.value)}
                  />
                  <label
                    className="flex items-center justify-center space-x-1.5 h-10 px-3 rounded-full border border-[#E3DFD5] bg-white text-xs font-medium text-[#151515] cursor-pointer hover:border-[#151515] transition-all text-center"
                    htmlFor={role.id}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-transparent badge-dot"></span>
                    <span>{role.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[11px] leading-relaxed text-[#8C887B] pt-1" data-purpose="terms-notice">
            By creating an account, you agree to Conty’s{' '}
            <a className="underline text-[#151515] hover:text-[#C7F236]" href="#">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className="underline text-[#151515] hover:text-[#C7F236]" href="#">
              Privacy Policy
            </a>
            . We never post without your explicit approval.
          </p>

          <button
            className="w-full h-12 bg-[#151515] hover:bg-[#232323] text-white font-medium rounded-full flex items-center justify-center space-x-2 transition-all duration-200 group cursor-pointer shadow-md mt-4 relative overflow-hidden"
            data-purpose="submit-account-creation"
            type="submit"
          >
            <span className="text-sm tracking-wide">Create my account</span>
            <span className="w-6 h-6 rounded-full bg-[#C7F236] text-[#151515] flex items-center justify-center transition-transform group-hover:translate-x-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
              </svg>
            </span>
          </button>
        </form>

        <div className="mt-6 text-center" data-purpose="signin-redirect-link">
          <span className="text-xs text-[#8C887B]">Already have a studio?</span>
          <button
            className="ml-1 text-xs font-semibold text-[#151515] hover:underline underline-offset-4 decoration-2 decoration-[#C7F236] cursor-pointer"
            type="button"
            onClick={onNavigateToSignIn}
          >
            Sign in
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E3DFD5]/70 flex items-center justify-between text-[11px] text-[#8C887B]">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#151515]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            End-to-end editorial vault encryption
          </span>
          <span className="font-mono">14-day free studio trial</span>
        </div>
      </div>
    </section>
  );
}
