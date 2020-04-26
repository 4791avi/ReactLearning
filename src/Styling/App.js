import React, { Component } from 'react'

export default class App extends Component {
  state = {
    change: false
  };

  clickHandle = () => {
    this.setState({chnage: true});
  }
  render() {
    const btnStyle = {
      color: "red",
      background: "orange"
    };

    const txtc = {
      color: "red"
    };

    const txts = {
      fontSize: "100px"
    }

    if(this.state.chnage) {
      btnStyle.background = "white";
    };

    return (
      <div>
        <h1 style={{...txtc, ...txts}}>Hello App</h1>
        <button  onClick={this.clickHandle} style={btnStyle}>I am Button</button>
      </div>
    )
  }
}
