import Image from "next/image";
import React from "react";

export default function Welcome() {
  return (
    <div className="mb-12 flex flex-col gap-12 items-center text-center p-2 md:p-5 font-sans">
      <div className="flex flex-col md:p-5">
        <h2 className="text-xl uppercase p-5 font-semibold text-[#051c40]">
          Welcome To Academics
        </h2>
        <p className="p-0 text-sm">
          Tmply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been theindustrys standard dummy text ever since the 1500s, when
          an unknown printer took.
        </p>
      </div>
      <div className="flex flex-col gap-12 md:flex-row justify-around ">
        <div className="flex flex-col items-center text-center gap-2">
          <span className="bg-gray-200 p-5 rounded-full">
            <Image src={"/images/logo.png"} width={40} height={40} alt="logo" />
          </span>
          <span className="text-[#051c40] font-semibold uppercase text-base">
            Scholarship Facility
          </span>
          <p className="text-sm">
            Dorem Ipsum has been the industrys standard dummy text ever since
            the en an unknown printer galley dear.
          </p>
        </div>
        <div className="flex flex-col items-center text-center  gap-2">
          <span className="bg-gray-200 p-5 rounded-full">
            <Image src={"/images/logo.png"} width={40} height={40} alt="logo" />
          </span>
          <span className="text-[#051c40] font-semibold uppercase text-bas">
            Skilled Lecturers
          </span>
          <p className="text-sm">
            Dorem Ipsum has been the industrys standard dummy text ever since
            the en an unknown printer galley dear.
          </p>
        </div>
        <div className="flex flex-col items-center text-center  gap-2">
          <span className="bg-gray-200 p-5 rounded-full">
            <Image src={"/images/logo.png"} width={40} height={40} alt="logo" />
          </span>
          <span className="text-[#051c40] font-semibold uppercase text-bas">
            Book Library & Store
          </span>
          <p className="text-sm">
            Dorem Ipsum has been the industrys standard dummy text ever since
            the en an unknown printer galley dear.
          </p>
        </div>
      </div>
    </div>
  );
}
