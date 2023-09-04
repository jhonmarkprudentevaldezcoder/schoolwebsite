import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div id="About" className="mb-12 mt-12">
      <div
        className="h-80 bg-gradient-to-r from-blue-900 to-blue-500  "
        style={{
          backgroundImage: "url('/images/bga.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="flex flex-col md:flex-row justify-center gap-24 md:gap-9">
        <div className="flex flex-col py-4 gap-1 md:w-1/2 lg:w-1/4">
          <div className="flex flex-col gap-5 md:py-5 lg:py-12   ">
            <span className="font-bold text-[#051c40] text-3xl uppercase px-5 md:px-0 ">
              WHAT WE OFFER
            </span>
            <p className="text-sm px-5 md:px-0 ">
              Tmply dummy text of the printing and typesetting indust Lorem
              Ipsum has been theindustrys standard dummy text ever since simply
              dummy text of the printing and etypesetting industry. Lorem Ipsum
              has been the induststandard dummy text ever since en an unknown
              printer took a galley of type scrambledmaining.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:py-5 lg:py-12 mt-12 md:mt-0">
            <span className="font-bold text-[#051c40] text-3xl uppercase px-5 md:px-0 ">
              What We Do
            </span>
            <p className="text-sm px-5 md:px-0 ">
              Tmply dummy text of the printing and typesetting indust Lorem
              Ipsum has been theindustrys standard dummy text ever since simply
              dummy text of the printing and etypesetting industry. Lorem Ipsum
              has been the induststandard dummy text ever since en an unknown
              printer took a galley of type scrambledmaining.
            </p>
          </div>
        </div>

        <div className="md:w-1/4 py-5 md:py-2 flex items-center">
          <div
            className="h-80 bg-gradient-to-r from-blue-900 to-blue-500  w-full "
            style={{
              backgroundImage: "url('/images/about.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="bottom-0 px-4 py-3 bg-gray-500/50 hover:bg-gray-600/50 transition ease-in-out duration-75 delay-75 hover:cursor-pointer w-full">
              <h1 className="text-white font-semibold text-3xl">ABOUT - US</h1>
              <p className="text-gray-200">
                Tmply dummy text of the printing and typesetting indust Lorem I
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
