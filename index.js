class App extends React.Component{
    constructor(){
        super();

        this.state={
            breakLength:5,
            sessionLength:25
        }
    }

    render(){
        return(
            <div id="container">
                <header>
                    <h1>25+5 Clock</h1>
                </header>
                <div className="break-session">
                    <BreakLength breakLength={this.state.breakLength}/>
                    <SessionLength sessionLength={this.state.sessionLength}/>
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
            <h1>Break Length</h1>
            <div id="break-section">
                <button id="break-decrement" className="btn btn-primary">-</button>
                <h3 id="break-length">{props.breakLength}</h3>
                <button id="break-increment" className="btn btn-primary">+</button>
            </div>
        </div>
    );
}

function SessionLength(props){
    return(
        <div id="session-label">
            <h1>Session Length</h1>
            <div id="session-section">
                <button id="session-decrement" className="btn btn-primary">-</button>
                <h3 id="session-length">{props.sessionLength}</h3>
                <button id="session-increment" className="btn btn-primary">+</button>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>,document.getElementById('root'));