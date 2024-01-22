import "./instructor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { AiOutlineCaretDown } from "react-icons/ai";
const Instructthree = () => {
  return (
    <div className="container review-container">
      <div className="d-flex">
        <div className="col-lg-8">
          <h3 className="text-secondary fs-5">INSTRUCTOR</h3>
          <h2 className="fs-1">Academind by Maximilian Schwarzmüller</h2>
          <h6>Online Education</h6>
          <div className="d-flex mt-3">
            <div>
              <h6 className="text-secondary fs-6">Total students</h6>
              <p><b>2,753,228</b></p>
            </div>
            <div className="px-5">
              <h6 className="text-secondary fs-6">Reviews</h6>
              <p><b>656,423</b></p>
            </div>
          </div>
          <h3>About me</h3>

          <p>Bundling the courses and know how of successful instructors, Academind strives to deliver high quality online education. </p>

          <p>Online Education, Real-Life Success - that's what Academind stands for. Learn topics like web development, data analyses and more in a fun and engaging way.</p>

          <p>We've taught more than 2,000,000 students on a broad variety of topics. We'd love to teach you as well! :)</p>

          <p>Keep learning!</p>
        </div>

        <div className="text-center">
          <div>
            <img
              className="rounded-circle"
              src="https://img-c.udemycdn.com/user/200_H/13952972_e853.jpg"
              alt="Maximilian Schwarzmüller - Online Educator"
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-light w-75 mt-5 px-1 border-black rounded-0"
            >
              <FontAwesomeIcon icon={faLink} className="px-2" /> Website
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-light w-75 mt-3 px-1 border-black rounded-0"
            >
              <FontAwesomeIcon icon={faTwitter} className="px-2" /> Twitter
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-light w-75 mt-3 px-1 border-black rounded-0"
            >
              <FontAwesomeIcon icon={faFacebook} className="px-2" /> Facebook
            </button>
           
            <button
              type="button"
              className="btn btn-light w-75 mt-3 px-1 border-black rounded-0"
            >
              <FontAwesomeIcon icon={faYoutube} className="px-2" /> Youtube
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructthree;
