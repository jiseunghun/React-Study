import { useState } from "react";

import React from "react";

const Say = () => {
  const [message, setMessage] = useState("입장하기전");
  const onClickEnter = () => setMessage("hello");
  const onClickLeave = () => setMessage("bye");

  const [color, setColor] = useState("black");
  const onClickColorPink = () => {
    setColor("pink");
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{ color: "white", backgroundColor: "pink" }}
        onClick={onClickColorPink}
      >
        Pink
      </button>
      <button
        style={{
          color: "white",
          backgroundColor: "blue",
        }}
        onClick={() => {
          setColor("blue");
        }}
      >
        Blue
      </button>
    </div>
  );
};

export default Say;
