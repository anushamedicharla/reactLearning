import React from 'react';
import './Person.css';

/* A Component is just a function that returns some JSX */
/*  
    props is a default argument passed to this component by React. 
    It contains as a key value pair, all the values of the person attributes. 
    props.childern refers to any element between the opening and closing tags of our element.
    This could be other HTML or react elements
*/
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old !</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;