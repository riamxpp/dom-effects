import React from "react";
import { PrevNextInterface } from "../../Interfaces/ReviewSlideInterfaces/PrevNextInterface";
import style from "./PrevNext.module.css";

const PrevNext = (props: PrevNextInterface) => {
  return (
    <div className={style.botoes}>
      <button onClick={props.prevSlide}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button onClick={props.nextSlide}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default PrevNext;
