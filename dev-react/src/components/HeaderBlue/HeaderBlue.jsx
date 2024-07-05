import { Link } from "react-router-dom";

import blueLogo from "../../assets/includify-high-resolution-logo-white-transparent.svg";

import "./HeaderBlue.css";

function HeaderBlue() {
  return (
    <header>
      <Link to="/">
        <img src={blueLogo} alt="Logo includify" className="blueLogo" />
      </Link>
    </header>
  );
}

export default HeaderBlue;
