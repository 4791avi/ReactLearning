import React, { Component } from 'react'

export default class ArrayOfList extends Component {
  state = {
    users: [
    { name: "Avinash", password: "1234567", age: 25 },
    { name: "Monu", password: "9876543", age: 26 },
    { name: "Sonu", password: "3456782", age: 30 },
  ],
  isLoggedIn: false
};
  render() {
    const newUser = this.state.users.map(user => {
      console.log(user);
    return <h1> Name: {user.name} Passsword: {user.password} Age: {user.age}</h1> 
    })
    return <div />
  }
}
