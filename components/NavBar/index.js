import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const NavBar = ({ text, src }) => {
  return (
    <div className="navbar">
      <div className="navbar-textbox">
        <h2 >{text}</h2>
      </div>
      <div className="navbar-circlebox">
        <div className="navbar-circle" />
      </div>
    </div>
  );
};

export default NavBar;
