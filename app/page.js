"use client"
import React from "react"
import Header from "./Components/Header.jsx"
import AboutHome from "./Components/AboutHome";
import Project from "./Components/Project";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutHome />
      <Project />
      <Footer />
    </div>
  )
}
