import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    large: PropTypes.string,
  };

  state = {};

  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          src={this.props.src}
          alt={this.props.alt}
          data-large={this.props.large}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}
