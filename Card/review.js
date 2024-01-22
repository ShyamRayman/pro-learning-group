import React from "react";
import {Rate} from "antd";
import reviewCards from "./cardname";
import App from '../App.js'
import "./review.css"

export function ReviewCard(values){
    return(
        <div className="topReview row container">
            <div className="imgReview col-lg-4 container">
                <img src={values.rimg} alt='img' className="imgReview"/>
            </div>
            <div className="contentReview col-lg-7 container">
                <h6>{values.rname}</h6>
                <p>{values.rauthors}</p>
                {/* <p><b>4.6 <Rate defaultValue={1} count={1} allowHalf className="rating-star"/></b> Instructor training</p> */}
                <div className="reviewLineHeight">
                {/* <p><b>2,00,000+</b> students</p> */}
                </div>
                {/* <p>10 courses</p> */}
            </div>
        </div>
    )
}