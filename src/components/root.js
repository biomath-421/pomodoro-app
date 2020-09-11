import React from "react";
import "../index.css";
import BreakInterval from "./BrInterval";
import SessionLength from "./SessionLength";
import Timer from "./Timer"

class Index extends React.Component {
    constructor() {
        super();

        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 0
        }
    }
    render() {
        return (
            <main>
                <h1>Pomodoro Timer</h1>
                <BreakInterval breakInterval={this.state.breakLength} />
                <SessionLength sessionLength={this.state.sessionLength} />
                <Timer timerMinute={this.state.timerMinute} />
            </main>
        );
    }

};
export default Index;