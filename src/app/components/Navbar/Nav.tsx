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
      setScrolledFromTop(window.scrollY >= 50);
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
    <>
      <div id="header">
        <div
          className={`${
            !scrolledFromTop ? "h-8" : "h-8 top-0"
          } bg-gray-200 text-slate-900 flex flex-row justify-around `}
        >
          <div className="ml-8  flex flex-row items-center gap-1 text-sm font-bold">
            <MdEmail className="icons" /> wawaes.109480@deped.gov.ph
          </div>
          <div className="mr-8 mt-1 flex flex-row items-center gap-1 text-sm font-bold ">
            <AiFillPhone className="icons" /> +63123456723
          </div>
        </div>
        <header
          className={`fixed w-full bg-gray-100 flex md:justify-center md:gap-9 justify-between items-center px-4 md:px-12 transition-all duration-200 ${
            !scrolledFromTop ? "h-20 " : "h-14 top-0 shadow-lg"
          }`}
        >
          <Link href="#header">
            <p
              className={`h-12 transform origin-left mt-4 transition md:mr-10 duration-200 text-xl text-slate-900 ${
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
                className="h-8 w-8 text-gray-900"
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
              className={`fixed left-0 right-0 min-h-screen px-4 pt-8 space-y-4 bg-gray-200 text-white transform transition duration-300 ${
                !navOpen
                  ? "translate-x-full"
                  : "translate-x-0 flex flex-col gap-3"
              } md:relative md:flex  md:space-x-10 md:min-h-0 md:px-0 md:py-0 md:space-y-0 md:translate-x-0`}
            >
              <li className="w-100 md:bg-gray-100 bg-gray-100 p-3">
                <Link
                  className="links"
                  href="#header"
                  onClick={() => setNavOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className=" md:bg-gray-100 w-100 bg-gray-100 p-3">
                <Link
                  className="links"
                  href="#header"
                  onClick={() => setNavOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li className="md:bg-gray-100 w-100 bg-gray-100 p-3">
                <Link
                  className="links"
                  href="#header"
                  onClick={() => setNavOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="md:bg-gray-100 w-100 bg-gray-100 p-3">
                <Link
                  className="links"
                  href="#header"
                  onClick={() => setNavOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};
