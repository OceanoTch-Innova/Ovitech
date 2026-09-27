import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/cookies/CookieConsent";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { siteConfig } from "@/data/site";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: siteConfig.seo.defaultTitle, template: siteConfig.seo.titleTemplate },
  description: siteConfig.seo.defaultDescription,
  keywords: [...siteConfig.seo.keywords],
  applicationName: siteConfig.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: siteConfig.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0b1712", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    email: siteConfig.email,
    address: { "@type": "PostalAddress", addressCountry: "CO" },
    knowsAbout: ["Digital Twins", "Gemelos Digitales", "Agroindustria", "Simulación", "Inteligencia artificial aplicada"],
  };

  return (
    <html lang="es-CO">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <a className="skip-link" href="#contenido-principal">Saltar al contenido</a>
        <SiteHeader />
        <main id="contenido-principal">{children}</main>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
