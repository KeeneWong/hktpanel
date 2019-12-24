import React, { Component } from "react";
import "./Protectors.css";
import Countbox from "../CountBox/Countbox";
import List from "../List/List";

class Protectors extends Component {
  constructor(props) {
    super(props);
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        " @ " +
        today.getHours() +
        ":" +
        today.getMinutes();
    this.state = {
      date: date
    };
  }
  render() {
    return (
      <div className="protectorsmain">
        <div className="protectorsDate">
          <h3 className="protectorsh3">PROTECTORS</h3>
          <h3 className="protectorsh3">{this.state.date}</h3>
        </div>

        <div className="countBoxes">
          <Countbox
            color="rgba(255, 118, 113, 0.795)"
            title="ATTACKED (LAST 180 DAYS)"
            status="ATTACKED"
            selectcolor="red"
            protectorData={this.props.protectorData}
          ></Countbox>
          <Countbox
            color="rgba(255, 222, 113, 0.795)"
            title="OFFLINE"
            status="OFFLINE"
            selectcolor="yellow"
            protectorData={this.props.protectorData}
          ></Countbox>
          <Countbox
            color="rgba(72, 241, 177, 0.911"
            title="CONNECTED"
            status="CONNECTED"
            selectcolor="green"
            protectorData={this.props.protectorData}
          ></Countbox>
        </div>

        <div className="pcListheader">
          <h3 className="protectorsh3">PC LISTS</h3>
          <div className="totalcountbox">
            <p>TOTAL PCS:{"   "}</p>
            <p id="totalcount">{this.props.protectorData.length}/20</p>
          </div>
        </div>

        <List protectorData={this.props.protectorData}></List>
      </div>
    );
  }
}

export default Protectors;
