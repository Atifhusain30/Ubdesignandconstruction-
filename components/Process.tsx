import Image from 'next/image'
import { process, designToBuild } from './content'

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white">
      <div className="max-w-wrap mx-auto px-5 mb-16 sm:mb-20">
        <p className="eyebrow mb-3">Design to build</p>
        <h2 className="h-display text-4xl sm:text-5xl text-navy">We design it, then we build it.</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <figure className="relative aspect-[4/3] bg-navy overflow-hidden">
            <Image src={designToBuild.rendering.src} alt={designToBuild.rendering.alt} fill sizes="(min-width:640px) 50vw, 100vw" className="object-cover" />
            <figcaption className="absolute left-0 bottom-0 bg-navy text-white font-heading uppercase tracking-wider px-4 py-2">01 · Design rendering</figcaption>
          </figure>
          <figure className="relative aspect-[4/3] bg-navy overflow-hidden">
            <Image src={designToBuild.progress.src} alt={designToBuild.progress.alt} fill sizes="(min-width:640px) 50vw, 100vw" className="object-cover" />
            <figcaption className="absolute left-0 bottom-0 bg-gold text-navy-deep font-heading uppercase tracking-wider px-4 py-2">02 · Under construction</figcaption>
          </figure>
        </div>
        <p className="mt-3 text-sm text-stone-text">Same restaurant: the design rendering and the space taking shape on site.</p>
      </div>
      <div className="max-w-wrap mx-auto px-5 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="h-display text-4xl sm:text-5xl text-navy">No surprises, start to finish</h2>
          <p className="mt-4 text-lg text-stone-text">
            See how we move from an initial consultation to the final walkthrough.
          </p>
        </div>
        <ol className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {process.map((p) => (
            <li key={p.step} className="border-t-4 border-gold pt-5">
              <span className="font-heading font-bold text-navy/40 text-xl">{p.step}</span>
              <h3 className="font-heading font-bold uppercase text-2xl text-navy mt-1">{p.title}</h3>
              <p className="mt-2 text-stone-text leading-relaxed">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
