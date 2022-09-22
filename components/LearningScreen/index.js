import React from 'react'
import styles from "./styles.module.css"
import ProjectEntry from '../ProjectEntry'


const LearningScreen = () => {

    
    let threeJSDescription = "Using the Three.js library to experiment with simple 3d images adn animations for web applications"

    return (
        <div className={styles.screen}>
            <h2>Projects</h2>
            <div>
                <ProjectEntry title="Three JS" link="https://github.com/St0neofFr33dom/threejslearning" description={threeJSDescription} skills={["Javascript", "NodeJS", "Three.JS"]}/> 
            </div>
        </div>
    )
}

export default LearningScreen