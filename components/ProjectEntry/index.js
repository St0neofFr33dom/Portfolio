import React from 'react'

const ProjectEntry = ({link, title, description, skills}) => {
    return (
        <div className="project-entry">
            <div className="project-entry-text">
                <h3><a href={link} target="_blank" rel="noreferrer">{title}</a></h3>
                <p>{description}</p>
            </div>
            <div className="project-entry-list">
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