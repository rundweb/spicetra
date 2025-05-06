import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

// data
import { heroSlides } from "../assets/data/data";

// icon
import { RiScrollToBottomLine } from "react-icons/ri";
import ServiceComponents from "../components/ServiceComponents";

const Home = () => {
  return (
    <div>
      <section className="min-h-screen w-full overflow-hidden">
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {heroSlides.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    loading="lazy"
                    alt="slide spicetra"
                    className="w-full h-screen object-cover animate-grow"
                  />
                </div>
                <div className="absolute w-full h-full flex items-center text-center justify-center top-0 left-0 flex-col gap-5 bg-Dark/30 p-4">
                  <h1 className="text-Light font-extrabold font-Playfair text-6xl max-w-screen-lg md:leading-tight">
                    {item.title}
                  </h1>
                  <h2 className="text-Light/80 font-medium font-inter text-lg max-w-screen-sm">
                    {item.subtitle}
                  </h2>
                </div>
                <div className="absolute bottom-12 w-full flex items-center justify-center">
                  <RiScrollToBottomLine className="text-Light/20 text-5xl animate-bounce"/>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <ServiceComponents/>
    </div>
  );
};

export default Home;
