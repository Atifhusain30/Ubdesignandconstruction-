import Link from 'next/link'
import Image from 'next/image'
import { services, commercialProjects } from './content'

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-wrap mx-auto px-5">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">What we do</p>
          <h2 className="h-display text-4xl sm:text-5xl text-navy">Design. Build. Fabricate.</h2>
          <p className="mt-4 text-lg text-stone-text">
            Commercial design, construction and custom fabrication across Dallas–Fort Worth.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <figure className="relative bg-navy min-h-[360px]">
            <Image src={commercialProjects[3].src} alt={commercialProjects[3].alt} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-navy-deep/90 px-4 py-3 text-sm text-white">Salon interior — selected commercial work</figcaption>
          </figure>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-line border border-stone-line">
          {services.map((s, i) => (
            <article id={s.id} key={s.id} className="bg-white p-8 sm:p-10 flex flex-col">
              <span className="font-heading font-bold text-gold text-5xl leading-none">0{i + 1}</span>
              <h3 className="font-heading font-bold uppercase text-3xl text-navy mt-5">{s.title}</h3>
              <p className="mt-3 text-stone-text leading-relaxed flex-1">{s.blurb}</p>
              <Link href="/contact" className="mt-6 font-heading font-semibold uppercase tracking-wider text-navy hover:text-gold-dark">
                Start a project →
              </Link>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
