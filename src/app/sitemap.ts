import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/**
 * Gera /sitemap.xml. Como é uma landing page de página única, há apenas a
 * rota raiz; as seções são âncoras (#sobre, #faq, ...) e não URLs próprias.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
