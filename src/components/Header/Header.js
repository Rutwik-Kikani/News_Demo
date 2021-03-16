/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Header.css";

const Header = () => {
  function myFunction(HtmlElement) {
    console.log(HtmlElement);
    return "something";
  }
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

      <input
        type="text"
        id="nav-search"
        className="nav-search mx-auto form-control"
        name=""
      ></input>

      <div className="ml-0 mr-0 pb-1">
        <nav className="navbar navbar-expand-md">
          <button
            className="navbar-toggler ml-auto"
            data-target="#my-nav"
            data-toggle="collapse"
            aria-controls="my-nav"
            aria-expanded="false"
            onClick={() => myFunction(this)}
            aria-label="Toggle navigation"
          ></button>
          <span className="bar1"></span> <span className="bar2"></span>{" "}
          <span className="bar3"></span>
          <div id="my-nav" className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  google
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  GENERAL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  GENERAL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  GENERAL
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
