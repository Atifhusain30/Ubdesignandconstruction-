'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { company } from './content'

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#work', label: 'Our Work' },
  { href: '/#process', label: 'Process' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-line">
      <div className="bg-navy text-white text-sm">
        <div className="max-w-wrap mx-auto px-5 h-9 flex items-center justify-between">
          <span className="font-heading uppercase tracking-widest font-semibold">{company.tagline}</span>
          <a href={company.phoneHref} className="font-semibold hover:text-gold">
            Call {company.phone}
          </a>
        </div>
      </div>

      <nav className="max-w-wrap mx-auto px-5 h-20 flex items-center justify-between" aria-label="Main">
        <Link href="/" className="flex items-center gap-3" aria-label="UB Design and Construction home">
          <Image src="/images/ub-logo-trimmed.png" alt="UB Design and Construction" width={88} height={64} priority className="h-14 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="font-heading font-semibold uppercase tracking-wider text-navy text-lg hover:text-gold-dark">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold !py-2.5 !text-base">
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-7 h-0.5 bg-navy transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-7 h-0.5 bg-navy transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-7 h-0.5 bg-navy transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="lg:hidden absolute left-0 right-0 top-full h-[calc(100dvh-116px)] bg-white border-t border-stone-line overflow-y-auto">
          <div className="px-5 py-6 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-heading font-bold uppercase text-2xl text-navy py-3 border-b border-stone-line">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold mt-6">
              Start a Project
            </Link>
            <a href={company.phoneHref} className="btn-outline mt-3">
              Call {company.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
