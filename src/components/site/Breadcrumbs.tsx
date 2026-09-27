import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Migas de pan" className="breadcrumbs">
      <Link href="/">Inicio</Link>
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="breadcrumbs__item">
          <Icon name="arrow" size={12} />
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
