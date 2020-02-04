import React, { Component } from 'react';
import './App.css';
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
    otherState: 'Some Other Values.'
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
      {name: newName, age: '29'},
      {name: "Manu", age: '28'},
      {name: "Steph", age: '27'}
    ]})
  };

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Max', age: '29'},
      {name: event.target.value, age: '28'},
      {name: "Steph", age: '27'}
    ]})
  };


  /* React calls this method to render some HTML to the screen. This is JSX code. */
  /* Our JSX must have only one Root element per component. */
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return ( // These paranthesis are used so that we could structure this JSX across multiple lines.
      <div className="App">
        <h3> Hi I am an App!!</h3>
        {/* If we add the paranthesis here in the onclick method assignment at the end , it would call the function as soon as this JSX is rendered in the DOM. 
          Instead we want to wait for the click action. We only want to pass the reference
          this.switchNameHandler.bind(this,'maximusss')
          
          another alternative is to pass an anonymus arrow function. and in return statement, we call our handler method.
          Even though our handler is called here, it won't be executed untill our anaonymos function is called on click. 
          This is a little inefficient way because react can rerender quite often and it will be passed these anonymos 
          methods. */}
        <button style={style} onClick={() => this.switchNameHandler('mussss')}>Switch Name</button> 
        <div>
          {/* Passing a reference to this switchNameHandler method. So we are passing methods as props. */}
          <Person click={this.switchNameHandler.bind(this,'maximusssosss')}
            name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person changed={this.nameChangedHandler}
            name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
      </div>
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

export default App;