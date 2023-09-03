import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div id="About" className="mb-12">
      <div
        className="h-80 bg-gradient-to-r from-blue-900 to-blue-500 relative"
        style={{
          backgroundImage: "url('/images/bga.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Replace with the actual image path
        }}
      >
        <span className=" flex items-center">
          <h1>About Us</h1>
          <p></p>
        </span>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col p-4 gap-8 md:w-1/2 lg:w-3/4">
          <div className="flex flex-col gap-5">
            <span className="font-bold text-[#051c40] text-3xl uppercase">
              Who We Are
            </span>
            <p>
              Tmply dummy text of the printing and typesetting indust Lorem
              Ipsum has been theindustry's standard dummy text ever since simply
              dummy text of the printing and etypesetting industry. Lorem Ipsum
              has been the induststandard dummy text ever since en an unknown
              printer took a galley of type scrambledmaining.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold text-[#051c40] text-3xl uppercase">
              What We Do
            </span>
            <p>
              Tmply dummy text of the printing and typesetting indust Lorem
              Ipsum has been theindustry's standard dummy text ever since simply
              dummy text of the printing and etypesetting industry. Lorem Ipsum
              has been the induststandard dummy text ever since en an unknown
              printer took a galley of type scrambledmaining.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 p-5 flex items-center">
          <div
            className="h-80 bg-gradient-to-r from-blue-900 to-blue-500 relative w-full p-5"
            style={{
              backgroundImage: "url('/images/about.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover", // Replace with the actual image path
            }}
          >
            <h1>About Us</h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
