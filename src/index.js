/* Mathieu
src/index.js - main entry point-
By Mathieu*/
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Index from "./components/root";
import BrInterval from "./components/BrInterval";
import sessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

ReactDOM.render(
    <Index />,
    document.querySelector("#index"),
);
