// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./container/Home";
import OurPackage from "./container/OurPackage";
import CallUs from "./container/CallUs";

function App() {
  return (
    <>
      <div className="w-full min-h-screen  bg-white ">
        <Navbar />

        <div className="w-full h-full">
          <Home />
          <OurPackage />
          <CallUs />
        </div>
      </div>
    </>
  );
}

export default App;
