import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema, getClientIp, isRateLimited } from "@/lib/contact";

export const runtime = "nodejs";

function hasValidOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;
  const expectedOrigin = configuredOrigin ? new URL(configuredOrigin).origin : new URL(request.url).origin;
  return origin === expectedOrigin;
}

function getSmtpSettings() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !CONTACT_EMAIL) return null;
  return {
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    from: SMTP_FROM,
    recipient: CONTACT_EMAIL,
  };
}

export async function POST(request: Request) {
  if (!hasValidOrigin(request)) {
    return NextResponse.json({ error: "Solicitud no autorizada." }, { status: 403 });
  }

  const clientIp = getClientIp(request.headers);
  if (isRateLimited(clientIp)) {
    return NextResponse.json({ error: "Has realizado varios intentos. Espera un momento antes de volver a enviar." }, { status: 429 });
  }

  let rawData: unknown;
  try {
    rawData = await request.json();
  } catch {
    return NextResponse.json({ error: "No pudimos leer el formulario." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(rawData);
  if (!parsed.success) {
    return NextResponse.json({ error: "Revisa los campos marcados e intenta de nuevo.", fields: parsed.error.flatten().fieldErrors }, { status: 422 });
  }

  // Honeypot responses remain indistinguishable from real success responses.
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const smtp = getSmtpSettings();
  if (!smtp) {
    console.error("Contact delivery is not configured.");
    return NextResponse.json({ error: "El canal de contacto está siendo configurado. Escríbenos directamente a oviitech@oceanotech.site." }, { status: 503 });
  }

  const data = parsed.data;
  const transport = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: smtp.auth,
  });

  const text = [
    "Nuevo contacto desde ovitech.co",
    "",
    `Nombre: ${data.firstName} ${data.lastName}`,
    `Empresa: ${data.company}`,
    `Cargo: ${data.role}`,
    `Correo: ${data.email}`,
    `Teléfono: ${data.phone}`,
    `Sector: ${data.sector}`,
    `Interés: ${data.interest}`,
    `Tamaño de operación: ${data.operationSize || "No indicado"}`,
    "",
    "Mensaje:",
    data.message,
  ].join("\n");

  try {
    await transport.sendMail({
      from: smtp.from,
      to: smtp.recipient,
      replyTo: data.email,
      subject: `Nuevo contacto web — ${data.interest}`,
      text,
    });

    // Deliberately logs no contact details or message contents.
    console.info("Contact message delivered", { interest: data.interest, sector: data.sector });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact delivery failed", error instanceof Error ? { name: error.name } : { name: "UnknownError" });
    return NextResponse.json({ error: "No pudimos enviar tu mensaje en este momento. Inténtalo más tarde o escríbenos a oviitech@oceanotech.site." }, { status: 502 });
  }
}
