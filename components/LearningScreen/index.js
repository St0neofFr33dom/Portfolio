import React from 'react'
import ProjectEntry from '../ProjectEntry'


const LearningScreen = () => {

    let graphQLDescription = "GraphQL Project, using an Apollo server in conjuction with an express server, communicating with a MongoDB database"
    let threeJSDescription = "Using the Three.js library to experiment with simple 3d images for web applications"

    return (
        <div>
            <h2>Projects</h2>
            <div className="portfolio-screen-container">
                <ProjectEntry title="GraphQL API" link="https://github.com/St0neofFr33dom/GraphQLProject" description={graphQLDescription} skills={["MongoDB","Apollo"]}/> 
                <ProjectEntry title="Three JS" link="https://github.com/St0neofFr33dom/threejslearning" description={threeJSDescription} skills={["Javascript", "NodeJS", "Three.JS"]}/> 
            </div>
        </div>
    )
}

export default LearningScreen