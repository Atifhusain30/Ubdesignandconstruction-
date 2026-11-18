import Link from 'next/link'
import Image from 'next/image'
import { company, services } from './content'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="max-w-wrap mx-auto px-5 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Image src="/images/ub-logo-trimmed.png" alt="UB Design and Construction" width={110} height={80} className="h-16 w-auto bg-white p-1.5" />
          <p className="mt-4 font-heading uppercase tracking-widest text-gold font-semibold">{company.tagline}</p>
          <p className="mt-2 text-sm">Serving {company.serviceArea}.</p>
        </div>
        <div>
          <h3 className="font-heading font-bold uppercase tracking-wider text-white text-lg">Services</h3>
          <ul className="mt-3 space-y-2">
            {services.map((s) => (
              <li key={s.id}>
                <Link href="/#services" className="hover:text-gold">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-bold uppercase tracking-wider text-white text-lg">Contact</h3>
          <ul className="mt-3 space-y-2">
            <li><a href={company.phoneHref} className="hover:text-gold">{company.phone}</a></li>
            <li><a href={`mailto:${company.email}`} className="hover:text-gold break-all">{company.email}</a></li>
            <li><Link href="/contact" className="hover:text-gold">Start a project</Link></li>
            <li><Link href="/gallery" className="hover:text-gold">Project gallery</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="max-w-wrap mx-auto px-5 py-5 text-sm">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
