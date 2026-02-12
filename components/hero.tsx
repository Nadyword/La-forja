"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Shield, Scale } from "lucide-react"
import Image from "next/image"
import { MeetingFormDialog } from "@/components/meeting-form-dialog"

export function Hero() {
  const [meetingDialogOpen, setMeetingDialogOpen] = useState(false)

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-building.jpg"
        alt="Edificio residencial moderno"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-primary-foreground">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-balance animate-slide-up">
          Administradora La Forja SpA.
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-balance animate-slide-up">
          La confianza se construye, nosotras la forjamos.
        </h2>

        <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty animate-slide-up animation-delay-200">
          Transformamos la gestión de su comunidad en un proceso ordenado, claro y profesional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-slide-up animation-delay-400">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 font-semibold group"
            onClick={() => setMeetingDialogOpen(true)}
          >
            Agendar una reunión
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <MeetingFormDialog open={meetingDialogOpen} onOpenChange={setMeetingDialogOpen} />

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in animation-delay-600">
          <div className="flex flex-col items-center">
            <Building2 className="w-8 h-8 text-accent mb-2" />
            <span className="text-2xl font-bold">100%</span>
            <span className="text-sm text-primary-foreground/70">Efectivos</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-8 h-8 text-accent mb-2" />
            <span className="text-2xl font-bold">100%</span>
            <span className="text-sm text-primary-foreground/70">Transparencia</span>
          </div>
          <div className="flex flex-col items-center">
            <Scale className="w-8 h-8 text-accent mb-2" />
            <span className="text-2xl font-bold">Ley</span>
            <span className="text-sm text-primary-foreground/70">21.442</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
