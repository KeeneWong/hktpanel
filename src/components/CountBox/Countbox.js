import React, { Component } from "react";
import "./Countbox.css";

class Countbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeColor = e => {
    e.preventDefault();
    document
      .querySelector(`.showIndicator${this.props.selectcolor}`)
      .classList.toggle("white");
    // console.log(e.target);
    // console.log(
    //   document.querySelector(`.showIndicator${this.props.selectcolor}`)
    // );
  };

  render() {
    return (
      <div
        // className="countboxmain"
        className={`countbox${this.props.selectcolor} countboxmain`}
        onClick={this.changeColor}
      >
        <div
          className="showBar"
          style={{
            backgroundColor: this.props.color
          }}
        >
          <h2 className="title">{this.props.title}</h2>
        </div>
        <div className="countNum">
          <h1>{this.props.numberofpc}</h1>
        </div>
        <div className={`showIndicator${this.props.selectcolor} white`}></div>
      </div>
    );
  }
}

export default Countbox;
