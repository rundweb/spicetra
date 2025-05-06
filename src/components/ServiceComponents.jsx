import React from "react";

// data
import { services } from "../assets/data/data";



const ServiceComponents = () => {
  return (
    <section className="container-primary grid lg:grid-cols-3 gap-5 py-10 lg:py-20 items-center">
      <div className="flex flex-col gap-5">
        {services.slice(0, 2).map((item, i) => (
          <div key={i}>
            <div className="bg-gray-100 p-5 py-10 rounded-xl flex flex-col gap-4 relative overflow-hidden">
              <div className="w-16 h-16 bg-Light rounded-lg flex items-center justify-center">
                <item.icon className="text-4xl text-Primary"/>
              </div>
              <h1 className="font-semibold text-xl font-inter text-Dark">{item.title}</h1>
              <p className="text-gray-600 font-inter">{item.description}</p>

              <div className="absolute -top-24 -right-24">
                <img src={item.image} alt="service spectra" loading="lazy" className="rounded-full h-60 w-60 object-cover"/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 rounded-xl p-5">
        <div className="flex flex-col gap-4">
          <div>
            <img src={services[2].image} alt="service spicetra" loading="lazy" className="h-72 lg:h-96 w-full object-cover rounded-lg"/>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl font-inter text-Dark">{services[2].title}</h1>
            <h1 className="text-gray-600 font-inter">{services[2].description}</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {services.slice(3, 5).map((item, i) => (
          <div key={i}>
          <div className="bg-gray-100 p-5 py-10 rounded-xl flex flex-col gap-4 relative overflow-hidden">
            <div className="w-16 h-16 bg-Light rounded-lg flex items-center justify-center">
              <item.icon className="text-4xl text-Primary"/>
            </div>
            <h1 className="font-semibold text-xl font-inter text-Dark">{item.title}</h1>
            <p className="text-gray-600 font-inter">{item.description}</p>

            <div className="absolute -top-24 -right-24">
              <img src={item.image} alt="service spectra" loading="lazy" className="rounded-full h-60 w-60 object-cover"/>
            </div>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceComponents;
