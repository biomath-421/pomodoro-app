import React from "react";
function BreakInterval(props) {
    function decreaseBreak() {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }
    function increaseBreak() {
        if (props.breakInterval === 100) {
            return;
        }
        props.increaseBreak();
    }
    function decreaseBreakTen() {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreakTen();
    }
    function increaseBreakTen() {
        if (props.breakInterval === 100) {
            return;
        }
        props.increaseBreakTen();
    }
    return (
        <section>
            <h4>Break length</h4>
            <section className="breakControl">
            <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseBreakTen}>- 10</button>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseBreak}>- 1</button>
                <p>{props.breakInterval}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseBreak}>+ 1</button>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseBreakTen}>+ 10</button>
            </section>
        </section>
    );
}
export default BreakInterval;