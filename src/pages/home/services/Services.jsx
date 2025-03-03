import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const [services] = useServices();

  return (
    <div className="w-10/12 mx-auto mb-16 md:mb-24">
      <h1 className="md:text-[36px] text-[25px] md:leading-[45px] leading-[34px] font-semibold text-[#05264E] text-center">
        Our Services
      </h1>
      <p className="md:text-[24px] text-[20px] md:leading-[26px] font-medium text-[#66789C] text-center pt-3">
        Here are services we provide
      </p>
      <div className="flex justify-end mt-5 mb-16">
        <Link
          className="bg-gradient-to-r from-[#600759] via-[#CB0D84] to-[#600759] text-[#F8F9FA] text-[13px] px-3 py-2 lg:leading-[19px] font-medium"
          to="/allServices"
        >
          View More
        </Link>
      </div>

      <Swiper
        className="mt-16"
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, // Ensures autoplay continues after interaction
        }}
        loop={true} // Keeps the slides rotating
        speed={2000}
        observer={true} // Watches for visibility changes
        observeParents={true} // Ensures Swiper detects when it becomes visible
        modules={[Autoplay]}
      >
        {services.map((service) => (
          <SwiperSlide key={service?._id}>
            <div className="relative transition-transform duration-300 transform border border-[#e4e1e1] flex flex-col items-center justify-center text-white text-xl font-bold shadow-lg rounded-md p-6 hover:scale-105 hover:cursor-pointer hover:translate-y-3 hover:z-10">
              <div className="lg:w-[250px] w-[250px] md:w-[150px] md:h-[200px] lg:h-[250px] h-[250px] overflow-hidden flex items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={service?.photo}
                  alt={service?.title || "Service Image"}
                  loading="lazy"
                />
              </div>
              <h1 className="text-[20px] lg:leading-[26px] font-semibold text-center text-[#05264E] mt-4">
                {service?.title || "No Title"}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
