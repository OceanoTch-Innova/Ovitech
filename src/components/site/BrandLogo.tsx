"use client";

import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority: _priority }: BrandLogoProps) {
  return (
    <Link className={`brand-logo ${className}`} href="/" aria-label="OviTech — Inicio">
      <span className="brand-logo__crop" aria-hidden="true">
        <img className="brand-logo__image brand-logo__image--light" src="/brand/ovitech-light.png" alt="" />
        <img className="brand-logo__image brand-logo__image--dark" src="/brand/ovitech-dark.png" alt="" />
      </span>
    </Link>
  );
}
