import React from "react"
import About from "../pages/about"
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Navbar() {
  return (
    <section id="navbar" className="navbar-expand-sm">
      <div className="navbar-links">
        <div className="navbar-nav mx-3">
          <ul className="mb-0">
            <li className="nav-item">
              <button onClick={() => scrollTo('#some-id')}>Home</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollTo('#about')}>About</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollTo('#some-id')}>Technologies</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollTo('#some-id')}>Projects</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollTo('#some-id')}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
