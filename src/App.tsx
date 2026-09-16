import './App.css'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Navbar from './components/Navbar'
import AboutPage from './components/AboutPage.tsx'
import HomePage from './components/HomePage'
import ProjectsPage from './components/ProjectsPage.tsx'
import ProjectPage from './components/ProjectPage'
import ResumePage from './components/ResumePage'

function App() {
  const location = useLocation()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const titleMap: Record<string, string> = {
      '/about': 'Rithvika • About',
      '/projects': 'Rithvika • Projects',
      '/resume': 'Rithvika • Resume',
    }

    if (location.pathname === '/') {
      document.title = 'Rithvika'
      return
    }

    if (location.pathname.startsWith('/projects/')) {
      document.title = 'Rithvika • Project'
      return
    }

    document.title = titleMap[location.pathname] ?? 'Rithvika'
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 320)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 170, damping: 20, mass: 0.8 }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>

      {showScrollTop && (
        <motion.button
          type="button"
          className="btn btn-circle btn-primary fixed bottom-6 right-6 z-40 shadow-lg"
          aria-label="Scroll to top"
          title="Scroll to top"
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </>
  )
}

export default App
