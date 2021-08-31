import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  static propTypes = {
    handler: PropTypes.func,
  };

  state = {};

  render() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    return (
      <button
        className="Button"
        type="button"
        onClick={(e) => this.props.handler()}
      >
        Load More
      </button>
    );
  }
}
