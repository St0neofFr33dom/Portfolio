import React from 'react'
import styles from './IntroCard.module.css'
import Image from 'next/image'

const IntroCard = ({title,description,icon}) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.body}>{description}</p>
            <Image
                className={styles.icon}
                src={icon.image}
                alt={icon.alt}
            />
        </div>
    )
}

export default IntroCard