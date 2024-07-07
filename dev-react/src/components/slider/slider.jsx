import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Navigation } from "swiper/modules";
import IdeaCard from "../IdeaCard/IdeaCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

function shuffleArray(array) {
  return [...array].sort(() => 0.5 - Math.random());
}

function getRandomPairs(personnages, ideas, num) {
  const shuffledCharacters = shuffleArray(personnages).slice(0, num);
  const shuffledIdeas = shuffleArray(ideas).slice(0, num);
  return shuffledCharacters.map((character, index) => ({
    character,
    idea: shuffledIdeas[index],
  }));
}

export default function Slider({ personnages, ideas }) {
  const [randomPairs, setRandomPairs] = useState([]);

  useEffect(() => {
    if (personnages.length > 0 && ideas.length > 0) {
      const numPairs = Math.min(personnages.length, ideas.length, 10);
      setRandomPairs(getRandomPairs(personnages, ideas, numPairs));
    }
  }, [personnages, ideas]);

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
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination, Keyboard, Navigation]}
      className="mySwiper"
    >
      {randomPairs.map(({ character, idea }) => (
        <SwiperSlide key={character.name}>
          <IdeaCard character={character} idea={idea} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
