import React from 'react'
import Image from 'next/image'
import styles from "./styles.module.css"

const SkillSymbol = ({image,  name, onClick}) => {
    return (
        <div className={styles.container} onClick={onClick}>
            <div className={styles.symbol}>
                <Image src={image} alt={name} layout="responsive"/>
            </div>
            <h4 style={{textAlign: "center"}}>{name}</h4>
        </div>
    )
}

export default SkillSymbol