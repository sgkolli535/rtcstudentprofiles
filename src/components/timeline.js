import React, { Component, Fragment } from 'react';
import logo from '../white.jpg';
import '../App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from '../screen_shot.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from "./navigation.js";


const Profile = ({CityHS, College, CollegeCity, CollegeCountry, CollegeState, CountryHS, HighSchoolGraduationYear, HighSchoolName, Hometown, PreviousInternship, PreCollegeCourses, SponsorshipNeeded, StateHS, UniqueID }) => (
	// <div><Navigation /></div>
		<div className="profiles">
      <header className="App-header">
      <Form inline id="search">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>{' '}
      </Form>
<h1> {UniqueID} </h1>
        <div className="pronouns">
        	<h2>Pronouns</h2>
        </div>
        <div className="based">
			<h2>Based In {Hometown}</h2>
        </div>
        <img src={logo} alt="profile" className="profile"></img>
      </header>
      <div className="body">
      <div className="interests1">
        <h3>Tech Interests</h3>
      </div>
      <div className="interests2">
        <h3>Other Interests</h3>
      </div>
      <div className="clearfloat"></div>
      <div className="job">
      		<h2>Internships: {PreviousInternship}</h2>
      		<ul>
        		<li>Location</li>
        		<li>Description</li>
        	</ul>
        	<div className="vertical"></div>
      </div>
      	<div className="hs">
<h2>High School: {HighSchoolName}</h2>
      		<ul>
<li>{CityHS}, {StateHS}</li>
<li>Courses: {PreCollegeCourses}</li>
        	</ul>
        	<div className="vertical"></div>
      	</div>
      	<div className="date2">
      		<p>2014-2018</p>
      	</div>
      	<div className="clearfloat"></div>
      	<hr></hr>
      	<div className="date1">
      		<p>{HighSchoolGraduationYear}</p>
      	</div>
      	<div className="date3">
      		<p>2018-Present</p>
      	</div>
      	<div className="college">
      		<div className="vertical"></div>
				<h2>College: {College}</h2>
        	<ul>
				<li>{CollegeCity}, {CollegeState}, {CollegeCountry}</li>
        		<li>Description</li>
        	</ul>
        </div>
      </div>
      </div>
		);



export default Profile;