import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons/lib/icons";
import { CheckOutlined } from "@ant-design/icons/lib/icons";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Card from "./Card/card.js";
import cardnames from "./Card/cardname.js";
import "./Card/card.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cardname from "./Card/cardname.js";
import { JavaScriptcards } from "./Card/cardname.js";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-tooltip/dist/react-tooltip.css";
import RectTooltip from "react-tooltip";
import { Tooltip } from "react-tooltip";
import { hello } from "./Card/cardname.js";
import { CustomTooltip } from "./Card/tooltip.js";
import { MouseOverPopover } from "./Card/popover.js";
import { ReviewCard } from "./Card/review.js";
import { reviewCards } from "./Card/cardname.js";
import {
  JsCourses,
  Recommended,
  Instructors,
  PythonCourses,
  CourseInfo,
  HomeButton,
  PopularCourses,
} from "./Card/card.js";
import CourseHeader from "./coursepage/courseheader.js";
import Navbar from "./navbar/navbar.js";
import Signup from "./Singup/signup.js";
import Login from "./login/login.js";
import { mainPage } from "./Card/cardname.js";
import { CardCss } from "./Card/cardcss.js";
import Button from "./button/button.js";
import Home from "./home/home.js";
import Footer from "./footer/footer.js";
import { pythoncards } from "./Card/cardname.js";
import Instructone from "./Instructors/instructor1.js";
import Instructtwo from "./Instructors/instructor2.js";
import Instructthree from "./Instructors/instructor3.js";
import Instructfour from "./Instructors/instructor4.js";
import Instructfive from "./Instructors/instructor5.js";
// import CardInfoone from "./footer/cardInfo.js";
// import Footer from "./footer/cardInfo.js";
// import {tooltippopup} from './Card/cardname.js'

// const tooltipTrigger = document.querySelectorAll('[data-bs-toggle="tooltip"]');
// const tooltipContent = [...tooltipTrigger.map(tooltipEl =new bootstrap.Tooltip(tooltipEl))]

function getloop() {}

