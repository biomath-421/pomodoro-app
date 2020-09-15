import React from "react";
function BreakInterval(props) {
    function decreaseCounter() {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }
    function increaseCounter() {
        if (props.breakInterval === 60) {
            return;
        }
        props.increaseBreak();
    }
    return (
        <section>
            <h4>Break length</h4>
            <section className="breakControl">
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>-</button>
                <p>{props.breakInterval}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>+</button>
            </section>
        </section>
    );
}
export default BreakInterval;