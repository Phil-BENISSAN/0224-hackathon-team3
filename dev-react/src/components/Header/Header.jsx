import Logo from "../../assets/includify-high-resolution-logo-white-transparent.svg"
import "./Header.css"

function Header() {
  return (
    <header>
        <img src={Logo} alt="Logo includify" className="WhiteLogo"/>
    </header>
  )
}

export default Header