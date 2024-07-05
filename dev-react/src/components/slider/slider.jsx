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
  const [randomCharacters, setRandomCharacters] = useState(getRandomCharacters(characters));
  useEffect(() => {
    if (characters.length > 0) {
      setRandomCharacters(getRandomCharacters(characters, 10));
    }
  }, [characters]);

  return (
    <Swiper
      slidesPerView={3} // Définit le nombre de diapositives visibles à la fois
      spaceBetween={30} // Définit l'espace entre les diapositives
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
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination, Keyboard, Navigation]}
      className="mySwiper"
    >
      {randomCharacters.map(character => (
        <SwiperSlide>
          <IdeaCard characters={character} />
        </SwiperSlide>
      ))}
      {/* <SwiperSlide>
        {randomCharacters.map(character => <IdeaCard characters={character} />)}
      </SwiperSlide> */}
    </Swiper>
  );
}