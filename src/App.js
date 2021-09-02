import './App.css'
import { Component } from 'react'
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Button from './components/Button/Button'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import Modal from './components/Modal/Modal'

export default class App extends Component {
  state = {
    searchQuery: '',
    pics: [],
    showModal: false,
    modalImage: '',
    showLoader: false,
    currentPage: 1,
  }

  componentDidMount() { }

  loaderHandler() {
    this.setState((prevState) => ({
      showLoader: !prevState.showLoader,
    }))
  }

  getPics = (query, page) => {
    const key = '23098764-6c28342abea29650d4f55356c'
    let url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`

    axios.get(url).then((response) => {
      this.saveToState(response)
      this.setState((prevState) => ({
        currentPage: prevState.currentPage + 1,
      }))
      this.loaderHandler()
    })
  }

  saveToState = (response) => {
    let newPicsArr = []
    const responseHits = response.data.hits
    if (responseHits.length === 0) {
      alert(`Write something correct`)
    }
    newPicsArr = [...this.state.pics, ...responseHits]
    this.setState(({ pics }) => ({ pics: newPicsArr }))
  }

  resetState() {
    this.setState({
      searchQuery: '',
      pics: [],
      showModal: false,
      modalPic: '',
      currentPage: 1,
    })
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.resetState()
    this.loaderHandler()
    const searchQueryValue = e.target[1].value
    this.setState({ searchQuery: searchQueryValue })
    const page = 1
    this.getPics(searchQueryValue, page)
    e.target.reset()
  }

  loadMore() {
    this.getPics(this.state.searchQuery, this.state.currentPage)
  }

  modalOpener(link) {
    return this.setState({ modalPic: link, showModal: true })
  }
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          pics={this.state.pics}
          openlargeimage={(e) =>
            this.modalOpener(e.target.dataset.large)}
        />
        {this.state.searchQuery !== '' &&
          <Button handler={this.loadMore} />}
        {this.state.showLoader && (
          <Loader
            className="spin"
            type="Bars"
            color="#00BFFF"
            height={800}
            width={80}
          />
        )}
        {this.state.showModal && (
          <Modal toggleModal={this.toggleModal}
            src={this.state.modalPic} />
        )}
      </div>
    )
  }
}
