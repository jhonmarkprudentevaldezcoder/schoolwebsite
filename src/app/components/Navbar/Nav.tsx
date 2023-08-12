"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

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
    <div id="header">
      <div
        className={`${
          !scrolledFromTop ? "h-8" : "h-8 top-0"
        } bg-green-700 text-gray-300 flex flex-row justify-between `}
      >
        <div className="ml-8  flex flex-row items-center gap-2">
          <MdEmail className="icons" /> info@academics.com
        </div>
        <div className="mr-8 mt-1 flex flex-row items-center gap-1">
          <AiFillPhone className="icons" /> + 123 456 78910
        </div>
      </div>
      <header
        className={`fixed w-full bg-green-600 flex md:justify-around justify-between items-center px-4 md:px-12 transition-all duration-200 ${
          !scrolledFromTop ? "h-20 " : "h-14 top-0"
        }`}
      >
        <Link href="#header">
          <p
            className={`h-12 transform origin-left mt-4 transition duration-200 text-xl text-white ${
              !scrolledFromTop ? "scale-75" : "scale-100 "
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
            className={`fixed left-0 right-0 min-h-screen px-4 pt-8 space-y-4 bg-green-600 text-white transform transition duration-300 ${
              !navOpen
                ? "translate-x-full"
                : "translate-x-0 flex flex-col gap-3 "
            } md:relative md:flex  md:space-x-10 md:min-h-0 md:px-0 md:py-0 md:space-y-0 md:translate-x-0`}
          >
            <li>
              <Link
                className="links"
                href="#header"
                onClick={() => setNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="links"
                href="#features"
                onClick={() => setNavOpen(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="links"
                href="#about"
                onClick={() => setNavOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="links"
                href="#contact"
                onClick={() => setNavOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="pt-32 pb-16 px-8 md:px-12 bg-green-600 banner">
        <div className="max-w-7xl mx-auto md:flex md:items-center md:justify-between">
          <div className="md:flex-1 md:mr-6">
            <h1 className="font-bold text-4xl md:text-5xl text-white leading-tight">
              aspernatur magni vitae veritatis.
            </h1>
            <p className="mt-4 text-lg text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis aspernatur magni vitae veritatis.
            </p>
          </div>
          <div className="md:flex-1">S</div>
        </div>
      </section>
      {/*      <section id="features" className="min-h-screen"></section>
      <section id="about" className="min-h-screen bg-gray-100"></section>
      <section id="contact" className="min-h-screen"></section> */}
    </div>
  );
};
