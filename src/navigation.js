import React, { Component, Fragment } from 'react';
import logo from './white.jpg';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from './screen_shot.png';
import discover from './circleLogo.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Profile from "./timeline";

function Navigation() {
	return (
		<Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
          <Navbar.Brand><img src = { discover } alt="rtc" className="rtc"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search Members</Nav.Link>
            <Nav.Link href="/visualization">Data Visualizations</Nav.Link>
            <Nav.Link href="/vertical">Vertical Example</Nav.Link>

          </Nav>
          </Navbar.Collapse>
        </Navbar>
		);
}

export default Navigation;
