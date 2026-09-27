"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Icon } from "@/components/ui/Icon";
import { footerNavigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  const configureCookies = () => window.dispatchEvent(new Event("ovitech:configure-cookies"));

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <div className="site-footer__brand"><BrandLogo /><p>Software para representar, analizar, simular y anticipar sistemas reales.</p><a href={`mailto:${siteConfig.email}`}><Icon name="mail" size={16} />{siteConfig.email}</a></div>
          <div className="site-footer__nav">
            {footerNavigation.map((column) => <section key={column.title}><h2>{column.title}</h2><ul>{column.items.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></section>)}
          </div>
        </div>
        <div className="site-footer__bottom"><p>© {new Date().getFullYear()} OviTech. Todos los derechos reservados.</p><div><span>Colombia · Tecnología aplicada</span><button type="button" onClick={configureCookies}>Configurar cookies</button></div></div>
      </div>
    </footer>
  );
}
