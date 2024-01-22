import React from "react";
import "../button/button.css";
import { PythonCourses } from "../Card/card";
import { Link } from "react-router-dom";

function Button() {
  return (
    <>
      {/* <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
      >
        <div class="carousel-inner text-center">
        
          <div class="carousel-item active  justify-content-sm-between"> */}
          <h3 className="text-start fs-3 fw-bolder mt-4 ms-3 content-card">Topics recommended for you</h3>
          <div className="ms-3 my-4 text-center content-card">
            <Link to="/pythoncourses" className="text-decoration">
            <a href="">
              <button
                type="button"
                class="btn btn-light  me-2 mt-2 swipe  border-secondary-subtle button_color"
              >
                Python
              </button>
            </a>
            </Link>
            <Link to="/javascriptcourses" className="text-decoration">
            <a href="">
              <button
                type="button"
                class="btn btn-light  me-2 mt-2 swipe  border-secondary-subtle button_color"
              >
               JavaScript
              </button>
            </a>
            </Link>
              <Link to="/popularcourses" className="text-decoration">
            <a href="">
              <button
                type="button"
                class="btn btn-light  me-2 mt-2 swipe  border-secondary-subtle button_color"
              >
                Most popular
              </button>
            </a>
            </Link>
            </div>
            {/* <button
              type="button"
              class="btn btn-light  me-2 mt-2 swipe border-secondary-subtle"
            >
              Data Science
            </button>
            <button
              type="button"
              class="btn btn-light  me-2 mt-2 swipe border-secondary-subtle"
            >
              Machine Learning
            </button>
            <button
              type="button"
              class="btn btn-light me-2 mt-2 swipe border-secondary-subtle"
            >
              Flask
            </button>
            <button
              type="button"
              class="btn btn-light me-2  mt-2 swipe border-secondary-subtle"
            >
              Web Scraping
            </button> */}
            {/* <div> */}
              {/* <button
                type="button"
                class="btn btn-light  me-2 mt-2  swipe border-secondary-subtle"
              >
                Full Stack Web<br></br>Development
              </button>
              <button
                type="button"
                class="btn btn-light  me-2  mt-2 swipe border-secondary-subtle"
              >
                Django
              </button>
              <button
                type="button"
                class="btn btn-light  me-2  mt-2 swipe border-secondary-subtle"
              >
                Front End Web<br></br>Development
              </button>
              <button
                type="button"
                class="btn btn-light  me-2  mt-2 swipe border-secondary-subtle"
              >
                Web Development
              </button>
              <button
                type="button"
                class="btn btn-light  me-2  mt-2 swipe border-secondary-subtle"
              >
                React JS
              </button>
            </div>
          </div>

          <div class="carousel-item ">
            <button
              type="button"
              class="btn btn-light  me-2 mt-2  swipe border-secondary-subtle"
            >
              Project Management
            </button>
            <button
              type="button"
              class="btn btn-light  me-2 mt-2  swipe border-secondary-subtle"
            >
              Data Modellig
            </button>
            <button
              type="button"
              class="btn btn-light  me-2 mt-2  swipe border-secondary-subtle"
            >
              Business Analysis
            </button>
            <button
              type="button"
              class="btn btn-light  me-2 mt-2 swipe border-secondary-subtle"
            >
              Data Analysis
            </button>
            <button
              type="button"
              class="btn btn-light  me-2 mt-2  swipe border-secondary-subtle"
            >
              SQL
            </button>
            <div>
              <button
                type="button"
                class="btn btn-light  me-2  mt-2 swipe border-secondary-subtle"
              >
                Product<br></br>Development
              </button>
              <button
                type="button"
                class="btn btn-light  me-2 mt-2 swipe border-secondary-subtle"
              >
                Chat GPT
              </button>
              <button
                type="button"
                class="btn btn-light  me-2  mt-2 swipe border-secondary-subtle"
              >
                Front End Web<br></br>Development
              </button> */}
              {/* <button
                type="button"
                class="btn btn-light  me-2  mt-2 swipe border-secondary-subtle"
              >
                Javascript
              </button> */}
              {/* <button
                type="button"
                class="btn btn-light  me-2  mt-2 swipe border-secondary-subtle"
              >
                React JS
              </button>{" "} */}
            {/* </div>
          </div>
        </div>
        <button
          class="carousel-control-prev twobuttons"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon " aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next twobuttons"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon " aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
}
export default Button;
