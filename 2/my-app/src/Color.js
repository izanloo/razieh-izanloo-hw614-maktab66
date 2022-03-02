import React, { Component } from 'react';

export default class Color extends Component {
    render(props) {
        return (
            <div className='pallete'>
                <div style={{ background: `${this.props.color}` }} className="square"></div>
                <h1>{this.props.color}</h1>
            </div>

        )
    }
} 