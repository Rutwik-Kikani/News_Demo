import React from "react";
// import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Carousel from "./Carousel/Carousel";
import Gallery from "./Gallery/Gallery";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Gallery />
    </div>
  );
}

export default App;
