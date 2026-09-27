import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url || "http://localhost:3000";

export const siteUrl = new URL(configuredUrl);

type PageMetadata = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function createMetadata({ title, description, path = "/", type = "website", publishedTime }: PageMetadata): Metadata {
  const url = new URL(path, siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: siteConfig.locale.replace("-", "_"),
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: `${title} | ${siteConfig.name}`, description },
  };
}

export function toAbsoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
