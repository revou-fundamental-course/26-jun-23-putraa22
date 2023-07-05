// @ts-nocheck
// eslint-disable-next-line no-unused-vars

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-[#DCD3D0] border-b border-[#BAA7A1] z-10 py-5">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2 ">
        <div className="">
          <span>navbar logo</span>
        </div>
        <div className="flex gap-3">
          <a href="#home">Home</a>
          <a href="#package">Our Package</a>
          <a href="#call">Call Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
