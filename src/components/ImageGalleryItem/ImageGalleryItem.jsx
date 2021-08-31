import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    large: PropTypes.string,
    openLargeImage: PropTypes.func,
  };

  state = {};

  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={(e) => {
            this.props.openLargeImage(e.target.dataLarge);
          }}
          src={this.props.src}
          alt={this.props.alt}
          dataLarge={this.props.large}
          className="ImageGalleryItem-image"
          openLargeImage={this.props.openLargeImage}
        />
      </li>
    );
  }
}
