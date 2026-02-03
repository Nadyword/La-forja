"use client"

import { Heart, CheckCircle, TrendingUp, MessageCircle, Star, Zap, Shield, Users } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Tranquilidad",
    description: "Descanse sabiendo que su comunidad está en manos profesionales y responsables.",
  },
  {
    icon: CheckCircle,
    title: "Cumplimiento legal",
    description: "Asegure que su condominio opere conforme a la normativa vigente.",
  },
  {
    icon: TrendingUp,
    title: "Eficiencia financiera",
    description: "Optimizamos recursos y controlamos gastos para beneficio de todos.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación clara",
    description: "Información oportuna y canales abiertos con el comité y copropietarios.",
  },
  {
    icon: Star,
    title: "Valor agregado",
    description: "Acompañamiento estratégico que potencia el valor de su inversión inmobiliaria.",
  },
]

const features = [
  { icon: Zap, text: "Respuesta rápida" },
  { icon: Shield, text: "Datos protegidos" },
  { icon: Users, text: "Equipo dedicado" },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
            <Star className="w-4 h-4" />
            Beneficios
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Beneficios para su comunidad
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
            Nuestra gestión profesional se traduce en beneficios tangibles para su comunidad.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full">
                <feature.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mx-auto mb-5">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300 rotate-3 group-hover:rotate-0">
                  <benefit.icon className="w-9 h-9 text-accent" strokeWidth={1.5} />
                </div>
                <div className="absolute -inset-2 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{benefit.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
