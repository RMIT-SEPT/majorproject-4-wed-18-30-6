import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user, loading } = authContext;

  const onLogout = () => {
    logout();
  };

  const linksAuthenticated = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
    </Fragment>
  );

  const linksNotAuthenticated = (
    <Fragment>
      <li className='border'>
        <Link to='/register'>Register</Link>
      </li>
      <li className='border'>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar'>
      <Link to='/'>
        <h1>{title}</h1>
      </Link>
      <ul>
        {loading ? (
          <Fragment />
        ) : isAuthenticated ? (
          linksAuthenticated
        ) : (
          linksNotAuthenticated
        )}
        <li className='solid-line'></li>
        <li className='no-border'>
          <Link to='/'>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Online Appointment Booking System",
};

export default Navbar;
