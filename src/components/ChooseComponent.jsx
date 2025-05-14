// images
import choose from "../assets/images/spicetra_9.jpg";

// data
import { whyChooseUs } from "../assets/data/data";

const ChooseComponent = () => {
  return (
    <section className="container-primary min-h-screen flex items-center justify-center">
      <div className="grid lg:grid-cols-3 items-center w-full  bg-gray-100">
        <div
          className="overflow-hidden h-full w-full"
          data-aos="zoom-in"
          data-aos-duration="1100"
        >
          <img
            src={choose}
            alt="images why chooses us"
            className="h-full object-cover"
          />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-2 p-5 py-8 lg:p-10 lg:py-12">
          <h1
            className="font-inter text-Accent-primary font-bold text-2xl"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            Why Choose Spicetra?
          </h1>
          <h2
            className="font-inter font-medium text-lg text-Primary"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            Experience excellence in every shipment with trusted quality and
            global reliability.
          </h2>
          <p
            className="font-inter text-Primary"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            At Spicetra, we don’t just export products — we deliver trust,
            consistency, and care. With premium-quality sourcing, certified
            standards, and seamless international logistics, we ensure every
            shipment exceeds expectations.
          </p>
          <div className="font-inter grid md:grid-cols-2 gap-4 mt-5">
            {whyChooseUs.map((item, i) => (
              <div key={i} data-aos="fade-up" data-aos-duration="1100">
                <div className="grid grid-cols-4 text-left items-center bg-white">
                  <div className="col-span-3 flex flex-col gap-2 p-4">
                    <h1 className="text-Accent-primary font-semibold text-lg">
                      {item.title}
                    </h1>
                    <p className="text-Dark/70 font-light text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="overflow-hidden h-max">
                    <img
                      src={item.icon}
                      alt="chosees spicetra"
                      className="h-32 w-full object-cover rounded-l-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseComponent;
