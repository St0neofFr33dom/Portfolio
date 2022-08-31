import React from 'react'
import Image from 'next/image'
import styles from  "./styles.module.css"

const modalPicture = ({modalImage, modalCaption, modalDisplay, closeModal}) => {
    return (
        <div id="myModal" className={styles.modal} style={modalDisplay}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <Image className={styles.modalContent} id="img01" srcset={modalImage} alt={modalCaption} layout="responsive"/>
            <div className={styles.caption}></div>
        </div>
    )
}

export default modalPicture

