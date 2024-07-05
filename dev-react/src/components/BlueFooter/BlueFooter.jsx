import { Link } from "react-router-dom";

import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import x from "../../assets/twitter-x.svg";
import facebook from "../../assets/facebook.svg";

import "./BlueFooter.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="footer__ul-mentions">
          <li className="footer__li">
            <Link to="/CGU" className="footer__cgu">
              CGU
            </Link>
          </li>
          <li className="footer__li">
            <Link to="/ProtectionDataPolicy" className="footer__pdd">
              Politique de confidentialité
            </Link>
          </li>
          <li className="footer__li">
            <Link to="/LegalMentions" className="footer__mentions">
              Mentions légales
            </Link>
          </li>
        </ul>

        <ul className="footer__ul-network">
          <li className="footer__li">
            <a
              href="https://www.facebook.com/includify"
              target="_blank"
              rel="noreferrer"
              className="footer__facebook-link"
            >
              <img
                src={facebook}
                alt="lien vers la page linkedin d'Includify"
                className="footer__facebook-img"
              />
            </a>
          </li>
          <li className="footer__li">
            <a
              href="https://www.linkedin.com/includify"
              target="_blank"
              rel="noreferrer"
              className="footer__linkedin-link"
            >
              <img
                src={linkedin}
                alt="lien vers la page linkedin d'Includify"
                className="footer__linkedin-img"
              />
            </a>
          </li>
          <li className="footer__li">
            <a
              href="https://www.instagram.com/includify"
              target="_blank"
              rel="noreferrer"
              className="footer__insta-link"
            >
              <img
                src={instagram}
                alt="lien vers la page instagram d'Includify"
                className="footer__insta-img"
              />
            </a>
          </li>
          <li className="footer__li">
            <a
              href="https://x.com/includify"
              target="_blank"
              rel="noreferrer"
              className="footer__x-link"
            >
              <img
                src={x}
                alt="lien vers la page X d'Includify"
                className="footer__x-img"
              />
            </a>
          </li>
        </ul>
        <ul>
          <li className="footer__li-contact">
            <Link to="/contact" className="footer__contact">
              Contactez-nous
            </Link>
          </li>
          <li className="footer__li-info">Informations</li>
          <li className="footer__li-team">Notre équipe</li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
