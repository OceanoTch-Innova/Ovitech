import { z } from "zod";

const cleanText = (value: unknown) => {
  if (typeof value !== "string") return value;
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

export const contactFormSchema = z.object({
  firstName: z.string().transform(cleanText).pipe(z.string().min(2, "Escribe tu nombre.").max(80)),
  lastName: z.string().transform(cleanText).pipe(z.string().min(2, "Escribe tu apellido.").max(80)),
  company: z.string().transform(cleanText).pipe(z.string().min(2, "Indica tu empresa u organización.").max(120)),
  role: z.string().transform(cleanText).pipe(z.string().min(2, "Indica tu cargo.").max(120)),
  email: z.string().transform(cleanText).pipe(z.string().email("Escribe un correo válido.").max(254)),
  phone: z.string().transform(cleanText).pipe(z.string().min(7, "Escribe un teléfono válido.").max(32)),
  sector: z.string().transform(cleanText).pipe(z.string().min(1, "Selecciona un sector.").max(80)),
  interest: z.string().transform(cleanText).pipe(z.string().min(1, "Selecciona un tipo de interés.").max(80)),
  operationSize: z.string().transform(cleanText).pipe(z.string().max(120)).optional().or(z.literal("")),
  message: z.string().transform(cleanText).pipe(z.string().min(20, "Cuéntanos un poco más (mínimo 20 caracteres).").max(3000)),
  privacyAccepted: z.boolean().refine((value) => value, "Debes autorizar el tratamiento de tus datos para enviar el mensaje."),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

type RateBucket = { count: number; startedAt: number };
const rateBuckets = new Map<string, RateBucket>();
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 5;

export function isRateLimited(identifier: string) {
  const now = Date.now();
  const current = rateBuckets.get(identifier);

  if (!current || now - current.startedAt > RATE_WINDOW_MS) {
    rateBuckets.set(identifier, { count: 1, startedAt: now });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT;
}

export function getClientIp(headers: Headers) {
  return headers.get("x-forwarded-for")?.split(",")[0]?.trim() || headers.get("x-real-ip") || "unknown";
}
