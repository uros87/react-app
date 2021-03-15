import React, { useState } from 'react';
import '../../sass/main.scss';

import { NavLink } from 'react-router-dom';

import menu from '../../images/menu.svg';

const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <div className={`container ${isActive ? 'active' : ''}`}>
        <div className="logo">
          <NavLink className="nav-link" to="/">
            Logo
          </NavLink>
        </div>
        <div className="site-pages">
          <NavLink className="nav-link" to="/why">
            Why Maze?
          </NavLink>
          <NavLink className="nav-link" to="/product">
            Product
          </NavLink>
          <NavLink className="nav-link" to="/enterprise">
            Enterprise
          </NavLink>
          <NavLink className="nav-link" to="/pricing">
            Pricing
          </NavLink>
          <NavLink className="nav-link" to="/resources">
            Resources
          </NavLink>
        </div>

        <div className="registration">
          <NavLink className="nav-link" to="/login">
            Log in
          </NavLink>
          <NavLink className="nav-link m-button" to="/signup">
            Sign up free
          </NavLink>
        </div>
      </div>

      <img
        src={menu}
        alt="menu"
        className={`hamburger`}
        onClick={toggleClass}
      />
    </header>
  );
};

export default Header;
