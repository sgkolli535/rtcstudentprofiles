import React, { Component, Fragment } from 'react';
import logo from './white.jpg';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from './screen_shot.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from "./navigation.js";


class Directory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rtcMembers: [], 
			inputValue: '',
		};

	}
	callAPI() {
		fetch("http://localhost:9000/testAPI")
		.then(res => res.text())
		.then(res => this.setState({ rtcMembers: res}));
	}
	componentWillMount() {
		this.callAPI();
	}
	
	render() {
	return(
		<div id="directory">
		<h1>Search for RTC Member Profiles</h1>
		<p className="App-intro">{this.state.rtcMembers}</p>
		<Form inline id="search">
      		<FormControl type="text" placeholder="RTC Member" id="bar" size="lg" value={this.props.inputValue} onChange={this.props.memberFilterOnChange}/>
      		<Button variant="outline-dark" size="lg" id="button">Search</Button>{' '}
     	 </Form>
     	 </div>
		);

	}
	}
	export default Directory;	