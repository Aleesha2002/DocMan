import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { patient } from "../../assets/images/index";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div
      className="mt-[30px] lg:mt-[55px] swiper-slide swiper-slide-next swiper-slide swiper-slide-next
swiper-slide swiper-slide-next "
    >
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3  ">
            <div className="flex items-center gap-[13px] ">
              <img src={patient} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                  Mohit Chuhan
                </h4>{" "}
                <div className="flex items-center gap-[2px] ">
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 text-textColor font-[400] ">
              "I have taken medical services from them and they are great at
              their work.They really take care of us so well and are providing
              the best medical services."{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 ">
            <div className="flex items-center gap-[13px] ">
              <img src={patient} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                  Devrath Dubey
                </h4>{" "}
                <div className="flex items-center gap-[2px] ">
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 text-textColor font-[400] ">
              "I have taken medical services from them and they are great at
              their work.They really take care of us so well and are providing
              the best medical services."{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 ">
            <div className="flex items-center gap-[13px] ">
              <img src={patient} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                  Mohak chaubey
                </h4>{" "}
                <div className="flex items-center gap-[2px] ">
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 text-textColor font-[400] ">
              "I have taken medical services from them and they are great at
              their work.They really take care of us so well and are providing
              the best medical services."{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 ">
            <div className="flex items-center gap-[13px] ">
              <img src={patient} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                  Rohit randhawa
                </h4>{" "}
                <div className="flex items-center gap-[2px] ">
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">
              "I have taken medical services from them and they are great at
              their work.They really take care of us so well and are providing
              the best medical services."{" "}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
