import { Icon } from "@/components/ui/Icon";

type Capability = {
  title: string;
  description: string;
  icon?: "network" | "layers" | "pulse" | "data" | "shield";
};

export function CapabilityGrid({ items }: { items: Capability[] }) {
  const fallbackIcons: NonNullable<Capability["icon"]>[] = ["data", "layers", "pulse", "network", "shield"];
  return (
    <div className="capability-grid">
      {items.map((item, index) => (
        <article className="capability-card" key={item.title}>
          <span className="capability-card__icon"><Icon name={item.icon ?? fallbackIcons[index % fallbackIcons.length]} size={20} /></span>
          <span className="capability-card__number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
