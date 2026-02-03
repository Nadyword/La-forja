const links = {
  navegacion: [
    { href: "#quienes-somos", label: "Quiénes Somos" },
    { href: "#transparencia", label: "Transparencia" },
    { href: "#servicios", label: "Servicios" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#honorarios", label: "Honorarios" },
  ],
  legal: [
    { href: "#", label: "Términos y Condiciones" },
    { href: "#", label: "Política de Privacidad" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img src="/images/Logo/Logo-blanco-sinFondo.png" alt="La Forja SpA" width={150} height={150} />
            <p className="text-primary-foreground/70 leading-relaxed max-w-md">
              Administración profesional de condominios en Chile. Transparencia, cumplimiento legal
              y gestión responsable del patrimonio de su comunidad.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/70">
              Navegación
            </h4>
            <ul className="space-y-3">
              {links.navegacion.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/70">
              Contacto
            </h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>contacto@laforjaspa.cl</li>
              <li>+56 9 2850 4102</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} La Forja SpA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {links.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
