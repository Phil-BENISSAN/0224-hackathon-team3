import { Link } from "react-router-dom";

import Slider from "../../components/slider";

import "./HomePage.css"

function HomePage() {
  return (
    <>
      <h2 className="titleHomePage">Lancez votre idée pour un avenir inclusif !</h2>
      <Link to="/boxPage" ></Link>
      <Slider />
    </>
  );
}

export default HomePage;
