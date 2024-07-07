import React, { useEffect, useState } from "react";
import heart from "../../assets/heart.svg";
import thumb from "../../assets/thumb-down.svg";
import "./IdeaCard.css";

function IdeaCard({ character, idea }) {
  const { Nom, Texte, Image } = character;
  const { title, idea: ideaText } = idea;
  return (
    <section className="flip-card">
      <div className="flip-card-inner">
        <article className="flip-card-front">
          <header className="flip-card-header">
            <img src={Image} alt={Nom} className="flip-card-img" />
            <h3 className="flip-card-title">{Nom}</h3>
          </header>
          <h4 className="flip-idea-name">{title}</h4>
          <p className="flip-idea-text">{ideaText}</p>
        </article>
        <article className="flip-card-back">
          <header className="flip-back-header">
            <h3 className="flip-back-title">{Nom}</h3>
          </header>
          <p className="flip-back-details">{Texte}</p>
          <footer className="flip-idea-icons">
            <img src={heart} alt="" className="flip-icon-heart" />
            <img src={thumb} alt="" className="flip-icon-thumb" />
          </footer>
        </article>
      </div>
    </section>
  );
}

export default IdeaCard;
