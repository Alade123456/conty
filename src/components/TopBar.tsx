export default function TopBar() {
  return (
    <header
      className="w-full bg-[#FAF9F4]/80 backdrop-blur-md border-b border-[#E3DFD5]/60 px-6 py-2.5 flex items-center justify-between text-xs text-[#8C887B] select-none"
      data-purpose="app-top-nav"
    >
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <span className="w-5 h-5 rounded-md bg-[#151515] text-[#FAF9F4] flex items-center justify-center font-bold text-[10px] tracking-tight">
            C
          </span>
          <span className="font-medium text-[#151515] tracking-wide">Conty Studio</span>
        </div>
        <span className="text-[#E3DFD5]">/</span>
        <span className="text-[#8C887B]">v2.4 Desktop Release</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EAE7DF] text-[11px] font-medium text-[#151515]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7F236]"></span>
          Creator Cloud Connected
        </span>
        <div className="text-[11px] text-[#8C887B] flex items-center space-x-1">
          <span>Press</span>
          <kbd className="px-1.5 py-0.5 rounded border border-[#E3DFD5] bg-[#F5F4EF] text-[10px] font-mono text-[#151515]">
            ⌘K
          </kbd>
          <span>for Studio Guide</span>
        </div>
      </div>
    </header>
  );
}
