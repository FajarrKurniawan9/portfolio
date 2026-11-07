"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Open Source", href: "#open-source" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        <a href="#hero" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground">
          <span className="size-1.5 rounded-full bg-accent" />
          Fajar Kurniawan
        </a>

        {/* Desktop Links */}
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
            Contact Me
          </Button>
        </div>

        {/* Mobile menu trigger with 44px min touch target */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex size-11 items-center justify-center rounded-md border border-border/80 bg-surface/60 text-foreground transition-colors hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-accent md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-t border-border bg-background/95 px-4 py-4 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-1 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-[44px] items-center rounded-md px-3 text-base text-muted-foreground transition-colors hover:bg-surface hover:text-foreground active:bg-surface-raised"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <Button
                size="sm"
                nativeButton={false}
                className="w-full h-11 rounded-md bg-primary text-sm font-semibold text-primary-foreground"
                render={<a href="#contact" onClick={() => setIsOpen(false)} />}
              >
                Contact Me
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
