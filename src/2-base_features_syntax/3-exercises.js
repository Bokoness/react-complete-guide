import React, {Component} from 'react';

const UserInput = (props) => (
    <div>
        <input type="text" value={props.username} onChange={props.change}/>
    </div>
)

const UserOutput = (props) => (
    <div>
        <p><b>UserName: </b>{props.username}</p>
    </div>
)

class Exercises extends Component {

    state = {
        username: "bokoness"
    }

    changeUsernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        const styles = {
            color: "red"
        }

        return (
            <div>
                <h2 style={styles}><u>Exercises</u></h2>
                <UserInput 
                    usernmae={this.state.username} 
                    change={this.changeUsernameHandler}
                />
                <UserOutput username={this.state.username}/>
            </div>
        )
    }
}

export default Exercises;