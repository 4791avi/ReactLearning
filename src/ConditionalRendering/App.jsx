import React, { Component } from 'react';
import User from './User';
import Guest from './Guest';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegister: false,
      name: this.props.name
    }
  }
  clickLogin = () => {
    this.setState({isRegister: true});
  }

  clickLogout = () => {
    this.setState({isRegister: false});
  }
  render() {
    const isLogin = this.state.isRegister
    console.log(this.props, this.state)
    // if (this.state.isRegister) {
    //   return <User name={this.state.name} clickData={this.clickLogout}/>;
    // }
    // return <Guest clickData={this.clickLogin}/>;
    return (
      <>
    {isLogin ? (
      <User name={this.state.name} clickData={this.clickLogout}/>
    ) : (
      <Guest clickData={this.clickLogin}/>
    )}
    </>
    );
  }
}
