import React, { useState } from 'react'
import styles from "./styles.module.css"
import ProjectEntry from '../ProjectEntry'
import threeJSimage from "../../public/ProjectScreenshots/three.jpg"


const LearningScreen = ({popupImage}) => {

    
    let threeJSDescription = "Using the Three.js library to experiment with simple 3d images adn animations for web applications"


    const [entries, setEntries] = useState([
        {
            title: "Three JS",
            link: "https://github.com/St0neofFr33dom/threejslearning",
            description: threeJSDescription,
            skills: ["Javascript", "NodeJS", "Three.JS"],
            image: threeJSimage,
          },
    ])
    return (
        <div className={styles.screen}>
            <h2>Projects</h2>
            <div>
            {entries.map((project, index) => {
          return (
            <ProjectEntry
              key={index}
              title={project.title}
              link={project.link}
              description={project.description}
              skills={project.skills}
              image={project.image}
              onClick={popupImage}
            />
          );
        })}
            </div>
        </div>
    )
}

export default LearningScreen