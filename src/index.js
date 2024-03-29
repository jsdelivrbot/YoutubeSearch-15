import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import API_KEY from './api_key'
// create and add api_key.js is .gitignore
//  const API_KEY = "your youtube api key"
//  export default API_KEY

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            videos: [],
            selectedVideo: null 
        }
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ videos, selectedVideo: videos[0] })
            //this.setState({ videos: videos }
        })
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500) //lodash seek 500ms pause after callback activate, else trottle event on each key press

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))
