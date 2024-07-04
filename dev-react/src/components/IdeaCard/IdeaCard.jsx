import React, { useState } from "react";

import logo from "../../assets/Logo_Includify.svg";
import heart from "../../assets/heart.svg";
import thumb from "../../assets/thumb-down.svg";
import "./IdeaCard.css";

function IdeaCard() {

  return (
   <section className="flip-card">
    <div className="flip-card-inner">
        <article className="flip-card-front">
          <header className="flip-card-header">
            <img src={logo} alt="" className="flip-card-img" />
            <h3 className="flip-card-title">Nom personne</h3>
            </header>
            <h4 className="flip-idea-name">Thème idée</h4>
            <p className="flip-idea-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi expedita laudantium veniam ipsam libero sequi natus eaque nulla minima doloribus, maiores eveniet qui deserunt molestias? Neque reiciendis quaerat error?</p>
            <footer className="flip-idea-icons">
              <img src={heart} alt="" className="flip-icon-heart"/>
              <img src={thumb} alt="" className="flip-icon-thumb"/>
            </footer>
        </article>
        <article className="flip-card-back">
          <header className="flip-back-header">
            <h3 className="flip-back-title">Nom personne</h3>
            </header>
            <p className="flip-back-details">À propos</p>
        </article>
    </div>
</section>
  );
}

export default IdeaCard;
