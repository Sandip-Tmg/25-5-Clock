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
                    <div id="break-label">
                        <button id="break-decrement" className="btn btn-primary">-</button>
                        <h3 id="break-length">{this.state.breakLength}</h3>
                        <button id="break-increment" className="btn btn-primary">+</button>
                    </div>
                    <div id="session-label">
                        <button id="session-decrement" className="btn btn-primary">-</button>
                        <h3 id="session-length">{this.state.sessionLength}</h3>
                        <button id="session-increment" className="btn btn-primary">+</button>
                    </div>
                </div>
                <div id="timer-label">
                    
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));