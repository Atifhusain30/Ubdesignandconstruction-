import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactCTA from '@/components/ContactCTA'
import { commercialProjects } from '@/components/content'

export const metadata: Metadata = {
  title: 'Project Gallery',
  description: 'Commercial spaces designed and built by UB Design and Construction across Dallas–Fort Worth: restaurants, lounges, salons, cafés and bars.',
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white border-b border-stone-line">
          <div className="max-w-wrap mx-auto px-5 py-14 sm:py-20">
            <p className="eyebrow mb-3">Gallery</p>
            <h1 className="h-display text-5xl sm:text-6xl text-navy">Commercial build-outs</h1>
            <p className="mt-4 text-lg text-stone-text max-w-2xl">
              Restaurants, bars, salons, lounges and cafés we&apos;ve designed and built across Dallas–Fort Worth.
            </p>
          </div>
        </section>

        <section className="bg-stone py-12 sm:py-16">
          <div className="max-w-wrap mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commercialProjects.map((p, i) => (
              <figure key={p.src} className="relative aspect-[4/3] overflow-hidden bg-navy">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" priority={i < 3} className="object-cover" />
                <figcaption className="absolute left-0 bottom-0 bg-navy text-white font-heading uppercase tracking-wider text-sm px-3 py-1.5">{p.type}</figcaption>
              </figure>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link href="/contact" className="btn-gold">Start your project</Link>
          </p>
        </section>
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
