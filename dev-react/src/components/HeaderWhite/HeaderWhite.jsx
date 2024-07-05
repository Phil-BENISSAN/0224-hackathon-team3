import { Link } from "react-router-dom";

import whiteLogo from "../../assets/includify-high-resolution-logo-transparent.svg";

import "./HeaderWhite.css";

function HeaderWhite() {
  return (
    <header className="whiteHeader">
      <Link to="/">
        <img src={whiteLogo} alt="Logo includify" className="WhiteLogo" />
      </Link>
    </header>
  );
}

export default HeaderWhite;
