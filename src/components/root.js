import React from "react";
import "../index.css";
import BreakInterval from "./BrInterval";
import SessionLength from "./SessionLength";

class Index extends React.Component {
    constructor() {
        super();

        this.state = {
            breakLength: 5,
            sessionLength: 25,
            TimerMinute: 25,
        }
    }
    render() {
        return (
            <main>
                <h1>Pomodoro Timer</h1>
                <BreakInterval breakInterval={this.state.breaklength} />
                <SessionLength sessionLength={this.state.sessionLength} />
            </main>
        );
    }

};
export default Index;