"use client";

import About from "./templates/About";
import Hero from "./templates/Hero";
import Welcome from "./templates/Welcome";

export default function Home() {
  return (
    <div className="bg-white ">
      <Hero />
      <Welcome />
      <About />
    </div>
  );
}
