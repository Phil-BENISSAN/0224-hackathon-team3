import blueLogo from "../../assets/includify-high-resolution-logo-white-transparent.svg"
import "./HeaderBlue.css"

function HeaderBlue() {
  return (
    <header>
        <img src={blueLogo} alt="Logo includify" className="blueLogo"/>
    </header>
  )
}

export default HeaderBlue