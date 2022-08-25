import React, { useState } from "react";
import AboutScreen from "../components/AboutScreen";
import NavBar from "../components/NavBar";
import PortfolioScreen from "../components/PortfolioScreen";
import StartScreen from "../components/StartScreen";

const Home = () => {

  const [screen, setScreen] = useState("Start")


  function changeScreen(e){
     setScreen(e.target.dataset.value)

  }

  return (
    <main>
      <h1>Christophe Charbonneau-Freeston</h1>
      <h2>{screen}</h2>
      <div className="hero">
        <div className="navbar-container">
          <NavBar text="About Me"  value="About" onClick={changeScreen}/>
          <NavBar text="Projects" value="Projects" onClick={changeScreen}/>
          <NavBar text="Skills" value="Skills" onClick={changeScreen}/>
        </div>
        <div className="screen-container">
          {(screen === "Start") && <StartScreen />}
          {(screen === "About") && <AboutScreen />}
          {(screen === "Projects") && <PortfolioScreen />}
        </div>
      </div>
    </main>
  );
};

export default Home;
