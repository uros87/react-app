import React from 'react';
import '../sass/main.scss';
import '../sass/components/_buttons.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container">
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
    </header>
  );
};

export default Header;
