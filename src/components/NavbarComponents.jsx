import React, { useEffect, useRef, useState } from "react";

// data
import { menuItem } from "../assets/data/data";

// images
import logo from "../assets/images/logo_full.svg";
import { Link } from "react-router-dom";

// icon
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

// gsap
import { gsap } from "gsap";

const NavbarComponents = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [toggleActive, setToggleActive] = useState(true);

  const itemMenu = document.querySelectorAll(".menu");

  itemMenu.forEach((item) => {
    item.addEventListener("click", () => {
      setToggleActive(true);
    });
  });

  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        x: 50,
        opacity: 0,
      },
      { x: 0, opacity: 1, duration: 1.2, ease: "back.out" }
    );

    gsap.fromTo(
      ".menus",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "back.out" }
    );
  }, []);
  const openMenus = () => {
    setToggleActive(!toggleActive);

    gsap.fromTo(
      ".menu-mobile",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        delay: 0.1,
        ease: "back.out",
      }
    );
  };

  const closeMenus = () => {
    setTimeout(() => {
      setToggleActive(!toggleActive);
    }, 800);

    gsap.fromTo(
      ".menu-mobile",
      { x: 0, opacity: 1 },
      {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.1,
        ease: "back.out",
      }
    );
  };

  return (
    <div className="bg-Light">
      <div className="container-primary flex items-center justify-between">
        <div className="relative z-20" ref={boxRef}>
          <img src={logo} loading="lazy" alt="logo spicetra" className="w-48" />
        </div>
        {/* website */}
        <div className={`hidden md:flex items-center gap-5 font-inter`}>
          {menuItem.map((item, i) => (
            <div key={i} className="menus">
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
          } duration-500 ease-in-out`}
        >
          {menuItem.map((item, i) => (
            <div key={i} className="menu-mobile">
              <Link
                to={item.href}
                onClick={() => setActiveMenu(i)}
                className={`menu ${
                  activeMenu === i
                    ? "text-Primary text-6xl font-bold font-Playfair"
                    : "text-Primary text-2xl font-normal"
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* toggle */}
        <div className="md:hidden relative z-20 menus">
          {toggleActive ? (
            <CgMenuRight
              className="text-Primary text-4xl"
              onClick={openMenus}
            />
          ) : (
            <IoClose className="text-Primary text-4xl" onClick={closeMenus} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
