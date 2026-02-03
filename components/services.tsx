"use client"

import {
  FileCheck,
  Calculator,
  Receipt,
  Gavel,
  Users,
  Wrench,
  MessageSquare,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: FileCheck,
    title: "Gestión Administrativa y Legal",
    description:
      "Administración conforme a la Ley 21.442, representación ante organismos, archivo digital y elaboración de reglamentos internos.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Calculator,
    title: "Gestión Contable y Financiera",
    description:
      "Estados de cuenta, balances mensuales, control digital de ingresos y egresos, conciliaciones bancarias periódicas.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Receipt,
    title: "Cobranza de Gastos Comunes",
    description:
      "Gestión personalizada, comunicación multicanal, convenios de pago y enfoque humano para mantener la salud financiera.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Gavel,
    title: "Cobranza Jurídica",
    description:
      "Coordinación con abogados especializados para gestionar la cobranza judicial cuando sea necesario.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Users,
    title: "Gestión Legal y Laboral",
    description:
      "Supervisión de personal, cálculo de remuneraciones, finiquitos, contratos y prevención de riesgos laborales.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y Servicios",
    description:
      "Planes preventivos de mantenimiento, supervisión de proveedores y protocolos de emergencia.",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: MessageSquare,
    title: "Atención a Copropietarios",
    description:
      "Plataforma digital de comunicación, atención clara, coordinación de asambleas y registro de actas.",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y Convivencia",
    description:
      "Protocolos de emergencia, mediación de conflictos y aplicación de normas de convivencia.",
    color: "bg-pink-100 text-pink-600",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Nuestros Servicios
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight text-balance">
              Soluciones integrales para su comunidad
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ofrecemos un servicio completo que abarca todas las necesidades de administración de su
              condominio. Cada servicio está diseñado para garantizar tranquilidad y eficiencia.
            </p>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/condominium-lobby.jpg"
                alt="Lobby de condominio elegante"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 bg-card border border-secondary rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-primary" />
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{service.description}</p>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
