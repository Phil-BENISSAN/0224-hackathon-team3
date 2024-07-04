import HeaderWhite from '../../components/HeaderWhite/HeaderWhite'

import "./BoxPage.css"

function BoxPage() {
  return (
    <>
      <HeaderWhite />
      <h2 className="titleIdée">Proposez une idée !</h2>
      <form action="submit" className="formulaireIdée">
        <input type="text" placeholder="Titre de votre idée" className="inputIdée"/>
        <textarea name="idée" id="idée" placeholder='Decrivez votre idée' className="textareaIdée"></textarea>
        <button type="button" className="buttonIdée">Partager</button>
      </form>
    </>
  )
}

export default BoxPage