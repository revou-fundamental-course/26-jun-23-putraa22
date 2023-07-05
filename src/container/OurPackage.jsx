// eslint-disable-next-line no-unused-vars
import React from "react";

const OurPackage = () => {
  return (
    <div id="package" className="w-full h-full mt-20 ">
      <div className="flex justify-center py-16 bg-slate-100">
        <h1 className="text-5xl font-semibold">Our Package</h1>
      </div>

      <div className="grid grid-cols-3 justify-items-center gap-5 container max-w-7xl mx-auto py-5">
        <div className="">Fresh Vegetable</div>
        <div>Fresh Fruit</div>
        <div>Instant Delivery</div>
        <div>Kitchen Ingredient</div>
        <div>Kitchen Set</div>
        <div className="">Bunding Set</div>
      </div>
    </div>
  );
};

export default OurPackage;
