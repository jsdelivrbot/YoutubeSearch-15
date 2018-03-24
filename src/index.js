import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

import API_KEY from './api_key'
// create and add api_key.js is .gitignore
//  const API_KEY = "your youtube api key"
//  export default API_KEY

YTSearch({key: API_KEY, term: 'surfboards'}, data => console.log(data))

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    ) 
}

ReactDOM.render(<App />, document.querySelector('.container'))
