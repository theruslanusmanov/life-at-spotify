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
      <div className="container search-row">
        <input type="text" value="Wait, where's your coffee?" />
        <div className="filters">
          <Selector label="Location"/>
          <Selector label="Category"/>
          <Selector label="Job type"/>
        </div>
      </div>
      <div className="container search-total">
        <p><b>614</b> jobs in <b>all locations</b> in <b>all categories</b> in <b>all job types</b></p>
      </div>
    </div>
  );
}

export default App;
