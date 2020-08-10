import React from 'react';
import _ from 'lodash';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../../../assets/styles/components/AppHeader.scss';
import codaGlobal from '../../../assets/images/logo.png';

import { getCurrentUser } from '../../selectors/candidate';
import { logout } from '../../actions/login';

const AppHeader = () => {
  const user = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
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
              View Candidates
            </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              <NavLink className="nav-link" to="/edit-profile">
                <span className="user-title">Hi, {_.get(user, 'name') || 'Coda User'}</span>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
            <i className="fa fa-power-off logout-icon" aria-hidden="true" onClick={logoutUser} />
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
};

export default AppHeader;
