import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const modalPicture = ({
  modalImage,
  modalCaption,
  modalDisplay,
  closeModal,
}) => {
  return (
    <div id="myModal" className={styles.modal} style={modalDisplay}>
      <span className={styles.close} onClick={closeModal}>
        &times;
      </span>
      <div className={styles.modalContent}>
        <Image id="img01" src={modalImage} alt={modalCaption} layout="responsive" width="100%" height="100%"/>
      </div>
      <div className={styles.caption}></div>
    </div>
  );
};

export default modalPicture;
