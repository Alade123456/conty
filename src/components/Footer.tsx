export default function Footer() {
  return (
    <footer
      className="w-full border-t border-[#E3DFD5]/60 bg-[#FAF9F4] py-3 px-6 text-xs text-[#8C887B] flex flex-col sm:flex-row items-center justify-between gap-2"
      data-purpose="app-footer"
    >
      <div className="flex items-center space-x-4">
        <span>Conty Studio OS for Desktop</span>
        <span className="text-[#E3DFD5]">•</span>
        <a className="hover:text-[#151515]" href="#">
          Editorial Manifesto
        </a>
        <a className="hover:text-[#151515]" href="#">
          Style Guide
        </a>
        <a className="hover:text-[#151515]" href="#">
          Security
        </a>
      </div>
      <div className="flex items-center space-x-3 text-[11px]">
        <span className="inline-block w-2 h-2 rounded-full bg-[#C7F236]"></span>
        <span>All Systems Operational</span>
        <span className="text-[#E3DFD5]">|</span>
        <span>© 2025 Conty Studio Inc.</span>
      </div>
    </footer>
  );
}
