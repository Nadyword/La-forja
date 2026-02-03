"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

const contactInfo = [
  { icon: Phone, text: "+56 9 2850 4102", label: "Teléfono" },
  { icon: Mail, text: "contacto@laforjaspa.cl", label: "Email" },
  { icon: MapPin, text: "Santiago, Chile", label: "Ubicación" },
]

export function CTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/happy-residents.jpg"
                alt="Residentes felices de condominio"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-semibold">Comunidades satisfechas</p>
                <p className="text-sm text-white/80">Más de 50 condominios confían en nosotros</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg animate-bounce-slow hidden md:flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              <div>
                <p className="font-semibold text-sm">Agenda gratis</p>
                <p className="text-xs">Sin compromiso</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight text-balance">
              Fortalezca la gestión de su comunidad
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Agende una reunión con nuestro equipo y descubra cómo La Forja SpA puede transformar la
              administración de su condominio. Primera consulta sin costo.
            </p>
            
            <div className="mt-8 space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 font-semibold group"
                onClick={() => {
                  const phoneNumber = "56928504102";
                  const message =
                    "Hola, me interesa agendar una reunión para conocer más sobre la administración de condominios con La Forja SpA.";
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Agendar reunión
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary/30 hover:bg-primary/10 bg-transparent"
                onClick={() => {
                  const phoneNumber = "56928504102";
                  const message = "Hola, quiero comunicarme con La Forja SpA.";
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
              >
                <Phone className="mr-2 w-5 h-5" />
                Llamar ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
