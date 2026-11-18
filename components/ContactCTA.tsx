import Link from 'next/link'
import { company } from './content'

export default function ContactCTA() {
  return (
    <section className="bg-navy text-white">
      <div className="max-w-wrap mx-auto px-5 py-16 sm:py-20 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="eyebrow !text-gold mb-3">Free consultation</p>
          <h2 className="h-display text-4xl sm:text-5xl">Tell us about your space.</h2>
          <p className="mt-4 text-lg text-white/80 max-w-lg">
            Send a few details and we&apos;ll follow up to schedule a consultation. Or just call — we answer the phone.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
          <Link href="/contact" className="btn-gold">
            Start a Project
          </Link>
          <a href={company.phoneHref} className="btn-outline-light">
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
