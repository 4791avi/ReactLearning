import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount(){
    console.log("App - Component Did Mount -- Mounted")
  };

  componentWillUnmount(){
    console.log("App -- Component Will Unmount -- Unmounted")
  };
  render() {
    console.log("App -- Component Rendered")
    return (
      <div>
        <h1>App Component</h1>
      </div>
    )
  }
}
