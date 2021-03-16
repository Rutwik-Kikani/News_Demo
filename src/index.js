import React from "react";
import { render } from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
//components import
// import configureStore from "./redux/configureStore";
import App from "./components/App";
import { Provider as ReduxProvider } from "react-redux";

// const store = configureStore();

render(
  // <ReduxProvider store={store}>
  // <Router>
  <App />,
  // </Router>
  // </ReduxProvider>
  document.getElementById("app")
);
