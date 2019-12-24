import React, { Component } from "react";
import "./Attackfilter.css";
import { Dropdown } from "react-bootstrap";

class Attackfilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="attackfiltermain">
        <div className="filterinput">
          <p className="filterTitle2">APPLICATION</p>
          <Dropdown>
            <Dropdown.Toggle
              className="dropdown"
              variant=""
              id="dropdown-basic"
            >
              CHOOSE ANY
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">calcx64</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="filterinput">
          <p className="filterTitle2">MACHINES</p>
          <Dropdown>
            <Dropdown.Toggle
              className="dropdown"
              variant=""
              id="dropdown-basic"
            >
              CHOOSE ANY
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">ESI-PC1</Dropdown.Item>
              <Dropdown.Item href="#/action-1">ESI-PC2</Dropdown.Item>
              <Dropdown.Item href="#/action-1">ESI-PC3</Dropdown.Item>
              <Dropdown.Item href="#/action-1">ESI-PC4</Dropdown.Item>
              <Dropdown.Item href="#/action-1">ESI-PC5</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="filterinput">
          <p className="filterTitle2">OS</p>
          <Dropdown>
            <Dropdown.Toggle
              className="dropdown"
              variant=""
              id="dropdown-basic"
            >
              CHOOSE ANY
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Window 7.0 64bit</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="filterinput">
          <p className="filterTitle2">NAME</p>
          <Dropdown>
            <Dropdown.Toggle
              className="dropdown"
              variant=""
              id="dropdown-basic"
            >
              CHOOSE ANY
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="filterinput">
          <p className="filterTitle2">CATEGORY</p>
          <Dropdown>
            <Dropdown.Toggle
              className="dropdown"
              variant=""
              id="dropdown-basic"
            >
              CHOOSE ANY
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="filterinput">
          <p className="filterTitle2">SEVERITY</p>
          <Dropdown>
            <Dropdown.Toggle
              className="dropdown"
              variant=""
              id="dropdown-basic"
            >
              CHOOSE ANY
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Attackfilter;
