/** Human-readable labels for contact form service values (matches ContactForm select). */
export const SERVICE_LABELS: Record<string, string> = {
  'reforma-integral': 'Reforma Integral',
  'reforma-cocina': 'Reforma de Cocina',
  'reforma-bano': 'Reforma de Baño',
  'servicios-tecnicos': 'Servicios Técnicos',
  otro: 'Otro',
};

export function resolveServiceLabel(service?: string): string | null {
  if (!service?.trim()) return null;
  return SERVICE_LABELS[service] ?? service.trim();
}

/** Client-friendly subject so Reply keeps a natural thread for the lead. */
export function buildContactEmailSubject(name: string, service?: string): string {
  const serviceLabel = resolveServiceLabel(service);
  return serviceLabel
    ? `${serviceLabel} — ${name}`
    : `Consulta Reformix — ${name}`;
}
