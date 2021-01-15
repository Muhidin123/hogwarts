import React, { Component } from "react";

class Filters extends Component {
  render() {
    return (
      <div className="ui form">
        <h3>SORT OR FILTER</h3>
        <div className="field">
          <button className="ui primary button" onClick={this.props.sortName}>Sort by name</button>
          <button className="ui primary button" onClick= {this.props.sortWeight}>Sort by weight</button>
        </div>

        <div className="field">
          {this.props.currentState ? (
            <button
              className="ui secondary button"
              onClick={() => {
                this.props.changeFilter(false);
              }}
            >
              Filter Not Greased
            </button>
          ) : (
            <button
              className="ui secondary button"
              onClick={() => {
                this.props.changeFilter(true);
              }}
            >
              Filter Greased
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Filters;
