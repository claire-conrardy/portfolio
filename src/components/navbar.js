import React from "react"

export default function Navbar() {
  return (
    <section id="navbar" className="navbar navbar-expand-sm">
      <div className="container justify-content-center">
        <div className="navbar-links">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#technology">Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
