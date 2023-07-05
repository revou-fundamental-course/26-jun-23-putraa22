// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const CardCustom = ({ src, alt, title, desc }) => {
  return (
    <div className="w-full h-full">
      <div className="w-[23rem] h-[30rem] bg-white shadow rounded-md hover:shadow-xl hover:scale-105 hover:duration-150 transition ease-in-out delay-75 cursor-pointer flex flex-col items-center p-2">
        <div className="w-full h-[20rem] bg-red-100">
          <img
            src={src}
            alt={alt}
            className="object-cover w-full h-full rounded-md "
          />
        </div>
        <div className="mt-5">
          <h1 className="text-xl font-semibold">{title}</h1>
          <span className="text-base font-normal text-gray-400">{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default CardCustom;
