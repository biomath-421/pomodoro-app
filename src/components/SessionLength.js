import React from "react";
function sessionLength(props) {
    return (
        <section>
            <button>-</button>
            <p>{props.sessionLength}</p>
            <button>+</button>
        </section>
    );
}
export default sessionLength;