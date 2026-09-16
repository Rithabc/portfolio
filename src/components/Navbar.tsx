import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import SearchModal from './SearchModal'

const MotionNavLink = motion(NavLink)
const confettiPieces = Array.from({ length: 16 }, (_, index) => index)

function Navbar() {
  const [confettiBurst, setConfettiBurst] = useState(0)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)

  useEffect(() => {
    if (!confettiBurst) {
      return
    }

    const timeoutId = window.setTimeout(() => setConfettiBurst(0), 850)
    return () => window.clearTimeout(timeoutId)
  }, [confettiBurst])

  useEffect(() => {
    const handleScroll = () => setIsHeaderHidden(window.scrollY > 96)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="navbar sticky top-0 z-50 bg-base-100 px-4 shadow-sm sm:px-8 lg:px-16"
      animate={{ opacity: isHeaderHidden ? 0 : 1, y: isHeaderHidden ? -96 : 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      style={{ pointerEvents: isHeaderHidden ? 'none' : 'auto' }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/resume">Résumé</NavLink></li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to="/">
            Rithvika Sapalya    
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div role="tablist" className="tabs tabs-border">
          <NavLink
            to="/projects"
            role="tab"
            className={({ isActive }) => `tab ${isActive ? 'tab-active' : ''}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            role="tab"
            className={({ isActive }) => `tab ${isActive ? 'tab-active' : ''}`}
          >
            About
          </NavLink>
        </div>
      </div>

      <div className="navbar-end gap-4">
        <SearchModal />
        <NavLink className="hidden lg:inline-flex" to="/resume">
          Résumé
        </NavLink>
        <MotionNavLink
          className="btn btn-outline btn-neutral navbar-contact-link relative"
          to="/resume"
          onClick={() => setConfettiBurst((burst) => burst + 1)}
          whileHover="hovered"
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 420, damping: 24 }}
        >
          <span className="navbar-contact-label">
            <span className="navbar-contact-track" aria-hidden="true">
              <span>Get in touch</span>
              <span>Let&apos;s talk</span>
            </span>
            <span className="sr-only">Get in touch</span>
          </span>
          {confettiBurst > 0 && (
            <span className="navbar-confetti" aria-hidden="true">
              {confettiPieces.map((piece) => {
                const angle = (piece / confettiPieces.length) * Math.PI * 2
                const distance = 28 + (piece % 4) * 10

                return (
                  <motion.span
                    key={`${confettiBurst}-${piece}`}
                    className="navbar-confetti-piece"
                    initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                    animate={{
                      opacity: 0,
                      x: Math.cos(angle) * distance,
                      y: Math.sin(angle) * distance - 18,
                      rotate: piece % 2 === 0 ? 160 : -160,
                      scale: 0.7
                    }}
                    transition={{ duration: 0.75, ease: 'easeOut' }}
                  />
                )
              })}
            </span>
          )}
        </MotionNavLink>
      </div>
    </motion.div>
  )
}

export default Navbar