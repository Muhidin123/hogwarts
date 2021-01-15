import React, { Component } from "react";
import Card from "./Card";
import Filter from "./Filter";

export class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greased: true,
    };
  }

  applyFilter = (value) => {
    this.setState({
      greased: value, //true
    });
  };

  render() {
    const card = this.props.allPigs.map((pig) => {
      return pig.greased === this.state.greased ? (
        <Card onePig={pig} />
      ) : (
        console.log("nothing")
      );
    });
    return (
      <div>
        <Filter
          currentState={this.state.greased}
          changeFilter={this.applyFilter}
          sortName={this.props.sortName}
          sortWeight={this.props.sortWeight}
        />{" "}
        <div className="ui three stackable cards">{card} </div>
      </div>
    );
  }
}

export default Box;
