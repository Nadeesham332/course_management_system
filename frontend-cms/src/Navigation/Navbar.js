import React from "react";
import "../styles/navbar.css"
import { useState } from "react"


const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="#">
    //     Navbar
    //   </a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNavDropdown"
    //     aria-controls="navbarNavDropdown"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //     <ul className="navbar-nav">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="#">
    //           Home <span className="sr-only">(current)</span>
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">
    //           Features
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">
    //           Pricing
    //         </a>
    //       </li>
    //       <li className="nav-item dropdown">
    //         <a
    //           className="nav-link dropdown-toggle"
    //           href="#"
    //           id="navbarDropdownMenuLink"
    //           data-toggle="dropdown"
    //           aria-haspopup="true"
    //           aria-expanded="false"
    //         >
    //           Dropdown link
    //         </a>
    //         <div
    //           className="dropdown-menu"
    //           aria-labelledby="navbarDropdownMenuLink"
    //         >
    //           <a className="dropdown-item" href="#">
    //             Action
    //           </a>
    //           <a className="dropdown-item" href="#">
    //             Another action
    //           </a>
    //           <a className="dropdown-item" href="#">
    //             Something else here
    //           </a>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav className="navigation">
      <a href="/" className="brand-name">
        Course Management System
      </a>
      <button className="hamburger"  onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li><a href="/login">LogIn</a></li>
        </ul>
        {/* <ul className="secondary-nav">
                        <li><label className='font-weight-bold'>LogIn</label></li>
                    
                    </ul> */}
      </div>
    </nav>

  );
};

export default Navbar;