/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { CgProfile } from "react-icons/cg";

const Testimoni = () => {
  return (
    <div className="mt-8 sm:mb-8">
      {/* Testi */}
      <div className="ml-5 sm:ml-0 flex flex-col gap-y-10 bg-slate-50 px-5 py-3 rounded-md">
        <p className="font-serif text-base sm:text-sm text-gray-500">
          "setiap hari beli sayur dan buah disini"
        </p>
        <div className="flex items-center gap-x-2">
          <CgProfile
            size={40}
            className=" bg-gray-300 rounded-full p-1 text-gray-500"
          />
          <div className="flex flex-col gap-0">
            <span className="text-base font-semibold sm:text-sm ">
              Florence Hughes
            </span>
            <span className="text-sm sm:text-xs font-normal text-gray-500 italic">
              Ibu rumah tangga, 28
            </span>
          </div>
        </div>
        <div className="bg-gray-400 h-1 w-1/2 text-center mx-auto" />
      </div>

      {/*  */}
    </div>
  );
};

export default Testimoni;
