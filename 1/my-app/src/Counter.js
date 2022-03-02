import React, { Component } from 'react';
import Buttons from './Buttons';


class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            titles: 22
        };
    }
    increase = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    decrease = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            });
        } else {
            alert("The value of the counter should not be less than zero.")
        }

    }

    render() {
        return (

            <div>
                <p>{this.state.counter}</p>
                <div className='btns'>
                    <Buttons clickHandler={this.decrease} title="decrease" />
                    <Buttons clickHandler={this.increase} title="increase" />
                </div>
            </div>


        );

    }

}
export default Counter