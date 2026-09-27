import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  crumbs?: { label: string; href?: string }[];
  meta?: ReactNode;
  tone?: "light" | "dark";
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, crumbs, meta, tone = "light", children }: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="shell">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div className="page-hero__grid">
          <div>
            {eyebrow && <p className="eyebrow"><span />{eyebrow}</p>}
            <h1>{title}</h1>
            <div className="page-hero__description">{description}</div>
            {meta && <div className="page-hero__meta">{meta}</div>}
          </div>
          {children && <div className="page-hero__aside">{children}</div>}
        </div>
      </div>
    </section>
  );
}
