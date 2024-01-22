import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import logo from "./Light Green Bulb Children & Kids Logo.png"
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="navbaroverallheader col-lg-12 content-card">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid ms-5 pt-3">
            {/* <img
              className="udemylogo "
              src="https://www.canva.com/design/DAF6gCSrtHY/view"
            ></img> */}

            <img
              src={logo} alt ="image" width="150px"
            ></img>
            {/* <img src="https://www.canva.com/design/DAF6gCSrtHY/view" alt="" /> */}
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse content-card"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  {/* <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Catagories
                  </a> */}
                  <ul className="dropdown-menu ms-2 content-card">
                    <li>
                      <a className="dropdown-item" href="#">
                        Development
                      </a>
                    </li>
                    <li className="text-light">
                      <a className="dropdown-item text-light" href="#">
                        Business
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Finance & Accounting
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        IT & Software
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Office Productivity
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Personal Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Design
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Lifestyle
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Photography & Video
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-center" href="#">
                        Health & Fitness
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Music
                      </a>
                    </li> 
                    <li>
                      <a className="dropdown-item" href="#">
                        Teaching & Academics
                      </a>
                    </li>
                  </ul>
                </li>
                <form>
                  <div className="input-box bg-light">
                    <FaSearch className="input-box2"/>
                    <input
                      type="search"
                      className="input-box1"
                      id="exampleInputEmail1"
                      placeholder="Search"
                    />
                  </div>
                </form>

                {/*  */}

                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle me-4"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Udemy Business
                  </a>
                </li> */}

                {/*  */}
                <li className="nav-item ms-5">
                  <a className="nav-link me-4 text-light" href="#">
                    Teach on Udemy
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link me-4 text-light" href="#">
                    My Learnings
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link me-4" href="#">
                    <FontAwesomeIcon className="fs-4 text-light" icon={faHeart} />
                  </a>{" "}
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#">
                    <FontAwesomeIcon className="fs-4 text-light" icon={faCartShopping} />
                  </a>{" "}
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#">
                    <FontAwesomeIcon  className="fs-4 text-light" icon={faBell} />
                  </a>{" "}
                </li>
                <li className="nav-item ">
                  <a className="nav-link me-4" href="#">
                    <FontAwesomeIcon className="fs-4 text-light" icon={faCircleUser} />
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr className="mt-1"></hr>
        {/* next navbar */}
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid  ">
            <div
              className="collapse navbar-collapse  content-card-color"
              id="navbarNav"
            >
              {/* Development ul list */}
              <ul className="navbar-nav px-5 col-lg-12 text-light">
                <li className="nav-item px-1">
                  <a className="nav-link text-center text-light" href="#">
                    Development
                  </a>

                  <ul className="submenu">
                    <li className="nav-item text-light">
                      <a className="nav-link text-center text-light" href="#">
                        Web Development
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-center text-light" href="#">
                        Mobile Development
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-center text-light" href="#">
                        Programming Languages
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#">
                        Game Development
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#">
                        Database Design & Development
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#">
                        Software Testing
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Business ul list */}

                <li className="nav-item px-1">
                  <a className="nav-link text-light" href="#">
                    Business
                  </a>
                  <ul className="submenu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Entreprenership
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Communication
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Management
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Sales
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Business Stretagy
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Finance ul list */}

                <li className="nav-item px-1">
                  <a className="nav-link text-light" href="#">
                    Finance
                  </a>
                  <ul className="submenu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Accounting & Bookkeeping
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Cryptography & Blockchain
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Finance
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Financial Modeling & Analysis
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Investing & Trading
                      </a>
                    </li>
                  </ul>
                </li>

                {/* IT & Software ul list */}

                <li className="nav-item px-1">
                  <a className="nav-link text-light" href="#">
                    IT
                  </a>
                  <ul className="submenu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        IT Certification
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Network & Security
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Hardware
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Operating System & Server
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Other IT & Software
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Office Productivity ul list */}

                <li className="nav-item px-1">
                  <a className="nav-link text-light" href="#">
                    Office Productivity
                  </a>
                  <ul className="submenu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Microsoft
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Apple
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Google
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        SAP
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Oracle
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Other Office Productivity{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Personal Development ul list */}

                <li className="nav-item px-1">
                  <a className="nav-link text-light" href="#">
                    Personal Development
                  </a>
                  <ul className="submenu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Personal Transformation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Personal Productivity
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Leadership
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Carrier Development
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Parenting & Relationship
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Design ul list */}

                <li className="nav-item px-1">
                  <a className="nav-link text-light" href="#">
                    Design
                  </a>
                  <ul className="submenu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Web Design
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Graphic Design & Illustration
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Design Tools
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        User Experience Design
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Game Design
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        3D & Animation
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Marketing ul list */}

                <li className="nav-item px-1">
                  <a className="nav-link text-light" href="#">
                    Marketing
                  </a>
                  <ul className="submenu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Digital Marketing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Search Engine Optimization
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Social Media Marketing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Branding
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Marketing Fundamentals
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Marketing Analytics & Automation{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Health & Fitness ul list */}

                <li className="nav-item px-1">
                  <a className="nav-link text-light" href="#">
                    Health & Fitness
                  </a>
                  <ul className="submenu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Fitness
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        General Health
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Sports
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Nutrician & Diet
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Yoga
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Mental Health
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Music ul list */}

                <li className="nav-item px-1">
                  <a className="nav-link text-light" href="#">
                    Music
                  </a>
                  <ul className="submenu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Instruments
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Music Production
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Music Fundamentals
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Vocal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Music Techniques
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Music Software
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* color */}
    </>
  );
}
export default Navbar;
