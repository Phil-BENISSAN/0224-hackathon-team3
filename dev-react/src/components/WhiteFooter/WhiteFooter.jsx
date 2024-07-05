import { Link } from "react-router-dom";

import linkedin from "../../assets/blue-linkedin.svg";
import instagram from "../../assets/blue-instagram.svg";
import x from "../../assets/blue-twitter-x.svg";
import facebook from "../../assets/blue-facebook.svg";

import "./WhiteFooter.css";

function WhiteFooter() {
  return (
    <>
      <footer className="whitefooter">
        <ul className="whitefooter__ul-mentions">
          <li className="whitefooter__li">
            <Link to="/CGU" className="whitefooter__cgu">
              CGU
            </Link>
          </li>
          <li className="whitefooter__li">
            <Link to="/ProtectionDataPolicy" className="whitefooter__pdd">
              Politique de confidentialité
            </Link>
          </li>
          <li className="whitefooter__li">
            <Link to="/LegalMentions" className="whitefooter__mentions">
              Mentions légales
            </Link>
          </li>
        </ul>

        <ul className="whitefooter__ul-network">
        <li className="whitefooter__li">
            <a
              href="https://www.facebook.com/includify"
              target="_blank"
              rel="noreferrer"
              className="whitefooter__facebook-link"
            >
              <img
                src={facebook}
                alt="lien vers la page linkedin d'Includify"
                className="whitefooter__facebook-img"
              />
            </a>
          </li>
          <li className="whitefooter__li">
            <a
              href="https://www.linkedin.com/includify"
              target="_blank"
              rel="noreferrer"
              className="whitefooter__linkedin-link"
            >
              <img
                src={linkedin}
                alt="lien vers la page linkedin d'Includify"
                className="whitefooter__linkedin-img"
              />
            </a>
          </li>
          <li className="whitefooter__li">
            <a
              href="https://www.instagram.com/includify"
              target="_blank"
              rel="noreferrer"
              className="whitefooter__insta-link"
            >
              <img
                src={instagram}
                alt="lien vers la page instagram d'Includify"
                className="whitefooter__insta-img"
              />
            </a>
          </li>
          <li className="whitefooter__li">
            <a
              href="https://x.com/includify"
              target="_blank"
              rel="noreferrer"
              className="whitefooter__x-link"
            >
              <img
                src={x}
                alt="lien vers la page X d'Includify"
                className="whitefooter__x-img"
              />
            </a>
          </li>
        </ul>
        <ul>
        <li className="whitefooter__li-contact">
          <Link to="/contact" className="whitefooter__contact">
            Contactez-nous
          </Link>
        </li>
        <li className="whitefooter__li-info">Informations</li>
        <li className="whitefooter__li-team">Notre équipe</li>
        </ul>
      </footer>
    </>
  );
}

export default WhiteFooter;
