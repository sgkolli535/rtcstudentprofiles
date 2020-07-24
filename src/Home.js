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
        <p>A platform to explore the composition of RTC members</p>
        <div className="options">
          <div id="option1">
            <h2>Student Profiles</h2>
            <hr></hr>
            <p>View the profiles of current RTC students, including their high schools, colleges, and jobs</p>
          </div>
          <div id="option2">
            <h2>International Students</h2>
            <hr></hr>
            <p>View the profiles of international students, including countries of origin, first-generation, universities, sponsorship, and jobs</p>
          </div>
          <div id="option3">
            <h2>Visualizations</h2>
            <hr></hr>
            <p>View visualizations of most popular high schools, high school and college states, and full-time locations</p>
          </div>
        </div>
      </div>
		);
}

export default Home;