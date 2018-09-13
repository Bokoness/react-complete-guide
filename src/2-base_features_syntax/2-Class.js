import React, {Component} from 'react';
import Person from './1-Component';

class Person2 extends Component {
    state = {
        persons: [
            {name:'Geffen', age: 6},
            {name: "Ozi", age: 4.5},
            {name: "Bnaya", age: 3}
        ],
        index: 0
    }

    //Essential to use that form of function, without it the function wont bind "this"
    switchNameHandler = () => {
        if(this.state.index < 2) {
            this.setState({
                index: ++this.state.index
            });
        } else {
            this.setState({
                index: 0
            })
        }
    };
    //The currect way to pass a function that accept argument - as props (on Alert Name at Person below)
    //Another way (less prefferd, on Alert Age at person below
    alertName = (name) => {
        alert(name);
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                //event.target.value: the value of an input element
                {name: event.target.value, age: 6}, 
                {name: "Ozi", age: 4.5},
                {name: "Bnaya", age: 3}
            ]
        });
    };

    render() {
        let index = this.state.index;
        let name = this.state.persons[index].name;
        let age = this.state.persons[index].age
        return (
            <div>
                <Person name={name}> {age + ' (has passed trough children)'} </Person>
                <br/>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <button onClick={this.alertName.bind(this, name)}>Alert Name</button>
                <button onClick={() => this.alertName(age)}>Alert Age</button>
                {index == 0 && 
                <input 
                    onChange={this.nameChangeHandler.bind(this)}
                    placeholder="Change the name"
                />}
            </div>
        )
    }
}

export default Person2;