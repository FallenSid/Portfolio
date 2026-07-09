import React from "react";
const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <svg width="24px" height="24px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1H5L8 3H13V5H3.7457L2.03141 11H4.11144L5.2543 7H16L14 14H0V1Z" fill="rgb(40, 79, 255)"></path></svg>
        <p>
            Portfolio
        </p>
      </div>
        
      <div className="pages">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
