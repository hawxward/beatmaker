import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DrumSequencer from "../src/assets/drumSequencer.svg";
import drumpad from "../src/assets/drum pad.svg"

library.add(fab, faPlay);

function App() {
  return (
    <div className="body">
      <div>
        <h1 className="title">beatmaker</h1>
      </div>
      <div className="menu">
        <div className="DrumpadLink">
          <Link to="/beatmaker">
            <img className="drumpad" src={drumpad} alt="logo" />
            drumpad
          </Link>
        </div>
        <div className="DrumSequencerLink">
          
            <img className="DrumSequencer" src={DrumSequencer} alt="logo" />
            drumsequencer
          
        </div>
      </div>
    </div>
  );
}

export default App;
