import React from 'react';
import Tableau from '../components/Tableau';
import "../Visualization.css";


function Visualization(){
    return(
        <div className="body">
            {/* <div className="headerbox">
                <a href="/home">  <div className="bluebutton"> <div className="buttontext">Popular High School </div></div> </a>
                <a href="/home"><div className="yellowbutton"> <div className="buttontext"> HS vs. College States</div></div> </a>
                <a href="/home"> <div className="bluebutton"> <div className="buttontext"> Full-Time Locations </div></div> </a>
                <a href="/home"><div className="yellowbutton"> <div className="buttontext"> International Locations</div></div> </a>
            </div> */}

            {/* <a href="/home">  <div className="bluebutton"> <div className="buttontext">Popular High School </div></div> </a>
            <a href="/home"><div className="yellowbutton"> <div className="buttontext"> HS vs. College States</div></div> </a>
            <a href="/home"> <div className="bluebutton"> <div className="buttontext"> Full-Time Locations </div></div> </a>
            <a href="/home"><div className="yellowbutton"> <div className="buttontext"> International Locations</div></div> </a>
             */}
             {/* <h1> RTC Member Data Visualization </h1> */}
            <div className="screen"> 

                <Tableau />  
                {/*Add title bar above visualization to have a cohesive title on top*/}
            </div>
        </div>
    );
}



export default Visualization;