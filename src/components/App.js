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

  sortName = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

  sortWeight = (key = "weight", order = "desc") => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  };

  sortByName = () => {
    this.setState({
      pigs: this.state.pigs.sort(this.sortName),
    });
  };

  sortByWeight = () => {
    this.setState({
      pigs: this.state.pigs.sort(this.sortWeight()),
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Box
          allPigs={this.state.pigs}
          sortName={this.sortByName}
          sortWeight={this.sortByWeight}
        />
      </div>
    );
  }
}

export default App;
