import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default class ImageGalary extends Component {
  static propTypes = {
    pics: PropTypes.array,
  };

  state = {};

  render() {
    return (
      <ul className="ImageGallery">
        {this.props.pics.map((pic) => {
          return (
            <ImageGalleryItem
              key={pic.id}
              src={pic.webformatURL}
              alt={pic.webformatURL}
              data-large={pic.largeImageURL}
            />
          );
        })}
      </ul>
    );
  }
}
