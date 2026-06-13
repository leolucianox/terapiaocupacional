import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/** Gera /robots.txt — libera indexação e aponta para o sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
