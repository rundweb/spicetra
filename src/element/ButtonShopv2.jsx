import React from "react";
// icon
import { LuMoveRight } from "react-icons/lu";
const ButtonShopv2 = () => {
  return (
    <div className="relative group overflow-hidden h-10 px-8 w-max flex items-center justify-center gap-4 bg-white border-2 border-Accent-primary text-Accent-primary  font-inter rounded-sm transition-all before:left-0 before:right-0 before:top-0 before:w-full before:h-0 after:left-0 after:right-0 after:bottom-0 after:w-full after:h-0 hover:before:h-2/4 hover:after:h-2/4 before:absolute after:absolute before:bg-Accent-primary after:bg-Accent-primary before:duration-300 after:duration-300 shadow-xl hover:shadow-Accent-primary">
      <span className="relative z-10 group-hover:text-white flex items-center gap-4">
        Shop Now <LuMoveRight className="text-xl relative top-[1px]" />
      </span>
    </div>
  );
};

export default ButtonShopv2;
