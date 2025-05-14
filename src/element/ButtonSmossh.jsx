import React from "react";

const ButtonSmossh = ({text}) => {
  return (
    <button className="relative h-12 px-8 overflow-hidden border border-Accent-primary bg-Light font-inter text-Accent-primary shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-Accent-primary before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-Accent-primary after:duration-500 hover:text-white hover:shadow-Accent-primary hover:before:h-2/4 hover:after:h-2/4">
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default ButtonSmossh;
