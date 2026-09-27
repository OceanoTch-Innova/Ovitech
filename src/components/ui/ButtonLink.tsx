import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "text";
  arrow?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", arrow = false, className = "" }: ButtonLinkProps) {
  return (
    <Link href={href} className={`button button--${variant} ${className}`}>
      <span>{children}</span>{arrow && <Icon name="arrow" size={17} />}
    </Link>
  );
}
