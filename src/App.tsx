import React, {useEffect, useState} from 'react';
import {EntryContainer} from './components/EntryContainer';
import logo from './logo.svg';
import door from './door.svg';
import './App.scss';
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
  const [searchText, _] = useState<string>(searchPreviews[0]);
  const [headerScrolled, setHeaderScrolled] = useState<boolean>(false);
  const [lastScroll, setLastScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= lastScroll) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      setLastScroll(window.scrollY);
      window.scrollY > 60 ? setHeaderScrolled(true) : setHideHeader(false);
      console.log(window.scrollY);
      console.log(headerScrolled);
    });
  }, []);

  return (
    <div className="site">
      <header hidden={hideHeader} className={headerScrolled ? "header__scrolled" : ""}>
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
        <img src={door} alt="door"/>
        <h2>Sound good?</h2>
        <p>Get to know our hiring process before you apply or find answers to
          any lingering questions, right here, right now.</p>
      </footer>
      <div className="footer__pushler"/>
    </div>
  );
}

export default App;
