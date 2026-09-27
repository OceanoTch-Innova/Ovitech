import { ButtonLink } from "@/components/ui/ButtonLink";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  label?: string;
};

export function CtaBand({ eyebrow = "Siguiente conversación", title, description, href = "/contacto", label = "Hablar con OviTech" }: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="cta-band__glow" />
      <div className="shell cta-band__inner">
        <div>
          <p className="eyebrow eyebrow--light"><span />{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div className="cta-band__action"><p>{description}</p><ButtonLink href={href} variant="primary" arrow>{label}</ButtonLink></div>
      </div>
    </section>
  );
}
