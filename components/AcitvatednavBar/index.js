import React from "react";


const AcitvatedNavBar = ({ text, value, onClick }) => {
  return (
    <div className="activatedNavbar" onClick={onClick} >
      <div className="activatedNavbar-textbox" data-value={value}>
        <h2 data-value={value}>{text}</h2>
      </div>
      <div className="activatedNavbar-circlebox" data-value={value}>
        <div className="activatedNavbar-circle" data-value={value}/>
      </div>
    </div>
  );
};

export default AcitvatedNavBar;
