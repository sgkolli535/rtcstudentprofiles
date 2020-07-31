import React, { Component, Fragment } from 'react';
import logo from './white.jpg';
import './App.css'; 
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from './screen_shot.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from "./navigation.js";
function Home() {
	return(
		<div className="homepage">
        <div className="clearfloat"></div>
        <h1 className="title">Discover RTC</h1>
        <p>Welcome! This is a platform to explore the composition of RTC members.</p>
          <p>This was made by Sumi, Lily, Melanie, and Shreya for Rewrite Your Summer 2020.</p>
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