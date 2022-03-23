import React from "react"
import Header from "./header"
import About from "./about"
import Style from "../styles/style.css"
import 'bootstrap/dist/css/bootstrap.css';


export default function Home() {
  return (
    <main>
      <Header />
      <About />
    </main>
  )
}
