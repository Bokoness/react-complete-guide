import React, {Component} from 'react';

/*
    - A component - is just a function that return JSX
    - Props.children - will access the props that are passed between 2 html tags
    - component cant have states, only classes
    - We should try to use components (and not classes) as much as we can
        * because those kind of function are very clear about their porpuse
        * the state classes should be a few
*/
const person = (props) => (
    <div onClick={props.clickMe}>
        <p>My nams is <b>{props.name} {props.lastName}</b></p>
        <p>And im <b>{props.children}</b> years old</p> 
    </div>
);

export default person;

