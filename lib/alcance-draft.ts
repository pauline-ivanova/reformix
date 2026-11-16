import {
  ALCANCE_SLUG,
  EMPTY_ALCANCE_PAYLOAD,
  type AlcanceDraftAnswers,
  type AlcanceMontajePayload,
} from './alcance-summary';

const DRAFT_TTL_MS = 14 * 24 * 60 * 60 * 1000;

type StoredDraft = {
  draftId: string;
  savedAt: number;
  answers: AlcanceDraftAnswers;
};

function storageKey(draftId: string): string {
  return `alcance:${ALCANCE_SLUG}:${draftId}`;
}

export function createDraftId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `d-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function toDraftAnswers(
  data: AlcanceMontajePayload,
): AlcanceDraftAnswers {
  const {
    nombre: _nombre,
    apellidos: _apellidos,
    phone: _p,
    email: _e,
    privacyConsent: _c,
    ...rest
  } = data;
  return rest;
}

export function saveAlcanceDraft(
  draftId: string,
  data: AlcanceMontajePayload,
): void {
  if (typeof window === 'undefined') return;
  const payload: StoredDraft = {
    draftId,
    savedAt: Date.now(),
    answers: toDraftAnswers(data),
  };
  try {
    localStorage.setItem(storageKey(draftId), JSON.stringify(payload));
    localStorage.setItem(`alcance:${ALCANCE_SLUG}:latest`, draftId);
  } catch {
    // quota / private mode
  }
}

export function loadLatestAlcanceDraft(): {
  draftId: string;
  answers: AlcanceDraftAnswers;
} | null {
  if (typeof window === 'undefined') return null;
  try {
    const latest = localStorage.getItem(`alcance:${ALCANCE_SLUG}:latest`);
    if (!latest) return null;
    const raw = localStorage.getItem(storageKey(latest));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredDraft;
    if (!parsed?.savedAt || Date.now() - parsed.savedAt > DRAFT_TTL_MS) {
      localStorage.removeItem(storageKey(latest));
      return null;
    }
    return { draftId: parsed.draftId, answers: parsed.answers };
  } catch {
    return null;
  }
}

export function clearAlcanceDraft(draftId: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(storageKey(draftId));
    const latest = localStorage.getItem(`alcance:${ALCANCE_SLUG}:latest`);
    if (latest === draftId) {
      localStorage.removeItem(`alcance:${ALCANCE_SLUG}:latest`);
    }
  } catch {
    // ignore
  }
}

export function mergeDraftAnswers(
  answers: AlcanceDraftAnswers,
): AlcanceMontajePayload {
  return {
    ...EMPTY_ALCANCE_PAYLOAD,
    ...answers,
    nombre: '',
    apellidos: '',
    phone: '',
    email: '',
    privacyConsent: false,
  };
}
