import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navbarmain">
        <div className="hktlogodiv"></div>
        <div className="settingdiv">
          <a className="settinga">Setting</a>
          <div className="settinga usericon">
            <div className="usericonpng"></div>
            <p className="username">UserName</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
