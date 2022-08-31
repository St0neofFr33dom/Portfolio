import React from "react";
import styles from "./styles.module.css"


const AcitvatedNavBar = ({ text, value, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick} >
      <div className={styles.textbox} data-value={value}>
        <h2 data-value={value}>{text}</h2>
      </div>
      <div className={styles.circlebox} data-value={value}>
        <div className={styles.circle} data-value={value}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AcitvatedNavBar;
