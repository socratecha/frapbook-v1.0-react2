import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.logIt = this.logIt.bind(this);
    }
    
    logIt(event) {
        event.preventDefault();
        console.log('submit button clicked');
    }
    
    render() {
        return (
            <div>
            <h1>Registration Form</h1>
            <form>
              Username&nbsp;
              <input type="text"/>
              <br/>
              Password&nbsp;
              <input type="password"/>
              <br/>
              Sign up for:&nbsp;
              <select>
                <option value="links">Links to New Videos (Free)</option>
                <option value="news">Super-Valuable Newsletter ($29)</option>
                <option value="course">Online Step-by-Step Course ($79)</option>
                <option value="coach">One-on-One Expert Coaching ($149)</option>
              </select><br/>
              I am <strong>most</strong> interested in:&nbsp;
              <input type="radio" name="interest" value="Justice"/>Justice&nbsp;
              <input type="radio" name="interest" value="Freedom"/>Freedom&nbsp;
              <input type="radio" name="interest" value="Equanimity"/>Equanimity<br/>
              Please sign me up for your spam emails
              <input type="checkbox"/>
              <br/>
              Provide an optional short bio:
              <textarea rows="4" cols="50"/>
              <br/>
              <button onClick={this.logIt}>Register</button> 
            </form> 
            </div>
        );
    }
}

export default App;
