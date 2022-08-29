import React from 'react'
import { useState } from 'react'
import SkillSymbol from '../SkillSymbol'

import htmlImage from "../../public/techStackSVG/HTML5_Badge.svg"
import cssImage from "../../public/techStackSVG/CSS3_logo.svg"
import jsImage from "../../public/techStackSVG/Unofficial_JavaScript_logo_2.svg"
import nodeImage from "../../public/techStackSVG/nodejs-seeklogo.com.svg"
import reactImage from "../../public/techStackSVG/React-icon.svg"
import expressImage from "../../public/techStackSVG/expressjs-ar21.svg"
import jestImage from "../../public/techStackSVG/jest-seeklogo.com.svg"
import postgreSQLImage from "../../public/techStackSVG/postgresql-icon.svg"
import nextJSImage from "../../public/techStackSVG/Nextjs-logo.svg"
import githubImage from "../../public/techStackSVG/github-Octicons-mark-.svg"
import authImage from "../../public/techStackSVG/auth0-icon.svg"
import figmaImage from "../../public/techStackSVG/Figma-logo.svg"



const SkillScreen = ({popupImage}) => {

    const techStack = [
        {image: htmlImage, name: "HTML"},
        {image: cssImage, name: "CSS"},
        {image: jsImage, name: "Javascript"},
        {image: nodeImage, name: "Node.js"},
        {image: reactImage, name: "React"},
        {image: expressImage, name: "Express"},
        {image: jestImage, name: "Jest"},
        {image: postgreSQLImage, name: "PostgreSQL"},
        {image: nextJSImage, name: "Next.js"},
        {image: githubImage, name: "Github"},
        {image: authImage, name: "Auth0"},
        {image: figmaImage, name: "Figma"},
    ]


    return (
        <div className="skill-screen">
            <h2>Key Stacks</h2>
            <div className="skill-screen-container">
                {techStack.map((entry, index) => {
                    return <SkillSymbol key={index} image={entry.image} name={entry.name} onClick={popupImage}/>
                })}
            </div>
        </div>
    )
}

export default SkillScreen