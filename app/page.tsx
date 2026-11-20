import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { company, process as projectProcess } from '@/components/content'
import HeroPlan from '@/components/HeroPlan'
import './commercial-home.css'
import './plan-motion.css'

export const metadata: Metadata = {
  title: { absolute: 'Commercial Design-Build in Dallas–Fort Worth | UB Design and Construction' },
  description: 'UB Design and Construction provides commercial design, build-outs and custom millwork across Dallas–Fort Worth.',
  alternates: { canonical: '/' },
}

const capabilities = [
  { id: 'design', title: 'Design & planning', description: 'Explore layouts, finishes and 3D renderings before construction begins.' },
  { id: 'commercial', title: 'Commercial build-outs', description: 'Build out interiors for restaurants, cafés, salons and other businesses.' },
  { id: 'millwork', title: 'Custom millwork & CNC', description: 'Fit out your space with custom cabinetry, decorative panels and architectural woodwork.' },
] as const

const projects = {
  lounge: { title: 'Lounge interior', sector: 'Hospitality', alt: 'Hospitality lounge with pendant lights, red seating and patterned wood screens', width: 1200, height: 900 },
  salon: { title: 'Salon interior', sector: 'Commercial', alt: 'Salon with arched mirror stations and a chandelier', width: 850, height: 811 },
  cafe: { title: 'Café interior', sector: 'Hospitality', alt: 'Café seating with wood finishes and a circular moon mural', width: 850, height: 739 },
} as const

function ProjectPhoto({ name }: { name: keyof typeof projects }) {
  const { title, sector, alt, width, height } = projects[name]
  return (
    <figure className={name === 'lounge' ? 'feature' : undefined}>
      <Image src={`/images/commercial-home/${name}.webp`} alt={alt} width={width} height={height} />
      <figcaption><strong>{title}</strong><span>{sector}</span></figcaption>
    </figure>
  )
}

function Arrow({ children = '↗' }: { children?: string }) {
  return <span aria-hidden="true">{children}</span>
}

export default function Home() {
  return (
    <div className="commercial-home">
      <a className="skip" href="#main">Skip to content</a>
      <header>
        <div className="wrap top">
          <Link href="/" className="brand">
            <Image src="/images/commercial-home/logo.webp" alt={company.name} width={190} height={138} priority />
            <span aria-hidden="true">UB DESIGN &amp;<br />CONSTRUCTION</span>
          </Link>
          <nav aria-label="Main">
            <a href="#services">Services</a>
            <a href="#work">Projects</a>
            <Link className="button" href="/contact/">Start a project <Arrow /></Link>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero">
          <div className="hero-plan-backdrop" aria-hidden="true"><HeroPlan /></div>
          <div className="wrap opening">
            <div>
              <p className="label"><span className="square" aria-hidden="true" /> {company.serviceArea}</p>
              <h1>Commercial design<br className="desktop" /> &amp; construction.</h1>
              <p className="lede">From early planning to the final finish, UB designs and builds commercial spaces for businesses across Dallas–Fort Worth.</p>
              <div className="actions">
                <Link href="/contact/" className="button inverse">Discuss your project <Arrow /></Link>
                <a href="#work" className="under">See our work <Arrow>↓</Arrow></a>
              </div>
            </div>
            <aside aria-label="Capabilities at a glance">
              <p className="label">What we do</p>
              {capabilities.map(({ id, title }, index) => (
                <a href={`#${id}`} key={id}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{title}<b aria-hidden="true">↘</b></a>
              ))}
            </aside>
          </div>
        </section>
        <section className="wrap section" id="work">
          <div className="section-head">
            <div><p className="label">01 / Commercial portfolio</p><h2>Selected work</h2></div>
            <div className="section-links">
              <p>Explore the spaces and details behind UB’s commercial work.</p>
              <Link href="/gallery/" className="under">View all projects <Arrow /></Link>
            </div>
          </div>
          <div className="projects">
            <ProjectPhoto name="lounge" />
            <div className="secondary"><ProjectPhoto name="salon" /><ProjectPhoto name="cafe" /></div>
          </div>
        </section>
        <section className="services" id="services">
          <div className="wrap section">
            <div className="section-head"><div><p className="label">02 / Capabilities</p><h2>How we can help</h2></div></div>
            <div className="service-list">
              {capabilities.map(({ id, title, description }, index) => (
                <article id={id} key={id}>
                  <span className="label" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="wrap section" id="process">
          <div className="section-head"><div><p className="label">03 / Our process</p><h2>From planning to walkthrough</h2></div></div>
          <ol className="process-list">
            {projectProcess.map(({ step, title, text }) => (
              <li key={step}><span className="label" aria-hidden="true">{step}</span><h3>{title}</h3><p>{text}</p></li>
            ))}
          </ol>
        </section>
        <section className="wrap section contact" id="contact">
          <div><p className="label">04 / Project inquiries</p><h2>Tell us about your project.</h2></div>
          <div>
            <p>Share your project location, the type of space, and any timeline you’re working toward.</p>
            <Link className="button" href="/contact/">Start a project <Arrow /></Link>
          </div>
        </section>
      </main>
      <footer className="wrap"><span>{company.name}</span><span>{company.serviceArea}</span></footer>
    </div>
  )
}
