import React, { Component, Fragment } from 'react';
import logo from './white.jpg';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from './screen_shot.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from "./navigation.js";
import { Breakpoint } from 'react-socks';


function Directory() {
	return(
		<div id="directory">
		<div id="searching">
		<Breakpoint large up>
		<h1>Search for Student Profiles</h1>
		<Form inline id="search">
      		<FormControl type="text" placeholder="RTC Member" id="bar" size="lg"/>
      		<Button variant="outline-dark" size="lg" id="button">Search</Button>{' '}
     	 </Form>
     	 </Breakpoint>
     	 <Breakpoint medium down>
     	 	<h2 id="smallsearch">Search for Student Profiles</h2>
     	 	<Form inline id="search2">
      		<FormControl type="text" placeholder="RTC Member" id="bar2" size="lg"/>
      		<Button variant="outline-dark" size="lg" id="button2">Search</Button>{' '}
     	 	</Form>
     	 </Breakpoint>
     	 </div>
     	 <footer className="Footer"> © Rewriting the Code</footer>
     	 </div>
		);
}

export default Directory;