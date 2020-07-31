import React from 'react';
import Tableau from '../components/Tableau';
import "../Visualization.css";


function Visualization(){
    return(
        <div>
            <div className="titlebar"><h3>Visualizations: High School to College 📊</h3></div>
            <div className="vizBody">
                <div className="screen"> 
                    <Tableau />  
                </div>
                {/* <div className="headerbox">
                    <a href="/home">  <div className="bluebutton"> <div className="buttontext">Popular High School </div></div> </a>
                    <a href="/home"><div className="yellowbutton"> <div className="buttontext"> HS vs. College States</div></div> </a>
                    <a href="/home"> <div className="bluebutton"> <div className="buttontext"> Full-Time Locations </div></div> </a>
                    <a href="/home"><div className="yellowbutton"> <div className="buttontext"> International Locations</div></div> </a>
                </div> */}
                {/* <h1> RTC Member Data Visualization </h1> */}
            </div>
        </div>
    );
}

//on hover = should highlight the option just like the navbar


export default Visualization;