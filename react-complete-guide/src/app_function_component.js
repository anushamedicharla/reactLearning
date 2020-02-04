// import React, { useState } from 'react';
// import './App.css';
// /*  This imported component should be given an upper case starting character because the lower case ones like div and h1
//     are reserved for the actual HTML elements. */
// import Person from './Person/Person';

// // Learning React Hooks using a functional Component.
// const app = props => {
//   /*
//     Pass in your initial state to the useState method.
//     This method returns an array with exactly 2 elements.
//     The first element will be our first state initially and then our updated state later.

//     The second element will always be a function that allows us to update this state. Such that react will know 
//     about it and will rerender the html. This is also what happens in the class based component's 'setState' method.

//     With these hooks, this function that we get here does not merge the previous state. Instead it replaces it.
//   */
//  // Array destructuring
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: "Max", age: '29'},
//       {name: "Manu", age: '28'},
//       {name: "Steph", age: '18'}
//     ],
//     otherState: 'Some Other Values.'
//   });

//   console.log(personsState);

//   // JS allows functions inside functions.
//   const switchNameHandler = () => {
//       console.log('Was clicked!');
//      setPersonsState({persons: [
//         {name: "Maximuss", age: '29'},
//         {name: "Manu", age: '28'},
//         {name: "Steph", age: '27'}
//     ],
//     otherState: 'Some Other Values.'});
//   };

//   return ( // These paranthesis are used so that we could structure this JSX across multiple lines.
//     <div className="App">
//       <h3> Hi I am an App!!</h3>
//       {/* If we add the paranthesis here in the onclick method assignment at the end , it would call the function as soon as this JSX is rendered in the DOM. 
//         Instead we want to wait for the click action. We only want to pass the reference */}
//       <button onClick={switchNameHandler}>Switch Name</button> 
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
// };

// export default app;
