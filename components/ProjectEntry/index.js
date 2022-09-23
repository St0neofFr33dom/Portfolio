import React from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'

const ProjectEntry = ({link, title, description, skills, image, onClick}) => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h3><a href={link} target="_blank" rel="noreferrer">{title}</a></h3>
                <p>{description}</p>
            </div>
            <div className={styles.image} onClick={onClick}>
                <Image src={image} alt={title} width="100%" height="100%"/>
            </div>
            <div className={styles.list}>
                <h3>Key Technologies</h3>
                <ul>
                    {skills.map((skill) => {
                        let random = Math.floor(Math.random()*10000)
                        return <li key = {random}>{skill}</li>
                    })}
                </ul>
             </div>
        </div>
    )
}

export default ProjectEntry