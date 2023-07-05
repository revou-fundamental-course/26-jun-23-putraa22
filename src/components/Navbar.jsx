// @ts-nocheck
// eslint-disable-next-line no-unused-vars
import Logo from "../assets/my-logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-gradient-to-r from-[#ccfbf1] via-[#5eead4] to-[#99f6e4] border-b border-[#9FCAD1] z-10 py-5 sm:px-5">
      <div className="container max-w-7xl h-fit  mx-auto flex items-center justify-between gap-2 ">
        <a href="#home">
          <img src={Logo} alt="Logo" className=" object-cover w-36 h-10" />
        </a>
        <div className="flex gap-3">
          <a
            href="#home"
            className="sm:text-sm lg:text-base text-gray-600 font-semibold hover:border-b-2 transition-all ease-out delay-100 duration-150 hover:border-teal-600"
          >
            Home
          </a>
          <a
            href="#package"
            className="sm:text-sm lg:text-base text-gray-600 font-semibold hover:border-b-2 transition-all ease-out delay-100 duration-150 hover:border-teal-600"
          >
            Our Package
          </a>
          <a
            href="#call"
            className="sm:text-sm lg:text-base text-gray-600 font-semibold hover:border-b-2 transition-all ease-out delay-100 duration-150 hover:border-teal-600"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
