import React from "react";
class Timer extends React.Component {
    constructor() {
        super();


        this.state = {
            isSession: true,
            isPlay: false,
            isPause:true,
            timerSecond: 0,
            intervalId: 0,
        };
        this.url="http://soundbible.com/grab.php?id=2176&type=mp3";
        this.audio=new Audio(this.url);
        this.playTimer = this.playTimer.bind
            (this);
        this.decreaseTimer = this.decreaseTimer.bind
            (this);
        this.stopTimer = this.stopTimer.bind
            (this);
        this.restartTimer = this.restartTimer.bind
            (this);
    }
    playSound(){
        this.setState({
            play:true,
        })
        this.audio.play();
    }
    playTimer() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId: intervalId,
            isPlay:true,
            isPause:false
        })


    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.playSound();
                        this.setState({
                            timerSecond: 0,
                            isSession: false,
                        });
                        this.props.toggleInterval(this.state.isSession);
                    } else {
                        
                        this.playSound()
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
        this.setState({
            isPlay:false,
            isPause:true
        });
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
                <h4 className="Session">{this.state.isSession === true ? "Session" :
                    "Break"}</h4>
                <section className="pomodoro">
                    <span>{this.props.timerMinute}</span>
                    <span>:</span>
                    <span>{this.state.timerSecond === 0 ? "00" :
                        this.state.timerSecond < 10 ? "0" +
                            this.state.timerSecond : this.state.timerSecond}</span>
                </section>
                <section className="Column">
                    <button className="timerControl" disabled={this.state.isPlay === true ? "disabled" : ""} onClick={() => this.playTimer()}><i className="fas fa-play"></i>play</button>
                    <button className="timerControl" disabled={this.state.isPlay === false ? "disabled" : ""} onClick={() => this.stopTimer()}><i className="fas fa-pause"></i>pause</button>
                    <button className="timerControl" onClick={() => this.restartTimer()}><i className="fas fa-redo-alt"></i>restart</button>
                </section>
            </section>
        )
    }
}

export default Timer;