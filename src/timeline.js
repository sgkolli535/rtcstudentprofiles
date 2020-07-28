import React, { Component, Fragment, useEffect, useState } from 'react';
import pic from './icon.png';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from './screen_shot.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from "./navigation.js";
//filterByFormula: '{ID} = "MyFunIDValue"'


function Profile({ match }) {

	useEffect(()=> {
		fetchMember();
		console.log(match);
	}, []);

	const [member, setMember] = useState({});

	const fetchMember = async() => {
		const fetchMember = await fetch("http://localhost:9000/testAPI");
		const members = await fetchMember.json();
		const member = members.find(x => x.name === match.params.name);
		setMember(member);

		//const fetchName = await fetch(`https://api.airtable.com/v0/apph04l0UExzLb3mQ/OLD%20HS?api_key=keyp8lCZ9q6Tu9USl`);
		//console.log(this.state.rtcMembers);
		console.log(member);
		//console.log(fetchName);
	};
	return (
    // <div><Navigation /></div>
		<div className="profiles">
      <header className="App-header">
        <h1> {member.name} </h1>
        <div className="email">
	<h2>Email:</h2>
          <p>{member.email}</p>
        </div>
        <div className="based">
        	<h2>Based In: </h2>
	<p>{member.hometown}</p>
        </div>
        <img src={pic} alt="profile" className="profile"></img>
      </header>
      <div className="body">
      <div className="clearfloat"></div>
      <div className="job">
      		<h2>Experience</h2>
      		<ul>
	<li>{member.prevInternship}</li>
        	</ul>
        	<div className="vertical"></div>
      </div>
      	<div className="hs">
      		<h2>High School</h2>
      		<ul>
        		<li>{member.hsName}</li>
        		<li>{member.cityHS}, {member.stateHS}, {member.countryHS}</li>
				<li>{member.prevCourse}</li>

        	</ul>
        	<div className="vertical"></div>
      	</div>
      	<div className="date2">
      		<p>{member.collegeGrad}</p>
      	</div>
      	<div className="clearfloat"></div>
      	<hr></hr>
      	<div className="date1">
      		<p>{member.hsGrad}</p>
      	</div>
      	<div className="date3">
      		<p>Various</p>
      	</div>
      	<div className="college">
      		<div className="vertical"></div>
        	<h2>College</h2>
        	<ul>
			<li>{member.college}</li>
			<li>{member.collegeCity}, {member.collegeState}, {member.collegeCountry}</li>
        	</ul>
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
