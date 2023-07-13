import { useRef } from "react";

export default function Start() {
  const inputRef = useRef();

  return (
    <div className="start">
      <input placeholder="Enter your username" className="startInput" />
      <button className="startButton">Start</button>
    </div>
  );
}
