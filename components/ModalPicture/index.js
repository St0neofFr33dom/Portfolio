
import React from 'react'
import Image from 'next/image'

const modalPicture = ({modalImage, modalCaption, modalDisplay, closeModal}) => {
    return (
        <div id="myModal" className="modal" style={modalDisplay}>
            <span className="close" onClick={closeModal}>&times;</span>
            <Image className="modal-content" id="img01" srcset={modalImage} alt={modalCaption} layout="responsive"/>
            <div id="caption"></div>
        </div>
    )
}

export default modalPicture

