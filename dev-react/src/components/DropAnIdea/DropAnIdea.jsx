import { Link } from "react-router-dom";
import "./DropAnIdea.css";

function DropAnIdea() {
  return (
    <figure className="dropAnIdeaContainer">
      <figcaption className="dropAnIdeaCaption">
        Une idée ? Partage-la ici !
      </figcaption>
      <Link to="/boxPage">
        <button type="button" className="dropAnIdeaButton">
          Contribuer
        </button>
      </Link>
    </figure>
  );
}

export default DropAnIdea;
