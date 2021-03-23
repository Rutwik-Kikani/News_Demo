/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useCallback } from "react";
import _ from "lodash";

//import components
import { categories } from "../../api/newsApi";
import DisplayTemplate from "./DisplayTemplate/DisplayTemplate";

//import styles
import "./Header.css";

//----------------------------------------------------------------------------
// CONSTANT
//----------------------------------------------------------------------------

// key is icon and value is link
const socialInfo = {
  "fab fa-facebook-f": "https://facebook.com/fh5co",
  "fab fa-twitter": "https://twitter.com/fh5co",
  "fab fa-instagram": "https://www.instagram.com/",
  "fab fa-google-plus-g": "https://www.google.com/",
  "fas fa-rss": "https://www.rss.org/",
};

let defaultCategory = categories.GENERAL;
let togglerStyle = "navbar-toggler ml-auto";

// -----------------------------------------------------------------------------
//Parchuran small-small component
// -----------------------------------------------------------------------------
function SocialLinkTemplate({ socialLink, socialIcon }) {
  return (
    <li className="nav-item">
      <a
        rel="noreferrer"
        className="nav-link"
        href={socialLink}
        target="_blank"
      >
        <i className={socialIcon}></i>
      </a>
    </li>
  );
}

function CategoryLinkTemplate({ activeCategory, categoryName, clicked }) {
  const styleArray = ["nav-link", "btn"];

  if (activeCategory === categoryName) {
    styleArray.push("active");
  }

  return (
    <ul className="navbar-nav mx-auto">
      <li className="nav-item">
        <button
          type="button"
          className={styleArray.join(" ")}
          onClick={clicked}
        >
          {categoryName.toUpperCase()}
        </button>
      </li>
    </ul>
  );
}

const sendQuery = (query) => console.log(`Querying for ${query}`);

// -----------------------------------------------------------------------------
//main header component
// -----------------------------------------------------------------------------

const Header = (props) => {
  const [a_category, setACategory] = useState(defaultCategory);
  const [userQuery, setUserQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const delayedQuery = useCallback(
    _.debounce((q) => sendQuery(q), 1000),
    []
  );

  const inputSearchChangeHandle = (event) => {
    setACategory("");
    setUserQuery(event.target.value);
    delayedQuery(event.target.value);
  };

  const togglerHandle = (event) => {
    setIsOpen((prevState) => {
      return !prevState;
    })
  };

  const changeActiveCategory = (c_category) => {
    setACategory(c_category);
  };

  return (
    <header className="mt-0 pt-0">
      <div className="bg-cover clearfix pt-3">
        <h2 className="logo">Catch Up with us</h2>
        <nav className="nav nav-fill mx-auto">
          {Object.keys(socialInfo).map((key) => {
            return (
              <SocialLinkTemplate
                key={key}
                socialIcon={key}
                socialLink={socialInfo[key]}
              />
            );
          })}
        </nav>

        <input
          type="text"
          id="nav-search"
          name="nav-search"
          className="mx-auto form-control nav-search"
          onChange={inputSearchChangeHandle}
          value={userQuery}
        />

        <div className="ml-0 mr-0 pb-1">
          <nav className="navbar navbar-expand-md">
            <button
              type="button"
              className={isOpen ? togglerStyle + " change" : togglerStyle}
              data-target="#my-nav"
              data-toggle="collapse"
              aria-controls="#my-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={togglerHandle}
            >
              <span className="bar1" />
              <span className="bar2" />
              <span className="bar3" />
            </button>

            <div id="my-nav" className="collapse navbar-collapse">
              hello
              {_.map(categories, (category, index) => {
                return (
                  <CategoryLinkTemplate
                    activeCategory={a_category}
                    categoryName={categories[index]}
                    key={index}
                    clicked={() => changeActiveCategory(category)}
                  />
                );
              })}
            </div>
          </nav>
        </div>
      </div>
      <DisplayTemplate />
    </header>
  );
};
export default Header;
