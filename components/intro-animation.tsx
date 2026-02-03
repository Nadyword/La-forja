"use client";

import { useState, useEffect } from "react";
import { Building2, Shield, Sparkles } from "lucide-react";

export function IntroAnimation() {
  const [phase, setPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1300),
      setTimeout(() => setPhase(4), 2000),
      setTimeout(() => {
        setIsVisible(false);
      }, 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-primary transition-opacity duration-700 ${
        phase >= 4 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative text-center">
        {/* Logo container with animated ring */}
        <div className="relative inline-block mb-8">
          {/* Outer ring */}
          <div
            className={`absolute inset-0 -m-4 border-2 border-accent rounded-full transition-all duration-700 ${
              phase >= 1 ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{
              animation: phase >= 1 ? "spin 8s linear infinite" : "none",
            }}
          />
          
          {/* Inner ring */}
          <div
            className={`absolute inset-0 -m-8 border border-secondary/50 rounded-full transition-all duration-700 delay-200 ${
              phase >= 1 ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{
              animation: phase >= 1 ? "spin 12s linear infinite reverse" : "none",
            }}
          />

          {/* Icon */}
          <div
            className={`relative w-24 h-24 bg-accent rounded-2xl flex items-center justify-center transition-all duration-500 ${
              phase >= 1 ? "scale-100 rotate-0" : "scale-0 rotate-180"
            }`}
          >
            <img
              src="/images/Logo/Logo CIRCULO BLANCO SIN FONDO-con letras.png"
              alt="La Forja SpA Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Sparkles */}
          <Sparkles
            className={`absolute -top-2 -right-2 w-6 h-6 text-accent transition-all duration-500 ${
              phase >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
          <Shield
            className={`absolute -bottom-2 -left-2 w-5 h-5 text-secondary transition-all duration-500 delay-100 ${
              phase >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
        </div>

        {/* Text */}
        <div className="overflow-hidden">
          <h1
            className={`text-4xl md:text-5xl font-bold text-primary-foreground mb-2 transition-all duration-700 ${
              phase >= 2 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            La Forja
          </h1>
        </div>
        
        <div className="overflow-hidden">
          <p
            className={`text-xl text-secondary font-light tracking-widest uppercase transition-all duration-700 delay-100 ${
              phase >= 2 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            SpA
          </p>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden mt-6">
          <p
            className={`text-primary-foreground/70 text-lg transition-all duration-700 ${
              phase >= 3 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            Administracion de Condominios
          </p>
        </div>

        {/* Loading bar */}
        <div className="mt-10 w-48 h-1 bg-primary-foreground/20 rounded-full mx-auto overflow-hidden">
          <div
            className={`h-full bg-accent rounded-full transition-all duration-[2000ms] ease-out ${
              phase >= 1 ? "w-full" : "w-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
