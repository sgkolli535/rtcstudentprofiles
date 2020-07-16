import React, { Suspense, Component, Fragment } from 'react';
import logo from './white.jpg';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from './screen_shot.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./navigation";
import Home from "./Home";
import Profile from "./timeline";
import Directory from "./directory";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path="/" component={ Home } />
        <Route exact path="/1" component={ Directory } />
      </Router>
      <div id="spacer"></div>
      <footer className="Footer"> © Rewriting the Code</footer>
    </div>
  );
}

export default App;
