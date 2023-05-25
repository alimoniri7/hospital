import React, { useState } from "react";


const BtnBurger = ({isOpen , setIsOpen}) => {
//   const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-8 my-1 rounded-full  transition ease transform duration-300`;

  return (
    <button
      className="flex sm:hidden flex-col h-12 w-12 justify-center items-center group z-20"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100 bg-white"
            : "opacity-50 group-hover:opacity-100 bg-black-gray"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0 translate-x-8 bg-white" : " translate-x-1 opacity-50 group-hover:opacity-100 bg-black-gray"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100  bg-white"
            : "opacity-50 group-hover:opacity-100 bg-black-gray"
        }`}
      />
    </button>
  );
};

export default BtnBurger