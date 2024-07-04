/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Navigation } from "swiper/modules";
import IdeaCard from "../IdeaCard/IdeaCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";


function getRandomCharacters(characters, num = 10) {
  const shuffled = characters.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export default function Slider({ characters }) {
  const [randomCharacters, setRandomCharacters] = useState([]);

  useEffect(() => {
    if (characters.length > 0) {
      setRandomCharacters(getRandomCharacters(characters, 10));
    }
  }, [characters]);

  return (
    <Swiper
      slidesPerView="3"
      spaceBetween={100}
      centeredSlides={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Keyboard, Navigation]}
    >
      {randomCharacters.map((character, index) => (
        <SwiperSlide key={index}>
          <IdeaCard characters={[character]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
