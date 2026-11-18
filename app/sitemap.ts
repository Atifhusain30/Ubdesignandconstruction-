import type { MetadataRoute } from 'next'
import { company } from '@/components/content'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return ['/', '/gallery/', '/contact/'].map((p) => ({
    url: `${company.siteUrl}${p}`,
    lastModified: now,
  }))
}
