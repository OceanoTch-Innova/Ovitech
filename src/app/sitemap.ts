import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { siteUrl } from "@/lib/seo";

const staticRoutes = ["/", "/nosotros", "/soluciones", "/soluciones/digital-twin", "/soluciones/agtwins", "/soluciones/bluetwins", "/soluciones/coffee-twins", "/tecnologia", "/investigacion", "/contacto", "/politica-de-privacidad", "/terminos-y-condiciones", "/cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path) => ({ url: new URL(path, siteUrl).toString(), lastModified: new Date(), changeFrequency: path === "/" ? "weekly" as const : "monthly" as const, priority: path === "/" ? 1 : 0.7 })),
    ...articles.map((article) => ({ url: new URL(`/investigacion/${article.slug}`, siteUrl).toString(), lastModified: new Date(article.date), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