function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2151 },
      items: 7,
    },
    LargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2150, min: 1501 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1700, min: 1501 },
      items: 5,
    },
    desktop1: {
      breakpoint: { max: 1500, min: 1157 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1156, min: 900 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 975, min: 655 },
      items: 2,
    },
    mobilesmall: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  };

  return (
    <><div className="top-head">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={[
              <Navbar />,
              <Home />,
              <Button />,
              <Recommended />,
              //        <Carousel  responsive={responsive}>
              //     {cardname.map(item=>(
              //       <Card  data-tooltip-id="my-tooltip"
              //          title= {item.courseTitle}
              //          image= {item.courseImg}
              //          author= {item.courseAuthor}
              //       />
              //    ))}

              //  </Carousel>,
              //   <Carousel responsive={responsive}>
              //   <div>
              // <MouseOverPopover
              //        title= {cardname[0].courseTitle}
              //        image= {cardname[0].courseImg}
              //        author= {cardname[0].courseAuthor}
              //        toolhours={tooltippopup[0].pophours}
              //        tooldesc={tooltippopup[0].popdesc}
              //        toolone={tooltippopup[0].popone}
              //        tooltwo={tooltippopup[0].poptwo}
              //        toolthree={tooltippopup[0].popthree}

              //     />
              //     </div>
              //     <div>
              // <MouseOverPopover
              //        title= {cardname[1].courseTitle}
              //        image= {cardname[1].courseImg}
              //        author= {cardname[1].courseAuthor}
              //        toolhours={tooltippopup[1].pophours}
              //        tooldesc={tooltippopup[1].popdesc}
              //        toolone={tooltippopup[1].popone}
              //        tooltwo={tooltippopup[1].poptwo}
              //        toolthree={tooltippopup[1].popthree}
              //     />
              //     </div>
              //     <div>
              // <MouseOverPopover
              //        title= {cardname[2].courseTitle}
              //        image= {cardname[2].courseImg}
              //        author= {cardname[2].courseAuthor}
              //        toolhours={tooltippopup[2].pophours}
              //        tooldesc={tooltippopup[2].popdesc}
              //        toolone={tooltippopup[2].popone}
              //        tooltwo={tooltippopup[2].poptwo}
              //        toolthree={tooltippopup[2].popthree}
              //     />
              //     </div>
              //     <div>
              // <MouseOverPopover
              //        title= {cardname[3].courseTitle}
              //        image= {cardname[3].courseImg}
              //        author= {cardname[3].courseAuthor}
              //        toolhours={tooltippopup[3].pophours}
              //        tooldesc={tooltippopup[3].popdesc}
              //        toolone={tooltippopup[3].popone}
              //        tooltwo={tooltippopup[3].poptwo}
              //        toolthree={tooltippopup[3].popthree}
              //     />
              //     </div>
              //     <div>
              // <MouseOverPopover
              //        title= {cardname[4].courseTitle}
              //        image= {cardname[4].courseImg}
              //        author= {cardname[4].courseAuthor}
              //        toolhours={tooltippopup[4].pophours}
              //        tooldesc={tooltippopup[4].popdesc}
              //        toolone={tooltippopup[4].popone}
              //        tooltwo={tooltippopup[4].poptwo}
              //        toolthree={tooltippopup[4].popthree}
              //     />
              //     </div>
              //     {/* <div>
              // <MouseOverPopover
              //        title= {cardname[5].courseTitle}
              //        image= {cardname[5].courseImg}
              //        author= {cardname[5].courseAuthor}
              //        toolhours={tooltippopup[5].pophours}
              //        tooldesc={tooltippopup[5].popdesc}
              //        toolone={tooltippopup[5].popone}
              //        tooltwo={tooltippopup[5].poptwo}
              //        toolthree={tooltippopup[5].popthree}
              //     />
              //     </div> */}
              // </Carousel>,
              // <Carousel responsive={responsive}>
              // {cardname.map(item=>(
              //         <MouseOverPopover
              //            title= {item.courseTitle}
              //            image= {item.courseImg}
              //            author= {item.courseAuthor}
              //         />
              //      ))}
              // </Carousel>,
              <Carousel responsive={responsive}>
                {cardname.map((item) => (
                  <MouseOverPopover
                    title={item.courseTitle}
                    image={item.courseImg}
                    author={item.courseAuthor}
                    toolhours={item.pophours}
                    tooldesc={item.popdesc}
                    toolone={item.popone}
                    tooltwo={item.poptwo}
                    toolthree={item.popthree}
                  />
                ))}
              </Carousel>,
              <JsCourses />,

              <Carousel responsive={responsive}>
                {JavaScriptcards.map((item) => (
                  <MouseOverPopover
                    title={item.courseTitle}
                    image={item.courseImg}
                    author={item.courseAuthor}
                    toolhours={item.pophours}
                    tooldesc={item.popdesc}
                    toolone={item.popone}
                    tooltwo={item.poptwo}
                    toolthree={item.popthree}
                  />
                ))}
              </Carousel>,
              <PythonCourses />,
              <Carousel responsive={responsive}>
                {pythoncards.map((item) => (
                  <MouseOverPopover
                    title={item.courseTitle}
                    image={item.courseImg}
                    author={item.courseAuthor}
                    toolhours={item.pophours}
                    tooldesc={item.popdesc}
                    toolone={item.popone}
                    tooltwo={item.poptwo}
                    toolthree={item.popthree}
                  />
                ))}
              </Carousel>,

              <Instructors />,
              <Carousel responsive={responsive}>
                {reviewCards.map((value) => (
                  <ReviewCard
                    rname={value.courseName}
                    rauthors={value.courseAuthor}
                    rimg={value.reviewimage}
                  />
                ))}
              </Carousel>,
              <Footer />,
            ]}
          ></Route>
          ,<Route path="/signup" element={<Signup />}></Route>,
          <Route path="/login" element={<Login />}></Route>,
          {/* course header */}
          <Route
            path="/complete2023webdevelopment"
            element={
              <CourseHeader
                link1={mainPage[0].headerLinkA1}
                link2={mainPage[0].headerLinkA2}
                link3={mainPage[0].headerLinkA3}
                head={mainPage[0].heading}
                desp={mainPage[0].description}
                rating={mainPage[0].Rating}
                noOfRating={mainPage[0].noOfRatings}
                noOfStud={mainPage[0].noOfstudents}
                createdAuth={mainPage[0].createdAuthor}
                lastUpd={mainPage[0].lastUpdated}
              />
            }
          ></Route>
          <Route
            path="/100daysofpythoncode"
            element={
              <CourseHeader
                link1={mainPage[1].headerLinkA1}
                link2={mainPage[1].headerLinkA2}
                link3={mainPage[1].headerLinkA3}
                head={mainPage[1].heading}
                desp={mainPage[1].description}
                rating={mainPage[1].Rating}
                noOfRating={mainPage[1].noOfRatings}
                noOfStud={mainPage[1].noOfstudents}
                createdAuth={mainPage[1].createdAuthor}
                lastUpd={mainPage[1].lastUpdated}
              />
            }
          ></Route>
          <Route
            path="/Node.js, Express, MongoDB & More: The Complete Bootcamp 2024"
            element={
              <CourseHeader
                link1={mainPage[2].headerLinkA1}
                link2={mainPage[2].headerLinkA2}
                link3={mainPage[2].headerLinkA3}
                head={mainPage[2].heading}
                desp={mainPage[2].description}
                rating={mainPage[2].Rating}
                noOfRating={mainPage[2].noOfRatings}
                noOfStud={mainPage[2].noOfstudents}
                createdAuth={mainPage[2].createdAuthor}
                lastUpd={mainPage[2].lastUpdated}
              />
            }
          ></Route>
          <Route
            path="/The Complete JavaScript Course 2024: From Zero to Expert!"
            element={
              <CourseHeader
                link1={mainPage[3].headerLinkA1}
                link2={mainPage[3].headerLinkA2}
                link3={mainPage[3].headerLinkA3}
                head={mainPage[3].heading}
                desp={mainPage[3].description}
                rating={mainPage[3].Rating}
                noOfRating={mainPage[3].noOfRatings}
                noOfStud={mainPage[3].noOfstudents}
                createdAuth={mainPage[3].createdAuthor}
                lastUpd={mainPage[3].lastUpdated}
              />
            }
          ></Route>
          <Route
            path="/Complete Figma Megacourse: UI/UX Design Beginner to Expert"
            element={
              <CourseHeader
                link1={mainPage[4].headerLinkA1}
                link2={mainPage[4].headerLinkA2}
                link3={mainPage[4].headerLinkA3}
                head={mainPage[4].heading}
                desp={mainPage[4].description}
                rating={mainPage[4].Rating}
                noOfRating={mainPage[4].noOfRatings}
                noOfStud={mainPage[4].noOfstudents}
                createdAuth={mainPage[4].createdAuthor}
                lastUpd={mainPage[4].lastUpdated}
              />
            }
          ></Route>
          <Route
            path="/Angular - The Complete Guide (2023 Edition)"
            element={
              <CourseHeader
                link1={mainPage[5].headerLinkA1}
                link2={mainPage[5].headerLinkA2}
                link3={mainPage[5].headerLinkA3}
                head={mainPage[5].heading}
                desp={mainPage[5].description}
                rating={mainPage[5].Rating}
                noOfRating={mainPage[5].noOfRatings}
                noOfStud={mainPage[5].noOfstudents}
                createdAuth={mainPage[5].createdAuthor}
                lastUpd={mainPage[5].lastUpdated}
              />
            }
          ></Route>
          <Route
            path="/NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)"
            element={
              <CourseHeader
                link1={mainPage[6].headerLinkA1}
                link2={mainPage[6].headerLinkA2}
                link3={mainPage[6].headerLinkA3}
                head={mainPage[6].heading}
                desp={mainPage[6].description}
                rating={mainPage[6].Rating}
                noOfRating={mainPage[6].noOfRatings}
                noOfStud={mainPage[6].noOfstudents}
                createdAuth={mainPage[6].createdAuthor}
                lastUpd={mainPage[6].lastUpdated}
              />
            }
          ></Route>
          <Route
            path="/Build Responsive Real-World Websites with HTML and CSS"
            element={
              <CourseHeader
                link1={mainPage[7].headerLinkA1}
                link2={mainPage[7].headerLinkA2}
                link3={mainPage[7].headerLinkA3}
                head={mainPage[7].heading}
                desp={mainPage[7].description}
                rating={mainPage[7].Rating}
                noOfRating={mainPage[7].noOfRatings}
                noOfStud={mainPage[7].noOfstudents}
                createdAuth={mainPage[7].createdAuthor}
                lastUpd={mainPage[7].lastUpdated}
              />
            }
          ></Route>
          <Route
            path="/Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
            element={
              <CourseHeader
                link1={mainPage[8].headerLinkA1}
                link2={mainPage[8].headerLinkA2}
                link3={mainPage[8].headerLinkA3}
                head={mainPage[8].heading}
                desp={mainPage[8].description}
                rating={mainPage[8].Rating}
                noOfRating={mainPage[8].noOfRatings}
                noOfStud={mainPage[8].noOfstudents}
                createdAuth={mainPage[8].createdAuthor}
                lastUpd={mainPage[8].lastUpdated}
              />
            }
          ></Route>
          {/* JavaScripts Cards */}
          <Route
            path="/JAVASCRIPT with HTML5,CSS3 from zero to Expert-2023"
            element={
              <CourseHeader
                link1={mainPage[9].headerLinkA1}
                link2={mainPage[9].headerLinkA2}
                link3={mainPage[9].headerLinkA3}
                head={mainPage[9].heading}
                desp={mainPage[9].description}
                rating={mainPage[9].Rating}
                noOfRating={mainPage[9].noOfRatings}
                noOfStud={mainPage[9].noOfstudents}
                createdAuth={mainPage[9].createdAuthor}
                lastUpd={mainPage[9].lastUpdated}
              />
            }
          ></Route>
          <Route
            path="/JavaScript - Basics to Advanced step by step"
            element={
              <CourseHeader
                link1={mainPage[10].headerLinkA1}
                link2={mainPage[10].headerLinkA2}
                link3={mainPage[10].headerLinkA3}
                head={mainPage[10].heading}
                desp={mainPage[10].description}
                rating={mainPage[10].Rating}
                noOfRating={mainPage[10].noOfRatings}
                noOfStud={mainPage[10].noOfstudents}
                createdAuth={mainPage[10].createdAuthor}
                lastUpd={mainPage[10].lastUpdated}
              />
            }
          ></Route>
          <Route
            path="/Learn JavaScript - For Beginners by YouAccel Training"
            element={
              <CourseHeader
                link1={mainPage[11].headerLinkA1}
                link2={mainPage[11].headerLinkA2}
                link3={mainPage[11].headerLinkA3}
                head={mainPage[11].heading}
                desp={mainPage[11].description}
                rating={mainPage[11].Rating}
                noOfRating={mainPage[11].noOfRatings}
                noOfStud={mainPage[11].noOfstudents}
                createdAuth={mainPage[11].createdAuthor}
                lastUpd={mainPage[11].lastUpdated}
              />
            }
          ></Route>
          <Route
            path="/CSS & JavaScript - Certification Course for Beginners"
            element={
              <CourseHeader
                link1={mainPage[12].headerLinkA1}
                link2={mainPage[12].headerLinkA2}
                link3={mainPage[12].headerLinkA3}
                head={mainPage[12].heading}
                desp={mainPage[12].description}
                rating={mainPage[12].Rating}
                noOfRating={mainPage[12].noOfRatings}
                noOfStud={mainPage[12].noOfstudents}
                createdAuth={mainPage[12].createdAuthor}
                lastUpd={mainPage[12].lastUpdated}
              />
            }
          ></Route>
          <Route
            path="/Complete Javascript & jQuery Course with Bonus Vue JS Intro"
            element={
              <CourseHeader
                link1={mainPage[13].headerLinkA1}
                link2={mainPage[13].headerLinkA2}
                link3={mainPage[13].headerLinkA3}
                head={mainPage[13].heading}
                desp={mainPage[13].description}
                rating={mainPage[13].Rating}
                noOfRating={mainPage[13].noOfRatings}
                noOfStud={mainPage[13].noOfstudents}
                createdAuth={mainPage[13].createdAuthor}
                lastUpd={mainPage[13].lastUpdated}
              />
            }
          ></Route>
          <Route
            path="/pythoncourses"
            element={[
              <HomeButton />,
              <PythonCourses />,
              <CourseInfo />,
              <Carousel responsive={responsive}>
                {pythoncards.map((item) => (
                  <MouseOverPopover
                    title={item.courseTitle}
                    image={item.courseImg}
                    author={item.courseAuthor}
                    toolhours={item.pophours}
                    tooldesc={item.popdesc}
                    toolone={item.popone}
                    tooltwo={item.poptwo}
                    toolthree={item.popthree}
                  />
                ))}
              </Carousel>,
            ]}
          ></Route>
          <Route
            path="/javascriptcourses"
            element={[
              <HomeButton />,
              <JsCourses />,
              <CourseInfo />,
              <Carousel responsive={responsive}>
                {JavaScriptcards.map((item) => (
                  <MouseOverPopover
                    title={item.courseTitle}
                    image={item.courseImg}
                    author={item.courseAuthor}
                    toolhours={item.pophours}
                    tooldesc={item.popdesc}
                    toolone={item.popone}
                    tooltwo={item.poptwo}
                    toolthree={item.popthree}
                  />
                ))}
              </Carousel>,
            ]}
          ></Route>
          <Route
            path="/popularcourses"
            element={[
              <HomeButton />,
              <PopularCourses />,
              <CourseInfo />,
              <Carousel responsive={responsive}>
                {cardname.map((item) => (
                  <MouseOverPopover
                    title={item.courseTitle}
                    image={item.courseImg}
                    author={item.courseAuthor}
                    toolhours={item.pophours}
                    tooldesc={item.popdesc}
                    toolone={item.popone}
                    tooltwo={item.poptwo}
                    toolthree={item.popthree}
                  />
                ))}
              </Carousel>,
            ]}
          ></Route>
          {/* reviewcard route */}
          <Route
            path="/instructor/JonasSchmedtmann"
            element={<Instructone />}
          />
          <Route
            path="/instructor/MaximilianSchwarzmüller"
            element={<Instructtwo />}
          />
          <Route
            path="/instructor/AcademindbyMaximilian..."
            element={<Instructthree />}
          />
          <Route path="/instructor/StephenGrider" element={<Instructfour />} />
          <Route path="/instructor/ColtSteele" element={<Instructfive />} />
        </Routes>
      </BrowserRouter>

      {/* <h1>Hello <a href='#' data-bs-toggle='tooltip' title='world'>World!!!</a></h1> */}

      {/* <Tooltip id="my-tooltip" className='bg-light text-dark tooltipcard'  place='right'> */}
      {/* <div>
    {cardname.map(item=>(
      <h3>{item.courseTitle}</h3>
    ))}
    
    <p>Here's some interesting stuff:</p>
    <ul>
      <li>Some</li>
      <li>Interesting</li>
      <li>Stuff</li>
    </ul>
  </div> */}
      {/* <div className='tooltipcard'>
                <h3 className='mt-5'>What you'll learn in this course</h3>
                <p><CheckOutlined className='me-3'/>From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!</p>
                <p><CheckOutlined className='me-3'/>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</p>
                <div className='tooltipbutton'>                
                <button className='buttonToolTip'>Add to cart</button>
                <div className='d-inline'>
                <HeartOutlined className='fs-2  heartemoji'/>
                </div>
                </div>

            </div>
</Tooltip> */}
</div>
    </>
  );
}

export default App;
