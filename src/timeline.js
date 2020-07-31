import React, { Component, Fragment, useEffect, useState } from 'react';
import pic from './icon.png';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from './screen_shot.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from "./navigation.js";


function Profile({ match }) {

	useEffect(()=> {
		fetchMember();
		console.log(match);
	}, []);

	const [member, setMember] = useState({});

	const fetchMember = async() => {
		const fetchMember = await fetch("http://localhost:9000/RTCmembers");
		const members = await fetchMember.json();
		const member = members.find(x => x.name === match.params.name);
		setMember(member);

		console.log(member);
	};

	// putting hs location data into array
	if(member.cityHS == undefined || member.stateHS == undefined || member.countryHS == undefined){
		var hs = {
			city: "Currently unavailable!",
			state: "",
			country: "",
			comma: ""
		};
	}
	else {
		var hs = {
			city: member.cityHS,
			state: member.stateHS,
			country: member.countryHS,
			comma: ", "
		};
	};

	// putting college location data in array
	if (member.collegeCity == undefined || member.collegeState == undefined || member.collegeCountry == undefined){
		var college = {
			city: "Currently unavailable!",
			state: "",
			country: "",
			comma: ""
		};
	}
	else {
		var college = {
			city: member.collegeCity,
			state: member.collegeState,
			country: member.collegeCountry,
			comma: ", "
		}
	}

	// collegeGrad check
	if(member.collegeGrad == "undefined undefined"){
		var collegeGrad = "(Dates unknown)";
	}
	else {
		var collegeGrad = member.collegeGrad;
	}

	return (
	<div className="profiles">
      <header className="App-header">
        <h1> {member.name} </h1>
        <div className="email">
			<h3>Email:</h3>
			<p>{member.email}</p>
        </div>
        <div className="based">
        	<h3>Based In: </h3>
			<p>{member.hometown || "Currently unknown"}</p>
        </div>
        <img src={pic} alt="profile" className="profile"></img>
      </header>
      <div className="profBody">
      	<div className="clearfloat"></div>

		<div className="job">
			<div className="date3">
				<p>(Various dates)</p>
			</div>
			<h3>Experience</h3>
				<p>{member.prevInternship || "Currently unavailable!"}</p>
			<div className="vertical"></div>
		</div>

		<div className="hs">
			<h3>High School</h3>
				<p><b>Name:</b> {member.hsName || "Currently unavailable!"}</p>
				<p><b>Location:</b> {hs.city}{hs.comma}{hs.state}{hs.comma}{hs.country}</p>
				<p><b>Previous course(s):</b> {member.prevCourse || "Currently unavailable!"}</p>
			<div className="vertical"></div>
		</div>

      	<div className="date2">
      		<p>{collegeGrad}</p>
      	</div>

      	<div className="clearfloat"></div>
      	<hr></hr>

      	<div className="date1">
      		<p>{member.hsGrad || "(Dates unknown)"}</p>
      	</div>
      	<div className="college">
			<div className="vertical"></div>
			<h3>College</h3>
			<p><b>Name:</b> {member.college || "Currently unavailable"}</p>
			<p><b>Location:</b> {college.city}{college.comma}{college.state}{college.comma}{college.country}</p>
        </div>

      </div>
      </div>
		);
}

export default Profile;

// <div className="interests1">
//          <h3>Tech Interests</h3>
//        </div>
//       <div className="interests2">
//         <h3>Other Interests</h3>
//       </div>
