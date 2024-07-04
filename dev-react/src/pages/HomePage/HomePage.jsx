import Slider from "../../components/slider/slider";
import DropAnIdea from "../../components/DropAnIdea/DropAnIdea";
import HeaderBlue from "../../components/HeaderBlue/HeaderBlue";

import "./HomePage.css";

function HomePage() {
  return (
    <>
      <HeaderBlue />
      <main className="homepage">
        <h2 className="titleHomePage">Notre Engagement</h2>
        <p>
          Dans un monde en constante évolution, il est crucial pour les
          entreprises d'innover et de favoriser un environnement de travail
          inclusif. Notre boîte à idées anonymisée permet à tous les employés de
          soumettre librement leurs suggestions innovantes, garantissant ainsi
          l'anonymat pour encourager une participation honnête.
        </p>
        <DropAnIdea />

        <Slider />
      </main>
    </>
  );
}

export default HomePage;
