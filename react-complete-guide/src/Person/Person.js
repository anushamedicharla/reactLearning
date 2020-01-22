import React from 'react';


/* A Component is just a function that returns some JSX */
/*  
    props is a default argument passed to this component by React. 
    It contains as a key value pair, all the values of the person attributes. 
    props.childern refers to any element between the opening and closing tags of our element.
    This could be other HTML or react elements
*/
const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old !</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;