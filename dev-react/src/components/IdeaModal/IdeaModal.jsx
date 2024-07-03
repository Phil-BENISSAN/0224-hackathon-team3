import { Form } from "react-router-dom"

import "./IdeaModal.css"

function IdeaModal({handleClickModify}) {
    

    
  return (
    <dialog className="dialog" open>
      <Form method="POST">
        <label className="modalLabel">
          Personne célèbre
          <textarea id="placeholder" placeholder="Entrez votre idée ici..." className="placeholder" />
        </label>
      </Form>
      <button type="button" onClick={handleClickModify}>
        Soumettre son idée
      </button>
      <button type="button" onClick={handleClickModify}>
        annuler
      </button>
    </dialog>
  )
}

export default IdeaModal