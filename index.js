class App extends React.Component{
    constructor(){
        super();

        this.state={
            breakLength:5,
            sessionLength:25,
            timerMinute:25,
            timerSecond:0,
            intervalID:0
        }

        this.decrementBreakLength = this.decrementBreakLength.bind(this);
        this.incrementBreakLength = this.incrementBreakLength.bind(this);
        this.decrementSessionLength = this.decrementSessionLength.bind(this);
        this.incrementSessionLength = this.incrementSessionLength.bind(this);
        this.playTimer = this.playTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.reset = this.reset.bind(this);

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
            sessionLength: state.sessionLength - 1,
            timerMinute:state.sessionLength - 1
        }))
    }

    incrementSessionLength(){
        if(this.state.sessionLength>=60){
            return;
        }
        this.setState(state=>({
            sessionLength: state.sessionLength + 1,
            timerMinute:state.sessionLength + 1
        }))
    }

    
    startTimer(){
       let interval = setInterval(this.playTimer,1000);
       console.log("Interval: "+interval);
       this.setState({
           intervalID:interval
       })
       console.log("State Interval: "+ this.state.intervalID)
    }

    playTimer(){
        switch(this.state.timerSecond){
            case 0:
                this.setState(prevState=>({
                    timerSecond:59,
                    timerMinute:prevState.timerMinute-1
                }))
                break;
            default:
                this.setState(prevState=>({
                    timerSecond:prevState.timerSecond-1
                }))
                break;
        }

        // the break length starts when minute and second finishes
        if(this.state.timerMinute==0 && this.state.timerSecond==0){
            this.setState(state=>({
                timerMinute:state.breakLength,
                timerSecond:state.timerSecond
            }))
        }
    }

    stopTimer(){
        clearInterval(this.state.intervalID)
    }

    reset(){
        this.stopTimer();
        this.setState({
            timerSecond:0,
            timerMinute:this.state.sessionLength
        })
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
                    <Session timerMinute={this.state.timerMinute} timerSecond={this.state.timerSecond} startTimer={this.startTimer} reset={this.reset} stopTimer={this.stopTimer}/>
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

function Session(props){

    return(
        <div id="timer-label">
            <h2>Session</h2>
            <div id="time-left">
                <span>{props.timerMinute}</span>
                <span>:</span>
                <span>{props.timerSecond<10 ?"0"+props.timerSecond:props.timerSecond}</span>
            </div>
            <div id="buttons">
                <button id="start_stop" className="btn btn-primary" onClick={props.startTimer}>Start</button>
                <button id="stop" className="btn btn-success" onClick={props.stopTimer}>Stop</button>
                <button id="reset" className="btn btn-danger" onClick={props.reset}>Reset</button>
            </div>
        </div>
    );
    

}

ReactDOM.render(<App/>,document.getElementById('root'));