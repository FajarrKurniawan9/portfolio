"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "Dossier", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Architectures", href: "#projects" },
  { label: "Track Record", href: "#experience" },
  { label: "VCS", href: "#open-source" },
  { label: "Dispatch", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/[0.08] bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 md:px-12 lg:px-16">
        {/* Monospace System Header */}
        <a href="#hero" className="flex items-center gap-2.5 font-mono text-xs">
          <span className="size-2 rounded-full bg-emerald-500" />
          <span className="font-semibold text-white tracking-tight">
            FAJAR_KURNIAWAN
          </span>
          <span className="text-zinc-600">//</span>
          <span className="hidden sm:inline text-zinc-400">BACKEND_DEV</span>
        </a>

        {/* Desktop Links with Geist clean hover */}
        <ul className="hidden items-center gap-6 font-mono text-xs text-zinc-400 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            nativeButton={false}
            className="h-7 rounded-none border border-white bg-white px-3 font-sans text-xs font-medium text-black transition-colors hover:bg-zinc-200"
            render={<a href="#contact" />}
          >
            Initiate Contact
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-zinc-300 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-t border-white/[0.08] bg-black px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3 font-mono text-xs text-zinc-400">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                nativeButton={false}
                className="w-full rounded-none border border-white bg-white font-sans text-xs font-medium text-black"
                render={<a href="#contact" onClick={() => setIsOpen(false)} />}
              >
                Initiate Contact
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
