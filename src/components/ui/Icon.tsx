import type { SVGProps } from "react";

type IconName =
  | "arrow"
  | "arrowUpRight"
  | "menu"
  | "close"
  | "check"
  | "plus"
  | "search"
  | "chevron"
  | "network"
  | "layers"
  | "pulse"
  | "data"
  | "shield"
  | "mail";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export function Icon({ name, size = 20, ...props }: IconProps) {
  const shared = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };

  switch (name) {
    case "arrow":
      return <svg {...shared}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "arrowUpRight":
      return <svg {...shared}><path d="M7 17 17 7M8 7h9v9" /></svg>;
    case "menu":
      return <svg {...shared}><path d="M4 7h16M4 12h16M4 17h11" /></svg>;
    case "close":
      return <svg {...shared}><path d="m6 6 12 12M18 6 6 18" /></svg>;
    case "check":
      return <svg {...shared}><path d="m5 12 4.2 4.2L19 6.7" /></svg>;
    case "plus":
      return <svg {...shared}><path d="M12 5v14M5 12h14" /></svg>;
    case "search":
      return <svg {...shared}><circle cx="10.8" cy="10.8" r="5.8" /><path d="m16 16 4 4" /></svg>;
    case "chevron":
      return <svg {...shared}><path d="m8 10 4 4 4-4" /></svg>;
    case "network":
      return <svg {...shared}><circle cx="5" cy="12" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="19" cy="18" r="2" /><path d="m7 11 10-4M7 13l10 4" /></svg>;
    case "layers":
      return <svg {...shared}><path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" /><path d="m4 12 8 4.5 8-4.5M4 16.5 12 21l8-4.5" /></svg>;
    case "pulse":
      return <svg {...shared}><path d="M3 12h4l2-6 4 12 2-6h6" /></svg>;
    case "data":
      return <svg {...shared}><ellipse cx="12" cy="5" rx="7" ry="2.5" /><path d="M5 5v7c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5M5 12v7c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-7" /></svg>;
    case "shield":
      return <svg {...shared}><path d="M12 3 19 6v5c0 4.3-2.6 8-7 10-4.4-2-7-5.7-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "mail":
      return <svg {...shared}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
  }
}
