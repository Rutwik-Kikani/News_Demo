import React from "react";
import "./Gallery.css";

export default function Gallery() {
  function FirstLayer() {
    return (
      <div className="col-md-12 mb-8">
        <div className="row">
          <div className="col-md-12 col-lg-7 pr-0 pd-md">
            <img src={"src/assets/images/gallery-img1.png"} alt="" />
          </div>
          <div className="col-md-12 col-lg-5 light-bg cus-pd cus-arrow-left">
            <p>
              <small>march 27, 2020</small>
            </p>
            <h3>Trendy Summer Fashion</h3>
            <p>
              To take a trivial example, which of us ever undertakes laborious
              physical exercise, except to obtain some advantage from it? But
              who has any right to find fault with a man who chooses To take a
              trivial example, which of us ever undertakes laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a man who chooses To take a trivial
              example, which of us ever undertakes laborious physical exercise,
              except to obtain some advantage from it? But who has any right to
              find fault with a man who chooses To take a trivial example, which
              of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses...
            </p>
          </div>
        </div>
      </div>
    );
  }

  function SecondLayer() {
    return (
      <div className="col-md-8 mb-4 pr-0 pd-md">
        <div className="card">
          <img
            className="card-img h-100"
            src={"src/assets/images/gallery-img2.jpg"}
            alt=""
          />
          <div className="card-img-overlay">
            <div className="contact-box">
              <p>
                <small>march 27, 2020</small>
              </p>
              <h3>Trendy Summer Fashion</h3>
              <p>
                To take a trivial example, which of us ever undertakes laborious
                physical exercise, some advantage from it? fault with a man who
                chooses...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function ThirdLayer() {
    return (
      <div className="col-md-4 pl-4 mb-4">
        <div className="card">
          <img
            className="card-img-top"
            src={"src/assets/images/gallery-img3.jpg"}
            alt=""
          />
          <div className="card-body bg-gray cus-pd2 cus-arrow-up">
            <p>
              <small>{Date}</small>
            </p>
            <h3>Trendy Summer Fashion</h3>
            <p>
              To take a trivial example, which of us ever undertakes laborious
              physical exercise, some advantage from it? fault with a man who
              chooses...
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <hr></hr>
      <div className="container">
        <div className="row vr-gallery">
          <FirstLayer />
          <SecondLayer />
          <ThirdLayer />
          <FirstLayer />
          <SecondLayer />
          <ThirdLayer />
          <div className="col-md-12 text-center">
            <a href=" " className="btn">
              LOAD MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
