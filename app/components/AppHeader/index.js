import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../../assets/styles/components/AppHeader.scss';
import codaGlobal from '../../../assets/images/logo.png';

const AppHeader = () => (
  <header className="app-header">
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar nav-custom">
      <Link className="navbar-brand" to="/view-sensor-data">
        <img src={codaGlobal} alt="codaGlobal" className="theme-logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/view-sensor-data"
            >
              <i className="fa fa-list-alt" aria-hidden="true" />
              View Data Charts
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav nav-flex-icons">
          <li className="nav-item">
            <NavLink className="nav-link" to="/edit-profile">
              <span className="user-title">Hi, Coda User</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

  </header>
);

export default AppHeader;
