"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiAcademicCap } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import {
  AiFillPhone,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const Footer = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-green-700" id="contact">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div className="p-5 md:p-0">
            <h2 className="mb-6 text-2  xl font-semibold text-white  uppercase flex flex-row items-center gap-3 ">
              <HiAcademicCap className="icons text-4xl" /> ACADEMICS
            </h2>
            <p className="text-white">
              Praesent vel rutrum purus. Nam vel dui eu sus duis dignissim
              dignissim. Suspenetey disse at ros tecongueconsequat.Fusce sit
              amet rna feugiat.
            </p>

            <div className=" mt-4 space-x-5 hidden md:flex">
              <Link href="#" className="text-white  hover:text-amber-400">
                <AiFillFacebook className="text-2xl" />
                <span className="sr-only">Facebook page</span>
              </Link>

              <Link href="#" className="text-white hover:text-amber-400">
                <AiFillTwitterSquare className="text-2xl" />
                <span className="sr-only">Twitter page</span>
              </Link>

              <Link href="#" className="text-white hover:text-amber-400">
                <BiLogoGmail className="text-2xl" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-gray-200 uppercase">
              Featured Links
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-4 w-100 md:bg-green-700 md:p-0 bg-green-900 p-3 rounded-md">
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-4 w-100 md:bg-green-700 md:p-0 bg-green-900 p-3 rounded-md">
                <Link href="#" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-4 w-100 md:bg-green-700 md:p-0 bg-green-900 p-3 rounded-md">
                <Link href="#" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li className="mb-4 w-100 md:bg-green-700 md:p-0 bg-green-900 p-3 rounded-md">
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-gray-200 uppercase ">
              Information
            </h2>
            <ul className="text-gray-200 font-sans font-medium">
              <li className="mb-4">
                <span className="flex flex-row items-center gap-3 ">
                  <AiFillPhone className="icons" /> (01) 800 433 633
                </span>
              </li>
              <li className="mb-4">
                <span className="flex flex-row items-center gap-3">
                  <MdEmail className="icons" /> info@bostonea.com
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase ">
              Newsletter
            </h2>
            <ul className="text-gray-500  font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  iOSk
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 mb w-100 bg-green-800  md:flex md:items-center md:justify-around">
        <span className="text-sm text-white  sm:text-center">
          © 2023 - 2023. All Rights Reserved.{" "}
          <span className="text-white ml-16"> geronimo</span>
        </span>
        <div className="flex mt-4 space-x-5    justify-center md:mt-0">
          <Link href="#" className="text-white  hover:text-amber-400">
            <AiFillFacebook className="text-2xl" />
            <span className="sr-only">Facebook page</span>
          </Link>

          <Link href="#" className="text-white hover:text-amber-400">
            <AiFillTwitterSquare className="text-2xl" />
            <span className="sr-only">Twitter page</span>
          </Link>

          <Link href="#" className="text-white hover:text-amber-400">
            <BiLogoGmail className="text-2xl" />
            <span className="sr-only">EMAL</span>
          </Link>
        </div>

        <div>
          <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 ${
              scrolled ? "block" : "hidden"
            } bg-green-500 text-white rounded-full p-2  hover:bg-green-600 transition-all duration-300`}
          >
            <BsFillArrowUpCircleFill className="text-2xl" />
          </button>
        </div>
      </div>
    </footer>
  );
};
