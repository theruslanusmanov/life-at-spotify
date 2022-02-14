import React from 'react';
import './entry-container.scss';

export const EntryContainer = () => {

  return (
    <div className="entry__container">
      <div className="entry__header">
        <a href="job">iOS Engineer, Consumer Experience</a>
        <p>
          <span>New York</span> <span className="entry__or">or</span>
          <span>Remote Americas</span>
        </p>
      </div>
    </div>
  );
};
