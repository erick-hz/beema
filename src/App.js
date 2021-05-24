import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Homepage } from "./containers/homepage";

function App(props) {
  return (
    <Router>
      <Homepage />
    </Router>
  );
}

export default App;
