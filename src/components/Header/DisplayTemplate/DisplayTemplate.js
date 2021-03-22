/* eslint-disable react/prop-types */
import React from "react";
import LImage from "../../../assets/images/left-img.jpg";
import RImage from "../../../assets/images/right-img.jpg";
import ArchImage from "../../../assets/images/architecture.png";
import IntImage from "../../../assets/images/interior.png";
import FoodImage from "../../../assets/images/food.png";
import TravelImage from "../../../assets/images/travel.png";
import "./DisplayTemplate.css";
//--------------------------------------------------------
//small-small component
//--------------------------------------------------------
function BigCard({ Image, Heading, Content, readMore }) {
  return (
    <div className="card">
      <img src={Image} alt="default" className="card-img" />
      <div className="card-img-overlay d-flex align-items-centre justify-content-center flex-column">
        <p>{Heading}</p>

        <h2>{Content}</h2>
        <a href={readMore} className="btn">
          READ MORE
        </a>
      </div>
    </div>
  );
}

function SmallCard({ Image, Heading }) {
  return (
    <div className="card">
      <img className="card-img" src={Image} alt="default" />
      <div className="card-img-overlay">
        <h5>{Heading}</h5>
      </div>
    </div>
  );
}

//--------------------------------------------------------
// Main DisplayTemplate
//--------------------------------------------------------
const DisplayTemplate = () => {
  return (
    <section className="display-template">
      <div className="row ml-0 mr-0 no-gutters">
        <div className="col-md-6">
          <BigCard
            Image={LImage}
            Heading="Business Insider"
            Content="People Le Pew Will Be Absent From 'Space Jam 2'"
            readMore="article.html"
          />
        </div>
        <div className="col-md-6">
          <BigCard
            Image={RImage}
            Heading="Hollywood Reporter"
            Content="Meghan Recounts Conversations About Archie’s Skin Tone "
            readMore="article.html"
          />
        </div>
        <div className="col-md-3 first">
          <SmallCard Image={ArchImage} Heading="Business Insider" />
        </div>
        <div className="col-md-3">
          <SmallCard Image={IntImage} Heading="Hollywood Reporter" />
        </div>
        <div className="col-md-3">
          <SmallCard Image={FoodImage} Heading="Hollywood Reporter" />
        </div>
        <div className="col-md-3 last">
          <SmallCard Image={TravelImage} Heading="Hollywood Reporter" />
        </div>
      </div>
    </section>
  );
};

export default DisplayTemplate;
