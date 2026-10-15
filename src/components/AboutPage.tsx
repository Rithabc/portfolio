import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import heroAsset from '../assets/hero.png'

const principles = [
  ['01', 'Think with purpose', 'The best solutions come from asking better questions, understanding the details, and turning complexity into clarity.'],
  ['02', 'Build with intelligence', 'I value thoughtful decisions, continuous learning, and technology that makes products more useful and reliable.'],
  ['03', 'Work better together', 'Great work grows from open communication, shared ownership, and a team that makes room for every perspective.'],
]

function AboutPage() {
  return (
    <main className="about-page mx-auto min-w-0 max-w-7xl overflow-x-hidden px-4 py-12 sm:px-8 lg:px-12">
      <section className="hero min-h-[32rem] rounded-box bg-base-200 px-4 py-12 shadow-sm sm:px-10 lg:px-16">
        <motion.div
          className="hero-content grid w-full max-w-none gap-12 p-0 lg:grid-cols-[1.15fr_0.85fr]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about-hero-copy flex flex-col items-start gap-6">
            <div className="badge badge-primary badge-outline gap-2 px-4 py-3">● A little context</div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">Curious about how things <span className="text-primary italic">work.</span></h1>
            <p className="max-w-2xl text-lg leading-relaxed text-base-content/75 sm:text-xl">
              I&apos;m Rithvika Sapalya, a software developer who likes moving between the visible and invisible parts of a product.
              I build thoughtful interfaces, dependable services, and the connective tissue between them.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/projects" className="btn btn-primary">See my work <span aria-hidden="true">↗</span></Link>
              <a href="mailto:rithvikasapalya@gmail.com" className="btn btn-outline">Say hello <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <motion.div
            className="card border border-base-content/10 bg-base-100 shadow-xl"
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <figure className="aspect-[4/3] overflow-hidden bg-base-300 p-6 sm:p-10"><img className="h-full w-full object-contain" src={heroAsset} alt="Layered computing hardware illustration" /></figure>
            <div className="card-body gap-1 p-6">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Current mode</div>
              <h2 className="card-title">Full-stack, by instinct.</h2>
              <p className="text-base-content/65">From the screen to the silicon.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="grid gap-10 py-20 lg:grid-cols-[0.7fr_1.3fr]" aria-labelledby="about-focus-title">
        <div>
          <div className="badge badge-ghost">01 / NOW</div>
          <h2 id="about-focus-title" className="mt-4 max-w-md text-4xl font-black tracking-tight sm:text-5xl">The kind of work I want more of.</h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-base-content/75">
          <p>I&apos;m especially drawn to products where the details matter: tools that make complex information easier to understand, systems that need to stay dependable under pressure, and teams that care about doing the thinking before doing the shipping.</p>
          <p>My sweet spot is the space between product sense and technical depth. I can shape the interaction, then stay with the problem until the data model and deployment story make sense too.</p>
        </div>
      </section>

      <section className="rounded-box bg-base-200 p-6 py-12 sm:p-12" aria-labelledby="about-principles-title">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="badge badge-ghost">02 / HOW</div>
            <h2 id="about-principles-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">A few things I believe.</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map(([number, title, description]) => (
            <article className="card border border-base-content/10 bg-base-100 shadow-sm" key={number}>
              <div className="card-body">
                <div className="badge badge-primary badge-outline">{number}</div>
                <h3 className="card-title mt-3">{title}</h3>
                <p className="text-base-content/70">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-20" aria-labelledby="about-toolkit-title">
        <div>
          <div className="badge badge-ghost">03 / TOOLS</div>
          <h2 id="about-toolkit-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">A practical toolkit.</h2>
        </div>
        <div className="stats stats-vertical w-full min-w-0 max-w-full overflow-hidden border border-base-content/10 bg-base-100 shadow-sm sm:stats-horizontal">
          <div className="stat min-w-0"><div className="stat-title">Language</div><div className="stat-value text-primary">Java</div><div className="stat-desc">Object-oriented development</div></div>
          <div className="stat min-w-0"><div className="stat-title">Focus</div><div className="stat-value text-accent">ML</div><div className="stat-desc">Intelligent product ideas</div></div>
          <div className="stat min-w-0"><div className="stat-title">Language</div><div className="stat-value text-secondary">Python</div><div className="stat-desc">Automation · APIs · data</div></div>
          <div className="stat min-w-0"><div className="stat-title">Language</div><div className="stat-value">C</div><div className="stat-desc">Systems · memory · performance</div></div>
          <div className="stat min-w-0"><div className="stat-title">Frontend</div><div className="stat-value text-primary">React</div><div className="stat-desc">Interactive web experiences</div></div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage