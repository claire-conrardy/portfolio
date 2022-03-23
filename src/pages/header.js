import React from "react"
import Navbar from "../components/navbar"

export default function Header() {
  return (
    <div id="header">
      <Navbar />

      <div className="banner">
        <div className="container presentation">
          <h2>Hi, I'm Claire!</h2>
        </div>
      </div>

    </div>
  )
}
