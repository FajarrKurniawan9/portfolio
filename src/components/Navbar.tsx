'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-sm border-b border-green-900/30">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Nama */}
        <span className="text-green-700 font-bold text-xl">
          Rajaf Nawainruk
        </span>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-sm text-mist-300">
          <li><a href="#about" className="hover:text-green-700 transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-green-700 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-green-700 transition-colors">Projects</a></li>
          <li><a href="#experience" className="hover:text-green-700 transition-colors">Experience</a></li>
          <li><a href="#contact" className="hover:text-green-700 transition-colors">Contact</a></li>
        </ul>

      </div>
    </nav>
  )
}