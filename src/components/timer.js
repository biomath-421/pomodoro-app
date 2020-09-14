import React from "react";
class Timer extends React.Component {
    constructor() {
        super();


        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        };
        this.playTimer = this.playTimer.bind
            (this);
        this.decreaseTimer = this.decreaseTimer.bind
            (this);
        this.stopTimer = this.stopTimer.bind
            (this);
        this.restartTimer = this.restartTimer.bind
            (this);
    }

    playTimer() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId: intervalId
        })
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.updateTimerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            timerSecond: 59,
                            isSession: false,
                        });
                        this.props.toggleInterval(this.state.isSession);
                    } else {

                        this.setState({
                            isSession: true
                        });
                        this.props.toggleInterval(this.state.isSession)
                    }
                } else {

                    this.props.updateTimerMinute()
                    this.setState({
                        timerSecond: 59,
                    });
                }
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
    }

    restartTimer() {
        this.stopTimer();
        this.props.restartTimer();
        this.props.onPlayStopTimer(false);
        this.setState({
            timerSecond: 0,
            isSession: true
        });


    }

    render() {
        return (
            <section className="timer">
                <h4 className="Session">{this.state.isSession === true ? "Session" : "Break"}</h4>
                <section className="pomodoro">
                <span>{this.props.timerMinute}</span>
                <span>:</span>
                <span>{this.state.timerSecond === 0 ? "00" :
                    this.state.timerSecond < 10 ? "0" +
                    this.state.timerSecond : this.state.timerSecond}</span>
                    </section>
                <section>
                    <button className="timerControl" onClick={this.playTimer}><i className="fas fa-play"></i>play</button>
                    <button className="timerControl" onClick={this.stopTimer}><i className="fas fa-pause"></i>pause</button>
                    <button className="timerControl" onClick={this.restartTimer}><i className="fas fa-redo-alt"></i>restart</button>
                </section>
            </section>
        )
    }
}

export default Timer;