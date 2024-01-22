import React, { useState } from "react";
// import "./instructor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { AiOutlineCaretDown } from "react-icons/ai";
const Instructfive = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="container review-container">
      <div className="d-flex">
        <div className="col-lg-8">
          <h3 className="text-secondary fs-5">INSTRUCTOR</h3>
          <h2 className="fs-1">Colt Steele
</h2>
          <h6>Developer and Bootcamp Instructor
</h6>
          <div className="d-flex mt-3">
            <div>
              <h6 className="text-secondary fs-6">Total students</h6>
              <p><b>1,634,383
</b></p>
            </div>
            <div className="px-5">
              <h6 className="text-secondary fs-6">Reviews</h6>
              <p><b>498,906</b></p>
            </div>
          </div>
          <h3>About me</h3>
          <p>
          Hi! I'm Colt. I'm a developer with a serious love for teaching. I've spent the last few years teaching people to program at 2 different immersive bootcamps where <b>I've helped hundreds of people become web developers and change their lives. </b>My graduates work at companies like Google, Salesforce, and Square. {showMore && (
              <>
               
                <p>Most recently, I led Galvanize's SF's 6 month immersive program as <b>Lead Instructor</b> and <b>Curriculum Director.</b> After graduating from my class, 94% of my students went on to receive full-time developer roles. I also worked at Udacity as a <b>Senior Course Developer</b> on the web development team where I got to reach thousands of students daily.</p>

                <p>I’ve since focused my time on bringing my classroom teaching experience to an online environment. In 2016 I launched my <b>Web Developer Bootcamp course,</b> which has since gone on to become one of the best selling and top rated courses on Udemy. I was also voted<b> Udemy’s Best New Instructor of 2016.</b></p>

                <p>I've spent years figuring out the "formula" to teaching technical skills in a classroom environment, and I'm really excited to finally share my expertise with you. I can confidently say that my online courses are without a doubt the most comprehensive ones on the market.</p>

                <p><b>Join me on this crazy adventure!

</b></p>
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
              src="https://img-c.udemycdn.com/user/200_H/4466306_6fd8_3.jpg"
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
              <FontAwesomeIcon icon={faYoutube} className="px-2" /> YouTube
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructfive;