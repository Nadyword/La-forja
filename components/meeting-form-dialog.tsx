"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WHATSAPP_NUMBER = "56928504102";

interface MeetingFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MeetingFormDialog({ open, onOpenChange }: MeetingFormDialogProps) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [horario, setHorario] = useState("");

  const buildWhatsAppMessage = () => {
    const lines = [
      "Hola, solicito agendar una reunión.",
      "",
      `*Nombre:* ${nombre}`,
      `*Teléfono:* ${telefono}`,
      `*Correo:* ${correo}`,
      `*Horario preferido:* ${horario}`,
    ];
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onOpenChange(false);
    setNombre("");
    setTelefono("");
    setCorreo("");
    setHorario("");
  };

  const isValid = nombre.trim() && telefono.trim() && correo.trim() && horario.trim();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Agendar una reunión</DialogTitle>
          <DialogDescription>
            Completa tus datos y te redirigiremos a WhatsApp para confirmar la reunión con nuestro equipo.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="nombre">Nombre completo</Label>
            <Input
              id="nombre"
              type="text"
              placeholder="Ej: María González"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="telefono">Teléfono</Label>
            <Input
              id="telefono"
              type="tel"
              placeholder="Ej: +56 9 1234 5678"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="correo">Correo electrónico</Label>
            <Input
              id="correo"
              type="email"
              placeholder="Ej: correo@ejemplo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="horario">Horario preferido</Label>
            <Input
              id="horario"
              type="text"
              placeholder="Ej: Mañana 10:00, tarde después de las 15:00"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              required
            />
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={!isValid}>
              Enviar por WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
