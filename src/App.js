import React from 'react';
import logo from './white.jpg';
import './App.css';

// load components
import Tableau from "./components/Tableau";


function App() {
  return (
    <div className="App">
		<Tableau></Tableau>
      <header className="App-header">
        <h1> Name </h1>
        <div className="pronouns">
        	<h2>Pronouns</h2>
        </div>
        <div className="based">
        	<h2>Based In</h2>
        </div>
        <img src={logo} alt="profile" className="profile"></img>
      </header>
      <div className="body">
      <div className="interests1">
      	<h3>Tech Interests</h3>

      </div>
      <div className="interests2">
      	<h3>Other Interests</h3>
      </div>
      <div className="clearfloat"></div>
      <div className="job">
      		<h2>Job</h2>
      		<ul>
        		<li>Location</li>
        		<li>Description</li>
        	</ul>
        	<div className="vertical"></div>
      </div>
      	<div className="hs">
      		<h2>High School</h2>
      		<ul>
        		<li>Location</li>
        		<li>Description</li>
        	</ul>
        	<div className="vertical"></div>
      	</div>
      	<div className="date2">
      		<p>2014-2018</p>
      	</div>
      	<div className="clearfloat"></div>
      	<hr></hr>
      	<div className="date1">
      		<p>2010-2014</p>
      	</div>
      	<div className="date3">
      		<p>2018-Present</p>
      	</div>
      	<div className="college">
      		<div className="vertical"></div>
        	<h2>College</h2>
        	<ul>
        		<li>Location</li>
        		<li>Description</li>
        	</ul>
        </div>
      </div>
      <footer className="Footer"> © Rewriting the Code</footer>
    </div>
  );
}

export default App;
