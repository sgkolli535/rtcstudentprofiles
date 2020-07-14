import React, { Suspense, Component, Fragment } from 'react';
import logo from './white.jpg';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from './screen_shot.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/navigation";
import Home from "./components/Home";
import Profile from "./components/timeline";

class App extends Component {
  render() {

    const profiles = [
      {
        name: 'Lily Lou',
        image: './IMG_7078 2.jpg',
        hometown: 'Greensboro, NC',
        highschool: 'The Early College at Guilford',
        highschoolcity: 'Greensboro',
        highschoolstate: 'NC',
        college: 'UNC',
        collegecity: 'Chapel Hill',
        internships: 'rtc, teach for america, carngeie mellon',
      },
      {
        name: 'Sumi Kolli',
        image: './IMG_7078 2.jpg',
        hometown: 'Atlanta, GA',
        highschool: 'GA High School',
        highschoolcity: 'Atlanta',
        highschoolstate: 'GA',
        college: 'USC',
        collegecity: 'Los Angeles',
        internships: 'various places, rtc',
      },
    ];
    const name = profiles[0].name;
    
  
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path="/" component={ Home } />
        <Route exact path="/1" render={(profiles) => <Profile {...profiles} name={name}/>} />
      </Router>
      <div id="spacer"></div>
      <footer className="Footer"> © Rewriting the Code</footer>
    </div>
  );
}
}
export default App;
