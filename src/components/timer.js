import React from "react";

class Timer extends React.component {
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
        }
    }
    render() {
        return (
            <section>
                <h4>{this.props.isSession === true ? "Session" : "Break"}</h4>
                <span>{this.props.timerMinute}</span>
                <span>:</span>
                <span>{this.state.timerSecond}</span>
            </section>
        )
    }
}

export default Timer;