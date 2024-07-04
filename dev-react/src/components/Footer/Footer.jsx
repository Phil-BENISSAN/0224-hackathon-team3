import { Link } from "react-router-dom";

import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import x from "../../assets/twitter.svg";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/includify"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="lien vers la page linkedin d'Includify'" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/includify"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instagram}
              alt="lien vers la page instagram d'Includify'"
            />
          </a>
        </li>
        <li>
          <a href="https://x.com/includify" target="_blank" rel="noreferrer">
            <img src={x} alt="lien vers la page X d'Includify" />
          </a>
        </li>
        <li>
          <Link to="/contact">Nous contacter</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/CGU">CGU</Link>
        </li>
        <li>
          <Link to="/ProtectionDataPolicy">Politique de confidentialité</Link>
        </li>
        <li>
          <Link to="/LegalMentions">Mentions légales</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
