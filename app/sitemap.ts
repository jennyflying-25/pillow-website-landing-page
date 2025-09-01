import { MetadataRoute } from 'next'

const BASE_URL = 'https://luxetextiles.funjoyslime.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
