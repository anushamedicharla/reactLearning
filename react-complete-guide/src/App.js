import React, { Component } from 'react';
// import styled from 'styled-components';
import './App.css';
// import Radium, {StyleRoot} from 'radium';
/*  This imported component should be given an upper case starting character because the lower case ones like div and h1
    are reserved for the actual HTML elements. */
import Person from './Person/Person';

class App extends Component {
  /* State is a property of a class that extends a Component class. 
     state is managed within a component. If the values in the state property change, 
     it will make react to re-render the DOM. props  and state  are CORE concepts of React. 
     Actually, only changes in props  and/ or state  trigger React to re-render your components 
     and potentially update the DOM in the browser.
  */
  state = {
    persons: [
      {name: "Max", age: '29'},
      {name: "Manu", age: '28'},
      {name: "Steph", age: '18'}
    ],
    otherState: 'Some Other Values.',
    showPersons: false,
  }
  /*  Typically we use a name followed by 'Handler' for methods we don't actively call but assign as an event handler. 
      This is optional. By using this ES6 syntax, we are preserving the 'this' value. */
  switchNameHandler = (newName) => {
    console.log('Was clicked!');
    /* If we directly mutate a state like this, react will not pick it up .
                  this.state.persons[0].name = 'Maximus';
        instead use a special method 'setState' method under the Component object to mutate such states.
        This makes react to know about these changes and updates the DOM.
        The following does not touch the other property (otherState)
    */
    this.setState({persons: [
      {id:'a', name: newName, age: '29'},
      {id:'b', name: "Manu", age: '28'},
      {id:'c', name: "Steph", age: '27'}
    ]})
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.persons.findIndex( p => {
        return id === p.id;
    });

    const person = {...this.state.persons[personIndex]}; // Spread operator for objects
    // Alternative to spead operator : 
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {
    // Slice method on the array simply copies the array. This is so that we do not directly mutate the actual state.
    // const persons = this.state.persons.slice();
    // Or we can use the spread operator:
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonHandler = () => {
    // This fat arrow function syntax ensures that 'this' keyword aleays returns to this class.
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }


  /* React calls this method to render some HTML to the screen. This is JSX code. */
  /* Our JSX must have only one Root element per component. */
  render() {
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': { // This is possible with Radium
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;

    if(this.state.showPersons) {
            // This Key property allows React to keep tract of the individial elements of a list so that it has a clear property 
            // to compare with and see which elements changed and which didn't so that it does not re-render all the elements 
            // everytime.
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person  click={() => this.deletePersonHandler(index)} name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}                                                                                                                                                                                                                                                                                                                                                                                                                 
        </div> 
      );

      // style.backgroundColor = 'green';
      // style[':hover'] =  { // This is possible with Radium. Can work with pseudo selectors
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    // We need to wrap our component UI in this StyleRoot component provided by radium for media queries, keyframes and some others.
    return ( // These paranthesis are used so that we could structure this JSX across multiple lines.
      // <StyleRoot>
        <div className="App">
          <h3> Hi I am an App!!</h3>
          <p className={classes.join(' ')} >This is really working !!</p>
          {/* If we add the paranthesis here in the onclick method assignment at the end , it would call the function as soon as this JSX is rendered in the DOM. 
            Instead we want to wait for the click action. We only want to pass the reference
            this.switchNameHandler.bind(this,'maximusss')
            
            another alternative is to pass an anonymus arrow function. and in return statement, we call our handler method.
            Even though our handler is called here, it won't be executed untill our anaonymos function is called on click. 
            This is a little inefficient way because react can rerender quite often and it will be passed these anonymos 
            methods. */}
          {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle Persons</StyledButton>  */}
          <button className="button" onClick={this.togglePersonHandler}>
            Toggle Persons
          </button>
          {persons}
            
        </div>
      // </StyleRoot>
    );
    /* the code above compiles to this below: 
       The argument flow :
       1. the element we are rendering
       2. configuration for this element
       3 & 4 children of this element 

       Hence we always need to import React from 'react' and this code is later compiled. Hence this code above is not HTML code.
       It is JS code that can render HTML to DOM. Hence since 'class' is a reserved name in JS, we use className.
    */
      // return  React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi I\'m a react App!'));
  }

}

//Radium here is a higher order component that wraps our component and adds some extra funtionalities to it.
// export default Radium(App);

export default App;