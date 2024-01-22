import React from "react";
import {CheckOutlined} from "@ant-design/icons/lib/icons";

function CardInfoone(){
    return(
        <>
        <div>
            <h3>What you'll learn</h3>
            </div>
        <div className="cardInfocontainer row">
            <div className="cardInforow1 col-lg-6">
                <p><CheckOutlined  className='me-3'/>The principles of User Interface Design and Prototyping</p>
                <p><CheckOutlined  className='me-3'/>The basics of Human-Computer Interaction</p>
                <p><CheckOutlined  className='me-3'/>How to read a User Flow Diagram</p>
                <p><CheckOutlined  className='me-3'/>How to use Figma and its given tools</p>
                <p><CheckOutlined  className='me-3'/>How to design within Figma</p>
                <p><CheckOutlined  className='me-3'/>Wireframing in order to produce a functional prototype</p>
                <p><CheckOutlined  className='me-3'/>How to use the collaborative feature</p>
                <p><CheckOutlined  className='me-3'/>How to give and receive feedback on prototypes</p>
                <p><CheckOutlined  className='me-3'/>The principles of UX design</p>
                
            </div>
            <div className="cardInforow2 col-lg-6">
                
                <p><CheckOutlined  className='me-3'/>The importance of color theory</p>
                <p><CheckOutlined  className='me-3'/>What are the most common beginner mistakes and how to avoid them</p>
                <p><CheckOutlined  className='me-3'/>The principles of forms, buttons, and plugins</p>
                <p><CheckOutlined  className='me-3'/>How to create an app</p>
                <p><CheckOutlined  className='me-3'/>How to make a website</p>
                <p><CheckOutlined  className='me-3'/>All about content creation</p>
                <p><CheckOutlined  className='me-3'/>How to animate in Figma</p>
                <p><CheckOutlined  className='me-3'/>How to create interactive calendars</p>
                <p><CheckOutlined  className='me-3'/>To make a Netflix prototype</p>
            </div>
        </div>
        </>
    )
}
export default CardInfoone