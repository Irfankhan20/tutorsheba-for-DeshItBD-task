import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import dailyStar from "../../../assets/dailyStar.png";
import shomokal from "../../../assets/shomokal.png";
import champs21 from "../../../assets/champs21.png";
import doinik from "../../../assets/doinikIttefak.png";
import protomAlo from "../../../assets/protomAlo.png";

const NewsPortalSlide = () => {
  const cardData = [
    { id: 1, title: `${dailyStar}`, color: "bg-[#FFFFFF]" },
    { id: 2, title: `${shomokal}`, color: "bg-[#FFFFFF]" },
    { id: 3, title: `${champs21}`, color: "bg-[#FFFFFF]" },
    { id: 4, title: `${doinik}`, color: "bg-[#FFFFFF]" },
    { id: 5, title: `${protomAlo}`, color: "bg-[#FFFFFF]" },
  ];
  return (
    <div className="w-full mx-auto p-4 mb-3 lg:mb-0 bg-[#F2F6FD] lg:h-[317px] md:h-[278px] h-[306px]">
      <h1 className="w-10/12 mx-auto font-semibold text-[25px] md:text-[36px] lg:leading-[45px] text-[#05264E] mt-12">
        We were <span className="text-[#800080]">featured</span> on:
      </h1>
      <Swiper
        className="w-10/12 mx-auto mt-16"
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={2000}
        loop={true}
        modules={[Autoplay]}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className={`lg:h-[110px] md:h-[71px] h-[110px]  flex items-center justify-center text-white text-xl font-bold border shadow-lg ${card.color}`}
            >
              {<img src={card.title} alt="" />}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsPortalSlide;
