import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'La Forja',
  description: 'Administración profesional de condominios en Chile. Transparencia financiera, cumplimiento de la Ley 21.442 y gestión responsable.',
  generator: 'v0.app',
  icons: '/images/Logo/Logo CIRCULO BLANCO SIN FONDO.png',
  other: {
    'facebook-domain-verification': 'kmfrmsr83yir0w87o50w1eafo7geoo',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
