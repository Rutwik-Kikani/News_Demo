import React from "react";
// import "owlcarousel/docs/assets/owlcarousel/assets/owl.carousel.min.css";
// import "owlcarousel/docs/assets/owlcarousel/assets/owl.theme.default.min.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";

export default function Carousel() {
  // function change() {
  //   document.addEventListener(
  //     "click",
  //     function (event) {
  //       var video = event.target.getAttribute("src", "data-link");
  //       if (!video) return;
  //     },
  //     false
  //   );
  // }
  // function change(e) {
  //   e.target.setAttribute( 'src', 'https://www.youtube.com/embed/ujPNSC4JllE');
  // }
  return (
    <div>
      <div className="container-fluid video-player">
        <div className="container">
          <div className="screen embed-responsive embed-responsive-16by9">
            <iframe
              title="Iframe"
              id="screen"
              src="https://www.youtube.com/embed/YE7VzlLtp-4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <OwlCarousel
            items={5}
            className="owl-carousel owl-theme play-list"
            loop
            nav
            margin={8}
          >
            <div className="card">
              <img
                className="card-img link-img"
                src={"src/assets/images/play1.png"}
                alt=""
                // onClick={change(e)}
                data-link="https://www.youtube.com/embed/ujPNSC4JllE"
              />
            </div>
            <div className="card">
              <img
                className="card-img link-img"
                src={"src/assets/images/play2.png"}
                alt=""
                data-link="https://www.youtube.com/embed/rMT8CffVFMk"
              />
            </div>
            <div className="card">
              <img
                className="card-img link-img"
                src={"src/assets/images/play3.png"}
                alt=""
                data-link="https://www.youtube.com/embed/bGC9f1Po6Q8"
              />
            </div>
            <div className="card">
              <img
                className="card-img link-img"
                src={"src/assets/images/play4.png"}
                alt=""
                data-link="https://www.youtube.com/embed/yHk_sypSiXU"
              />
            </div>
            <div className="card">
              <img
                className="card-img link-img"
                src={"src/assets/images/play5.png"}
                alt=""
                data-link="https://www.youtube.com/embed/7yoqm-kgKEk"
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
