import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="Counter">
                <h1>WIN : {this.props.win}</h1>
                <h1>TRY : {this.props.try}</h1>
            </div>
        )
    }
}

export default Counter;