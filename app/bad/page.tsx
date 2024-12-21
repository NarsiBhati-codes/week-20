"use client";

import { useState } from "react";

export default function () {
  const [count, setCount] = useState(0);
  const currentTime = new Date(Date.now()).toLocaleTimeString();

  return (
    <div>
      <p>Hello</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
      <h1>Time: {currentTime}</h1>
    </div>
  );
}
