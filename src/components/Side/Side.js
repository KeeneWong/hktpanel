import React, { Component } from "react";
import "./Side.css";
import { Link } from "react-router-dom";

class Side extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidemain">
        <div></div>

        <Link to="/" className="sidelink">
          <div className="sidegrid">
            <div className="dashboardselection">
              <div className="dashboardicon"></div>
              <p className="iconp">DASHBOARD</p>
            </div>
          </div>
        </Link>

        <Link to="/attack" className="sidelink">
          <div className="sidegrid">
            <div className="dashboardselection">
              <div className="dashboardicon"></div>
              <p className="iconp">ATTACK</p>
            </div>
          </div>
        </Link>

        <div className="sidegrid sideabout">
          <div className="hline"></div>
          <p className="iconp">About</p>
          <div className="hline"></div>
          <p className="iconp aboutp">
            All rights reserved @ Morphisec Information Security 2014 Ltd /
            3.5.1<br></br>
            Lisence Date: 08/19 - 09/19
          </p>
        </div>
      </div>
    );
  }
}

export default Side;
