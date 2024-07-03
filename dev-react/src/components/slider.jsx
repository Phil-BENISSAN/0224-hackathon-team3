/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Navigation } from "swiper/modules";
import IdeaCard from "./IdeaCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <Swiper
      slidesPerView="2"
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      }}
      modules={[Pagination, Keyboard, Navigation]}
    >
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
      <SwiperSlide>
        <IdeaCard />
      </SwiperSlide>
    </Swiper>
  );
}