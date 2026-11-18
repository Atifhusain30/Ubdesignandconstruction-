import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { company } from '@/components/content'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: 'UB Design and Construction | Design Firm & Construction Company — DFW',
    template: '%s | UB Design and Construction',
  },
  description:
    'UB Design and Construction is a Dallas–Fort Worth design firm and construction company: interior design and 3D renderings, commercial build-outs, and custom millwork and CNC.',
  openGraph: {
    title: 'UB Design and Construction',
    description: 'Design firm + construction company — we design the space, then we build it. Dallas–Fort Worth.',
    type: 'website',
    url: company.siteUrl,
    images: ['/images/google/lounge.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-palette={process.env.NEXT_PUBLIC_UB_PALETTE || 'navy-gold'} className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
