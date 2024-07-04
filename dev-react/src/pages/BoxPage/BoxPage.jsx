import React, { useState } from "react";

import HeaderWhite from "../../components/HeaderWhite/HeaderWhite";

import "./BoxPage.css";

function BoxPage() {
  const [title, setTitle] = useState("");
  const [idea, setIdea] = useState("");

  const submitForm = async () => {
    const response = await fetch("http://localhost:8000/ideas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        idea: idea,
      }),
    });

    if (response.ok) {
      // handle successful response
      alert("Idea shared successfully!");
    } else {
      // handle error response
      alert("Failed to share idea.");
    }
  };

  return (
    <>
    <main className="mainBoxPage">
      <HeaderWhite />
      <h2 className="titleIdée">Proposez une idée !</h2>
      <form
        className="formulaireIdée"
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <input
          type="text"
          id="title"
          placeholder="Titre de votre idée"
          className="inputIdée"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          id="idea"
          placeholder="Décrivez votre idée"
          className="textareaIdée"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="buttonIdée">
          Partager
        </button>
      </form>
      </main>
    </>
  );
}

export default BoxPage;
