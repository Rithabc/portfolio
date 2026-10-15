import { motion } from 'motion/react'
import contactData from '../data/contact.json'

const contactDetails = [
  {
    label: 'Email',
    value: contactData.email,
    href: `mailto:${contactData.email}`,
    description: 'Best for opportunities and project ideas.',
  },
  {
    label: 'Phone',
    value: contactData.phone,
    href: `tel:${contactData.phone.replace(/[^\d+]/g, '')}`,
    description: 'Available for a quick conversation.',
  },
  {
    label: 'GitHub',
    value: 'github.com/Rithabc',
    href: contactData.github,
    description: 'Projects, experiments, and source code.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rithvikasapalya',
    href: contactData.linkedin,
    description: 'Connect with me professionally.',
  },
]

function ContactPage() {
  return (
    <main className="min-h-screen bg-base-100 px-4 py-12 text-base-content sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.section
          className="hero rounded-box bg-base-200 px-6 py-16 shadow-sm sm:px-12 lg:px-20 lg:py-24"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-content grid w-full max-w-none gap-12 p-0 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="badge badge-primary badge-outline mb-6 px-4 py-3">Let&apos;s connect</div>
              <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-tight sm:text-8xl">
                Have an idea?
                <span className="mt-2 block text-primary italic">Let&apos;s talk.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-base-content/75 sm:text-xl">
                Whether you&apos;re building something ambitious, looking for a thoughtful developer, or simply want to say hello, I&apos;d be happy to hear from you.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <a className="btn btn-primary btn-lg" href={`mailto:${contactData.email}`}>
                Send an email
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </motion.section>

        <section className="py-16 sm:py-24" aria-labelledby="contact-details-title">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="badge badge-ghost">01 / DETAILS</div>
              <h2 id="contact-details-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Find me here.</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactDetails.map((detail) => (
              <a
                className="card border border-base-content/10 bg-base-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
                href={detail.href}
                key={detail.label}
                target={detail.href.startsWith('http') ? '_blank' : undefined}
                rel={detail.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <div className="card-body gap-2">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{detail.label}</div>
                  <h3 className="card-title break-all">{detail.value}</h3>
                  <p className="text-base-content/65">{detail.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-box border border-base-content/10 bg-base-200 p-8 sm:p-12" aria-labelledby="contact-note-title">
          <div className="max-w-3xl">
            <div className="badge badge-ghost">02 / NOTE</div>
            <h2 id="contact-note-title" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Good conversations make good work.</h2>
            <p className="mt-4 text-lg leading-relaxed text-base-content/70">
              Tell me what you&apos;re working on, what you&apos;re trying to solve, or what you&apos;re curious about. A short message is more than enough to start.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ContactPage
