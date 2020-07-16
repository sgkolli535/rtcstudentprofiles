import React, { Component, Fragment } from 'react';
import logo from '../white.jpg';
import '../App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from '../screen_shot.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from "./navigation.js";

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        profiles: [],
      };
    }
    componentDidMount() {
      fetch('https://api.airtable.com/v0/appxLvvasiLLy2QhX/Imported%20table?api_key=keyp8lCZ9q6Tu9USl')
      .then((resp) => resp.json())
      .then(data => {
        //console.log(data.records)
         this.setState({ profiles: data.records });
      }).catch(err => {
        // Error :(
      });
    }
  
    
    render() {
        const {profiles} = this.state;
        //console.log(profiles);
        let names = profiles.map(x => x.fields.UniqueID);
        console.log(names);
        return (
            <div className="search">
      <form autoComplete="off" action="/action_page.php">
        <div className="autocomplete" style={{width: '300px'}}>
          <input id="myInput" type="text" name="name" placeholder="Name" />
        </div>
        <input type="submit" />
      </form>
            </div>
          );
        }
        }
        export default Search;
        