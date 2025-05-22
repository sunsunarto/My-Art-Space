"use client"
import React from "react"
import Header from "./Components/Header.jsx"
import AboutHome from "./Components/AboutHome";
import Project from "./Components/Project";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutHome />
      <Project />
    </div>
  )
}
