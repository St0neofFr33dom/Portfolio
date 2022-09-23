import React from 'react'
import Image from 'next/image'
import styles from "./styles.module.css"
import UONLogo from "../../public/logo-primary-single-col-blk.png"
import FlowerPhoto from "../../public/Flower_Photo.JPG"

const AboutScreen = ({popupImage}) => {
    return (
        <div className={styles.screen}>
            <h2>About Me</h2>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h3>University</h3>
                    <p>I studied Chemical with Environmental Engineering at the University of Nottingham, working in randomly assigned teams on projects.</p>
                    <h3>Hobbies</h3>
                    <p>I love games, whether they be Tabltetop, Board or Video. I also love nature, often going out for walks and recently took an interest in photography when out and about.</p>
                </div>
                <div className={styles.images}>
                    <Image src={UONLogo} alt="University of Nottingham Logo" onClick={popupImage}/>
                    <Image src={FlowerPhoto} alt="Flower" onClick={popupImage}/>
                </div>
            </div>
        </div>
    )
}

export default AboutScreen