import React, { useState } from "react";

// data
import { menuItem } from "../assets/data/data";

// images
import logo from "../assets/images/logo_full.svg";
import { Link } from "react-router-dom";

// icon
import { TbMenu2 } from "react-icons/tb";

const NavbarComponents = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [toggleActive, setToggleActive] = useState(true);

  const itemMenu = document.querySelectorAll(".menu");
  
  itemMenu.forEach((item) => {
    item.addEventListener("click", () => {
      setToggleActive(true);
    });
  });

  return (
    <div className="bg-Light">
      <div className="container-primary flex items-center justify-between">
        <div className="relative z-20">
          <img src={logo} loading="lazy" alt="logo spicetra" className="w-48" />
        </div>
        {/* website */}
        <div className={`hidden md:flex items-center gap-5 font-inter`}>
          {menuItem.map((item, i) => (
            <div key={i}>
              <Link
                to={item.href}
                onClick={() => setActiveMenu(i)}
                className={`text-base ${
                  activeMenu === i ? "text-Accent-secondary" : "text-Primary"
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* mobile */}
        <div
          className={`font-inter md:hidden fixed bg-Light top-0 min-h-screen w-full z-10 p-4 pt-20 flex flex-col items-center justify-center gap-4 ${
            toggleActive ? "-right-full" : "right-0"
          } duration-500 ease-linear`}
        >
          {menuItem.map((item, i) => (
            <div key={i} className="">
              <Link
                to={item.href}
                onClick={() => setActiveMenu(i)}
                className={`menu ${
                  activeMenu === i
                    ? "text-Accent-secondary text-6xl font-bold font-Playfair"
                    : "text-Primary text-2xl font-normal"
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* toggle */}
        <div
          className="md:hidden relative z-20 "
          onClick={() => setToggleActive(!toggleActive)}
        >
          <TbMenu2 className="text-Primary text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
