import React from "react";
// icon

import { FaShip } from "react-icons/fa6";

import { features } from "../assets/data/data";

import { BsFillBookmarkCheckFill } from "react-icons/bs";

import about1 from "../assets/images/spicetra_2.jpg";
import about2 from "../assets/images/spicetra_15.jpg";
import { Link } from "react-router-dom";
import ButtonSmossh from "../element/ButtonSmossh";

const AboutComponents = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-8 flex items-center">
      <div className="container-primary grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="grid md:grid-cols-2 gap-5">
          <div
            className="relative md:-top-10 h-60 md:h-96 group"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="absolute hidden md:block w-full h-full border-2 border-Accent-secondary rounded-md top-3 left-3 group-hover:-translate-x-3 group-hover:-translate-y-3 duration-300 ease-in-out"></div>
            <img
              src={about1}
              alt="about spicetra"
              loading="lazy"
              className="h-60 md:h-96 w-full object-cover rounded-md shadow-md md:group-hover:translate-x-3 md:group-hover:translate-y-3 duration-300 ease-in-out"
            />
          </div>
          <div
            className="relative md:top-10 h-60 md:h-96 group"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="absolute hidden md:block w-full h-full border-2 border-Accent-secondary rounded-md top-3 left-3 group-hover:-translate-x-3 group-hover:-translate-y-3 duration-300 ease-in-out"></div>
            <img
              src={about2}
              alt="about spicetra"
              loading="lazy"
              className="h-60 md:h-96 w-full object-cover rounded-md shadow-md md:group-hover:translate-x-3 md:group-hover:translate-y-3 duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className="flex items-center gap-4"
            data-aos="fade-left"
            data-aos-duration="1100"
          >
            <FaShip className="text-Accent-primary text-2xl" />
            <h1 className="font-inter font-semibold text-Accent-primary text-lg">
              About Spicetra
            </h1>
          </div>
          <h2
            className="font-Playfair font-extrabold text-4xl md:leading-snug text-Primary"
            data-aos="fade-left"
            data-aos-duration="1100"
          >
            Spicetra is an exporter of premium spices and seafood.
          </h2>
          <p
            className="font-inter text-Dark/80"
            data-aos="fade-left"
            data-aos-duration="1100"
          >
            At Spicetra, we specialize in the global distribution of Indonesia’s
            most treasured commodities — aromatic spices and ocean-fresh
            seafood. With years of experience in sourcing and logistics, we’ve
            built a supply chain that bridges traditional harvesters with modern
            global demand.
          </p>
          <div className="flex flex-col gap-4">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2"
                data-aos="fade-left"
                data-aos-duration="1100"
              >
                <div className="relative top-[1px] text-Accent-primary">
                  <BsFillBookmarkCheckFill />
                </div>
                <p className="font-medium text-Dark/80">{item}</p>
              </div>
            ))}
          </div>
          <Link className="mt-4" data-aos="fade-left"
            data-aos-duration="1100">
            <ButtonSmossh text={"Start Exporting"}/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutComponents;
