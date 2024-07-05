import Logo404 from "../../assets/LOGO_404.svg";
import HeaderBlue from "../../components/HeaderBlue/HeaderBlue";
import BlueFooter from "../../components/BlueFooter/BlueFooter";
import "./ErrorPage404.css";

function ErrorPage404() {
  return (
    <>
      <main className="main404">
        <HeaderBlue />
        <figure className="figure404">
          <img src={Logo404} alt="Logo404" className="image404" />
          <figcaption className="caption404">
            Oops ! Cette idée est en cours d'élaboration.. Erreur 404
          </figcaption>
        </figure>
        <BlueFooter />
      </main>
    </>
  );
}

export default ErrorPage404;
