import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  static propTypes = {
    src: PropTypes.string,
    toggleModal: PropTypes.func,
  };

  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
  };

  handleClosing = (e) => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.src} alt="" />
        </div>
      </div>
    );
  }
}
