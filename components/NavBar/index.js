import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const NavBar = ({ text, value, onClick }) => {
  return (
    <div className="navbar" onClick={onClick} >
      <div className="navbar-textbox" data-value={value}>
        <h2 data-value={value}>{text}</h2>
      </div>
      <div className="navbar-circlebox" data-value={value}>
        <div className="navbar-circle" data-value={value}/>
      </div>
    </div>
  );
};

export default NavBar;
