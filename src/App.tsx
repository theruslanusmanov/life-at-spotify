import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Selector} from './ui/Selector';

function App() {
  return (
    <div className="site">
      <header>
        <img src={logo} className="logo" alt="logo"/>
        <a href="https://www.lifeatspotify.com/jobs">All Jobs</a>
      </header>
      <div className="container">
        <input type="text" value="Wait, where's your coffee?" />
        <div className="filters">
          <Selector label="Location"/>
          <Selector label="Category"/>
          <Selector label="Job type"/>
        </div>
      </div>
    </div>
  );
}

export default App;
