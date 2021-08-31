import "./App.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import axios from "axios";

export default class App extends Component {
  state = {
    searchQuery: "",
    pics: [],
    showModal: false,
    modalImage: "",
    showLoader: false,
    currentPage: 1,
  };

  componentDidMount() {}

  getPics(query, page) {
    const key = "23098764-6c28342abea29650d4f55356c";
    let url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

    axios.get(url).then((response) => {
      this.saveToState(response);
    });
  }

  saveToState = (response) => {
    let newPicsArr = [];
    const responseHits = response.data.hits;
    newPicsArr = [...this.state.pics, ...responseHits];
    this.setState(({ pics }) => ({ pics: newPicsArr }));
  };

  resetState() {
    this.setState({
      searchQuery: "",
      pics: [],
      showModal: false,
      modalImage: "",
      currentPage: 1,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.resetState();
    const searchQueryValue = e.target[1].value;
    this.setState({ searchQuery: searchQueryValue });
    const page = 1;
    this.getPics(searchQueryValue, page);
    e.target.reset();
  };

  loadMore() {
    this.getPics(this.state.searchQuery, this.state.currentPage);
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery pics={this.state.pics} />
        {this.state.searchQuery !== "" && <Button handler={this.loadMore} />}
      </div>
    );
  }
}
