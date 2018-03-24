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
                    onChange={event => this.onInputChange(event.target.value)} /> 
            </div>
        )
    }

    onInputChange(term) {
        this.setState({ term })
        this.props.onSearchTermChange(term) //the side effect, not try that in render :)
    }
}

export default SearchBar