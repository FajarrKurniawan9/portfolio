"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-16">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-tight">
          <span className="font-sans text-base font-bold text-foreground">
            Fajar Kurniawan
          </span>
          <span className="font-mono text-[10px] text-primary">
            Backend Engineer
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Button
          size="sm"
          nativeButton={false}
          className="hidden font-sans text-xs font-semibold md:inline-flex"
          render={<a href="#contact" />}
        >
          Hire me →
        </Button>

        {/* Hamburger Button — mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1 text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                nativeButton={false}
                className="mt-2 w-full font-sans text-xs font-semibold"
                render={<a href="#contact" onClick={() => setIsOpen(false)} />}
              >
                Hire me →
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
