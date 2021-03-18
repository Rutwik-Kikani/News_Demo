import React, { useState } from "react";
import _ from "lodash";
import { categories } from "../../api/newsApi";
import DisplayTemplate from "./DisplayTemplate/DisplayTemplate";

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

// -----------------------------------------------------------------------------
//main header component
// -----------------------------------------------------------------------------

const Header = (props) => {
  const [a_category, setACategory] = useState(defaultCategory);
  const togglerHandle = (event) => {
    console.log(event); //*ask, can we manipulate dom in reactive way ?
  };

  const changeActiveCategory = (c_category) => {
    setACategory(c_category);
  };

  const inputSearchChangeHandle = (event) => {
    console.log(event.target.value);
    setACategory("");
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
        />

        <div className="ml-0 mr-0 pb-1">
          <nav className="navbar navbar-expand-md">
            <button
              type="button"
              className="navbar-toggler ml-auto"
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
