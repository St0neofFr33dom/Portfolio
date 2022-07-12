import React from 'react'
import styles from './IntroCard.module.css'

const IntroCard = ({title,description}) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.body}>{description}</p>
        </div>
    )
}

export default IntroCard