"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "Dossier", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Track Record", href: "#experience" },
  { label: "Open Source", href: "#open-source" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8">
        <a href="#hero" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground">
          <span className="size-2 rounded-full bg-primary" />
          Fajar Kurniawan
        </a>

        {/* Desktop Links - Geist UI / LocalCan clean sans style */}
        <ul className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
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
            className="h-8 rounded-md bg-primary px-4 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
            render={<a href="#contact" />}
          >
            Initiate Contact
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                size="sm"
                nativeButton={false}
                className="w-full h-9 rounded-md bg-primary text-xs font-semibold text-primary-foreground"
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
