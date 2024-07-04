import IdeaBox from "../../components/IdeaBox/IdeaBox";
import Slider from "../../components/slider/slider";

import "./HomePage.css"

function HomePage() {
  return (
    <main className="homepage">
      <h1>Includify</h1>
      <IdeaBox />
      <Slider />
    </main>
  );
}

export default HomePage;
