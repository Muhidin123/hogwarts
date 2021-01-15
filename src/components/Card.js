import React, { Component } from "react";

export class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: false,
      cardStyle: false,
    };
  }

  changeStyle = () => {
    this.setState({
      ...this.state,
      style: !this.state.style,
    });
  };

  hideShowCard = () => {
    this.setState({
      ...this.state,
      cardStyle: !this.state.cardStyle,
    });
  };

  render() {
    const { name, specialty, greased, weight } = this.props.onePig;
    let nameUrl = name.toLowerCase().split(" ").join("_");
    let pigImage = require(`../hog-imgs/${nameUrl}.jpg`);

    let divStyle = this.state.style ? "block" : "none";
    let cardStyle = this.state.cardStyle ? "none" : "block";

    return (
      <div className="ui card six wide column" style={{ display: cardStyle }}>
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
          <button className="ui primary button" onClick={this.hideShowCard}>
            HIDE
          </button>
        </div>
      </div>
    );
  }
}
export default Card;
