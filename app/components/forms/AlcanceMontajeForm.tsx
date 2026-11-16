'use client';

import { FormEvent, type ReactNode, useEffect, useRef, useState } from 'react';
import {
  clearAlcanceDraft,
  createDraftId,
  loadLatestAlcanceDraft,
  mergeDraftAnswers,
  saveAlcanceDraft,
} from '@/lib/alcance-draft';
import {
  ALCANCE_SERVICE_LABEL,
  EMPTY_ALCANCE_PAYLOAD,
  MAX_ALCANCE_FILE_BYTES,
  MAX_ALCANCE_FILES,
  buildAlcanceReviewSections,
  filterMunicipioSuggestions,
  isAlcanceMimeAllowed,
  isValidCodigoPostalES,
  sistemasForMarca,
  type AlcanceMarca,
  type AlcanceMontajePayload,
  type AlcanceReviewSection,
  type AlcanceTipo,
} from '@/lib/alcance-summary';
import { trackFormError, trackFormStart, trackFormSubmit } from '@/lib/ga4';

const STEPS = [
  'Qué montar',
  'Detalles',
  'Medidas',
  'Documentos',
  'Contacto',
] as const;

const inputClass =
  'w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent';
const labelClass = 'block text-sm font-medium text-brand-text-heading mb-2';

const TIPO_OPTIONS: { value: AlcanceTipo; label: string }[] = [
  { value: 'cocina', label: 'Cocina' },
  { value: 'armarios-vestidor', label: 'Armarios / vestidor' },
  { value: 'bano', label: 'Baño' },
  { value: 'salon-otros', label: 'Salón / otros' },
];

