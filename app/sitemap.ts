import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { nextEvent } from "@/lib/next-event";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleEntries = articles.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}${nextEvent.href}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...articleEntries,
  ];
}
