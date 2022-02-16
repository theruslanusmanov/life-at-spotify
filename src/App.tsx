import React, {useEffect, useState} from 'react';
import {EntryContainer} from './components/EntryContainer';
import logo from './logo.svg';
import './App.css';
import {Selector} from './ui/Selector';

const searchPreviews = [
  'Hey, great to see you here',
  'Hmmmm, choices choices',
  'Werk werk werk werk werk',
  'Wait, where\'s your coffee?',
  'Hey, wanna join the band?',
  'Hey. You got this.',
];

function App() {
  const [hideHeader, setHideHeader] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>(searchPreviews[0]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 60) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    });
  }, []);

  return (
    <div className="site">
      <header hidden={hideHeader}>
        <img src={logo} className="logo" alt="logo"/>
        <a href="https://www.lifeatspotify.com/jobs">All Jobs</a>
      </header>
      <main>
        <div className="container search-row">
          <input type="text" value={searchText} readOnly/>
          <div className="filters">
            <Selector label="Location"/>
            <Selector label="Category"/>
            <Selector label="Job type"/>
          </div>
        </div>
        <div className="container">
          <div className="search-total">
            <p><b>614</b> jobs in <b>all locations</b> in <b>all
              categories</b> in <b>all job types</b></p>
          </div>
        </div>
        <div className="container search-results">
          <EntryContainer/>
          <EntryContainer/>
          <EntryContainer/>
        </div>
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
      <div className="footer__pushler"/>
    </div>
  );
}

export default App;
