import React, { Component } from "react";

export class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: false,
    };
  }

  changeStyle = () => {
    this.setState({
      style: !this.state.style,
    });
  };
  render() {
    const { name, specialty, greased, weight } = this.props.onePig;
    let nameUrl = name.toLowerCase().split(" ").join("_");
    let pigImage = require(`../hog-imgs/${nameUrl}.jpg`);

    let divStyle = this.state.style ? "block" : "none";

    return (
      <div className="ui card">
        <div className="image">
          <img src={pigImage} alt="" onClick={this.changeStyle} />
        </div>
        <div className="content">
          <a className="header">{name}</a>
          <div id="pig-info" style={{ display: divStyle }}>
            <div className="meta">
              <span className="date">{weight} lbs</span>
            </div>
            <div className="description">{specialty}</div>
          </div>
          <div className="extra content">
            <a>
              <i className="user icon"></i>
              {greased}
            </a>
            /
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
