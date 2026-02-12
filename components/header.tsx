"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const navLinks = [
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "#transparencia", label: "Transparencia" },
  { href: "#servicios", label: "Servicios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#honorarios", label: "Honorarios" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-primary-foreground font-semibold text-xl tracking-tight m-0">
          <Image
            src="/images/Logo/Logo-blanco-sinFondo.png"
            alt="La Forja SpA"
            width={80}
            height={80}
            className="!m-0"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contacto">
          <Button
            size="sm"
            className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 font-semibold"
          >
            Contacto
          </Button>
        </a>

        <button
          type="button"
          className="md:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-6 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full mt-2 font-semibold"
            >
              Contacto
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
