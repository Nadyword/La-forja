import { Button } from "@/components/ui/button"

const plans = [
  {
    units: "1 - 20",
    label: "Pequeño",
    price: "Desde $150.000",
    description: "Ideal para condominios pequeños y comunidades residenciales menores.",
  },
  {
    units: "21 - 50",
    label: "Mediano",
    price: "Desde $250.000",
    description: "Perfecto para edificios medianos con necesidades de gestión moderadas.",
    featured: true,
  },
  {
    units: "51 - 100",
    label: "Grande",
    price: "Desde $400.000",
    description: "Para comunidades grandes que requieren atención dedicada.",
  },
  {
    units: "100+",
    label: "Corporativo",
    price: "A convenir",
    description: "Soluciones personalizadas para grandes desarrollos inmobiliarios.",
  },
]

export function Pricing() {
  return (
    <section id="honorarios" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Honorarios
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Honorarios referenciales
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Nuestros honorarios se ajustan al tamaño y necesidades específicas de cada comunidad.
            Los valores son referenciales y sujetos a evaluación personalizada.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className={`p-6 rounded-lg border transition-all ${
                plan.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-xl scale-105"
                  : "bg-background border-secondary hover:shadow-md hover:border-primary/30"
              }`}
            >
              <div
                className={`text-sm font-medium mb-2 ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                {plan.units} unidades
              </div>
              <h3
                className={`text-xl font-semibold mb-1 ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}
              >
                {plan.label}
              </h3>
              <div
                className={`text-2xl font-bold mb-4 ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}
              >
                {plan.price}
              </div>
              <p
                className={`text-sm leading-relaxed mb-6 ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}
              >
                {plan.description}
              </p>
              <Button
                className={`w-full rounded-full font-semibold ${
                  plan.featured
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Solicitar cotización
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          * Los precios mostrados son referenciales en pesos chilenos (CLP) y están sujetos a una
          evaluación personalizada según las características de cada condominio.
        </p>
      </div>
    </section>
  )
}
