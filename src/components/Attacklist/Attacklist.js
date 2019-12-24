import React, { Component } from "react";
import "./Attacklist.css";

class Attacklist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="attackList">
        <div className="attacklistDetail">
          <p className="attackListp">{this.props.attacklog.time}</p>
        </div>

        <div className="attacklistDetail">
          <p className="attackListp">{this.props.attacklog.machine}</p>
        </div>

        <div className="attacklistDetail">
          <p className="attackListp">{this.props.attacklog.user}</p>
        </div>

        <div className="attacklistDetail">
          <p className="attackListp">{this.props.attacklog.os}</p>
        </div>

        <div className="attacklistDetail">
          <p className="attackListp">{this.props.attacklog.application}</p>
        </div>
      </div>
    );
  }
}

export default Attacklist;
