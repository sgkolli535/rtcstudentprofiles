import React, { Component, Fragment } from 'react';
import logo from './white.jpg';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from './screen_shot.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from "./navigation.js";
import Home from "./Home";
import Profile from "./timeline";

class Directory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rtcMembers: [], // list of members
			inputValue: '', // input in searchbar
			updatedSearch: [], // updated list based on search	
		};
		this.memberFilterOnChange = this.memberFilterOnChange.bind(this);	
	}
	handleClick() {
		console.log("clicked");
	}
	memberFilterOnChange= (event) => {
		this.setState({
			inputValue: event.target.value
		})
		let oldList = this.state.rtcMembers.map(members => {
			return {
				name: members.name,
				email: members.email,
				college: members.college,
				collegeCity: members.collegeCity,
				collegeState: members.collegeState,
				collegeCountry: members.collegeCountry,
				collegeGrad: members.collegeGrad,
				prevInternship: members.prevInternship,
				spons: members.spons,
				hometown: members.hometown,
				hsName: members.hsName,
				hsGrad: members.hsGrad,
				cityHS: members.cityHS,
				stateHS: members.stateHS,
				countryHS: members.countryHS,
				prevCourse: members.prevCourse,
		  
			};
		});

		if(event.target.value !== "") {
			let newList = [];
			newList = oldList.filter(members => members.name.toLowerCase().includes(event.target.value.toLowerCase()));
			//newList = oldList.filter(members => this.ciEquals(this.state.inputValue, members.name));			
			this.setState({
				updatedSearch: newList
			})
		} else {
			this.setState({
				updatedSearch: [],
			})
		}
	}
callAPI() {
		fetch("http://localhost:9000/RTCmembers")
		.then(res => res.json())
		.then(res => this.setState({ rtcMembers: res}));
	}
	componentWillMount() {
		this.callAPI();
	}
	
	render() {
	return(
		<div id="directory">
		<h2>Search for RTC Member Profiles 🔍</h2>
		<Form inline id="search" autocomplete="off">
      		<FormControl type="text" placeholder="RTC Member" id="bar" size="lg" value={this.props.inputValue} onChange={(e) => this.memberFilterOnChange(e)}/>
      		<Button onClick={() => this.handleClick()}variant="outline-dark" size="lg" id="button">Search</Button>{' '}
			{this.state.updatedSearch.map(members =><Link to={`/profile/${members.name}`}><FormControl disabled type="text" placeholder={members.name} id="bar" size="lg" value={members.name}/></Link>
)}
		  </Form>

     	 </div>
		);

	}

	}
	export default Directory;	