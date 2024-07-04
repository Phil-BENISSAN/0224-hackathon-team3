import { useState } from "react";
git 
import IdeaModal from "../IdeaModal/IdeaModal";

import "./IdeaBox.css";

function IdeaBox() {
    const [showModalModify, setShowModalModify] = useState(false);

    const openModalModify = () => setShowModalModify(true);
    const handleClickModify = () => {
    setShowModalModify(false) };
  return (
    <>
        <figure className="boxContainer">
        <img src={box} alt="" className="boiteDePandore" />
        <button
            type="button"
            onClick={openModalModify}
            aria-label="Ouverture de la modale soumettre son idée"
            className="buttonSubmission"
        >Soumettez votre idée</button>
        </figure>
        {showModalModify && (
            <IdeaModal handleClickModify={handleClickModify} />
        )}
    </>
  );
}

export default IdeaBox;
