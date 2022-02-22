import React, {useEffect, useState} from 'react';
import {EntryContainer, Job} from './components/EntryContainer';
import logo from './logo.svg';
import door from './door.svg';
import './App.scss';
import {Selector} from './ui/Selector';
import { throttle } from 'lodash';

const searchPreviews = [
  'Hey, great to see you here',
  'Hmmmm, choices choices',
  'Werk werk werk werk werk',
  'Wait, where\'s your coffee?',
  'Hey, wanna join the band?',
  'Hey. You got this.',
];

const jobs: Job[] = [
  {
    title: 'iOS Engineer, Consumer Experience',
    address: 'New York'
  },
  {
    title: 'iOS Engineer, Consumer Experience',
    address: 'New York'
  },
  {
    title: 'iOS Engineer, Consumer Experience',
    address: 'New York'
  },
  {
    title: 'iOS Engineer, Consumer Experience',
    address: 'New York'
  },
  {
    title: 'iOS Engineer, Consumer Experience',
    address: 'New York'
  },
  {
    title: 'iOS Engineer, Consumer Experience',
    address: 'New York'
  },
];

function App() {
  const [hideHeader, setHideHeader] = useState<boolean>(false);
  const [searchText, _] = useState<string>(searchPreviews[0]);
  const [lastScroll, setLastScroll] = useState<number>(0);

  const handleScroll = () => {
    if (window.scrollY >= lastScroll && window.scrollY >= 30) {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
    setLastScroll(window.scrollY);
  };

  const handleScrollThrottled = throttle(handleScroll, 250)

  useEffect(() => {
    window.addEventListener('scroll', handleScrollThrottled);

    return () => window.removeEventListener('scroll', handleScrollThrottled);
  }, [handleScrollThrottled]);

  return (
    <div className="site">
      <header hidden={hideHeader}
              className={window.scrollY > 10 ? 'header__scrolled' : ''}>
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
          { jobs.map((job: Job) => <EntryContainer job={job}/>) }
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
