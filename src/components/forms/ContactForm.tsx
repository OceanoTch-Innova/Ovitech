"use client";

import { FormEvent, useState } from "react";
import { contactFormSchema, type ContactFormData } from "@/lib/contact";
import { Icon } from "@/components/ui/Icon";

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

const initialValues: ContactFormData = {
  firstName: "",
  lastName: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  sector: "",
  interest: "",
  operationSize: "",
  message: "",
  privacyAccepted: false,
  website: "",
};

const sectors = ["Agroindustria", "Agricultura", "Caficultura", "Acuicultura", "Planta o manufactura", "Tecnología", "Investigación", "Otro"];
const interests = ["Digital Twin", "AgTwins", "Caficultura", "BlueTwins", "Investigación", "Piloto tecnológico", "Otro"];

export function ContactForm() {
  const [values, setValues] = useState<ContactFormData>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const setValue = <K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    const validation = contactFormSchema.safeParse(values);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      setErrors(Object.fromEntries(Object.entries(fieldErrors).map(([field, messages]) => [field, messages?.[0]])) as FieldErrors);
      setMessage("Revisa los campos señalados antes de enviar.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });
      const body = await response.json() as { ok?: boolean; error?: string; fields?: Record<string, string[]> };
      if (!response.ok || !body.ok) {
        if (body.fields) setErrors(Object.fromEntries(Object.entries(body.fields).map(([field, messages]) => [field, messages?.[0]])) as FieldErrors);
        throw new Error(body.error || "No pudimos enviar el formulario.");
      }
      setValues(initialValues);
      setStatus("success");
      setMessage("Gracias por contactar a OviTech. Hemos recibido tu mensaje.");
      window.dispatchEvent(new CustomEvent("ovitech:contact-submitted"));
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "No pudimos enviar el formulario.");
    }
  }

  const errorFor = (field: keyof ContactFormData) => errors[field] && <span className="field-error" id={`${field}-error`}>{errors[field]}</span>;
  const invalid = (field: keyof ContactFormData) => Boolean(errors[field]);

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form__grid">
        <label>Nombre<input value={values.firstName} onChange={(event) => setValue("firstName", event.target.value)} aria-invalid={invalid("firstName")} aria-describedby={errors.firstName ? "firstName-error" : undefined} autoComplete="given-name" />{errorFor("firstName")}</label>
        <label>Apellido<input value={values.lastName} onChange={(event) => setValue("lastName", event.target.value)} aria-invalid={invalid("lastName")} aria-describedby={errors.lastName ? "lastName-error" : undefined} autoComplete="family-name" />{errorFor("lastName")}</label>
        <label>Empresa u organización<input value={values.company} onChange={(event) => setValue("company", event.target.value)} aria-invalid={invalid("company")} aria-describedby={errors.company ? "company-error" : undefined} autoComplete="organization" />{errorFor("company")}</label>
        <label>Cargo<input value={values.role} onChange={(event) => setValue("role", event.target.value)} aria-invalid={invalid("role")} aria-describedby={errors.role ? "role-error" : undefined} autoComplete="organization-title" />{errorFor("role")}</label>
        <label>Correo corporativo<input type="email" value={values.email} onChange={(event) => setValue("email", event.target.value)} aria-invalid={invalid("email")} aria-describedby={errors.email ? "email-error" : undefined} autoComplete="email" />{errorFor("email")}</label>
        <label>Teléfono<input type="tel" value={values.phone} onChange={(event) => setValue("phone", event.target.value)} aria-invalid={invalid("phone")} aria-describedby={errors.phone ? "phone-error" : undefined} autoComplete="tel" />{errorFor("phone")}</label>
        <label>Sector<select value={values.sector} onChange={(event) => setValue("sector", event.target.value)} aria-invalid={invalid("sector")} aria-describedby={errors.sector ? "sector-error" : undefined}><option value="">Selecciona una opción</option>{sectors.map((sector) => <option key={sector}>{sector}</option>)}</select>{errorFor("sector")}</label>
        <label>Tipo de interés<select value={values.interest} onChange={(event) => setValue("interest", event.target.value)} aria-invalid={invalid("interest")} aria-describedby={errors.interest ? "interest-error" : undefined}><option value="">Selecciona una opción</option>{interests.map((interest) => <option key={interest}>{interest}</option>)}</select>{errorFor("interest")}</label>
        <label className="contact-form__full">Tamaño aproximado de la operación <span>Opcional</span><input value={values.operationSize} onChange={(event) => setValue("operationSize", event.target.value)} aria-invalid={invalid("operationSize")} placeholder="Ej.: una finca, una planta, varias sedes…" />{errorFor("operationSize")}</label>
        <label className="contact-form__full">¿Qué sistema, proceso o desafío quieres comprender? <textarea rows={5} value={values.message} onChange={(event) => setValue("message", event.target.value)} aria-invalid={invalid("message")} aria-describedby={errors.message ? "message-error" : undefined} />{errorFor("message")}</label>
      </div>
      <div className="honeypot" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => setValue("website", event.target.value)} /></label></div>
      <label className="consent-check"><input type="checkbox" checked={values.privacyAccepted} onChange={(event) => setValue("privacyAccepted", event.target.checked)} aria-invalid={invalid("privacyAccepted")} /><span>Autorizo el tratamiento de mis datos para responder esta solicitud, según la <a href="/politica-de-privacidad">Política de privacidad</a>.</span></label>
      {errorFor("privacyAccepted")}
      {status !== "idle" && <p className={`form-status form-status--${status}`} role={status === "error" ? "alert" : "status"}>{status === "success" && <Icon name="check" size={18} />}{message}</p>}
      <button type="submit" className="button button--primary contact-form__submit" disabled={status === "loading"}>{status === "loading" ? "Enviando…" : "Enviar mensaje"}<Icon name="arrow" size={17} /></button>
    </form>
  );
}
