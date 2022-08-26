import React, { useState } from "react";
import AboutScreen from "../components/AboutScreen";
import NavBar from "../components/NavBar";
import PortfolioScreen from "../components/PortfolioScreen";
import StartScreen from "../components/StartScreen";
import ModalPicture from "../components/ModalPicture";
import Image from "next/image";

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
          <NavBar text="About Me"  value="About" onClick={changeScreen}/>
          <NavBar text="Projects" value="Projects" onClick={changeScreen}/>
          <NavBar text="Skills" value="Skills" onClick={changeScreen}/>
        </div>
        <div className="screen-container">
          {(screen === "Start") && <StartScreen popupImage={popupImage}/>}
          {(screen === "About") && <AboutScreen popupImage={popupImage}/>}
          {(screen === "Projects") && <PortfolioScreen popupImage={popupImage}/>}
        </div>
      </div>
      {modalCaption && <ModalPicture modalImage={modalSrc} modalCaption={modalCaption} closeModal={closeModal}/>}
    </main>
  );
};

export default Home;
