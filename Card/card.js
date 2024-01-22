import React from "react";
import './card.css'
import {Rate} from "antd";
import {HeartOutlined} from "@ant-design/icons/lib/icons";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import Swiper from 'swiper/bundle';
import {UsergroupAddOutlined} from "@ant-design/icons/lib/icons";
import { MouseOverPopover } from "./popover";
import RectTooltip from 'react-tooltip'
import { Tooltip } from 'react-tooltip'
import {CheckOutlined} from "@ant-design/icons/lib/icons";
import "./popover.css"
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai"

// import styles bundle
import 'swiper/css/bundle';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




function Card(props){

    // const slide=(offset)=>{
    //     const slider = document.getElementById('slider')
    //     slider.scrollLeft = slider.scrollLeft + offset
      
    //   }

   
    return(
        <>
        {/* <MdChevronLeft onClick={()=>slide(-100)} className='slider-left'/> */}
        <div className="slider content-card container" data-tooltip-id="my-tooltip ">
        <div className='col-lg-6'>
        <div class="card main-card ">
            <img src={props.image} class="card-img-top" alt="..."/>
            <div class="card-body bodyCard">
              <a href="#" className="link-anchor"><h6 class="card-title">{props.title}</h6></a>
              <p className="para-card card-text ">{props.author}</p>
              <p className="card-text text-secondary-emphasis">4.7   <Rate defaultValue={5} count={5} allowHalf className="rating-star"/></p>
              <p><b>₹499</b></p>
              <a href="#" class="btn btn-color bg-success">Best Seller</a>
            </div>
        </div>
        <div>
            {props.name}
        </div>
        </div>
        </div>

        <Tooltip id="my-tooltip" className='bg-light text-dark tooltipcard'  place='right'>
        <div className='tooltipcard'>
                <h6 className='mt-5 fw-bolder'>{props.title}</h6>
                <p>{props.toolhours}</p>
                <p>{props.tooldesc}</p>
                <p><CheckOutlined className='me-3'/>{props.toolone}</p>
                <p><CheckOutlined className='me-3'/>{props.tooltwo}</p>
                <p><CheckOutlined className='me-3'/>{props.toolthree}</p>
                </div>
        </Tooltip>

        {/* <MdChevronRight onClick={()=>slide(100)}  className='slider-right control-next'/> */}
        </>
    )
}

export default Card

export function JsCourses(){
    return(
        <div className="p-3 content-card container">
            <h3 className="fw-bolder">JavaScript Courses</h3>
            <h6 className="text-secondary-emphasis ">JavaScript relates to <a href="..." className="text-primary"><b>Development, IT & Software</b></a></h6>
            <p><UsergroupAddOutlined className="fs-6"/>   more than 2,00,000 learners</p>
        </div>
    )
}

export function PythonCourses(){
    return(
        <div className="p-3 content-card container" id="pythoncourse">
            <h3 className="fw-semibold">Python Courses</h3>
            <h6 className="text-secondary-emphasis ">Python relates to <a href="..." className="text-primary"><b>Development, IT & Software</b></a></h6>
            <p><UsergroupAddOutlined className="fs-6"/>   more than 3,00,000 learners</p>
        </div>
    )
}

export function PopularCourses(){
    return(
        <div className="p-3 content-card container" id="pythoncourse">
            <h3 className="fw-semibold">Popular Courses on Udemy to start you carrier</h3>
            <p><UsergroupAddOutlined className="fs-6"/>   more than 10,00,000 learners</p>
        </div>
    )
}
export function Recommended(){
    return(
        <div className="p-3 content-card container">
            <h3 className="fw-semibold">Recomended Courses</h3>
            <h6 className="text-secondary-emphasis">Courses by Top Instructors</h6>
        </div>
    )
}

export function Instructors(){
    return(
        <div className="p-3 content-card container">
            <h3 className="fw-semibold">Top Instructors</h3>
        </div>
    )
}

export function CourseInfo(){
    return(
        <div className=" my-1 ms-3 content-card container">
            <h3 className="fw-bold">Courses get you started</h3>
            <h4 className="fw-semibold courseinf">Most popular</h4>
            <div className="hr-dark mb-3">

            </div>
        </div>
    )
}

export function HomeButton(){
    return(
        <div className=" my-1 ms-3 content-card container">
           <Link to="/" className="text-decoration-none ">
            <a href="">
                <button className="homebutton p-1 text-light mt-3"><AiOutlineArrowLeft className="text-light fw-semibold me-1 mb-1"/><h6 className="d-inline">Home</h6></button>
            </a>
           </Link>
        </div>
    )
}


