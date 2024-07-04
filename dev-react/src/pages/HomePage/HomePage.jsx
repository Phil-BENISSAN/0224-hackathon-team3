import { Link } from "react-router-dom";

import Slider from "../../components/slider/slider";

import "./HomePage.css"


import "./HomePage.css"

function HomePage() {
  return (
  <>
    <main className="homepage">
      <h1>Includify</h1>
    
      <h2 className="titleHomePage">Lancez votre idée pour un avenir inclusif !</h2>
      <Link to="/boxPage" ></Link>
      <Slider />
    </main>
    </>
  );
}

export default HomePage;
