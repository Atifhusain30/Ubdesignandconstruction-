import type { Metadata } from 'next'
import './home.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Process from '@/components/Process'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { absolute: 'Dallas–Fort Worth Design-Build Firm | UB Design and Construction' },
  description: 'UB Design and Construction serves Dallas–Fort Worth with commercial build-outs, design and custom millwork.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <div className="ub-home">
      <Navbar />
      <main>
        <Hero />
        <section className="ub-paths" aria-label="Project types">
          <a href="#commercial"><span>01 / Business spaces</span><strong>Commercial construction <span aria-hidden="true">↘</span></strong><p>Design, build-outs and custom millwork.</p></a>
          <a href="#millwork"><span>02 / Fabrication</span><strong>Custom millwork &amp; CNC <span aria-hidden="true">↘</span></strong><p>Cabinetry, decorative panels and architectural woodwork.</p></a>
        </section>
        <Services />
        <Work />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
