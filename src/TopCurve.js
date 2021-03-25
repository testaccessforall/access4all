import React from 'react';
import './App.css';



function TopCurve({heading}){
    return(
        <div className = "top-curve">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 275" style ={{width: '50%'}}><path fill="#0099ff" fillOpacity="1" d="M0,288L60,277.3C120,267,240,245,360,213.3C480,181,600,139,720,101.3C840,64,960,32,1080,16C1200,0,1320,0,1380,0L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <div className= "page-heading">
        <h1 >{heading}</h1>
        </div>
        </div>

    );
}

export default TopCurve;