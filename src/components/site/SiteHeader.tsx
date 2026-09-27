"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Icon } from "@/components/ui/Icon";
import { headerCta, primaryNavigation } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`site-header ${isHome && !scrolled ? "site-header--overlay" : ""} ${scrolled ? "site-header--scrolled" : ""} ${open ? "site-header--open" : ""}`}>
      <div className="shell site-header__inner">
        <BrandLogo />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {primaryNavigation.map((item) => (
            <div className="desktop-nav__item" key={item.href}>
              <Link href={item.href} className={pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`)) ? "is-active" : ""}>{item.label}{"children" in item && item.children && <Icon name="chevron" size={14} />}</Link>
              {"children" in item && item.children && (
                <div className="nav-menu">
                  {item.children.map((child) => <Link key={child.href} href={child.href}><strong>{child.label}</strong>{child.description && <span>{child.description}</span>}<Icon name="arrowUpRight" size={14} /></Link>)}
                </div>
              )}
            </div>
          ))}
        </nav>
        <Link className="header-cta" href={headerCta.href}>{headerCta.label}<Icon name="arrow" size={16} /></Link>
        <button className="mobile-menu-button" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen((current) => !current)}>
          <Icon name={open ? "close" : "menu"} size={23} />
        </button>
      </div>
      <div className="mobile-nav" aria-hidden={!open}>
        <nav aria-label="Navegación móvil">
          {primaryNavigation.map((item) => (
            <div key={item.href} className="mobile-nav__group">
              <Link href={item.href}>{item.label}<Icon name="arrowUpRight" size={16} /></Link>
              {"children" in item && item.children && <div>{item.children.map((child) => <Link key={child.href} href={child.href}>{child.label}</Link>)}</div>}
            </div>
          ))}
          <Link href={headerCta.href} className="button button--primary">{headerCta.label}<Icon name="arrow" size={16} /></Link>
        </nav>
      </div>
    </header>
  );
}
