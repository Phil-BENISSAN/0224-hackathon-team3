import HeaderWhite from "../../components/HeaderWhite/HeaderWhite";
import "./Contact.css";

function Contact() {
  return (
    <>
    <main className="mainContact">
    <HeaderWhite />
      <h2 className="titleContact">Besoin d'aide ? Contactez nous </h2>
      <form action="submit" className="formulaireContact">
        <input type="text" placeholder="Votre adresse mail" className="inputContact"/>
        <input type="email" placeholder="Votre demande" className="inputContact"/>
        <textarea name="idée" id="idée" placeholder='Decrivez nous votre demande' className="textareaContact"></textarea>
        <button type="button" className="buttonContact">Envoyer</button>
      </form>
      </main>
      </>
  )
}

export default Contact