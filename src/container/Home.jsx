// eslint-disable-next-line no-unused-vars
import React from "react";
import Image from "../components/Image";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div id="home" className="pt-24 container max-w-7xl mx-auto ">
      <div className="flex flex-col gap-5 items-center mb-10">
        <h1 className="font-bold lg:text-6xl sm:text-3xl text-center">
          Top Rated E-Groceries Shop in Indonesia
        </h1>
        <span className="lg:text-sm sm:text-xs text-gray-500 font-semibold">
          Every Day with best ingredients
        </span>
      </div>
      <div className="w-full h-full  lg:grid lg:grid-cols-2 sm:flex sm:flex-col  lg:justify-items-stretch gap-5">
        <Image />

        <div className="w-full h-full">
          <div className="bg-slate-50 rounded-xl shadow">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
