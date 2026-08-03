import { Link, NavLink } from 'react-router-dom'
import SearchModal from './SearchModal'

function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 px-4 shadow-sm sm:px-8 lg:px-16">
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
        <NavLink className="btn btn-outline btn-neutral" to="/resume">
          Get in touch
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar