import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {username : '', password:'', passwordComment:null,
                      selection:'', getSpam:true, interest:'', shortBio:''};
                      
        this.logIt = this.logIt.bind(this);
        
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateSelection = this.updateSelection.bind(this);
        this.updateCheckbox = this.updateCheckbox.bind(this);
        this.updateRadioButtons = this.updateRadioButtons.bind(this);
        this.updateShortBio = this.updateShortBio.bind(this);        
    }
    
    logIt(event) {
        event.preventDefault();
        console.log('submit button clicked with state:');
        console.log(this.state);
    }

    updateUsername(event)     { this.setState({username: event.target.value}); }
    updatePassword(event) {
        // drop unallowable characters
        const newPassword = event.target.value.split('').filter(
            x => x.match(App.allowedChars)).join('');        

        let comment;
        if (newPassword.length < 6) {
            comment = <p>Minimum length is 6 characters</p>;
        } else if (newPassword.length < 10) {
            comment = <p>Weak Password &mdash; longer passwords are more secure</p>;
        } else {
            comment = <p>Strong Password</p>;
        }
        this.setState({password: newPassword, passwordComment: comment});
    }    
    updateSelection(event)    { this.setState({selection: event.target.value}); }
    updateRadioButtons(event) { this.setState({interest: event.target.value}); }
    updateCheckbox(event)     { this.setState({getSpam: event.target.checked}); }
    updateShortBio(event)     { this.setState({shortBio: event.target.value}); }
    
    render() {
        return (
            <div>
              <h1>Registration Form</h1>
              <form>
                Username&nbsp;
                <input type="text" value={this.state.username} onChange={this.updateUsername}/>
                <br/>
                Password&nbsp;
                <input type="password" value={this.state.password} onChange={this.updatePassword}/>
                { this.state.passwordComment }
                <br/>
                Sign up for:&nbsp;
                <select value={this.state.selection} onChange={this.updateSelection}>
                  <option value="links">Links to New Videos (Free)</option>
                  <option value="news">Super-Valuable Newsletter ($29)</option>
                  <option value="course">Online Step-by-Step Course ($79)</option>
                  <option value="coach">One-on-One Expert Coaching ($149)</option>
                </select><br/>
                I am <strong>most</strong> interested in:&nbsp;
                <input type="radio" name="interest" value="Justice"
                       onChange={this.updateRadioButtons}
                       checked={this.state.interest==='Justice'}/>Justice&nbsp;
                <input type="radio" name="interest" value="Freedom"
                       onChange={this.updateRadioButtons}
                       checked={this.state.interest==='Freedom'}/>Freedom&nbsp;
                <input type="radio" name="interest" value="Equanimity"
                       onChange={this.updateRadioButtons}
                       checked={this.state.interest==='Equanimity'}/>Equanimity<br/>
                Please sign me up for your spam emails
                <input type="checkbox" checked={this.state.getSpam} onChange={this.updateCheckbox}/>
                <br/>
                Provide an optional short bio:
                <textarea rows="4" cols="50" value={this.state.shortBio} onChange={this.updateShortBio}/>
                <br/>
                <button onClick={this.logIt}>Register</button> 
            </form> 
            </div>
        );
    }
}

export default App;
