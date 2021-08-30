import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default class ImageGalary extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}
