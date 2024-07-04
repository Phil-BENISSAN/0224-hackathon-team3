import "./IdeaCard.css";

function IdeaCard() {
  return (
    <article className="card">
      <header className="card__top">
        <img src="src/assets/Logo_Includify.svg" alt="Nom de la personne" className="card__picture" />
        <h2 className="card__title">Nom de la personne</h2>
      </header>
      <h3 className="card__idea">Lorem, ipsum dolor!!</h3>
        <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eos eveniet quaerat nostrum dicta expedita obcaecati rem illum blanditiis nam ea odit alias magnam perspiciatis tempore mollitia.</p>
    </article>
  );
}

export default IdeaCard;
