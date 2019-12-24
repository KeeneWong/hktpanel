import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Side from "./components/Side/Side";
import Protectors from "./components/Protectors/Protectors";

import { Route } from "react-router-dom";
import Attack from "./components/Attack/Attack";

let protectorData = [
  {
    user: "TestUser5",
    machine: "ENESI-RND",
    version: "3.5.1",
    os: "window7",
    licensetype: "client",
    status: "connected",
    show: true,
    lastonline: "20 Dec 19 3:24 PM",
    light:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Button_Icon_Green.svg/1024px-Button_Icon_Green.svg.png",
    attacked: true
  },

  {
    user: "ESI-PC",
    machine: "ENGEL",
    version: "3.5.1",
    os: "window7",
    licensetype: "client",
    status: "connected",
    show: true,
    lastonline: "20 Dec 19 3:24 PM",
    light:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Button_Icon_Green.svg/1024px-Button_Icon_Green.svg.png"
  },
  {
    user: "TestUser7",
    machine: "LD68ZDL12",
    version: "3.5.1",
    os: "window10",
    licensetype: "client",
    status: "offline",
    show: true,
    lastonline: "20 Dec 19 3:24 PM",
    light:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Button_Icon_Yellow.svg/1024px-Button_Icon_Yellow.svg.png"
  },
  {
    user: "TestUser",
    machine: "ESI-PC",
    version: "3.5.1",
    os: "window7",
    licensetype: "client",
    status: "offline",
    show: true,
    lastonline: "20 Dec 19 3:24 PM",
    light:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Button_Icon_Yellow.svg/1024px-Button_Icon_Yellow.svg.png"
  },
  {
    user: "TestUser2",
    machine: "ESI-laptop",
    version: "3.5.1",
    os: "window7",
    licensetype: "client",
    status: "offline",
    show: true,
    lastonline: "20 Dec 19 3:24 PM",
    light:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Button_Icon_Yellow.svg/1024px-Button_Icon_Yellow.svg.png"
  },
  {
    user: "TestUser10",
    machine: "ESI-laptop2",
    version: "3.5.1",
    os: "window7",
    licensetype: "client",
    status: "connected",
    show: true,
    lastonline: "20 Dec 19 3:24 PM",
    light:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Button_Icon_Green.svg/1024px-Button_Icon_Green.svg.png"
  },
  {
    user: "TestUser2",
    machine: "ESI-laptop",
    version: "3.5.1",
    os: "window7",
    licensetype: "client",
    status: "offline",
    show: true,
    lastonline: "20 Dec 19 3:24 PM",
    light:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Button_Icon_Yellow.svg/1024px-Button_Icon_Yellow.svg.png"
  },
  {
    user: "TestUser2",
    machine: "ESI-laptop",
    version: "3.5.1",
    os: "window7",
    licensetype: "client",
    status: "offline",
    show: true,
    lastonline: "20 Dec 19 3:24 PM",
    light:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Button_Icon_Yellow.svg/1024px-Button_Icon_Yellow.svg.png"
  },
  {
    user: "TestUser2",
    machine: "ESI-laptop",
    version: "3.5.1",
    os: "window7",
    licensetype: "client",
    status: "offline",
    show: true,
    lastonline: "20 Dec 19 3:24 PM",
    light:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Button_Icon_Yellow.svg/1024px-Button_Icon_Yellow.svg.png"
  },
  {
    user: "TestUser2",
    machine: "ESI-laptop",
    version: "3.5.1",
    os: "window7",
    licensetype: "client",
    status: "offline",
    show: true,
    lastonline: "20 Dec 19 3:24 PM",
    light:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Button_Icon_Yellow.svg/1024px-Button_Icon_Yellow.svg.png"
  }
];

let attacklog = [
  {
    id: 1,
    application: "calcx64",
    user: "ESQ-PC/ESI",
    machine: "ESI-PC1",
    os: "Window 7.0 64bit",
    time: "6 DEC 2019 / 6:16 PM"
  },
  {
    id: 2,
    application: "calcx64",
    user: "ESQ-PC/ESI",
    machine: "ESI-PC2",
    os: "Window 7.0 64bit",
    time: "6 DEC 2019 / 6:16 PM"
  },
  {
    id: 3,
    application: "calcx64",
    user: "ESQ-PC/ESI",
    machine: "ESI-PC3",
    os: "Window 7.0 64bit",
    time: "6 DEC 2019 / 6:16 PM"
  },
  {
    id: 4,
    application: "calcx64",
    user: "ESQ-PC/ESI",
    machine: "ESI-PC4",
    os: "Window 7.0 64bit",
    time: "6 DEC 2019 / 6:16 PM"
  },
  {
    id: 5,
    application: "calcx64",
    user: "ESQ-PC/ESI",
    machine: "ESI-PC5",
    os: "Window 7.0 64bit",
    time: "6 DEC 2019 / 6:16 PM"
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      protectorData: protectorData,
      attacklog: attacklog
    };
  }

  // deletepc = (thispc)=>{
  //   this.setState({ protectorData: })
  // }

  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <div className="sideAnddMain">
          <Side></Side>
          <main className="mainmain">
            <Route
              path="/"
              exact
              render={routeProps => (
                <Protectors
                  protectorData={this.state.protectorData}
                  {...routeProps}
                />
              )}
            ></Route>

            <Route
              path="/attack"
              exact
              render={routeProps => (
                <Attack
                  protectorData={this.state.protectorData}
                  attacklog={this.state.attacklog}
                  {...routeProps}
                />
              )}
            ></Route>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
