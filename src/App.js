import "./App.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";

export default class App extends Component {
  state = {
    pics: null,
  };

  componentDidMount() {
    const key = "23098764-6c28342abea29650d4f55356c";
    let url = `https://pixabay.com/api/?q=flower&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
    fetch(url)
      .then((res) => res.json())
      .then((pics) => this.setState({ pics: pics.hits }));
  }

  onSubmit() {}

  render() {
    return (
      <div className="App">
        <Searchbar />
      </div>
    );
  }
}
