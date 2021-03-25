import React, { Component } from 'react';

class StateExample extends Component {

    constructor(props) {
        super(props);
        this.state = {currentTemp: "78", location: "Indiana" }
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.setState({currentTemp: "48"})

    // }

    handleClick = () => {
        this.setState( {currentTemp: "25"} )
    }

    render () {
        return (
            <div>
                <h2>Hello from StateExample</h2>
                <p>The current temp is {this.state.currentTemp} in {this.state.location}. </p>
                <button onClick={this.handleClick}>Click Me to Change Temp</button>
            </div>
        )
    };
};

export default StateExample;