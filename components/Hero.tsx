import Link from 'next/link'
import Blueprint from './Blueprint'

export default function Hero() {
  return (
    <section className="ub-hero" aria-labelledby="home-title">
      <picture className="ub-hero-photo">
        <source media="(max-width: 767px)" srcSet="/images/hero-lounge-800.webp" />
        <img src="/images/hero-lounge-1600.webp" width={1600} height={1200} fetchPriority="high"
          alt="Lounge with red seating, pendant lighting and intricate wood screens" />
      </picture>
      <div className="ub-hero-shade" aria-hidden="true" />
      <div className="ub-hero-inner">
        <Blueprint />
        <div className="ub-hero-copy">
          <p className="ub-kicker">Design &amp; construction / Dallas–Fort Worth</p>
          <h1 id="home-title">Design and construction, under one roof.</h1>
          <p className="ub-hero-summary">UB is a Dallas–Fort Worth design-build firm for commercial projects, from planning and design through construction and custom millwork.</p>
          <div className="ub-hero-actions">
            <Link href="/contact/" className="ub-primary">Discuss your project <span aria-hidden="true">↗</span></Link>
            <a href="#services" className="ub-secondary">Explore services <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}
