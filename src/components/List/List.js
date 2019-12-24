import React, { Component } from "react";
import "./List.css";
import Pclist from "../Pclist/Pclist";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  componentDidMount() {
    let connectedpcLists = this.props.protectorData
      .filter(each => each.status === "connected")
      .map(each => <Pclist pcdata={each}></Pclist>);

    let offlinepcLists = this.props.protectorData
      .filter(each => each.status === "offline")
      .map(each => <Pclist pcdata={each}></Pclist>);

    let otherpcLists = this.props.protectorData
      .filter(each => each.status === "attacked")
      .map(each => <Pclist pcdata={each}></Pclist>);

    this.setState({ result: connectedpcLists.concat(offlinepcLists) });
    document.querySelector(".showIndicatorgreen").classList.remove("white");
    document.querySelector(".showIndicatoryellow").classList.remove("white");

    document.querySelector(".countboxgreen").addEventListener("click", () => {
      if (
        this.state.result
          .map(each => each.props.pcdata.status)
          .includes("attacked")
      ) {
        console.log(offlinepcLists);
        this.setState({ result: connectedpcLists });
        console.log("ok");
        document.querySelector(".showIndicatorred").classList.add("white");
      } else if (
        this.state.result
          .map(each => each.props.pcdata.status)
          .includes("connected")
      ) {
        this.setState({
          result: this.state.result.filter(
            each => each.props.pcdata.status == "offline"
          )
        });
        // console.log("ok");
        document.querySelector(".showIndicatorred").classList.add("white");
      } else {
        this.setState({ result: this.state.result.concat(connectedpcLists) });
        document.querySelector(".showIndicatorred").classList.add("white");
      }
    });

    document.querySelector(".countboxyellow").addEventListener("click", () => {
      if (
        this.state.result
          .map(each => each.props.pcdata.status)
          .includes("attacked")
      ) {
        console.log(offlinepcLists);
        this.setState({ result: offlinepcLists });
        console.log("ok");
        document.querySelector(".showIndicatorred").classList.add("white");
      } else if (
        this.state.result
          .map(each => each.props.pcdata.status)
          .includes("offline")
      ) {
        this.setState({
          result: this.state.result.filter(
            each => each.props.pcdata.status == "connected"
          )
        });
        document.querySelector(".showIndicatorred").classList.add("white");
      } else {
        this.setState({ result: this.state.result.concat(offlinepcLists) });
        document.querySelector(".showIndicatorred").classList.add("white");
      }
    });

    document.querySelector(".countboxred").addEventListener("click", () => {
      this.setState({ result: otherpcLists });
      document.querySelector(".showIndicatorgreen").classList.add("white");
      document.querySelector(".showIndicatoryellow").classList.add("white");
    });
  }

  render() {
    console.log("render has been called");

    return (
      <div className="listmain">
        <div className="filters">
          <p className="filterTitle">LAST ONLINE</p>
          <p className="filterTitle">USER</p>
          <p className="filterTitle">MACHINE</p>
          <p className="filterTitle">VERSION</p>
          <p className="filterTitle">WINDOW</p>
          <p className="filterTitle">LICENSE</p>
          <p className="filterTitle"></p>
        </div>
        {this.state.result}
      </div>
    );
  }
}

export default List;
