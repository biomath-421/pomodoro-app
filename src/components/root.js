import React from "react";
import "../index.css";
import BreakInterval from "./BrInterval";
import SessionLength from "./SessionLength";
import Timer from "./Timer";

class Index extends React.Component {
    constructor() {
        super();

        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25,
            isPlay: false,
        };

        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind
            (this);
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind
            (this);
            this.onIncreaseBreakLengthTen = this.onIncreaseBreakLengthTen.bind
            (this);
        this.onDecreaseBreakLengthTen = this.onDecreaseBreakLengthTen.bind
            (this);
        this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind
            (this);
        this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind
            (this);
            this.onIncreaseSessionLengthTen = this.onIncreaseSessionLengthTen.bind
            (this);
        this.onDecreaseSessionLengthTen = this.onDecreaseSessionLengthTen.bind
            (this);
        this.onToggleInterval = this.onToggleInterval.bind
            (this);
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind
            (this);
        this.onRestartTimer = this.onRestartTimer.bind
            (this);
        this.onPlayStopTimer = this.onPlayStopTimer.bind
            (this);

    }

    onIncreaseBreakLength() {
        this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength + 1
            };
        });
    }

    onDecreaseBreakLength() {
        this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength - 1
            };
        });
    }
    onIncreaseBreakLengthTen() {
        this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength + 10
            };
        });
    }

    onDecreaseBreakLengthTen() {
        this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength - 10
            };
        });
    }

    onIncreaseSessionLength() {
        this.setState((prevState) => {
            return {
                sessionLength: prevState.sessionLength + 1,
                timerMinute: prevState.sessionLength + 1
            };
        });
    }

    onDecreaseSessionLength() {
        this.setState((prevState) => {
            return {
                sessionLength: prevState.sessionLength - 1,
                timerMinute: prevState.sessionLength - 1
            };
        });
    }

    onIncreaseSessionLengthTen() {
        this.setState((prevState) => {
            return {
                sessionLength: prevState.sessionLength + 10,
                timerMinute: prevState.sessionLength + 10
            };
        });
    }

    onDecreaseSessionLengthTen() {
        this.setState((prevState) => {
            return {
                sessionLength: prevState.sessionLength - 10,
                timerMinute: prevState.sessionLength - 10
            };
        });
    }

    onUpdateTimerMinute() {
        this.setState((prevState) => {
            return {
                timerMinute: prevState.timerMinute - 1
            }
        })
    }

    onToggleInterval(isSession) {
        if (isSession) {
            this.setState({
                timerMinute: this.state.sessionLength,
            })
        } else {
            this.setState({
                timerMinute: this.state.breakLength
            })
        }
    }
    onRestartTimer() {
        this.setState({
            timerMinute: this.state.sessionLength
        })
    }
    onPlayStopTimer(isPlay) {
        this.setState({
            isPlay: isPlay,
        });

    }

    render() {
        return (
            <main>
                <h1>Pomodoro Timer</h1>
                <section className="first">
                    <section className="disposition">
                        <BreakInterval
                            isPlay={this.state.isPlay}
                            breakInterval={this.state.breakLength}
                            increaseBreak={this.onIncreaseBreakLength}
                            decreaseBreak={this.onDecreaseBreakLength}
                            increaseBreakTen={this.onIncreaseBreakLengthTen}
                            decreaseBreakTen={this.onDecreaseBreakLengthTen}
                        />
                        <SessionLength
                            isPlay={this.state.isPlay}
                            sessionLength={this.state.sessionLength}
                            increaseSession={this.onIncreaseSessionLength}
                            decreaseSession={this.onDecreaseSessionLength}
                            increaseSessionTen={this.onIncreaseSessionLengthTen}
                            decreaseSessionTen={this.onDecreaseSessionLengthTen}
                        />
                    </section>
                    <Timer
                        timerMinute={this.state.timerMinute}
                        breakLength={this.state.breakLength}
                        updateTimerMinute={this.onUpdateTimerMinute}
                        toggleInterval={this.onToggleInterval}
                        restartTimer={this.onRestartTimer}
                        onPlayStopTimer={this.onPlayStopTimer}
                    />
                </section>
            </main>
        );
    }

};
export default Index;