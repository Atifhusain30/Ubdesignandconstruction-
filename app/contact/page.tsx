import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EstimateForm from '@/components/EstimateForm'
import { company } from '@/components/content'

export const metadata: Metadata = {
  title: 'Start a Project',
  description: 'Contact UB Design and Construction — interior design, commercial build-outs and custom millwork in Dallas–Fort Worth.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-stone">
        <div className="max-w-wrap mx-auto px-5 py-14 sm:py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">Start a project</p>
            <h1 className="h-display text-5xl sm:text-6xl text-navy">Let&apos;s talk about your space.</h1>
            <p className="mt-4 text-lg text-stone-text">
              Fill out the form and we&apos;ll reach out to schedule a consultation. Prefer to talk? Call us directly.
            </p>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="label">Phone</dt>
                <dd><a href={company.phoneHref} className="text-xl font-semibold text-navy hover:text-gold-dark">{company.phone}</a></dd>
              </div>
              <div>
                <dt className="label">Email</dt>
                <dd><a href={`mailto:${company.email}`} className="text-navy hover:text-gold-dark break-all">{company.email}</a></dd>
              </div>
              <div>
                <dt className="label">Service area</dt>
                <dd className="text-stone-text">{company.serviceArea}</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <EstimateForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
