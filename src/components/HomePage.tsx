import TypingWords from './TypingWords'
import { motion } from 'motion/react'

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.12
    }
  }
}

const heroItemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 170,
      damping: 18,
      mass: 0.8
    }
  }
}

function HomePage() {
  return (
    <main className="home-hero-shell">
      <motion.div
        className="home-hero"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section className="home-copy" variants={heroContainerVariants}>
          <motion.div variants={heroItemVariants}>
            <div className="aura aura-dual inline-block w-fit text-orange-600">
              <div className="card card-compact w-fit bg-base-100 text-base-content">
                <div className="card-body px-4 py-2">
                  <div className="home-eyebrow">Open to software roles</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1 className="home-headline" variants={heroItemVariants}>
            I build the
            <br />
            whole stack,
            <br />
            from the screen
            <br />
            to the <span className="home-highlight">silicon.</span>
          </motion.h1>

          <motion.p className="home-description" variants={heroItemVariants}>
            I build full-stack software people actually use, and I understand it the whole way down, to the systems most
            apps just sit on top of. Give me the hardest problem in your stack, the one that has to hold, and I&apos;ll own it
            end to end.
          </motion.p>

          <motion.div className="home-actions" variants={heroItemVariants}>
            <a href="/projects" className="home-cta home-cta-primary">
              See the work <span aria-hidden="true">→</span>
            </a>
            <a href="/resume" className="home-cta">
              Résumé <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </motion.section>

        <motion.section className="home-type-panel" aria-label="Typing name panel" variants={heroItemVariants}>
          <div className="home-type-card">
            <TypingWords />
          </div>
        </motion.section>
      </motion.div>
    </main>
  )
}

export default HomePage