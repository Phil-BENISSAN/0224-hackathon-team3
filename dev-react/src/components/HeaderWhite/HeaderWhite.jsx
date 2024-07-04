import whiteLogo from "../../assets/includify-high-resolution-logo-transparent.svg"
import "./HeaderWhite.css"

function HeaderWhite() {
  return (
    <header className="whiteHeader">
        <img src={whiteLogo} alt="Logo includify" className="WhiteLogo"/>
    </header>
  )
}

export default HeaderWhite