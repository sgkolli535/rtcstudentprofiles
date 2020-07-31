import React, { Component, Fragment } from 'react';
import logo from './white.jpg';
import './App.css'; 
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from './screen_shot.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from "./navigation.js";
import graphic from "./home_graphic.jpg";

function Home() {
	return(
		<div className="homepage">
        <div className="clearfloat"></div>

        <div className = "welcome-container-text">
          <h1 className="title">Hi there! 👋🏼</h1>
          <p><img className = " welcome-graphic" src = {graphic} /><br></br><b>Discover RTC</b> is a platform for you to discover information regarding RTC members, including 
          their high schools, colleges, and previous work experiences. The data is gathered from the main Airtable survey
           members filled out upon joining RTC and presented in a timeline, allowing us to map the progress of each student's academic
           and early post-grad careers.<br></br><br></br>Curious about where RTC members are in the United States? We offer <b>big picture</b> views of the data as well.
           These visualizations were made using Tableau dashboards, and are live-updated every day with data from the Airtable. 
           Happy discovering! </p>
           <hr></hr>
           <h1>Ready to start? 👀</h1>
        </div>

        <div className="options">
          <div id="option1">
          <h3><a href='/search'>Student Profiles</a> 🔍</h3>
            <hr></hr>
            <p>View the profiles of current RTC students, including their high schools, colleges, and jobs.</p>
          </div>
          
          <div id="option3">
          <h3><a href='/visualization'>Visualizations</a> 📊</h3>
            <hr></hr>
            <p>View visualizations of the top 50 high schools, top 50 colleges, high school locations, hometowns vs. colleges, and more.</p>
          </div>
        </div>
      </div>
		);
}

export default Home;