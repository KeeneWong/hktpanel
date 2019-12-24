import React, { Component } from "react";
import "./Attack.css";
import Attackfilter from "../Attackfilters/Attackfilter";
import Attacklist from "../Attacklist/Attacklist";

class Attack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let result = this.props.attacklog.map(each => (
      <Attacklist attacklog={each}></Attacklist>
    ));
    return (
      <div className="attackmain">
        <div className="protectorsDate">
          <h3 className="protectorsh3">ATTACKS</h3>
          <h3 className="protectorsh3">LAST 180 DAYS</h3>
        </div>

        <Attackfilter></Attackfilter>

        <div className="listmain2">
          <div className="filters2">
            <p className="filterTitle">TIME</p>
            <p className="filterTitle">MACHINE</p>
            <p className="filterTitle">USER</p>
            <p className="filterTitle">OS</p>
            <p className="filterTitle">APPLICATION</p>
          </div>

          {result}
        </div>
      </div>
    );
  }
}

export default Attack;
