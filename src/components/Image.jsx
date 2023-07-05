/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Testimoni from "./Testimoni";

// eslint-disable-next-line react/prop-types
const Image = () => {
  const slides = [
    {
      url: "https://angel-prod-public-content.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/sites/5/2022/11/1-Apa-Itu-Supermarket.jpg",
    },
    {
      url: "https://s32519.pcdn.co/wp-content/uploads/2016/06/blog-supermarket-inventory-management-1.jpg.optimal.jpg",
    },
    {
      url: "https://cloud.jpnn.com/photo/galeri/normal/2023/03/09/kiri-operation-director-guardian-linda-tjendana-group-counse-qw7o.jpg",
    },
    {
      url: "https://www.gecurrent.com/sites/default/files/styles/og_large/public/images/how-is-the-grocery-store-footprint-changing-850x567.jpg?itok=82i5Qll1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className=" w-full h-full group">
        {/* Hero Banner */}
        <div className="relative">
          <img
            src={slides[currentIndex].url}
            alt=""
            className="object-cover lg:rounded-xl sm:rounded-none w-full h-[26rem]"
          />
          {/* Left Arrow */}
          <div className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsArrowLeft onClick={prevSlide} size={25} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
            <BsArrowRight onClick={nextSlide} size={25} />
          </div>

          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                className="text-2xl cursor-pointer "
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>

        <Testimoni />
      </div>
    </>
  );
};

export default Image;
