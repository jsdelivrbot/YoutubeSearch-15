import React, { Component } from 'react' // const Component = React.Component

class SearchBar extends Component {
    // render() {
    //     return <input onChange={this.onInputChange} />
    // }

    // onInputChange(event) { //handler, name format onHandlerName
    //     console.log(event.target.value)                
    // }

    render() {
        return <input onChange={(event) => console.log(event.target.value)} />
    }
}

export default SearchBar