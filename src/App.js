import React, { Component } from 'react'
import Rft  from './ReactFragmentTut';
import Rft1  from './ReactFragmentTut1';
import Fct from './FunctionalcomponentTut';
import Fcwp from './FunctionalcomponentWithProps';
import Cst from './ClassComponentTut';
import Ccwp from './ClassComponentWithProps';
import Employee from './ComposingFunctionalComponent';
import el from './SimpleString';

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Latest Latest</h1>
        
        </div>
        <div>
        <h1>Old Old</h1>
          {/* <Rft />
          <Rft1 />
          <Fct/>
          <Fcwp name="Avinash kumar"/>
          <Cst />
          <Ccwp name="Sanjeev Kumar"/>
          <Employee name="Rahul"/> */}
        </div>
      </>
     );
  }
}

// const App = () => {
//   return(
//     <div>
//       <Employee name="Sachin" />
//       <Employee name="Saurav" />
//       <Employee name="Rahul" />
//       <Employee name="Yuvraj" />
//       <Employee name="Dhoni" />
//       <Employee name="Raina" />
//     </div>
//   )
// }

// export default App;