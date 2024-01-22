import React, { useState } from "react";
import "./instructor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { AiOutlineCaretDown } from "react-icons/ai";
const Instructone = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="container review-container">
      <div className="d-flex">
        <div className="col-lg-8">
          <h3 className="text-secondary fs-5">INSTRUCTOR</h3>
          <h2 className="fs-1">Jonas Schmedtman</h2>
          <h6>Web Developer, Designer, and Teacher</h6>
          <div className="d-flex mt-3">
            <div>
              <h6 className="text-secondary fs-6">Total students</h6>
              <p>1,846,414</p>
            </div>
            <div className="px-5">
              <h6 className="text-secondary fs-6">Reviews</h6>
              <p>410,118</p>
            </div>
          </div>
          <h3>About me</h3>
          <p>
          Hi, I'm Jonas! I'm one of Udemy's Top Instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfaction. {showMore && (
              <>
               
                <p>I'm a full-stack web developer and designer with a passion for building beautiful web interfaces from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.</p>

                <p>I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privilege of training <b>1,500,000+</b> learners in the field of web development.</p>

                <p>What learners love the most about all my courses is the fact that I take the time to explain every single concept in a way that everyone can easily understand.</p>

                <p>
                <b>So, do you want to learn how to build awesome websites with modern HTML and CSS?</b>
                </p>

                <p>
                <b>Looking for a complete JavaScript course that takes you from zero to an advanced developer?</b>
                </p>

                <p>
                <b>Or maybe you want to build modern and powerful front-end applications with React?</b>
                </p>

                <p>
                Then don't waste your time with random tutorials or incomplete youtube videos. All my courses are easy-to-follow, all-in-one packages that will take your skills to the next level.
                </p>

                <p>
                These courses are exactly the courses I wish I had when I was first getting into web development!
                </p>
                <p>
                But see for yourself, enroll in one of my courses, and join <b>1,500,000+</b> happy students today.
                </p>
              </>
            )}
            <span style={{ display: showMore ? 'none' : 'inline' }} id="dots">
            
            </span>
          </p>
          <a onClick={handleToggle}>
            {showMore ? 'Read less' : 'Read more'} {<AiOutlineCaretDown />}
          </a>
        </div>

        <div className="text-center">
          <div>
            <img
              className="rounded-circle"
              src="https://img-c.udemycdn.com/user/200_H/7799204_2091_5.jpg"
              alt="Instructor"
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-light w-75 mt-5 px-1 border-black rounded-0 "
            >
              <FontAwesomeIcon icon={faLink} className="px-2" /> Website
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-light w-75 mt-3 px-1 border-black rounded-0"
            >
              {" "}
              <FontAwesomeIcon icon={faTwitter} className="px-2" /> Twitter
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-light w-75 mt-3 px-1 border-black rounded-0"
            >
              {" "}
              <FontAwesomeIcon icon={faYoutube} className="px-2" /> YouTube
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructone;
