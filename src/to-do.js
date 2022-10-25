import React from "react";
import "./index.css";

function Todo() {
  return (
    <>
      <h1>To-do list for today</h1>
      <h2>Learn</h2>
      <div className="wrap">
        <div className="learn-list">
          <ul>
            <li>Eat the frog</li>
            <li>One big Thing</li>
            <li>Focus</li>
          </ul>
        </div>
        <h2>Do</h2>
        <div className="do-list">
          <ul>
            <li>Eat the frog</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
