// eslint-disable-next-line no-unused-vars
import React from "react";
import Image from "../components/Image";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div id="home" className="pt-24 container max-w-7xl mx-auto ">
      <div className="flex flex-col gap-5 items-center mb-10">
        <h1 className="font-bold text-6xl text-center break-words">
          Top Rated E-Groceries Shop in Indonesia
        </h1>
        <p className="text-sm text-gray-500 font-semibold">
          Every Day with best ingredients
        </p>
      </div>
      <div className=" w-full h-full flex justify-between">
        <Image src="https://assets-a1.kompasiana.com/items/album/2022/10/01/blog-supermarket-inventory-management-1-optimal-6337ffe824ed442ec53241d2.jpg" />

        <div className="w-[35rem] h-full">
          <div className="bg-slate-50 rounded-xl shadow">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
