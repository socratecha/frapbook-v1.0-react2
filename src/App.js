import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {username : ''};
        this.logIt = this.logIt.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
    }
    
    logIt(event) {
        event.preventDefault();
        console.log('submit button clicked for user ' + this.state.username);
    }

    updateUsername(event) {
        this.setState({username: event.target.value});
    }
    
    render() {
        return (
            <div>
            <h1>Registration Form</h1>
            <form>
              Username&nbsp;
              <input type="text" value={this.state.username} onChange={this.updateUsername}/>
              <br/>
              <button onClick={this.logIt}>Register</button> 
            </form> 
            </div>
        );
    }
}

export default App;
