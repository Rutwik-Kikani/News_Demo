import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

//imoprt styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

//components import
// import configureStore from "./redux/configureStore";
import App from "./components/App";

// const store = configureStore();

render(
  // <ReduxProvider store={store}>
  // <Router>
  <App />,
  // </Router>
  // </ReduxProvider>
  document.getElementById("app")
);
