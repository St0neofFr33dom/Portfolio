import React from 'react'
import Image from 'next/image'
import styles from "./styles.module.css"

const SkillSymbol = ({image,  name}) => {
    return (
        <div className={styles.container}>
            <div className={styles.symbol}>
                <Image src={image} alt={name} layout="responsive"/>
            </div>
            <h4 style={{textAlign: "center"}}>{name}</h4>
        </div>
    )
}

export default SkillSymbol