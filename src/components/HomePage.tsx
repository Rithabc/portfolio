import TypingWords from './TypingWords'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import {
  siCplusplus,
  siCss,
  siHtml5,
  siJavascript,
  siNodedotjs,
  siPython,
  siReact,
  siTypescript,
  type SimpleIcon
} from 'simple-icons'

const technologies: { name: string; icon: SimpleIcon }[] = [
  { name: 'JavaScript', icon: siJavascript },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'React', icon: siReact },
  { name: 'Python', icon: siPython },
  { name: 'C++', icon: siCplusplus },
  { name: 'HTML5', icon: siHtml5 },
  { name: 'CSS', icon: siCss },
  { name: 'Node.js', icon: siNodedotjs }
]

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
            <div className="aura aura-dual inline-block w-fit text-[#51362f]">
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
            <Link to="/projects" className="home-cta home-cta-primary">
              See the work <span aria-hidden="true">→</span>
            </Link>
            <Link to="/resume" className="home-cta">
              Résumé <span aria-hidden="true">↗</span>
            </Link>
          </motion.div>
        </motion.section>

        <motion.section className="home-type-panel" aria-label="Typing name panel" variants={heroItemVariants}>
          <div className="home-type-card">
            <TypingWords />
          </div>
        </motion.section>
      </motion.div>

      <section className="home-tech-marquee" aria-label="Technologies">
        <div className="home-tech-marquee-label">Working with</div>
        <div className="home-tech-marquee-window">
          <div className="home-tech-marquee-track">
            {[...technologies, ...technologies].map(({ name, icon }, index) => (
              <div
                key={`${name}-${index}`}
                className="home-tech-item"
                aria-label={name}
                aria-hidden={index >= technologies.length}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={icon.path} />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage