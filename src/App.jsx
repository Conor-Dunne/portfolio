import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-5">
        <Hero />
        <Projects />
        <About />
      </div>
    </>
  );
}

export default App;
