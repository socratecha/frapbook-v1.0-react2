import React, {Component} from 'react';
import './App.css';

class Clock extends Component {
    render() {
        return <div>
                 <h2>The local time</h2>
                 <p>The time is now { this.props.universalTime + this.props.localOffset }</p>
                 <p>for local time offset { this.props.localOffset }</p>
               </div>;
    }
}
    
class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {time: 0};
        setInterval( () => this.setState({time: this.state.time + 1}), 1000);
    }
        
    render() {
        return (
            <div>
              <h1>I like clocks</h1>
              <Clock universalTime={ this.state.time} localOffset={ 5 } />
              <Clock universalTime={ this.state.time} localOffset={ 100 } />
              <Clock universalTime={ this.state.time} localOffset={ 200 } />
            </div>
        );
    }
}

export default App;
