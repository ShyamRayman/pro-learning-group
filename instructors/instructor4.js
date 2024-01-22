import "./instructor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { AiOutlineCaretDown } from "react-icons/ai";
const Instructfour = () => {
  return (
    <div className="container review-container">
      <div className="d-flex">
        <div className="col-lg-8">
          <h3 className="text-secondary fs-5">INSTRUCTOR</h3>
          <h2 className="fs-1">Stephen Grider
</h2>
          <h6>Engineering Architect
</h6>
          <div className="d-flex mt-3">
            <div>
              <h6 className="text-secondary fs-6">Total students</h6>
              <p><b>1,351,555
</b></p>
            </div>
            <div className="px-5">
              <h6 className="text-secondary fs-6">Reviews</h6>
              <p><b>445,106
</b></p>
            </div>
          </div>
          <h3>About me</h3>

          <p>Stephen Grider has been building complex Javascript front ends for top corporations in the San Francisco Bay Area.  With an innate ability to simplify complex topics, Stephen has been mentoring engineers beginning their careers in software development for years, and has now expanded that experience onto Udemy, authoring the highest rated React course. He teaches on Udemy to share the knowledge he has gained with other software engineers.  Invest in yourself by learning from Stephen's published courses.</p>
               </div>

        <div className="text-center">
          <div>
            <img
              className="rounded-circle"
              src="https://img-c.udemycdn.com/user/200_H/5487312_0554.jpg"
              alt="Maximilian Schwarzmüller - Online Educator"
            />
          </div>
          <div>
           
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
              {" "}
              <FontAwesomeIcon icon={faLinkedin} className="px-2" /> Linkedin
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

export default Instructfour;