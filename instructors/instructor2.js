import React, { useState } from "react";
import "./instructor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { AiOutlineCaretDown } from "react-icons/ai";

const Instructtwo = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="container review-container">
      <div className="d-flex">
        <div className="col-lg-8">
          <h3 className="text-secondary fs-5">INSTRUCTOR</h3>
          <h2 className="fs-1">Maximilian Schwarzmüller</h2>
          <h6>AWS certified, Professional Web Developer and Instructor
</h6>
          <div className="d-flex mt-3">
            <div>
              <h6 className="text-secondary fs-6">Total students</h6>
              <p>2,787,973</p>
            </div>
            <div className="px-5">
              <h6 className="text-secondary fs-6">Reviews</h6>
              <p>1,035,061</p>
            </div>
          </div>
          <h3>About me</h3>
          <h6>Experience as (Web) Developer</h6>
          <p>
          Starting out at the age of 12 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive. {showMore && (
              <>
               
               <p>Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS in a lot of projects. I love both worlds nowadays!</p>

              <p>I also build full-stack applications and acquired expert DevOps and cloud computing knowledge - proven by the many AWS certifications I hold (incl. the top-level Solutions Architect Professional certification)</p>

              <p>As a self-taught developer I had the chance to broaden my horizon by studying Business Administration where I hold a Master's degree. That enabled me to work in a major strategy consultancy as well as a bank. While learning, that I enjoy development more than these fields, the time in this sector greatly improved my overall experience and skills.</p>
             
             <h6>Experience as Instructor</h6>

             <p>As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses and more than 2,000,000 students on Udemy is the best proof for that.</p>
            
            <p>Whether working as development instructor or teaching Business Administration I always received great feedback. The most rewarding experience is to see how people find new, better jobs, build awesome web applications, acquire amazing projects or simply enjoy their hobby with the help of my content.</p>

            <p>Together with Manuel Lorenz, I founded Academind to offer the best possible learning experience to our more than 2,000,000 students.</p>

               

                
              
              </>
            )}
            <span style={{ display: showMore ? 'none' : 'inline' }} id="dots">
            
            </span>
          </p>
          <a onClick={handleToggle}>
            {showMore ? 'Read less' : 'Read more'}  {<AiOutlineCaretDown />}
          </a>
        </div>

        <div className="text-center">
          <div>
            <img
              className="rounded-circle"
              src="https://img-c.udemycdn.com/user/200_H/13952972_e853.jpg"
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
              <FontAwesomeIcon icon={faFacebook} className="px-2" /> Facebook
              
            </button>
            <button
              type="button"
              className="btn btn-light w-75 mt-3 px-1 border-black rounded-0"
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedin} className="px-2" /> Linkedin
            </button>
            <button
              type="button"
              className="btn btn-light w-75 mt-3 px-1 border-black rounded-0"
            >
              {" "}
              <FontAwesomeIcon icon={faYoutube} className="px-2" /> Youtube
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructtwo;