"use client";

import Carousel from "./components/Carousel/Carousel";
import About from "./templates/About";
import Hero from "./templates/Hero";
import Welcome from "./templates/Welcome";

export default function Home() {
  return (
    <div className="bg-white ">
      <Hero />
      <Carousel />
      <Welcome />
      <About />
    </div>
  );
}
