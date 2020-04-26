import React, { Component } from 'react'

export default class ListTut extends Component {
  render() {
    const arr = [10, 20, 30 ,40, 50]
    const newArr = arr.map(num => {
      console.log("newArray =", num);
      return <li name="Jai">{num * 3}</li>
    });
    return(
      <ul>
        {arr.map(num => (
          <li>{num}</li>
        ))}
      </ul>
    );
  }
}



// return (
  // console.log("Old Array:", arr);
  // console.log("New Array:", newArr);
  // <div>
  //  return <ul>{newArr}</ul>
    {/* <ul>
      <li>{arr[0] * 2}</li>
      <li>{arr[1] * 2}</li>
      <li>{arr[2] * 2}</li>
      <li>{arr[3] * 2}</li>
      <li>{arr[4] * 2}</li>
    </ul> */}
  {/* </div> */}
// )