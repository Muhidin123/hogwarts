import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Box from "./Box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pigs: hogs,
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Box allPigs={this.state.pigs} />
      </div>
    );
  }
}

export default App;
