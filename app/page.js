"use client"
import React from "react"
import Header from "./Components/Header.jsx"
import AboutHome from "./Components/AboutHome";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutHome />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}
