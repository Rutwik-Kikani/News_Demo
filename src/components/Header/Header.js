/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="mt-0 pt-0">
      <div className="bg-cover clearfix pt-3">
        <h2 className="logo">Catch Up with us</h2>
        <nav className="nav nav-fill mx-auto">
          <li className="nav-item">
            <a
              href="https://facebook.com/fh5co"
              className="nav-link"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://twitter.com/fh5co"
              className="nav-link"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" target="_blank">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" target="_blank">
              <i className="fas fa-rss"></i>
            </a>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
