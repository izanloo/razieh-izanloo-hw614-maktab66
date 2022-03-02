import React, { Component } from 'react';
import Color from './Color';

class ColorGenerator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorNew: [],
      colors: ['#d47e7e', '#285bec', '#2a4032', '#808080', '#FF0000', '#0AFEEB']
    };

  }
  handleClick = () => {
    let colorArr = this.state.colors
    let colorRandom = colorArr[Math.floor(Math.random() * colorArr.length)];
    this.setState({ 
      colorNew: [colorRandom, ...this.state.colorNew] 
    })
  }

  render() {

    return (
      <div>
        <button onClick={this.handleClick} className="btnAddColor">Add color</button>
        {this.state.colorNew.map((item, i) => <Color key={i} color={item}  />)}
      </div>
    );

  }
} export default ColorGenerator