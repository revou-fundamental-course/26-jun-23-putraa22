// eslint-disable-next-line no-unused-vars
import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const CallUs = () => {
  return (
    <div id="call" className="w-full h-full mt-52 border-t mb-16">
      <div className="container max-w-7xl h-full mx-auto pt-14">
        <div className="w-full h-full sm:flex sm:flex-col sm:items-center lg:grid lg:grid-cols-2 lg:justify-items-stretch lg:gap-3 sm:gap-6">
          <div className="flex flex-col ">
            <span className="text-xl font-bold font-serif">Contact</span>
            <div className="w-14 h-1 bg-teal-600 rounded-lg mb-10" />
            <div className="flex flex-col gap-4 mb-10">
              <h1 className="text-4xl font-bold font-serif mb-5">Find Us</h1>
              <p className="font-serif text-base font-semibold">
                Jakarta Selatan, Indonesia
              </p>

              <div className="flex gap-4">
                <FiFacebook
                  size={35}
                  className="cursor-pointer hover:bg-gray-200 hover:p-2 hover:rounded-xl"
                />
                <FiTwitter
                  size={35}
                  className="cursor-pointer hover:bg-gray-200 hover:p-2 hover:rounded-xl"
                />
                <FiInstagram
                  size={35}
                  className="cursor-pointer hover:bg-gray-200 hover:p-2 hover:rounded-xl"
                />
              </div>
              <span className="text-sm font-semibold">+62 8123123123</span>
            </div>

            <span className="text-base font-semibold font-serif mb-5">
              Opening Hours
            </span>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-sm ">Mon - Fri : </span>
              <span className="font-semibold text-sm">08.00 am - 08.00 pm</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-sm ">Sat - Sun : </span>
              <span className="font-semibold text-sm">08.00 am - 10.00 pm</span>
            </div>

            <div className="mt-20">
              <button className="bg-teal-500 w-44 py-3 rounded-lg text-white text-base font-normal shadow hover:bg-teal-600">
                Call to Action
              </button>
            </div>
          </div>

          <div className="w-full h-full sm:px-5 lg:px-0">
            <img
              src="https://smartlegal.id/wp-content/uploads/2022/03/bisnis-supermarket-1024x683.jpg"
              alt="image_footer"
              className="object-cover w-full h-[40rem] sm:rounded-lg lg:rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUs;
