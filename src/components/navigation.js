import React, { Component, Fragment } from 'react';
import logo from '../white.jpg';
import '../App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from '../screen_shot.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Profile from "./timeline";

function Navigation() {
	return (
		<Navbar className="color-nav" variant="dark">
          <Navbar.Brand><img src = { screen_shot } alt="rtc" className="rtc"></img></Navbar.Brand>
          <Nav className="links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/1">Student Profiles</Nav.Link>
            <Nav.Link href="/1">International Students</Nav.Link>
            <Nav.Link href="/1">Visualizations</Nav.Link>
          </Nav>
        </Navbar>
		);
}

export default Navigation;