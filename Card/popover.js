import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cardname from "./cardname.js";
import Card from "./card.js";
import "./card.css";
import { Button } from "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import {Rate} from "antd";
import "./popover.css";
import {HeartOutlined} from "@ant-design/icons/lib/icons";
import {CheckOutlined} from "@ant-design/icons/lib/icons";
import {tooltippopup} from './cardname.js'

export function MouseOverPopover(props) {
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <div>
        <div className="slider container" data-tooltip-id="my-tooltip" >
        <div className='col-lg-6'>
        <div class="card main-card ">
            <img src={props.image} class="card-img-top" alt="..."/>
            <div class="card-body bodyCard">
              <a href="#" className="link-anchor"><h6 class="card-title">{props.title}</h6></a>
              <p className="para-card card-text ">{props.author}</p>
              <p className="card-text text-secondary-emphasis">4.7   <Rate defaultValue={5} count={5} allowHalf className="rating-star"/></p>
              <p><b>₹499</b></p>
              <a href="#" class="btn btn-color__">Best Seller</a>
            </div>
        </div>
        <div>
            {props.name}
        </div>
        </div>
        </div>

{/*               
                  <Carousel responsive={responsive}>
                    <div>
                      <Card
                        title={cardname[0].courseTitle}
                        image={cardname[0].courseImg}
                        author={cardname[0].courseAuthor}
                      />
                    </div>
                    <div>
                      <Card
                        title={cardname[1].courseTitle}
                        image={cardname[1].courseImg}
                        author={cardname[1].courseAuthor}
                      />
                    </div>
                  </Carousel>,
                */}
          
        </div>
      </Typography>

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ div: 1 }}>
          {/* <div className="cardPopover">
            <h6>{props.title}</h6>
            <p>hello world!!!</p>
            <button>Add to cart</button>
          </div> */}
            <div className='tooltipcard'>
                <h6 className='mt-5 fw-bolder'>{props.title}</h6>
                <p>{props.toolhours}</p>
                <p>{props.tooldesc}</p>
                <p><CheckOutlined className='me-3'/>{props.toolone}</p>
                <p><CheckOutlined className='me-3'/>{props.tooltwo}</p>
                <p><CheckOutlined className='me-3'/>{props.toolthree}</p>
                {/* <div className='tooltipbutton'>                
                <button className='buttonToolTip'>Add to cart</button>
                <div className='d-inline'>
                <HeartOutlined className='fs-2  heartemoji'/>
                </div>
                </div> */}

            </div>
        </Typography>
        
      </Popover>
    </div>
  );
}
