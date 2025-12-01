'use client'

import { useState, FormEvent } from 'react';

interface ContactFormProps {
  service?: string;
}

export default function ContactForm({ service }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: service || '',
    message: '',
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    privacy?: string;
  }>({});
  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    message?: boolean;
  }>({});

  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return 'El nombre es obligatorio.';
    }
    if (name.trim().length < 2) {
      return 'El nombre debe tener al menos 2 caracteres.';
    }
    if (name.length > 100) {
      return 'El nombre no puede tener más de 100 caracteres.';
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'El email es obligatorio.';
    }
    if (email.length > 255) {
      return 'El email es demasiado largo.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Por favor, introduce un email válido.';
    }
    return undefined;
  };

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters
    const digits = value.replace(/[^\d]/g, '');
    
    // If empty, return empty
    if (!digits) {
      return '';
    }
    
    // Limit to reasonable length (max 15 digits)
    const limitedDigits = digits.slice(0, 15);
    
    // Simple formatting: just add spaces every 3 digits
    const parts = [];
    for (let i = 0; i < limitedDigits.length; i += 3) {
      parts.push(limitedDigits.slice(i, i + 3));
    }
    
    return parts.join(' ');
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return 'El teléfono es obligatorio.';
    }
    // Remove all formatting characters
    const cleaned = phone.replace(/[\s\-()]/g, '');
    
    // Check if it starts with +
    if (cleaned.startsWith('+')) {
      // International format: + followed by country code and number
      // Minimum: +1 and 7 digits = 8 chars, Maximum: +999 and 15 digits = 18 chars
      if (cleaned.length < 8 || cleaned.length > 18) {
        return 'Por favor, introduce un número de teléfono válido (ej: 346 420 295 72).';
      }
      // Should have at least country code (1-3 digits) and number (7-15 digits)
      const digitsAfterPlus = cleaned.slice(1);
      if (!/^\d{7,15}$/.test(digitsAfterPlus)) {
        return 'Por favor, introduce un número de teléfono válido (ej: 346 420 295 72).';
      }
    } else {
      // Local format: should have 7-15 digits
      if (!/^\d{7,15}$/.test(cleaned)) {
        return 'Por favor, introduce un número de teléfono válido (mínimo 7 dígitos).';
      }
    }
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return 'El mensaje es obligatorio.';
    }
    if (message.trim().length < 10) {
      return 'El mensaje debe tener al menos 10 caracteres.';
    }
    if (message.length > 2000) {
      return 'El mensaje no puede tener más de 2000 caracteres.';
    }
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // Format phone number on change
    if (name === 'phone') {
      const previousValue = formData.phone;
      const previousDigits = previousValue.replace(/[^\d]/g, '');
      const currentDigits = value.replace(/[^\d]/g, '');
      
      // If user is deleting (current has fewer digits than previous)
      if (currentDigits.length < previousDigits.length) {
        // Allow deletion - format what's left
        const formatted = formatPhoneNumber(value);
        setFormData({
          ...formData,
          [name]: formatted,
        });
      } else {
        // User is adding - always format with + and parentheses
        const formatted = formatPhoneNumber(value);
        setFormData({
          ...formData,
          [name]: formatted,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    // Validate field on blur
    let error: string | undefined;
    switch (name) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
      case 'message':
        error = validateMessage(value);
        break;
    }

    if (error) {
      setErrors({
        ...errors,
        [name]: error,
      });
    } else {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const messageError = validateMessage(formData.message);
    const privacyError = !privacyConsent ? 'Debes aceptar la política de privacidad para continuar.' : undefined;

    const newErrors = {
      name: nameError,
      email: emailError,
      phone: phoneError,
      message: messageError,
      privacy: privacyError,
    };

    setErrors(newErrors);

    // If there are any errors, stop submission
    if (nameError || emailError || phoneError || messageError || privacyError) {
      setSubmitStatus({
        type: 'error',
        message: 'Por favor, corrige los errores en el formulario.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || '¡Gracias! Te contactaremos pronto.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: service || '',
          message: '',
        });
        setPrivacyConsent(false);
        setErrors({});
        setTouched({});
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Hubo un error al enviar el formulario.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error de conexión. Por favor, inténtalo de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-text-heading mb-2">
          Nombre completo <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={100}
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent ${
            errors.name && touched.name
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300'
          }`}
          placeholder="Tu nombre"
        />
        {errors.name && touched.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-text-heading mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={255}
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent ${
            errors.email && touched.email
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300'
          }`}
          placeholder="tu@email.com"
        />
        {errors.email && touched.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-text-heading mb-2">
          Teléfono <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          maxLength={25}
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          pattern="[\d\s\+\-\(\)]{9,}"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent ${
            errors.phone && touched.phone
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300'
          }`}
          placeholder="642 029 572"
        />
        {errors.phone && touched.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-brand-text-heading mb-2">
          Tipo de servicio
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent"
        >
          <option value="">Selecciona un servicio</option>
          <option value="reforma-integral">Reforma Integral</option>
          <option value="reforma-cocina">Reforma de Cocina</option>
          <option value="reforma-bano">Reforma de Baño</option>
          <option value="servicios-tecnicos">Servicios Técnicos</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-text-heading mb-2">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent ${
            errors.message && touched.message
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300'
          }`}
          placeholder="Cuéntanos sobre tu proyecto..."
        />
        {errors.message && touched.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {submitStatus.type && (
        <div
          className={`p-4 rounded-md ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy-consent"
          name="privacy-consent"
          required
          checked={privacyConsent}
          onChange={(e) => {
            setPrivacyConsent(e.target.checked);
            if (errors.privacy) {
              setErrors({
                ...errors,
                privacy: undefined,
              });
            }
          }}
          className={`mt-1 h-4 w-4 text-brand-accent rounded focus:ring-brand-accent ${
            errors.privacy ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        <div className="flex-1">
          <label htmlFor="privacy-consent" className="text-sm text-brand-text-body">
            He leído y acepto la{' '}
            <a 
              href="/privacidad" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:underline font-medium"
            >
              Política de Privacidad
            </a>
            {' '}y doy mi consentimiento para el tratamiento de mis datos personales según lo establecido en el Reglamento General de Protección de Datos (RGPD).{' '}
            <span className="text-red-500">*</span>
          </label>
          {errors.privacy && (
            <p className="mt-1 text-sm text-red-600">{errors.privacy}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-brand-accent px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-brand-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
      </button>
    </form>
  );
}

