import React from "react";
function sessionLength(props) {
    function decreaseSession() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }
    function increaseSession() {
        if (props.sessionLength === 100) {
            return;
        }
        props.increaseSession();
    }
    function decreaseSessionTen() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSessionTen();
    }
    function increaseSessionTen() {
        if (props.sessionLength === 100) {
            return;
        }
        props.increaseSessionTen();
    }
    return (
        <section>
            <h4>Session length</h4>
            <section className="sessionControl">
            <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseSessionTen}>-10</button>
            <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseSession}>-1</button>
            <p>{props.sessionLength}</p>
            <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseSession}>+1</button>
            <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseSessionTen}>+10</button>
            </section>
        </section>
    );
}
export default sessionLength;