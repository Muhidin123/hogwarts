import React, { Component } from "react";

class Filters extends Component {

  render() {
    return (
      <div className="ui form">
        <h3>Pick greased or not greased</h3>
        <div className="field">
          {/* <select name="type" id="type"> */}
          {/* <option value={true}>Greased</option> */}
          {/* <option value={false}>Not Greased</option> */}
          {/* </select> */}
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
