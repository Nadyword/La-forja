"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { 
  MessageSquare, 
  Star, 
  Send, 
  CheckCircle2, 
  Shield, 
  Lock,
  ThumbsUp,
  ThumbsDown,
  Meh,
  Sparkles,
  Quote
} from "lucide-react"

const ratingOptions = [
  { value: 1, icon: ThumbsDown, label: "Malo", color: "text-red-500" },
  { value: 2, icon: Meh, label: "Regular", color: "text-orange-500" },
  { value: 3, icon: ThumbsUp, label: "Bueno", color: "text-yellow-500" },
  { value: 4, icon: Star, label: "Muy Bueno", color: "text-lime-500" },
  { value: 5, icon: Sparkles, label: "Excelente", color: "text-green-500" },
]

const categories = [
  "Atención al cliente",
  "Transparencia financiera",
  "Mantenimiento",
  "Comunicación",
  "Otro"
]

const testimonials = [
  {
    quote: "La administración ha sido impecable. Siempre responden rápido y mantienen todo en orden.",
    author: "Residente Anónimo",
    building: "Condominio Las Acacias"
  },
  {
    quote: "Finalmente una administradora transparente. Los reportes mensuales son muy claros.",
    author: "Copropietario",
    building: "Edificio Central Park"
  },
  {
    quote: "El mejor servicio que hemos tenido. Se nota el profesionalismo en cada gestión.",
    author: "Miembro del Comité",
    building: "Condominio Vista Hermosa"
  }
]

export function Feedback() {
  const [rating, setRating] = useState<number | null>(null)
  const [category, setCategory] = useState<string>("")
  const [comment, setComment] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!rating || !comment.trim()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after showing success
    setTimeout(() => {
      setRating(null)
      setCategory("")
      setComment("")
      setIsSubmitted(false)
    }, 4000)
  }

  return (
    <section 
      ref={sectionRef}
      id="feedback" 
      className="py-24 bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Tu opinión importa</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ayúdanos a Mejorar
          </h2>
          <p className="text-muted-foreground text-lg">
            Tu feedback anónimo nos permite seguir mejorando nuestros servicios. 
            Todas las opiniones son confidenciales y valoradas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feedback Form */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-secondary">
              {/* Anonymous Badge */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-primary/5 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">100% Anónimo</p>
                  <p className="text-xs text-muted-foreground">No recopilamos datos personales</p>
                </div>
                <Lock className="w-4 h-4 text-muted-foreground ml-auto" />
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Gracias por tu opinión
                  </h3>
                  <p className="text-muted-foreground">
                    Tu feedback nos ayuda a mejorar continuamente.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      ¿Cómo calificarías nuestro servicio?
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {ratingOptions.map((option) => {
                        const Icon = option.icon
                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setRating(option.value)}
                            className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all hover:scale-105 ${
                              rating === option.value
                                ? "border-primary bg-primary/10 shadow-md"
                                : "border-secondary hover:border-primary/30 bg-background"
                            }`}
                          >
                            <Icon className={`w-6 h-6 ${rating === option.value ? option.color : "text-muted-foreground"}`} />
                            <span className={`text-xs font-medium ${
                              rating === option.value ? "text-foreground" : "text-muted-foreground"
                            }`}>
                              {option.label}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Categoría (opcional)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setCategory(category === cat ? "" : cat)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            category === cat
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-foreground hover:bg-primary/20"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Tu comentario
                    </label>
                    <Textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Cuéntanos tu experiencia o sugerencia..."
                      className="min-h-[120px] resize-none border-secondary focus:border-primary bg-background"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      {comment.length}/500 caracteres
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={!rating || !comment.trim() || isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 font-semibold group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Enviar Opinión
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Testimonials Side */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <div className="sticky top-32">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "98%", label: "Satisfacción" },
                  { value: "500+", label: "Opiniones" },
                  { value: "4.9", label: "Calificación" },
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="text-center p-4 bg-card rounded-xl border border-secondary"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Testimonial Card */}
              <div className="relative bg-primary rounded-2xl p-8 text-primary-foreground overflow-hidden">
                {/* Decorative */}
                <Quote className="absolute top-4 right-4 w-16 h-16 text-primary-foreground/10" />
                
                <div className="relative">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-5 h-5 fill-accent text-accent" 
                      />
                    ))}
                  </div>
                  
                  <div className="min-h-[100px]">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className={`transition-all duration-500 ${
                          currentTestimonial === index 
                            ? "opacity-100 translate-y-0" 
                            : "opacity-0 translate-y-4 absolute"
                        }`}
                      >
                        <p className="text-lg md:text-xl font-medium mb-6 leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-primary-foreground/70">{testimonial.building}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dots */}
                  <div className="flex gap-2 mt-6">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentTestimonial === index 
                            ? "bg-accent w-6" 
                            : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                        }`}
                        aria-label={`Ver testimonio ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-6 mt-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs">Privacidad garantizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span className="text-xs">Datos encriptados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
