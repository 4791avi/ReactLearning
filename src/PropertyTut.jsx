import React, { Component } from 'react';

let user = {
  name: "Avinash",
  age: "28",
  adderss: "Bihar"
};

const prop = <h1> I am Property  name:-{user.name} age:-{user.age} address:-{user.adderss}</h1>;

export default prop;
