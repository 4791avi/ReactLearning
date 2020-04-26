import React, { Component } from 'react';
import User from './User';

export default class App extends Component {
  render() {
    const arr = this.props.arrayList
    const newArray = arr.map(num => {
      return <User key={num} values= {num} />
    })
    return (
      <div>
        <ul>{newArray}</ul>
      </div>
    )
  }
}
