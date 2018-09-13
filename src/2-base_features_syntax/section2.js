import React, { Component } from 'react';
import Person from'./1-Component';
import Person2 from './2-Class';
import Exercises from './3-exercises';

class Section2 extends Component {
    
    //The currect way to pass a function that accept argument - as props (on person[moshe])
    //Another way (less prefferd) on Person2

    render() {
        return(
            <div className="section">
                <h2><u>Section 2</u></h2>
                <Person2/><br/><hr/>
                <Exercises />
            </div>
        )
    }
}

export default Section2;