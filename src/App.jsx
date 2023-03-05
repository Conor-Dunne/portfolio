import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-20">
        <Hero />
        <Projects />
      </div>
    </>
  );
}

export default App;