function AlcanceReviewBlocks({
  sections,
  onEditStep,
}: {
  sections: AlcanceReviewSection[];
  onEditStep: (step: 0 | 1 | 2 | 3) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-brand-text-heading">
        Resumen · {ALCANCE_SERVICE_LABEL}
      </p>
      {sections.map((section) => (
        <section
          key={section.id}
          className="rounded-md border border-gray-200 bg-white overflow-hidden"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-gray-50/80 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-brand-text-heading">
              {section.title}
            </h3>
            <button
              type="button"
              className="shrink-0 text-xs font-medium text-brand-accent hover:underline"
              onClick={() => onEditStep(section.step)}
            >
              Editar
            </button>
          </div>
          <dl className="divide-y divide-gray-100">
            {section.rows.map((row) => (
              <div
                key={`${section.id}-${row.label}`}
                className="grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-0.5 sm:gap-4 px-4 py-2.5"
              >
                <dt className="text-xs sm:text-sm text-brand-text-body">
                  {row.label}
                </dt>
                <dd className="text-sm text-brand-text-heading font-medium break-words">
                  {row.href ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-accent hover:underline font-medium"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}

function FieldLabel({
  children,
  required,
}: {
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <span className={labelClass}>
      {children}
      {required ? <span className="text-red-500"> *</span> : null}
    </span>
  );
}

export default function AlcanceMontajeForm() {
  const [step, setStep] = useState(0);
  const [draftId, setDraftId] = useState('');
  const [data, setData] = useState<AlcanceMontajePayload>(EMPTY_ALCANCE_PAYLOAD);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [stepError, setStepError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileError, setTurnstileError] = useState<string | null>(null);
  const [draftRestored, setDraftRestored] = useState(false);
  const turnstileRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const formStartedRef = useRef(false);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const serviceDim = 'alcance-montaje';

  useEffect(() => {
    const existing = loadLatestAlcanceDraft();
    if (existing) {
      setDraftId(existing.draftId);
      setData(mergeDraftAnswers(existing.answers));
      setDraftRestored(true);
    } else {
      setDraftId(createDraftId());
    }
  }, []);

  useEffect(() => {
    if (!draftId) return;
    saveAlcanceDraft(draftId, { ...data, privacyConsent: false });
  }, [data, draftId]);

  const markStarted = () => {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackFormStart({ service: serviceDim });
  };

  const patch = (partial: Partial<AlcanceMontajePayload>) => {
    markStarted();
    setData((prev) => ({ ...prev, ...partial }));
    setStepError(null);
  };

  const toggleTipo = (tipo: AlcanceTipo) => {
    markStarted();
    setData((prev) => {
      const has = prev.tipos.includes(tipo);
      return {
        ...prev,
        tipos: has ? prev.tipos.filter((t) => t !== tipo) : [...prev.tipos, tipo],
      };
    });
    setStepError(null);
  };

  const resetTurnstileWidget = () => {
    try {
      const turnstile = (
        window as Window & { turnstile?: { reset: (id?: string) => void } }
      ).turnstile;
      if (!turnstile) return;
      if (turnstileWidgetIdRef.current) turnstile.reset(turnstileWidgetIdRef.current);
      else turnstile.reset();
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (!turnstileSiteKey || step !== 4) return;
    if (typeof window === 'undefined') return;

    let cancelled = false;
    let ownedScript: HTMLScriptElement | null = null;

    const removeWidget = () => {
      try {
        const turnstile = (
          window as Window & {
            turnstile?: { remove: (id: string) => void };
          }
        ).turnstile;
        if (turnstile && turnstileWidgetIdRef.current) {
          turnstile.remove(turnstileWidgetIdRef.current);
        }
      } catch {
        // ignore
      }
      turnstileWidgetIdRef.current = null;
    };

    const renderTurnstile = () => {
      if (cancelled || !turnstileRef.current) return;
      try {
        const turnstile = (
          window as Window & {
            turnstile?: {
              render: (el: HTMLElement, opts: Record<string, unknown>) => string;
            };
          }
        ).turnstile;
        if (!turnstile || turnstileWidgetIdRef.current) return;
        turnstileWidgetIdRef.current = turnstile.render(turnstileRef.current, {
          sitekey: turnstileSiteKey,
          callback: (token: string) => {
            setTurnstileToken(token);
            setTurnstileError(null);
          },
          'expired-callback': () => {
            setTurnstileToken(null);
            resetTurnstileWidget();
          },
          'error-callback': () => {
            setTurnstileToken(null);
            setTurnstileError(
              'La verificación de seguridad ha caducado. Inténtalo de nuevo.',
            );
            resetTurnstileWidget();
            return true;
          },
        });
      } catch {
        setTurnstileError(
          'No se pudo cargar la verificación de seguridad. Recarga la página.',
        );
      }
    };

    removeWidget();
    setTurnstileToken(null);

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]',
    );
    if (existingScript) {
      if ((window as Window & { turnstile?: unknown }).turnstile) renderTurnstile();
      else existingScript.addEventListener('load', renderTurnstile, { once: true });
    } else {
      ownedScript = document.createElement('script');
      ownedScript.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      ownedScript.async = true;
      ownedScript.defer = true;
      ownedScript.onload = renderTurnstile;
      document.body.appendChild(ownedScript);
    }

    return () => {
      cancelled = true;
      if (ownedScript) ownedScript.onload = null;
      removeWidget();
    };
  }, [turnstileSiteKey, step]);

  const validateStep = (index: number): string | null => {
    if (index === 0) {
      if (data.tipos.length === 0) return 'Selecciona al menos un tipo.';
      if (!data.marca) return 'Selecciona la marca.';
      if (data.marca === 'otra' && !data.marcaOtra?.trim()) {
        return 'Indica la marca.';
      }
      if (!data.sistema) return 'Selecciona el sistema o modelo.';
      if (!data.materialEstado) return 'Indica el estado del material.';
      if (!data.desmontar || !data.retiradaResiduos || !data.retiradaEmbalajes) {
        return 'Completa desmontaje y retiradas.';
      }
    }
    if (index === 1) {
      if (!data.integracionEspecial) {
        return 'Indica si hay integración especial.';
      }
      if (data.integracionEspecial === 'si' && !data.integracionCual?.trim()) {
        return 'Describe el electrodoméstico a integrar.';
      }
      if (data.tipos.includes('cocina')) {
        if (
          !data.tipoMontaje ||
          !data.distribucion ||
          !data.encimera ||
          !data.cortes ||
          !data.tomas ||
          !data.fregadero ||
          !data.electrodomesticos ||
          !data.campana
        ) {
          return 'Completa los detalles de cocina.';
        }
      }
      if (data.tipos.includes('armarios-vestidor') && !data.armariosRemateTecho) {
        return 'Indica si hay remate a techo.';
      }
      if (
        (data.tipos.includes('bano') || data.tipos.includes('salon-otros')) &&
        !data.otrosDetalle?.trim()
      ) {
        return 'Describe brevemente qué hay que montar.';
      }
    }
    if (index === 2) {
      if (!data.direccion.trim() || data.direccion.trim().length < 5) {
        return 'Indica la dirección de la obra (calle y número).';
      }
      if (!isValidCodigoPostalES(data.codigoPostal)) {
        return 'Introduce un código postal válido (5 dígitos).';
      }
      if (!data.municipio.trim()) return 'El municipio / población es obligatorio.';
      if (!data.urgencia || !data.horario || !data.habitada) {
        return 'Completa urgencia, horario y ocupación.';
      }
      if (!data.medidasModo) return 'Indica cómo conoces las medidas.';
      if (data.medidasModo === 'approx' && !data.medidasValor?.trim()) {
        return 'Escribe la medida aproximada.';
      }
    }
    if (index === 4) {
      if (!data.nombre.trim() || data.nombre.trim().length < 2) {
        return 'El nombre es obligatorio.';
      }
      if (!data.apellidos.trim() || data.apellidos.trim().length < 2) {
        return 'Los apellidos son obligatorios.';
      }
      if (!data.phone.trim()) return 'El teléfono es obligatorio.';
      if (!data.email?.trim()) return 'El email es obligatorio.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        return 'Email no válido.';
      }
      if (!privacyConsent) {
        return 'Debes aceptar el tratamiento de datos.';
      }
    }
    return null;
  };

  const goNext = () => {
    const err = validateStep(step);
    if (err) {
      setStepError(err);
      return;
    }
    setStepError(null);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const goBack = () => {
    setStepError(null);
    setStep((s) => Math.max(s - 1, 0));
  };

  const onFilesSelected = (list: FileList | null) => {
    markStarted();
    if (!list) return;
    setFileError(null);
    const next = [...files];
    for (const file of Array.from(list)) {
      if (next.length >= MAX_ALCANCE_FILES) {
        setFileError(`Máximo ${MAX_ALCANCE_FILES} archivos.`);
        break;
      }
      if (file.size > MAX_ALCANCE_FILE_BYTES) {
        setFileError(`${file.name} supera 10 MB.`);
        continue;
      }
      if (!isAlcanceMimeAllowed(file.type) && !/\.heic$/i.test(file.name)) {
        setFileError(`${file.name}: usa JPG, PNG, WebP o PDF.`);
        continue;
      }
      next.push(file);
    }
    setFiles(next.slice(0, MAX_ALCANCE_FILES));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const err = validateStep(4);
    if (err) {
      setStepError(err);
      trackFormError({ service: serviceDim, errorType: 'validation' });
      return;
    }
    if (turnstileSiteKey && !turnstileToken) {
      setTurnstileError('Por favor, completa la verificación de seguridad.');
      trackFormError({ service: serviceDim, errorType: 'turnstile' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const body = new FormData();
      body.append(
        'payload',
        JSON.stringify({ ...data, privacyConsent: true }),
      );
      if (turnstileToken) body.append('turnstileToken', turnstileToken);
      for (const file of files) body.append('files', file);

      const response = await fetch('/api/alcance', { method: 'POST', body });
      const result = await response.json();

      if (response.ok) {
        trackFormSubmit({ service: serviceDim });
        clearAlcanceDraft(draftId);
        setSubmitStatus({
          type: 'success',
          message:
            result.message ||
            'Gracias. Te responderemos en el hilo de la solicitud o por WhatsApp.',
        });
        setFiles([]);
        formStartedRef.current = false;
      } else {
        trackFormError({ service: serviceDim, errorType: 'api' });
        setSubmitStatus({
          type: 'error',
          message: result.error || 'No se pudo enviar. Inténtalo de nuevo.',
        });
      }
    } catch {
      trackFormError({ service: serviceDim, errorType: 'network' });
      setSubmitStatus({
        type: 'error',
        message: 'Error de conexión. Inténtalo de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
      resetTurnstileWidget();
      setTurnstileToken(null);
    }
  };

  if (submitStatus.type === 'success') {
    return (
      <div className="rounded-md border border-green-200 bg-green-50 p-6 text-green-900">
        <h2 className="text-xl font-semibold mb-2">Alcance recibido</h2>
        <p>{submitStatus.message}</p>
      </div>
    );
  }

  const sistemaOptions = sistemasForMarca(data.marca as AlcanceMarca | '');
  const municipioMatches = filterMunicipioSuggestions(data.municipio);
  const municipioListId =
    municipioMatches.length > 0 ? 'alcance-municipio-suggestions' : undefined;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {draftRestored && (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          <p className="font-medium">Hemos recuperado tu borrador.</p>
          <p className="mt-1 text-amber-900/90">
            Por seguridad del navegador, los archivos no se restauran: vuelve a
            adjuntarlos en el paso Documentos si los necesitas.
          </p>
          <button
            type="button"
            className="mt-2 text-xs font-medium text-brand-accent hover:underline"
            onClick={() => setDraftRestored(false)}
          >
            Entendido
          </button>
        </div>
      )}
      <div>
        <div className="flex justify-between text-sm text-brand-text-body mb-2">
          <span>
            Paso {step + 1} de {STEPS.length}
          </span>
          <span className="font-medium text-brand-text-heading">{STEPS[step]}</span>
        </div>
        <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full bg-brand-accent transition-all"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {step === 0 && (
        <div className="space-y-5">
          <div>
            <FieldLabel required>¿Qué necesitas montar?</FieldLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TIPO_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={data.tipos.includes(opt.value)}
                    onChange={() => toggleTipo(opt.value)}
                  />
                  <span className="text-sm">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <FieldLabel required>Marca</FieldLabel>
            <select
              className={inputClass}
              value={data.marca}
              onChange={(e) => {
                const marca = e.target.value as AlcanceMontajePayload['marca'];
                const allowed = sistemasForMarca(marca);
                patch({
                  marca,
                  sistema: allowed.includes(data.sistema as never)
                    ? data.sistema
                    : '',
                });
              }}
            >
              <option value="">Selecciona</option>
              <option value="ikea">IKEA</option>
              <option value="leroy">Leroy Merlin</option>
              <option value="obramat">Obramat</option>
              <option value="otra">Otra</option>
            </select>
            {data.marca === 'otra' && (
              <input
                className={`${inputClass} mt-2`}
                placeholder="Marca"
                value={data.marcaOtra || ''}
                onChange={(e) => patch({ marcaOtra: e.target.value })}
              />
            )}
          </div>

          <div>
            <FieldLabel required>Sistema / modelo</FieldLabel>
            <select
              className={inputClass}
              value={data.sistema}
              onChange={(e) =>
                patch({
                  sistema: e.target.value as AlcanceMontajePayload['sistema'],
                })
              }
            >
              <option value="">Selecciona</option>
              {sistemaOptions.map((s) => (
                <option key={s} value={s}>
                  {s === 'metod'
                    ? 'METOD'
                    : s === 'pax'
                      ? 'PAX'
                      : s === 'delinia'
                        ? 'DELINIA'
                        : s === 'no-lo-se'
                          ? 'No lo sé'
                          : 'Otro'}
                </option>
              ))}
            </select>
            {data.sistema === 'otro' && (
              <input
                className={`${inputClass} mt-2`}
                placeholder="Sistema / modelo"
                value={data.sistemaOtro || ''}
                onChange={(e) => patch({ sistemaOtro: e.target.value })}
              />
            )}
          </div>

          <div>
            <FieldLabel required>Estado del material</FieldLabel>
            <select
              className={inputClass}
              value={data.materialEstado}
              onChange={(e) =>
                patch({
                  materialEstado: e.target
                    .value as AlcanceMontajePayload['materialEstado'],
                })
              }
            >
              <option value="">Selecciona</option>
              <option value="en-vivienda">Ya en la vivienda</option>
              <option value="en-tienda">En tienda (pendiente entrega)</option>
              <option value="por-comprar">Por comprar</option>
              <option value="mixto">Mixto</option>
              <option value="no-lo-se">No lo sé</option>
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 sm:items-end">
            <div className="flex flex-col gap-2">
              <label className="min-h-[2.75rem] text-sm font-medium text-brand-text-heading">
                ¿Desmontar lo viejo? <span className="text-red-500">*</span>
              </label>
              <select
                className={inputClass}
                value={data.desmontar}
                onChange={(e) =>
                  patch({
                    desmontar: e.target.value as AlcanceMontajePayload['desmontar'],
                  })
                }
              >
                <option value="">Selecciona</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
                <option value="parcial">Parcial</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="min-h-[2.75rem] text-sm font-medium text-brand-text-heading">
                ¿Retirar residuos del desmontaje?{' '}
                <span className="text-red-500">*</span>
              </label>
              <select
                className={inputClass}
                value={data.retiradaResiduos}
                onChange={(e) =>
                  patch({
                    retiradaResiduos: e.target
                      .value as AlcanceMontajePayload['retiradaResiduos'],
                  })
                }
              >
                <option value="">Selecciona</option>
                <option value="si">Sí</option>
                <option value="no">No (se queda en casa)</option>
                <option value="no-aplica">No aplica</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="min-h-[2.75rem] text-sm font-medium text-brand-text-heading">
                ¿Retirar embalajes nuevos? <span className="text-red-500">*</span>
              </label>
              <select
                className={inputClass}
                value={data.retiradaEmbalajes}
                onChange={(e) =>
                  patch({
                    retiradaEmbalajes: e.target
                      .value as AlcanceMontajePayload['retiradaEmbalajes'],
                  })
                }
              >
                <option value="">Selecciona</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <p className="text-sm text-brand-text-body rounded-md bg-amber-50 border border-amber-200 p-3">
            Este cuestionario cubre montaje e instalaciones básicas a tomas
            existentes. No sustituye una reforma de fontanería/electricidad ni el
            traslado de tomas.
          </p>

          <div>
            <FieldLabel required>
              ¿Integración no estándar / panelable (nevera, etc.)?
            </FieldLabel>
            <select
              className={inputClass}
              value={data.integracionEspecial}
              onChange={(e) =>
                patch({
                  integracionEspecial: e.target
                    .value as AlcanceMontajePayload['integracionEspecial'],
                })
              }
            >
              <option value="">Selecciona</option>
              <option value="no">No</option>
              <option value="si">Sí</option>
            </select>
            {data.integracionEspecial === 'si' && (
              <input
                className={`${inputClass} mt-2`}
                placeholder="¿Cuál? (modelo si lo sabes)"
                value={data.integracionCual || ''}
                onChange={(e) => patch({ integracionCual: e.target.value })}
              />
            )}
          </div>

          {data.tipos.includes('cocina') && (
            <div className="space-y-4 border-t border-gray-100 pt-4">
              <h3 className="font-semibold text-brand-text-heading">Cocina</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <FieldLabel required>Tipo de montaje</FieldLabel>
                  <select
                    className={inputClass}
                    value={data.tipoMontaje}
                    onChange={(e) =>
                      patch({
                        tipoMontaje: e.target
                          .value as AlcanceMontajePayload['tipoMontaje'],
                      })
                    }
                  >
                    <option value="">Selecciona</option>
                    <option value="completa">Completa</option>
                    <option value="parcial">Parcial</option>
                    <option value="sustitucion">Sustitución de módulos</option>
                  </select>
                </div>
                <div>
                  <FieldLabel required>Distribución</FieldLabel>
                  <select
                    className={inputClass}
                    value={data.distribucion}
                    onChange={(e) =>
                      patch({
                        distribucion: e.target
                          .value as AlcanceMontajePayload['distribucion'],
                      })
                    }
                  >
                    <option value="">Selecciona</option>
                    <option value="lineal">Lineal</option>
                    <option value="en-l">En L</option>
                    <option value="en-u">En U</option>
                    <option value="isla">Isla / península</option>
                    <option value="otra">Otra</option>
                  </select>
                </div>
                <div>
                  <FieldLabel required>Encimera</FieldLabel>
                  <select
                    className={inputClass}
                    value={data.encimera}
                    onChange={(e) =>
                      patch({
                        encimera: e.target
                          .value as AlcanceMontajePayload['encimera'],
                      })
                    }
                  >
                    <option value="">Selecciona</option>
                    <option value="no">Sin encimera / no aplica</option>
                    <option value="laminada">Laminada/madera</option>
                    <option value="piedra">Piedra/cuarzo (marmolistas)</option>
                    <option value="no-lo-se">No lo sé</option>
                  </select>
                </div>
                <div>
                  <FieldLabel required>Cortes fregadero/placa</FieldLabel>
                  <select
                    className={inputClass}
                    value={data.cortes}
                    onChange={(e) =>
                      patch({
                        cortes: e.target.value as AlcanceMontajePayload['cortes'],
                      })
                    }
                  >
                    <option value="">Selecciona</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                    <option value="no-aplica">No aplica</option>
                  </select>
                </div>
                <div>
                  <FieldLabel required>¿Tomas agua/luz preparadas?</FieldLabel>
                  <select
                    className={inputClass}
                    value={data.tomas}
                    onChange={(e) =>
                      patch({
                        tomas: e.target.value as AlcanceMontajePayload['tomas'],
                      })
                    }
                  >
                    <option value="">Selecciona</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                    <option value="parcial">Parcial</option>
                    <option value="no-lo-se">No lo sé</option>
                  </select>
                </div>
                <div>
                  <FieldLabel required>Fregadero + grifo</FieldLabel>
                  <select
                    className={inputClass}
                    value={data.fregadero}
                    onChange={(e) =>
                      patch({
                        fregadero: e.target
                          .value as AlcanceMontajePayload['fregadero'],
                      })
                    }
                  >
                    <option value="">Selecciona</option>
                    <option value="solo-colocar">Solo colocar</option>
                    <option value="conexion-tomas">Conexión a tomas</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <FieldLabel required>Electrodomésticos</FieldLabel>
                  <select
                    className={inputClass}
                    value={data.electrodomesticos}
                    onChange={(e) =>
                      patch({
                        electrodomesticos: e.target
                          .value as AlcanceMontajePayload['electrodomesticos'],
                      })
                    }
                  >
                    <option value="">Selecciona</option>
                    <option value="solo-encajar">Solo encajar</option>
                    <option value="conexion-tomas">Conexión a tomas</option>
                    <option value="no">No</option>
                  </select>
                  <p className="mt-1 text-xs text-brand-text-body">
                    No incluye obra eléctrica/gas ni mover tomas.
                  </p>
                </div>
                <div>
                  <FieldLabel required>Campana / conducto</FieldLabel>
                  <select
                    className={inputClass}
                    value={data.campana}
                    onChange={(e) =>
                      patch({
                        campana: e.target.value as AlcanceMontajePayload['campana'],
                      })
                    }
                  >
                    <option value="">Selecciona</option>
                    <option value="si">Sí, al conducto</option>
                    <option value="no">No necesita conducto</option>
                    <option value="no-hay">Sin campana</option>
                    <option value="no-lo-se">No lo sé</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {data.tipos.includes('armarios-vestidor') && (
            <div className="space-y-4 border-t border-gray-100 pt-4">
              <h3 className="font-semibold text-brand-text-heading">Armarios</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <FieldLabel>Nº cuerpos (approx)</FieldLabel>
                  <input
                    className={inputClass}
                    value={data.armariosCuerpos || ''}
                    onChange={(e) => patch({ armariosCuerpos: e.target.value })}
                  />
                </div>
                <div>
                  <FieldLabel>Puertas correderas</FieldLabel>
                  <select
                    className={inputClass}
                    value={data.armariosCorrederas}
                    onChange={(e) =>
                      patch({
                        armariosCorrederas: e.target
                          .value as AlcanceMontajePayload['armariosCorrederas'],
                      })
                    }
                  >
                    <option value="">Selecciona</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <FieldLabel>Anclaje a pared</FieldLabel>
                  <select
                    className={inputClass}
                    value={data.armariosAnclaje}
                    onChange={(e) =>
                      patch({
                        armariosAnclaje: e.target
                          .value as AlcanceMontajePayload['armariosAnclaje'],
                      })
                    }
                  >
                    <option value="">Selecciona</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <FieldLabel required>¿Remate / cierre a techo?</FieldLabel>
                  <select
                    className={inputClass}
                    value={data.armariosRemateTecho}
                    onChange={(e) =>
                      patch({
                        armariosRemateTecho: e.target
                          .value as AlcanceMontajePayload['armariosRemateTecho'],
                      })
                    }
                  >
                    <option value="">Selecciona</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                    <option value="no-lo-se">No lo sé</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {(data.tipos.includes('bano') ||
            data.tipos.includes('salon-otros')) && (
            <div className="border-t border-gray-100 pt-4">
              <FieldLabel required>Describe qué hay que montar</FieldLabel>
              <textarea
                className={inputClass}
                rows={4}
                value={data.otrosDetalle || ''}
                onChange={(e) => patch({ otrosDetalle: e.target.value })}
              />
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div>
            <FieldLabel required>Dirección de la obra</FieldLabel>
            <input
              className={inputClass}
              value={data.direccion}
              onChange={(e) => patch({ direccion: e.target.value })}
              placeholder="Calle y número"
              autoComplete="street-address"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <FieldLabel required>Código postal</FieldLabel>
              <input
                className={inputClass}
                value={data.codigoPostal}
                onChange={(e) =>
                  patch({
                    codigoPostal: e.target.value.replace(/[^\d]/g, '').slice(0, 5),
                  })
                }
                placeholder="08001"
                inputMode="numeric"
                autoComplete="postal-code"
              />
            </div>
            <div>
              <FieldLabel required>Municipio / población</FieldLabel>
              <input
                className={inputClass}
                value={data.municipio}
                onChange={(e) => patch({ municipio: e.target.value })}
                placeholder="Empieza a escribir… (p. ej. Sab)"
                list={municipioListId}
                autoComplete="off"
              />
              {municipioListId && (
                <datalist id={municipioListId}>
                  {municipioMatches.map((city) => (
                    <option key={city} value={city} />
                  ))}
                </datalist>
              )}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <FieldLabel required>Urgencia</FieldLabel>
              <select
                className={inputClass}
                value={data.urgencia}
                onChange={(e) =>
                  patch({
                    urgencia: e.target.value as AlcanceMontajePayload['urgencia'],
                  })
                }
              >
                <option value="">Selecciona</option>
                <option value="sin-prisa">Sin prisa</option>
                <option value="2-4-semanas">2–4 semanas</option>
                <option value="urgente">Urgente</option>
              </select>
            </div>
            <div>
              <FieldLabel required>Horario laboral posible</FieldLabel>
              <select
                className={inputClass}
                value={data.horario}
                onChange={(e) =>
                  patch({
                    horario: e.target.value as AlcanceMontajePayload['horario'],
                  })
                }
              >
                <option value="">Selecciona</option>
                <option value="laboral">Sí (L–V diurno)</option>
                <option value="tardes-fds">Solo tardes / fines de semana</option>
                <option value="a-convenir">A convenir</option>
                <option value="no-lo-se">No lo sé</option>
              </select>
            </div>
            <div>
              <FieldLabel required>¿Vives durante el montaje?</FieldLabel>
              <select
                className={inputClass}
                value={data.habitada}
                onChange={(e) =>
                  patch({
                    habitada: e.target.value as AlcanceMontajePayload['habitada'],
                  })
                }
              >
                <option value="">Selecciona</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
                <option value="a-ratos">A ratos</option>
              </select>
            </div>
          </div>

          <div>
            <FieldLabel required>Medidas del espacio</FieldLabel>
            <p className="text-xs text-brand-text-body mb-2">
              Orientativas de la línea o estancia — no hace falta cada módulo.
            </p>
            <select
              className={inputClass}
              value={data.medidasModo}
              onChange={(e) =>
                patch({
                  medidasModo: e.target
                    .value as AlcanceMontajePayload['medidasModo'],
                })
              }
            >
              <option value="">Selecciona</option>
              <option value="approx">Sé anchura / longitud aproximada</option>
              <option value="no-se">No sé medidas exactas</option>
              <option value="adjuntare">Adjuntaré plano o fotos</option>
            </select>
            {data.medidasModo === 'approx' && (
              <input
                className={`${inputClass} mt-2`}
                placeholder="ej. 2,25 m de ancho"
                value={data.medidasValor || ''}
                onChange={(e) => patch({ medidasValor: e.target.value })}
              />
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <FieldLabel>Planta</FieldLabel>
              <input
                className={inputClass}
                value={data.planta || ''}
                onChange={(e) => patch({ planta: e.target.value })}
                placeholder="ej. 3º"
              />
            </div>
            <div>
              <FieldLabel>Ascensor</FieldLabel>
              <select
                className={inputClass}
                value={data.ascensor}
                onChange={(e) =>
                  patch({
                    ascensor: e.target.value as AlcanceMontajePayload['ascensor'],
                  })
                }
              >
                <option value="">Selecciona</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <FieldLabel>Descarga cerca</FieldLabel>
              <select
                className={inputClass}
                value={data.descarga}
                onChange={(e) =>
                  patch({
                    descarga: e.target.value as AlcanceMontajePayload['descarga'],
                  })
                }
              >
                <option value="">Selecciona</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div>
            <FieldLabel>Comentarios (opcional)</FieldLabel>
            <textarea
              className={inputClass}
              rows={3}
              value={data.comentarios || ''}
              onChange={(e) => patch({ comentarios: e.target.value })}
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          {draftRestored && (
            <p className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950">
              Si en la visita anterior adjuntaste archivos, hay que elegirlos de
              nuevo — el borrador no guarda los ficheros.
            </p>
          )}
          <p className="text-sm text-brand-text-body">
            Si tienes el diseño de IKEA, un presupuesto de tienda o fotos del
            espacio, adjúntalos. Nos ayudarán a valorar mejor el trabajo. No es
            obligatorio.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="sr-only"
              accept="image/jpeg,image/png,image/webp,application/pdf,.heic,.heif"
              onChange={(e) => {
                onFilesSelected(e.target.files);
                e.target.value = '';
              }}
            />
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-brand-text-heading hover:bg-gray-50"
              onClick={() => fileInputRef.current?.click()}
            >
              Elegir archivos
            </button>
            <span className="text-sm text-brand-text-body">
              {files.length === 0
                ? 'Ningún archivo seleccionado'
                : `${files.length} archivo${files.length === 1 ? '' : 's'} seleccionado${files.length === 1 ? '' : 's'}`}
            </span>
          </div>
          {fileError && <p className="text-sm text-red-600">{fileError}</p>}
          {files.length > 0 && (
            <ul className="text-sm space-y-1">
              {files.map((f, i) => (
                <li
                  key={`${f.name}-${i}`}
                  className="flex justify-between gap-2 border border-gray-200 rounded px-3 py-2"
                >
                  <span>
                    Adjuntado · {f.name} ({Math.round(f.size / 1024)} KB)
                  </span>
                  <button
                    type="button"
                    className="text-brand-accent underline"
                    onClick={() =>
                      setFiles((prev) => prev.filter((_, idx) => idx !== i))
                    }
                  >
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
          )}
          <p className="text-xs text-brand-text-body">
            Hasta {MAX_ALCANCE_FILES} archivos · máx. 10 MB cada uno (JPG, PNG,
            WebP, PDF).
          </p>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-5">
          <AlcanceReviewBlocks
            sections={buildAlcanceReviewSections(
              data,
              files.map((f) => f.name),
            )}
            onEditStep={(s) => setStep(s)}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <FieldLabel required>Nombre</FieldLabel>
              <input
                className={inputClass}
                value={data.nombre}
                onChange={(e) => patch({ nombre: e.target.value })}
                placeholder="Nombre"
                autoComplete="given-name"
              />
            </div>
            <div>
              <FieldLabel required>Apellidos</FieldLabel>
              <input
                className={inputClass}
                value={data.apellidos}
                onChange={(e) => patch({ apellidos: e.target.value })}
                placeholder="Primer y segundo apellido"
                autoComplete="family-name"
              />
            </div>
          </div>
          <div>
            <FieldLabel required>Teléfono</FieldLabel>
            <input
              className={inputClass}
              value={data.phone}
              onChange={(e) => patch({ phone: e.target.value })}
              placeholder="642 029 572"
            />
          </div>
          <div>
            <FieldLabel required>Email</FieldLabel>
            <input
              className={inputClass}
              type="email"
              required
              value={data.email || ''}
              onChange={(e) => patch({ email: e.target.value })}
              placeholder="tu@email.com"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="alcance-privacy"
              checked={privacyConsent}
              onChange={(e) => {
                markStarted();
                setPrivacyConsent(e.target.checked);
              }}
              className="mt-1 h-4 w-4 text-brand-accent rounded"
            />
            <label htmlFor="alcance-privacy" className="text-sm text-brand-text-body">
              He leído la{' '}
              <a
                href="/privacidad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:underline font-medium"
              >
                Política de Privacidad
              </a>{' '}
              y consiento el tratamiento de estos datos para preparar un
              presupuesto de montaje.{' '}
              <span className="text-red-500">*</span>
            </label>
          </div>

          {turnstileSiteKey && (
            <div>
              <div ref={turnstileRef} className="cf-challenge" />
              {turnstileError && (
                <p className="mt-1 text-sm text-red-600">{turnstileError}</p>
              )}
            </div>
          )}
        </div>
      )}

      {stepError && <p className="text-sm text-red-600">{stepError}</p>}
      {submitStatus.type === 'error' && (
        <div className="p-4 rounded-md bg-red-50 text-red-800 border border-red-200">
          {submitStatus.message}
        </div>
      )}

      <div className="flex gap-3">
        {step > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="flex-1 rounded-md border border-gray-300 px-6 py-3 font-semibold text-brand-text-heading hover:bg-gray-50"
          >
            Atrás
          </button>
        )}
        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="flex-1 rounded-md bg-brand-accent px-6 py-3 font-semibold text-white hover:bg-brand-accent-hover"
          >
            Continuar
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 rounded-md bg-brand-accent px-6 py-3 font-semibold text-white hover:bg-brand-accent-hover disabled:opacity-50"
          >
            {isSubmitting ? 'Enviando…' : 'Enviar alcance'}
          </button>
        )}
      </div>
    </form>
  );
}
