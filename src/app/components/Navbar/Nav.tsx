"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolledFromTop, setScrolledFromTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledFromTop(window.pageYOffset >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div>
      <div className={`${!scrolledFromTop ? "h-8" : "h-8 top-0"}`}>dada</div>
      <header
        className={`fixed w-full bg-blue-500 flex justify-between items-center px-4 md:px-12 transition-all duration-200 ${
          !scrolledFromTop ? "h-8 mt-3" : "h-14 top-0"
        }`}
      >
        <Link href="/">
          <p
            className={`h-12 transform origin-left transition duration-200 text-xl ${
              !scrolledFromTop ? "scale-75 mt-3" : "scale-100"
            }`}
          >
            LOGO
          </p>
        </Link>
        <nav>
          <button className="md:hidden" onClick={toggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            className={`fixed left-0 right-0 min-h-screen px-4 pt-8 space-y-4 bg-blue-500 text-white transform transition duration-300 ${
              !navOpen ? "translate-x-full" : "translate-x-0"
            } md:relative md:flex md:space-x-10 md:min-h-0 md:px-0 md:py-0 md:space-y-0 md:translate-x-0`}
          >
            <li>
              <Link href="#" onClick={() => setNavOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#features" onClick={() => setNavOpen(false)}>
                Features
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setNavOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setNavOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="pt-32 pb-16 px-8 md:px-12 bg-blue-500">
        <div className="max-w-7xl mx-auto md:flex md:items-center md:justify-between">
          <div className="md:flex-1 md:mr-6">
            <h1 className="font-bold text-4xl md:text-5xl text-white leading-tight">
              The Quickest way to Chat with your Loved Ones
            </h1>
            <p className="mt-4 text-lg text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis aspernatur magni vitae veritatis.
            </p>
          </div>
          <div className="md:flex-1">
            <img
              src="https://res.cloudinary.com/thirus/image/upload/v1632162912/logos/chat_ys7mog.svg"
              alt="Chat with loved ones"
            />
          </div>
        </div>
      </section>
      {/*      <section id="features" className="min-h-screen"></section>
      <section id="about" className="min-h-screen bg-gray-100"></section>
      <section id="contact" className="min-h-screen"></section> */}
    </div>
  );
};
