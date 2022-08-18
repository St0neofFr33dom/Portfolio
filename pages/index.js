import React, { useState } from "react";
import AboutScreen from "../components/AboutScreen";
import NavBar from "../components/NavBar";
import PortfolioScreen from "../components/PortfolioScreen";
import StartScreen from "../components/StartScreen";

const Home = () => {

  const [screen, setScreen] = useState("Start")

  return (
    <main>
      <h1>Christophe Charbonneau-Freeston</h1>
      <div className="hero">
        <div className="navbar-container">
          <NavBar src="/about" text="About Me" />
          <NavBar src="/portfolio" text="Projects" />
          <NavBar src="/skills" text="Skills" />
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
