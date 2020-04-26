import React, { Component } from 'react'
import Student from '../GetDerivedStateFromProps/Student';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      roll: "11"
    }
    console.log("App--- Constructor called");
    console.log(props);
  };

  static getDerivedStateFromProps(props, state){
    console.log("App -- Get Derived State From Props IS called");
    console.log(props, state);
    return null;
  };
   
  componentDidMount(){
    console.log("App -- Component Did Mount -- Mounted")
  };

  render() {
    console.log("App -- Render Method")
    return (
      <div>
        <Student name="Avinash"/>
      </div>
    )
  }
}
