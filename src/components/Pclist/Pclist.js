import React, { Component } from "react";
import "./Pclist.css";

class Pclist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  alertdelete = () => {
    // document.querySelector(".deletep").addEventListener("click", () => {
    if (window.confirm("Are you sure you want to delete this PC?")) {
    } else {
    }
    // });
  };

  render() {
    return (
      <div className="pcList">
        <div className="listDetail">
          <div
            className="statuslight"
            style={{
              backgroundImage: `url(${this.props.pcdata.light})`
            }}
          ></div>
          <p className="pcListp">{this.props.pcdata.lastonline}</p>
        </div>

        <div className="listDetail">
          <p className="pcListp">{this.props.pcdata.user}</p>
        </div>

        <div className="listDetail">
          <p className="pcListp">{this.props.pcdata.machine}</p>
        </div>

        <div className="listDetail">
          <p className="pcListp">{this.props.pcdata.version}</p>
        </div>

        <div className="listDetail">
          <p className="pcListp">{this.props.pcdata.os}</p>
        </div>

        <div className="listDetail">
          <p className="pcListp">{this.props.pcdata.licensetype}</p>
        </div>

        <div className="listDetail">
          <p className="pcListp deletep" onClick={this.alertdelete}>
            DELETE
          </p>
        </div>
      </div>
    );
  }
}

export default Pclist;
