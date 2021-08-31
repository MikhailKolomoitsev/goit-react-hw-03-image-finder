import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    large: PropTypes.string,
    openlargeimage: PropTypes.func,
  };

  state = {};

  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={(e) => {
            this.props.openlargeimage(e.target.src.value); // dataLarge
          }}
          src={this.props.src}
          alt={this.props.alt}
          data={this.props.large}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}
