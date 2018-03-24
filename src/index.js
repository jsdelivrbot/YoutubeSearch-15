import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

import API_KEY from './api_key'
// create and add api_key.js is .gitignore
//  export const API_KEY = "your youtube api key"

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    ) 
}

ReactDOM.render(<App />, document.querySelector('.container'))
