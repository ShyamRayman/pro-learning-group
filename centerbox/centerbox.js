import React from "react";
import './centerbox.css'

 function Center(){
    return(
        <>
  
        
        <h1>What to Learn next</h1>
        <h2>Our top pick for you</h2>
        <div className="row">
        <div className="col-lg-4 ">
            <img src='https://www.codejava.net/images/articles/videos/python-data-analysis/Learning_Python_for_Data_Analysis_and_Visualization.jpg' className='image2'alt='img'/>

        </div>
        
        
        <div className="col-lg-8 centercontent">
       
            <h2>100 Days of code: The Complete Python Pro Bootcamp For 2023 </h2>
            <p>Learn python and how to use it to analyze,Visualize and present data. Include tons of sample code and hours of vedio!</p>
            <h8 className="sol">By Angela yu</h8>
            <br></br>
            <h9 className="solu">Updated <span className="text-success"> September 2019</span> 21 total hours .110 lectures.All level</h9>
            <h5>4.2</h5>
            <h1>499</h1>

        </div>

        </div>
        
    
        

        
        
        
        
        
        
        </>

    );
 }
 export default Center;
