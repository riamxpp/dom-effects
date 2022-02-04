import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { QuestionInterface } from "../../Interfaces/GeneralQuestionsInterface/QuestionInterface";
import style from "./Question.module.css";

const Question = (props: QuestionInterface) => {
  const [activeResponse, setActiveResponse] = useState<boolean>(false);

  const divRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    switch (props.target) {
      case divRef.current:
        setActiveResponse((prev) => !prev);
        break;
      case spanRef.current:
        setActiveResponse((prev) => !prev);
        break;
      case buttonRef.current:
        setActiveResponse((prev) => !prev);
        break;
      default:
        setActiveResponse(false);
    }
  }, [props.target]);

  return (
    <section className={style.contentQuestion}>
      <div ref={divRef} onClick={props.onClick} className={style.question}>
        <span ref={spanRef}>{props.question}</span>
        <button ref={buttonRef} className={style.seeResponseButton}>
          {activeResponse ? "-" : "+"}
        </button>
      </div>
      <div
        className={`${style.response} ${style.animeBottom} ${
          activeResponse ? style.active : ""
        }`}
      >
        <span>{props.response}</span>
      </div>
    </section>
  );
};

export default Question;