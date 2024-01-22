import React from "react";
import './courseheader.css';
import {Rate} from "antd";
import { CiCircleInfo } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { FaKeyboard } from "react-icons/fa";
import { mainPage } from "../Card/cardname";
import VideoOverView from "../videcontentoverview.js/videooverview";
import Content from "../coursevideos/content";

// import CardInfoone from './footer/cardinfo.js'

function CourseHeader(props){
    return(
        <>
        <div className="row container-fluid course-card col-lg-12">
        <div className="courseheadermain bg-dark text-light col-lg-12">
            <div className="headerLink p-3">
                <a href="..." className="headerLinka m-2">{props.link1}</a>
                <a href="..." className="headerLinka m-2">{props.link2}</a>
                <a href="..." className="headerLinka m-2">{props.link3}</a>
            </div>

            <div className="courseheadercontent px-3 col-lg-10 fw-800">
                <h2 className="fw-bolder">{props.head}</h2>
                <h5 className="fw-strong">{props.desp}</h5>
                <a href="#" class="btn btn-color1">Best Seller </a>
                <span> &nbsp; {props.rating}  <Rate defaultValue={5} count={5} allowHalf className="rating-star"/></span>
                <a href='..' className="headerLinka fw-bolder">{props.noOfRating}</a>
                <span>{props.noOfStud}</span>
                <p>Created by <a href="" className="headerLinka fw-bolder">{props.createdAuth}</a></p>
                <p>{<CiCircleInfo className="fs-5"/>} {props.lastUpd}&nbsp;&nbsp;{<CiGlobe className="fs-5"/> } English&nbsp;&nbsp; {<FaKeyboard className="fs-5"/>} English,Arabic[Auto],<a href="" className="headerLinka fw-bolder">13 more</a></p>
            </div>
        </div>
        {/* <div className="col-lg-6">
        
        </div> */}
        {/* <iframe width="200" height="200" src="https://www.youtube.com/embed/vfs1wBDoqBY?si=83dy3Dm4WyCWBPdb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="col-lg-3"></iframe> */}
        </div>

        <div className="videoover col-lg-12">
            {/* <VideoOverView/> */}
            <Content className="col-lg-12"/>
        </div>

        </>
    )
}
export default CourseHeader