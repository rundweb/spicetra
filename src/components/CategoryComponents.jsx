import React, { useEffect } from "react";

// data
import { categories } from "../assets/data/data";

// images
import categori1 from "../assets/images/spicetra_12.jpg";
import categori2 from "../assets/images/spicetra_18.jpg";

// react router dom
import { Link } from "react-router-dom";

// tilt.js
import VanillaTilt from "vanilla-tilt";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ButtonShop from "../element/ButtonShop";


const CategoryComponents = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      perspective: 2000,
    });

    VanillaTilt.init(document.querySelectorAll("[data-tilt2]"), {
      scale: 1.1,
    });

    gsap.fromTo(
      ".service-list",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: { trigger: ".service-list", start: "top 80%" },
      }
    );
  }, []);
  return (
    <section className="container-primary py-10 flex items-center justify-center flex-col gap-10 text-center font-inter">
      <div className="flex flex-col gap-5">
        <h1
          className="font-bold text-Dark text-4xl service-list"
          
        >
          Explore Our Categories
        </h1>
        <h2 className="text-Dark service-list">
          From aromatic spices to fresh seafood, discover products crafted for
          global markets.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 items-center w-full">
        {categories.map((item, i) => (
          <div key={i} data-tilt2 className="service-list">
            <div className="bg-gray-100 py-8 w-full rounded-lg flex flex-col gap-2 items-center justify-center cursor-pointer group relative overflow-hidden transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-Accent-primary before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-Accent-primary after:duration-500 hover:before:h-2/4 hover:after:h-2/4 hover:shadow-Accent-primary shadow-lg">
              <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full text-Accent-primary text-3xl relative group-hover:rotate-[360deg] duration-700 ease-in-out">
                <item.icon />
              </div>
              <h1 className="text-Dark font-semibold mt-2 group-hover:text-white duration-300 ease-in-out relative z-10">
                {item.title}
              </h1>
              <div className="text-Dark font-normal text-sm flex items-center gap-2 group-hover:text-white duration-300 ease-in-out relative z-10">
                <div className="w-2 h-2 bg-Accent-primary rounded-full group-hover:bg-white duration-300 ease-in-out"></div>
                <h1>{item.qty} Items</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-6 gap-5 w-full">
        <div
          className="lg:col-span-2 overflow-hidden rounded-md h-96 w-full relative service-list"
          data-tilt
        >
          <div className="absolute w-full h-full top-0 left-0 bg-Dark/30 px-5 py-8 text-left flex flex-col gap-4">
            <h1 className="font-Playfair text-Accent-primary font-black">
              Enjoy up to 25% Off
            </h1>
            <h2 className="font-inter font-semibold text-white text-2xl">
              Fresh & Premium Spices
            </h2>
            <Link className="mt-2 group w-max">
              <ButtonShop/>
            </Link>
          </div>
          <img
            src={categori1}
            alt="category spicetra"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="lg:col-span-4 overflow-hidden rounded-md h-96 w-full relative service-list"
          data-tilt
        >
          <div className="absolute w-full h-full top-0 left-0 bg-Dark/30 px-5 py-8 text-left flex flex-col gap-4">
            <h1 className="font-Playfair text-Accent-primary font-black">
              Save up to 20% on All Products
            </h1>
            <h2 className="font-inter font-semibold text-white text-2xl">
              Export-Grade Seafood & Organic Spices
            </h2>
            <p className="font-inter font-medium text-white/70">
              A trusted solution for your global supply chain.
            </p>
            <Link className="mt-2 group w-max">
              <ButtonShop/>
            </Link>
          </div>
          <img
            src={categori2}
            alt="category spicetra"
            loading="lazy"
            className="h-full w-full object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default CategoryComponents;
