import React from 'react';
import classes from './Person.css';
// import Radium from 'radium';
// import styled from 'styled-components';


 //using Tagged Template approach . which is essentially a method call with the styles that need to be applied.
// These styles end up on this div
// const StyledDiv = styled.div`
//                         width: 60%;
//                         margin: 16px auto;
//                         border: 1px solid #eee;
//                         box-shadow: 0 2px 3px #ccc;
//                         padding: 16px;
//                         text-align: center;

//                         @media(min-width: 500px) {
//                             width: 450px;
//                         }
//                     `;

/* A Component is just a function that returns some JSX */
/*  
    props is a default argument passed to this component by React. 
    It contains as a key value pair, all the values of the person attributes. 
    props.childern refers to any element between the opening and closing tags of our element.
    This could be other HTML or react elements
*/
const person = (props) => {
    // const style = {
    //     '@media(min-width: 500px)': { // Still valid JS because it is a string.
    //         width: '450px'
    //     }
    // }
    return (
        // <div className="Person" style={style}>
        //We can use this styled-component as a regular component here. Every method provided by the styled returns a react component.
        // <StyledDiv>
        //This person class name gets converted to a random or pseudo random classname and added to this div to avoid any kind of conflicts with other person classes in the modules.
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old !</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
            
        // </StyledDiv>
        // </div>
    );
};

// export default Radium(person);
export default person;