import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__grid" />
      <div className="shell not-found__inner">
        <p className="eyebrow eyebrow--light"><span />Error 404</p>
        <p className="not-found__number">04<span>04</span></p>
        <h1>Esta ruta no está en el modelo.</h1>
        <p>La página que buscas no existe, cambió de lugar o todavía no forma parte de este sistema.</p>
        <div><Link className="button button--primary" href="/">Ir al inicio <Icon name="arrow" size={17} /></Link><Link className="button button--secondary button--on-dark" href="/soluciones">Ver soluciones</Link><Link className="button button--secondary button--on-dark" href="/investigacion">Investigación</Link><Link className="button button--secondary button--on-dark" href="/contacto">Contacto</Link></div>
      </div>
    </section>
  );
}
