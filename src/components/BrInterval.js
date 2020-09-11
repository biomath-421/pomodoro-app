import React from "react";
function BreakInterval(props) {
    return (
        <section>
            <button>-</button>
            <p>{props.breakInterval}</p>
            <button>+</button>
        </section>
    );
}
export default BreakInterval;