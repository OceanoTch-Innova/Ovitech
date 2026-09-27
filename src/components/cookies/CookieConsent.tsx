"use client";

import { useEffect, useState } from "react";

type Consent = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "ovitech-cookie-consent";

function saveConsent(analytics: boolean, marketing: boolean) {
  const consent: Consent = { essential: true, analytics, marketing, updatedAt: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("ovitech:cookie-consent", { detail: consent }));
  return consent;
}

export function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [hasConsent, setHasConsent] = useState(true);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const consent = JSON.parse(stored) as Consent;
        setAnalytics(Boolean(consent.analytics));
        setMarketing(Boolean(consent.marketing));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
        setHasConsent(false);
      }
    } else {
      setHasConsent(false);
    }
    setReady(true);

    const configure = () => setPreferencesOpen(true);
    window.addEventListener("ovitech:configure-cookies", configure);
    return () => window.removeEventListener("ovitech:configure-cookies", configure);
  }, []);

  const acceptAll = () => {
    saveConsent(true, true);
    setAnalytics(true);
    setMarketing(true);
    setHasConsent(true);
    setPreferencesOpen(false);
  };

  const rejectAll = () => {
    saveConsent(false, false);
    setAnalytics(false);
    setMarketing(false);
    setHasConsent(true);
    setPreferencesOpen(false);
  };

  const savePreferences = () => {
    saveConsent(analytics, marketing);
    setHasConsent(true);
    setPreferencesOpen(false);
  };

  if (!ready) return null;

  return (
    <>
      {!hasConsent && !preferencesOpen && (
        <aside className="cookie-banner" aria-label="Preferencias de cookies">
          <div>
            <p className="cookie-banner__title">Tu privacidad, bajo tu control.</p>
            <p>Usamos únicamente cookies esenciales por defecto. Puedes decidir si autorizas categorías opcionales.</p>
          </div>
          <div className="cookie-banner__actions">
            <button className="button button--text" type="button" onClick={() => setPreferencesOpen(true)}>Configurar</button>
            <button className="button button--secondary" type="button" onClick={rejectAll}>Rechazar</button>
            <button className="button button--primary" type="button" onClick={acceptAll}>Aceptar</button>
          </div>
        </aside>
      )}
      {preferencesOpen && (
        <div className="cookie-modal-backdrop" role="presentation">
          <section className="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
            <div className="cookie-modal__heading">
              <div>
                <p className="eyebrow"><span />Privacidad</p>
                <h2 id="cookie-title">Configura tus cookies</h2>
              </div>
              <button className="icon-button" type="button" aria-label="Cerrar configuración" onClick={() => setPreferencesOpen(false)}>×</button>
            </div>
            <p>Las cookies esenciales permiten que el sitio funcione. Las categorías opcionales permanecen desactivadas hasta que las autorices.</p>
            <div className="preference-row">
              <div><h3>Esenciales</h3><p>Necesarias para seguridad, navegación y tus preferencias de consentimiento.</p></div>
              <span className="preference-fixed">Siempre activas</span>
            </div>
            <label className="preference-row preference-row--interactive">
              <div><h3>Analítica</h3><p>Ayuda a comprender de forma agregada cómo se utiliza el sitio.</p></div>
              <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} />
            </label>
            <label className="preference-row preference-row--interactive">
              <div><h3>Marketing</h3><p>Permite medir campañas y mostrar comunicaciones relevantes cuando se utilicen estas tecnologías.</p></div>
              <input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} />
            </label>
            <div className="cookie-modal__actions">
              <button className="button button--secondary" type="button" onClick={rejectAll}>Rechazar opcionales</button>
              <button className="button button--primary" type="button" onClick={savePreferences}>Guardar preferencias</button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
