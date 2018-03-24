import React, { Component } from 'react' // const Component = React.Component

class SearchBar extends Component {
    constructor(props) { //for each new instance
        super(props) //call constructor of parrent class

        this.state = { term: ''} //init state
    }

    // render() {
    //     return <input onChange={this.onInputChange} />
    // }

    // onInputChange(event) { //handler, name format onHandlerName
    //     console.log(event.target.value)                
    // }

    render() {
        // ONLY setState !!! setState() -> render() 
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} 
                    onChange={event => this.setState({ term: event.target.value})} /> 
            </div>
        )
    }
}

export default SearchBar