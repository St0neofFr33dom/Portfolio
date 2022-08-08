import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const NavBar = ({ text, src }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>{text}</h2>
      </div>
      <div className={styles.box}></div>
    </div>
  );
};

export default NavBar;
