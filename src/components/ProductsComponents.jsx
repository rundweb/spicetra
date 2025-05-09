import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonSmossh from "../element/ButtonSmossh";

import { products } from "../assets/data/data";

import ButtonShopv2 from "../element/ButtonShopv2";

// tilt.js
import VanillaTilt from "vanilla-tilt";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { label: "Featured", value: "featured" },
  { label: "Best Seller", value: "best-seller" },
  { label: "Populer", value: "populer" },
];

const ProductsComponents = () => {
  const [categoryActive, setCategoryActive] = useState("featured");

  const filteredProduct = products.filter(
    (prod) => prod.category == categoryActive
  );

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      perspective: 2000,
    });

    gsap.fromTo(
      ".product-list",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: { trigger: ".product-list", start: "top 80%" },
      }
    );
  }, []);
  return (
    <section className="container-primary py-10 flex flex-col gap-10">
      <div className="grid md:grid-cols-2 items-center justify-center w-full gap-5">
        <div className="flex flex-col gap-4 product-list" >
          <h1 className="text-Primary font-inter font-bold text-4xl">
            Discover Our Products
          </h1>
        </div>
        <div className="hidden md:flex items-center justify-center md:justify-end product-list">
          <Link className="" data-tilt>
            <ButtonSmossh text={"View More Products"} />
          </Link>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-5 border-b-2 pb-2 product-list">
          {categories.map((item, i) => (
            <div key={i}>
              <div
                onClick={() => setCategoryActive(item.value)}
                className="cursor-pointer"
              >
                <h1
                  className={`font-inter text-lg relative before:absolute  before:left-0 before:h-1 before:bg-Accent-primary before:-bottom-[10px] ${
                    categoryActive === item.value
                      ? "text-Accent-primary before:w-full"
                      : "text-Primary before:w-0"
                  }`}
                >
                  {item.label}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProduct.map((item, i) => (
            <div key={i} data-tilt className="product-list">
              <div className="flex flex-col px-4 pt-2 pb-10 shadow-xl rounded-lg items-center justify-center text-center">
                <div>
                  <img
                    src={item.image}
                    alt="product spicetra"
                    className="h-60 w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <h1 className="text-Primary font-inter font-bold text-xl">
                    {item.name}
                  </h1>
                  <h2 className="flex items-center gap-2 justify-center text-dark font-inter font-medium text-lg text-red-500">
                    <span className="line-through text-Primary">
                      {item.oldPrice}
                    </span>
                    {item.price}
                  </h2>
                  <div className="mt-2">
                    <Link>
                      <ButtonShopv2 />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden flex items-center justify-center md:justify-end product-list">
          <Link className="" data-tilt>
            <ButtonSmossh text={"View More Products"} />
          </Link>
        </div>
    </section>
  );
};

export default ProductsComponents;
