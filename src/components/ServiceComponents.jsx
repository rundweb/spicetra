import React, { useEffect } from "react";

// data
import { services } from "../assets/data/data";

// tilt.js
import VanillaTilt from "vanilla-tilt";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceComponents = () => {
  useEffect(() => {
    const isMobile = window.innerWidth < 700;

    if (!isMobile) {
      VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        perspective: 2000,
      });
    }

    gsap.fromTo(
      ".service-right",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-right",
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      ".service-up",
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-up",
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      ".service-left",
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-left",
          start: "top 70%",
        },
      }
    );
  }, []);
  return (
    <section className="container-primary grid lg:grid-cols-3 gap-5 py-10 lg:py-20 items-center">
      <div className="flex flex-col gap-5">
        {services.slice(0, 2).map((item, i) => (
          <div key={i} data-tilt className="service-right">
            <div className="bg-gray-100 p-5 py-10 rounded-xl flex flex-col gap-4 relative overflow-hidden group cursor-pointer">
              <div className="w-16 h-16 bg-Light rounded-lg flex items-center justify-center">
                <item.icon className="text-4xl text-Primary" />
              </div>
              <h1 className="font-semibold text-xl font-inter text-Dark">
                {item.title}
              </h1>
              <p className="text-gray-600 font-inter">{item.description}</p>

              <div className="absolute -top-24 -right-24 overflow-hidden rounded-full">
                <img
                  src={item.image}
                  alt="service spectra"
                  loading="lazy"
                  className=" h-60 w-60 object-cover group-hover:scale-110 duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="bg-gray-100 rounded-xl p-5 group cursor-pointer service-up"
        data-tilt
      >
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src={services[2].image}
              alt="service spicetra"
              loading="lazy"
              className="h-72 lg:h-96 w-full object-cover group-hover:scale-110 duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl font-inter text-Dark">
              {services[2].title}
            </h1>
            <h1 className="text-gray-600 font-inter">
              {services[2].description}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {services.slice(3, 5).map((item, i) => (
          <div key={i} data-tilt className="service-left">
            <div className="bg-gray-100 p-5 py-10 rounded-xl flex flex-col gap-4 relative overflow-hidden group cursor-pointer">
              <div className="w-16 h-16 bg-Light rounded-lg flex items-center justify-center">
                <item.icon className="text-4xl text-Primary" />
              </div>
              <h1 className="font-semibold text-xl font-inter text-Dark">
                {item.title}
              </h1>
              <p className="text-gray-600 font-inter">{item.description}</p>

              <div className="absolute -top-24 -right-24 overflow-hidden rounded-full">
                <img
                  src={item.image}
                  alt="service spectra"
                  loading="lazy"
                  className=" h-60 w-60 object-cover group-hover:scale-110 duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceComponents;
