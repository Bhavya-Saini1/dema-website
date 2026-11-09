import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import {
  bakeSale,
  cmlCaseCompetition,
  demSoiree,
  learnToNetwork,
  redBullWingsClub,
  yecWorkshop,
} from "@/lib/next-event";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleEntries = articles.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const eventEntries = [
    redBullWingsClub,
    yecWorkshop,
    cmlCaseCompetition,
    learnToNetwork,
    bakeSale,
    demSoiree,
  ].map((event, index) => ({
    url: `${siteUrl}${event.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: index < 3 ? 0.9 : 0.6,
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
    ...eventEntries,
    ...articleEntries,
  ];
}
