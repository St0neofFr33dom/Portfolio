import React from "react";
import NavBar from "../components/NavBar";

const Home = () => {
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
          
        </div>
      </div>
    </main>
  );
};

export default Home;
