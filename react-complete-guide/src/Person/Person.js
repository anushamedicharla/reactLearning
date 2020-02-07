import React from 'react';
import './Person.css';
import Radium from 'radium';

/* A Component is just a function that returns some JSX */
/*  
    props is a default argument passed to this component by React. 
    It contains as a key value pair, all the values of the person attributes. 
    props.childern refers to any element between the opening and closing tags of our element.
    This could be other HTML or react elements
*/
const person = (props) => {
    const style = {
        '@media(min-width: 500px)': { // Still valid JS because it is a string.
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old !</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default Radium(person);