import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/ReviewCarousel.css";

import Slide1 from "../../../assets/Slide1.png";
import Slide2 from "../../../assets/Slide2.png";
import Slide3 from "../../../assets/Slide3.png";
import Slide4 from "../../../assets/Slide4.png";
import Slide5 from "../../../assets/Slide5.png";
import Slide6 from "../../../assets/Slide6.png";
import Slide7 from "../../../assets/Slide7.png";
import Slide8 from "../../../assets/Slide8.png";
import Slide9 from "../../../assets/Slide9.png";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Image } from "@chakra-ui/react";

export default function ReviewCarousel() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={Slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide5} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide6} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide7} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide8} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide9} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
