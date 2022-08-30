import React from "react";
import style from "./Hints.module.css";

const Hints = ({ hint }) => {
  return (
    <div className={style.hints}>
      <div
        className={style.hint1}
        style={{
          display: hint === "device" ? "block" : "none",
        }}
      ></div>
      <div
        className={style.hint2}
        style={{
          display: hint === "button" ? "block" : "none",
        }}
      ></div>
      <div
        className={style.hint3}
        style={{
          display: hint === "kit" ? "block" : "none",
        }}
      ></div>
      <div
        className={style.hint4}
        style={{
          display: hint === "name" ? "block" : "none",
        }}
      ></div>
    </div>
  );
};

export default Hints;
