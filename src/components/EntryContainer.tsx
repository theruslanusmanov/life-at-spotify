import React from 'react';
import './entry-container.scss';
import {Chips} from '../ui/Chips';

export type Job = {
  title: string;
  address: string;
}

export const EntryContainer = ({job}: { job: Job }) => {

  return (
    <div className="entry entry__container">
      <div className="entry__header">
        <a href="job">iOS Engineer, Consumer Experience</a>
        <p>
          <span>New York</span> <span className="entry__or">or </span>
          <span>Remote Americas</span>
        </p>
      </div>
      <div className="entry__cols">
        <Chips/>
        <p>Permanent</p>
      </div>
    </div>
  );
};
