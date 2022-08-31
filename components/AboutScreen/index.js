import React from 'react'
import Image from 'next/image'
import styles from "./styles.module.css"

const AboutScreen = ({popupImage}) => {
    return (
        <div className={styles.screen}>
            <h2>About Me</h2>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h3>University</h3>
                    <p>I studied Chemical with Environmental Engineering at the University of Nottingham, working in randomly assinged teams on projects.</p>
                    <h3>Hobbies</h3>
                    <p>I love games, whether they be Tabltetop, Board or Video. I also love nature, often going out for walks and recently took an interest in photography when out and about.</p>
                </div>
                <div className={styles.images}>
                    <Image src={require("../../public/logo-primary-single-col-blk.png")} alt="University of Nottingham Logo" onClick={popupImage}/>
                    <Image src={require("../../public/Flower_Photo.JPG")} alt="Flower" onClick={popupImage}/>
                </div>
            </div>
        </div>
    )
}

export default AboutScreen