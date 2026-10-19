interface PillarProps {
  label: string;
  detail: string;
}

function Pillar({ label, detail }: PillarProps) {
  return (
    <div className="flex items-center space-x-2.5">
      <span className="w-4 h-4 rounded-full bg-[#C7F236] text-[#151515] flex items-center justify-center text-[10px] font-bold">
        ✓
      </span>
      <span className="text-xs text-[#151515] font-medium">
        <strong className="font-semibold">{label}:</strong> {detail}
      </span>
    </div>
  );
}

export default function VisualManifesto() {
  return (
    <section
      className="lg:col-span-5 xl:col-span-5 bg-[#EAE7DF] rounded-[32px] p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden border border-[#E3DFD5]"
      data-purpose="visual-manifesto-showcase"
    >
      <div className="flex items-center justify-between z-10 mb-4">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#C7F236]"></span>
          <span className="text-[11px] tracking-widest uppercase font-semibold text-[#8C887B]">
            Tactile Editorial Engine
          </span>
        </div>
        <span className="text-xs font-mono text-[#8C887B]">ED-01 // 2025</span>
      </div>

      <div
        className="relative w-full rounded-2xl overflow-hidden aspect-[4/3.8] shadow-sm my-2 bg-[#F5F4EF] group"
        data-purpose="paper-art-showcase"
      >
        <img
          alt="Minimalist modern creative studio still life, architectural paper sculptures layered in soft cream and porcelain tones with electric lime accent"
          className="w-full h-full object-cover object-center transform group-hover:scale-[1.015] transition-transform duration-700 ease-out"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkHuaVbkjSDS9NIxs6ofNpHzuvWjIVP7pWQxiHr_C3HvCvDyn16WVzozDbStDSNGDc5jjsGIT5a_SD5SNW8Fjfkq4TnMeHTd_rfDTcCk2uqfOIslD45Jwk3t4ixoFsZo4_Hf34obZVqVW8dtSq3sLzaeExkd4k-XTbaUYb7eIO3Xja1ivSlcso03hO8NL_R0vxNBxKDFO10pQNpEc52lrzHOY0sQ3SE8cZub_x-kadjQDHJHzTgFxE"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-3 left-3 bg-[#FAF9F4]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/60 shadow-subtle flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7F236]"></span>
          <span className="text-[11px] font-medium tracking-tight text-[#151515]">
            The Paper Atelier · Architectural Thought Model
          </span>
        </div>
      </div>

      <div
        className="mt-6 z-10 bg-[#FAF9F4]/90 backdrop-blur-md border border-white/80 rounded-2xl p-6 shadow-card"
        data-purpose="quote-manifesto-card"
      >
        <blockquote className="font-editorial-quote text-2xl lg:text-[26px] leading-snug text-[#151515] font-normal">
          “Turn one honest conviction into a week of authentic stories.”
        </blockquote>
        <p className="mt-2.5 text-xs text-[#8C887B] leading-relaxed font-sans">
          Built for founders, writers, and builders who refuse generic AI gibberish and demand
          distinct point-of-view craft.
        </p>

        <div
          className="mt-5 space-y-2 pt-4 border-t border-[#E3DFD5]/80"
          data-purpose="system-pillars-list"
        >
          <Pillar label="Voice DNA" detail="Learns your cadence, never replaces it" />
          <Pillar
            label="One Seed, Multi-Platform"
            detail="LinkedIn, X, Instagram, TikTok"
          />
          <Pillar
            label="Editorial Director"
            detail="Specific, actionable story coaching"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-[11px] text-[#8C887B] pt-2">
        <span>Conty Creative Systems Inc.</span>
        <span className="flex items-center space-x-1">
          <span className="inline-block w-1.5 h-1.5 bg-[#C7F236] rounded-full"></span>
          <span>Private Studio Enclave</span>
        </span>
      </div>
    </section>
  );
}
