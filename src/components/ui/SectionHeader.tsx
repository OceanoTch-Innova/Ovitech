import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, align = "left", className = "" }: SectionHeaderProps) {
  return (
    <header className={`section-header section-header--${align} ${className}`}>
      {eyebrow && <p className="eyebrow"><span />{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <div className="section-header__description">{description}</div>}
    </header>
  );
}
