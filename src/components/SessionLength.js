import React from "react";
function sessionLength(props) {
    function decreaseSession() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }
    function increaseSession() {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }
    return (
        <section>
            <h4>Session length</h4>
            <section className="sessionControl">
            <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseSession}>-</button>
            <p>{props.sessionLength}</p>
            <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseSession}>+</button>
            </section>
        </section>
    );
}
export default sessionLength;