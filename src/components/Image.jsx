/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { CgProfile } from "react-icons/cg";

// eslint-disable-next-line react/prop-types
const Image = ({ src }) => {
  return (
    <>
      <div className="flex flex-col">
        {/* Hero Banner */}
        <img
          src={src}
          alt="Hero"
          className=" object-cover rounded-xl w-[36rem] h-[26rem]"
        />
        <div className="flex flex-col mt-8">
          {/* Testi */}
          <div className="ml-5 flex flex-col gap-y-10 bg-slate-50 px-5 py-3 rounded-md">
            <p className="font-serif text-gray-500">
              "setiap hari beli sayur dan buah disini"
            </p>
            <div className="flex items-center gap-x-2">
              <CgProfile className="w-12 h-12 bg-gray-300 rounded-full p-1 text-gray-500" />
              <div className="flex flex-col gap-0">
                <span className="text-base font-semibold ">
                  Florence Hughes
                </span>
                <span className="text-sm font-normal text-gray-500 italic">
                  Ibu rumah tangga, 28
                </span>
              </div>
            </div>
            <div className="bg-gray-400 h-1 w-1/2 text-center mx-auto" />
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Image;
