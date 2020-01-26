import React, {Component} from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {offset: this.props.localOffset};
        this.alterOffset = this.alterOffset.bind(this);
    }

    alterOffset(event) {
        event.preventDefault();
        if (event.target.name === 'plus1') {
            this.setState({offset: this.state.offset + 1});
        } else if (event.target.name === 'minus1') {
            this.setState({offset: this.state.offset - 1});
        }
        this.props.callback();
    }
    
    render() {
        return <div>
                 <h2>The local time</h2>
                 <p>The time is now { this.props.universalTime + this.state.offset }</p>
                 <p>for local time offset { this.state.offset }</p>
                 <button onClick={ this.alterOffset } name='minus1'>-1</button>
                 <button onClick={ this.alterOffset } name='plus1'>+1</button>
               </div>;
    }
}

class App extends Component {
    constructor(props) {
        super(props);        
        this.state = {time: 0, numPresses: 0};
        this.pushed = this.pushed.bind(this);
        
        setInterval( () => this.setState({time: this.state.time + 1}), 1000);        
    }

    pushed() { this.setState({numPresses:this.state.numPresses+1}); }
    
    render() {
        return (
            <div>
              <h1>I like clocks</h1>
              <Clock universalTime={ this.state.time} localOffset={ 5 }   callback={this.pushed}/>
              <Clock universalTime={ this.state.time} localOffset={ 100 } callback={this.pushed}/>
              <Clock universalTime={ this.state.time} localOffset={ 200 } callback={this.pushed}/>
              <p>{ this.state.numPresses } button presses</p>
            </div>
        );
    }
}

export default App;
