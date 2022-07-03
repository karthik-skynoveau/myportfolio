import React, { Component } from "react";
import './Counterapp.css'
export default class Counterapp extends Component {
    constructor() {
        super();
        this.state = {
            count: 0

        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrementCount() {
        this.setState({
            count: this.state.count - 1
        });
    }
    reset = () => {
        this.setState({
            count: this.state.count = 0
        });
    };

    render() {

        return (
            <div className="counter-container">
                <div className="counter">
                    <p>COUNTER APPLICATION</p>
                </div>
                <div className='counter-1'>
                    <div class="count">

                        <h1>{this.state.count} </h1>
                    </div>
                    <div class="buttons">
                        <center>   <button class="btn_1" onClick={() => this.decrementCount()}>decrement</button> <br /><br /><br />
                            <button class="btn_2" onClick={() => this.reset()}>Reset</button><br /><br /><br />
                            <button class="btn_2" onClick={() => this.incrementCount()}>Increment</button>

                        </center>
                    </div>
                </div>
            </div>
        );
    }
}
