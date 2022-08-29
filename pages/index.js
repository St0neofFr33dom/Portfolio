import React, { useState } from "react";
import AboutScreen from "../components/AboutScreen";
import NavBar from "../components/NavBar";
import PortfolioScreen from "../components/PortfolioScreen";
import StartScreen from "../components/StartScreen";
import SkillScreen from "../components/SkillScreen";
import ModalPicture from "../components/ModalPicture";
import ActivatedNavBar from "../components/AcitvatednavBar";
import Image from "next/image";
import LearningScreen from "../components/LearningScreen";

const Home = () => {

  const [screen, setScreen] = useState("Start")

  const [modalSrc, setModalSrc] = useState("")
  const [modalCaption, setModalCaption] = useState("")
  const [modalDisplay, setModalDisplay] = useState("display:none")

  function changeScreen(e){
    let value = e.target.dataset.value
    if (screen === value){
      setScreen("Start")
      return
    }
     setScreen(value)
     return

  }

  function popupImage(e){
    setModalSrc(e.target.srcset)
    setModalCaption(e.target.alt)
    setModalDisplay("display:block")
  }

  function closeModal(){
    setModalCaption("")
    setModalDisplay("display:none")
  }

  return (
    <main>
      <h1>Christophe Charbonneau-Freeston</h1>
      <div className="hero">
        <div className="navbar-container">
          {(screen !== "About") && <NavBar text="About Me"  value="About" onClick={changeScreen}/>}
          {(screen == "About") && <ActivatedNavBar text="About Me"  value="About" onClick={changeScreen}/>}
          {(screen !== "Projects") && <NavBar text="Projects" value="Projects" onClick={changeScreen}/>}
          {(screen == "Projects") && <ActivatedNavBar text="Projects" value="Projects" onClick={changeScreen}/>}
          {(screen !== "Skills") && <NavBar text="Skills" value="Skills" onClick={changeScreen}/>}
          {(screen == "Skills") && <ActivatedNavBar text="Skills" value="Skills" onClick={changeScreen}/>}
          {(screen !== "Learning") && <NavBar text="Learning" value="Learning" onClick={changeScreen}/>}
          {(screen == "Learning") && <ActivatedNavBar text="Learning" value="Learning" onClick={changeScreen}/>}
        </div>
        <div className="screen-container">
          {(screen === "Start") && <StartScreen popupImage={popupImage}/>}
          {(screen === "About") && <AboutScreen popupImage={popupImage}/>}
          {(screen === "Projects") && <PortfolioScreen popupImage={popupImage}/>}
          {(screen === "Skills") && <SkillScreen popupImage={popupImage}/>}
          {(screen === "Learning") && <LearningScreen popupImage={popupImage}/>}
        </div>
      </div>
      {modalCaption && <ModalPicture modalImage={modalSrc} modalCaption={modalCaption} closeModal={closeModal}/>}
    </main>
  );
};

export default Home;
