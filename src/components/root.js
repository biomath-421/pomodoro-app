import React from "react";
import "../index.css";

class Index extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }
    render() {
        return(
        <main>
            <h1>Pomodoro Timer</h1>
            <p class="timer">15:00</p>
        </main>
        );
    }

};
export default Index;