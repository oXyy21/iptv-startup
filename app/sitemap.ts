import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://your-iptv-startup.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ]
}
