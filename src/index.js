import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import DrumMachine from "./components/drumpad";

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route exact path="/beatmaker" component={DrumMachine} />
      
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
