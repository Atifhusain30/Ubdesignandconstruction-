import Image from 'next/image'
import Link from 'next/link'
import { commercialProjects } from './content'

// Hand-picked spread for the homepage: 1 large + 4 supporting.
const picks = [1, 0, 14, 3, 9].map((i) => commercialProjects[i])

export default function Work() {
  const [lead, ...rest] = picks
  return (
    <section id="work" className="py-20 sm:py-28 bg-stone">
      <div className="max-w-wrap mx-auto px-5">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Recent commercial work</p>
            <h2 className="h-display text-4xl sm:text-5xl text-navy">Spaces we&apos;ve built</h2>
          </div>
          <Link href="/gallery" className="font-heading font-semibold uppercase tracking-wider text-navy hover:text-gold-dark text-lg">
            View full gallery →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <figure className="col-span-2 row-span-2 relative aspect-[4/5] lg:aspect-auto lg:min-h-[560px] overflow-hidden bg-navy">
            <Image src={lead.src} alt={lead.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            <figcaption className="absolute left-0 bottom-0 bg-navy text-white font-heading uppercase tracking-wider px-4 py-2">{lead.type}</figcaption>
          </figure>
          {rest.map((p) => (
            <figure key={p.src} className="relative aspect-square overflow-hidden bg-navy">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
              <figcaption className="absolute left-0 bottom-0 bg-navy text-white font-heading uppercase tracking-wider text-sm px-3 py-1.5">{p.type}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
