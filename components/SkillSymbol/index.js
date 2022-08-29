import React from 'react'
import Image from 'next/image'

const SkillSymbol = ({image,  name}) => {
    return (
        <div className="skill">
            <div className="skill-symbol">
                <Image src={image} alt={name} layout="responsive"/>
            </div>
            <h4 style={{textAlign: "center"}}>{name}</h4>
        </div>
    )
}

export default SkillSymbol