import './App.css'
import type { MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import KeyboardModel from './components/KeyboardModel'

function App() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 500, damping: 30 })
  const springY = useSpring(y, { stiffness: 500, damping: 30 })

  const handleTouchMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2

    x.set(offsetX / 5)
    y.set(offsetY / 5)
  }

  const resetTouchPosition = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <>
    <div className="main-padding navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Projects</a></li>
      <li><a>About Me</a></li>
      
    </ul>
  </div>
  
  <div className="menu menu-horizontal gap-2 navbar-end">
    <div> 
    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
     
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" className="grow" placeholder="Search" />
  
</label>
</div>
    <button className="btn btn-ghost">Resume</button>
    <motion.button
      onMouseMove={handleTouchMove}
      onMouseLeave={resetTouchPosition}
      whileHover={{ scale: 1.08 }}
      style={{ x: springX, y: springY }}
      className="btn btn-outline btn-neutral hover:!bg-transparent hover:!text-neutral hover:!border-neutral"
    >
      Get in touch
    </motion.button>
  </div>
</div>
<div className="main-padding model-section">
  <div className="model-card">
    <KeyboardModel />
  </div>
</div>
</>


  )
}

export default App
