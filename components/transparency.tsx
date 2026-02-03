"use client"

import { FileText, Database, ClipboardCheck, GitBranch, ArrowRight, Lock, Eye, BarChart3 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const items = [
  {
    icon: FileText,
    title: "Reportes claros",
    description: "Informes mensuales detallados y comprensibles para el comité y copropietarios.",
  },
  {
    icon: Database,
    title: "Información digitalizada",
    description: "Acceso digital a toda la documentación del condominio en cualquier momento.",
  },
  {
    icon: ClipboardCheck,
    title: "Registros auditables",
    description: "Cada movimiento financiero queda documentado y disponible para revisión.",
  },
  {
    icon: GitBranch,
    title: "Trazabilidad financiera",
    description: "Seguimiento completo del origen y destino de cada peso administrado.",
  },
]

const highlights = [
  { icon: Lock, text: "Datos seguros y encriptados" },
  { icon: Eye, text: "Acceso 24/7 a reportes" },
  { icon: BarChart3, text: "Dashboards en tiempo real" },
]

export function Transparency() {
  return (
    <section id="transparencia" className="py-24 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              Nuestro Sello
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Transparencia Financiera Total
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              La confianza se construye con información clara. Entregamos herramientas y reportes que
              permiten a su comunidad tener control total sobre sus finanzas.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((highlight) => (
                <div key={highlight.text} className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full">
                  <highlight.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{highlight.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 space-y-6">
              {items.map((item, index) => (
                <div 
                  key={item.title} 
                  className="flex gap-5 items-start group cursor-pointer p-4 rounded-xl hover:bg-secondary/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-3xl font-light text-secondary">0{index + 1}</span>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 group">
              Ver demo de reportes
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/financial-report.jpg"
                alt="Dashboard financiero y reportes"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Estado</span>
                  <p className="font-semibold text-foreground text-sm">Cuentas al día</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float animation-delay-1000 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Morosidad</span>
                  <p className="font-semibold text-foreground text-sm">Solo 2.3%</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute bottom-1/4 -left-8 w-24 h-24 bg-secondary/60 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
