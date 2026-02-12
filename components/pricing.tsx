import { Button } from "@/components/ui/button"

const plans = [
  {
    units: "Comunidades Pequeñas",
    description: "Ideal para comunidades de menor tamaño Administración enfocada en el control operativo y financiero básico, con atención directa y cumplimiento normativo.",
    Items: [
      "Condominios de pocas unidades",
      "Control de gastos comunes",
      "Comunicación directa con comité",
      "Cumplimiento legal esencial",
    ],
  },
  {
    units: "Comunidades Medianas",
    description: "Gestión integral y balanceada Servicio completo para edificios con mayor movimiento operativo y necesidades administrativas constantes.",
    Items: [
      "Administración operativa y financiera",
      "Informes mensuales detallados",
      "Gestión de proveedores y personal",
      "Apoyo permanente al comité",
    ],
  },
  {
    units: "Comunidades Grandes",
    description: "Administración especializada y dedicada Pensado para comunidades que requieren mayor control, planificación y presencia administrativa.",
    Items: [
      "Gestión administrativa avanzada",
      "Supervisión técnica y operativa",
      "Control financiero reforzado",
      "Mayor frecuencia de seguimiento",
    ],
  },
  {
    units: "Servicios Corporativos",
    description: "Administración personalizada para grandes condominios, proyectos inmobiliarios o comunidades con requerimientos especiales",
    Items: [
      "Planes a medida",
      "Soporte técnico, legal y financiero",
      "Administración post-entrega",
      "Gestión estratégica del condominio",
    ],
  },
]

export function Pricing() {
  return (
    <section id="honorarios" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Nuestros Planes de Administración
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Planes adaptados al tamaño, complejidad y necesidades de cada comunidad.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Los servicios se ajustan a las características y necesidades específicas de cada comunidad, previa evaluación técnica y administrativa.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.units}
              className={`p-4 rounded-lg border transition-all bg-background border-secondary hover:shadow-md hover:border-primary/30`}
            >
              <div
                className={`text-sm font-medium mb-2 text-muted-foreground`}
              >
              </div>
              <div
                className={`text-2xl font-bold mb-4 text-foreground`}
              >
                {plan.units}
              </div>
              <ul className="list-disc list-inside text-muted-foreground text-sm">
                {plan.Items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <br/>
              <p
                className={`text-sm leading-relaxed mb-6 text-muted-foreground`}
              >
                {plan.description}
              </p>
              <div className="flex-grow" />
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
