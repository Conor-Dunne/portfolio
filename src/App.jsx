import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-24 max-w-6xl mx-auto px-5">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
