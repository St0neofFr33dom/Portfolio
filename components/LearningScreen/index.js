import React from 'react'
import styles from "./styles.module.css"
import ProjectEntry from '../ProjectEntry'


const LearningScreen = () => {

    let reactNativeDescription = "Group project, teaching ourselves React native and Expo Apps. Also practicing our Typescript."
    let threeJSDescription = "Using the Three.js library to experiment with simple 3d images adn animations for web applications"

    return (
        <div className={styles.screen}>
            <h2>Projects</h2>
            <div>
                <ProjectEntry title="React Native Quiz App" link="https://github.com/anastasia-starostina/React_Native_SciFi_App" description={reactNativeDescription} skills={["React Native", "Expo Go", "Typescript"]}/> 
                <ProjectEntry title="Three JS" link="https://github.com/St0neofFr33dom/threejslearning" description={threeJSDescription} skills={["Javascript", "NodeJS", "Three.JS"]}/> 
            </div>
        </div>
    )
}

export default LearningScreen