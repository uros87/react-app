import React, { Fragment } from 'react';
import '../../sass/main.scss';
import { NavLink } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="main-content">
      <div>
        <h3>Fuel decision-making with rapid, remote testing</h3>
      </div>
      <div className="description">
        Test evrything from prototypes, concepts, and copy with Maze.
        Confidently go from idea to launch with actionable user insights that
        are delivered to you in hours, not days
      </div>
      <div className="get-started">
        <button className="l-button">Get started</button>
        <button className="demo">Try the demo</button>
      </div>
    </div>
  );
};

export default HomeScreen;
