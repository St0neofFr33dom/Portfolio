import Image from 'next/image'
import React from 'react'
import styles from "./styles.module.css"
import profilePic from "../../public/MugShot.png"
import SoCLogo from "../../public/SoC-Logo.png"
import BoardgameImage from "../../public/BoardGame.jpg"

const StartScreen = ({popupImage}) => {
    return (
        <div className={styles.screen}>
            <h2>Profile</h2>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h3>Name</h3>
                    <h4>Christophe Charbonneau-Freeston</h4>
                    <h3>Role</h3>
                    <h4>Full-Stack Web Developer</h4>
                    <h3>Specialty</h3>
                    <h4>Front-End: React and Next.Js</h4>
                    <h4>Back-End: Express, REST APIs, GraphQL APIs</h4>
                    <h3>History</h3>
                    <h4>Chemical Engineering, Tour Guide, Board Game Maker</h4>
                </div>
                <div className={styles.image}>
                    <Image src={profilePic} alt="Creator of the Website" onClick={popupImage}/>
                    <Image src={SoCLogo} alt="School Of Code Logo" onClick={popupImage}/>
                    <Image src={BoardgameImage} alt="Picture of the Creator of the Website" onClick={popupImage}/>
                </div>
            </div>
        </div>
    )
}

export default StartScreen