import React, { Component } from 'react'

export default class Marks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mroll: this.props.roll
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Marks - Get Derived State From Props");
    console.log(props, state);
    if(props.roll !== state.mroll) {
      return {mroll: props.roll};
    }
    return null;
  };

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.mroll < 106 ){ 
    console.log(" Marks - Should Component Update");
    console.log(nextProps, nextState);
    return true
    }
    return false
  };

  getSnapshotBeforeUpdate(prevProps, pervState){
    console.log("Marks -- get Snapshot Before Update -- It runs before Update");
    console.log(prevProps, pervState);
    return 10;
  };

  componentDidUpdate(prevProps, pervState, Snapshot){
    console.log("Marks -- Component Did Update -- It runs After Update")
    console.log(prevProps, pervState, Snapshot);
  }
  render() {
    console.log("Marks -- Render Method (Child Of Student)")
    return (
      <div>
         <h1>Hello I am Marks Component</h1>
         <h1>{this.state.mroll}</h1>
      </div>
    )
  }
}
