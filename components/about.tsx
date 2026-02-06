"use client"

import { Shield, Scale, Users, Building2, ChevronRight, Award, Clock, Handshake } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Shield,
    title: "Transparencia financiera",
    description: "Gestión clara y auditable de todos los recursos de su comunidad.",
  },
  {
    icon: Scale,
    title: "Cumplimiento normativo",
    description: "Administración conforme a la Ley 21.442 de Copropiedad Inmobiliaria.",
  },
  {
    icon: Users,
    title: "Convivencia comunitaria",
    description: "Fomentamos relaciones armónicas entre copropietarios.",
  },
  {
    icon: Building2,
    title: "Gestión responsable",
    description: "Protección y valorización del patrimonio de su condominio.",
  },
]

const stats = [
  { icon: Award, value: "10+", label: "Años de experiencia" },
  { icon: Clock, value: "24/7", label: "Soporte disponible" },
  { icon: Handshake, value: "98%", label: "Clientes satisfechos" },
]

export function About() {
  return (
    <section id="quienes-somos" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team-meeting.jpg"
                alt="Equipo de La Forja SpA en reunión"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                {stats.map((stat, index) => (
                  <div key={stat.label} className={`text-center ${index !== stats.length - 1 ? 'pr-4 border-r border-primary-foreground/20' : ''}`}>
                    <stat.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                    <span className="block text-xl font-bold">{stat.value}</span>
                    <span className="text-xs text-primary-foreground/70">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/40 rounded-full blur-2xl" />
          </div>
          
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              Quiénes Somos
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Empresa chilena especializada en la administración integral de edificios y condominios.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Brindamos una gestión transparente, eficiente y cercana, con foco en el bienestar comunitario.
              Trabajamos con estricto cumplimiento de la Ley de Copropiedad Inmobiliaria y la normativa laboral vigente.
              Entregamos control financiero claro, apoyo permanente a comités y comunicación directa con copropietarios.
              Administramos con profesionalismo, prevención y confianza.
            </p>
            
            <div className="mt-8 space-y-4">
              {features.slice(0, 2).map((feature) => (
                <div key={feature.title} className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {feature.title}
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card border border-secondary rounded-xl hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
