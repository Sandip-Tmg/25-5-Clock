class App extends React.Component{
    constructor(){
        super();

        this.state={
            breakLength:5,
            sessionLength:25
        }

        this.decrementBreakLength = this.decrementBreakLength.bind(this);
        this.incrementBreakLength = this.incrementBreakLength.bind(this);
        this.decrementSessionLength = this.decrementSessionLength.bind(this);
        this.incrementSessionLength = this.incrementSessionLength.bind(this);
    }

    decrementBreakLength(){
        if(this.state.breakLength<=1){
            return;
        }
        this.setState(state=>({
            breakLength:state.breakLength - 1
        }))
    }

    incrementBreakLength(){
        if(this.state.breakLength>=60){
            return;
        }
        this.setState(state=>({
            breakLength:state.breakLength + 1
        }))
    }

    decrementSessionLength(){
        if(this.state.sessionLength<=1){
            return;
        }
        this.setState(state=>({
            sessionLength: state.sessionLength - 1
        }))
    }

    incrementSessionLength(){
        if(this.state.sessionLength>=60){
            return;
        }
        this.setState(state=>({
            sessionLength: state.sessionLength + 1
        }))
    }

    render(){
        return(
            <div id="container">
                <header>
                    <h1>25+5 Clock</h1>
                </header>
                <div className="break-session">
                    <BreakLength breakLength={this.state.breakLength} decrementBreakLength={this.decrementBreakLength} incrementBreakLength={this.incrementBreakLength}/>
                    <SessionLength sessionLength={this.state.sessionLength} decrementSessionLength={this.decrementSessionLength} incrementSessionLength={this.incrementSessionLength}/>
                </div>
                <div id="timer-label">

                </div>
            </div>
        )
    }
}

function BreakLength(props){
    return(
        <div id="break-label">
            <h2>Break Length</h2>
            <div id="break-section">
                <button onClick={props.decrementBreakLength} id="break-decrement" className="btn btn-primary">-</button>
                <h3 id="break-length">{props.breakLength}</h3>
                <button onClick={props.incrementBreakLength} id="break-increment" className="btn btn-primary">+</button>
            </div>
        </div>
    );
}

function SessionLength(props){
    return(
        <div id="session-label">
            <h2>Session Length</h2>
            <div id="session-section">
                <button onClick={props.decrementSessionLength} id="session-decrement" className="btn btn-primary">-</button>
                <h3 id="session-length">{props.sessionLength}</h3>
                <button onClick={props.incrementSessionLength} id="session-increment" className="btn btn-primary">+</button>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>,document.getElementById('root'));