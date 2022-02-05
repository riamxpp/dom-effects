import React, { useState } from "react";
import Question from "./Question";
import style from "./GeneralQuestions.module.css";

const GeneralQuestions = () => {
  const [target, setTarget] = useState<EventTarget>();
  const [click, setClick] = useState(1);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setTarget(event.target);
    setClick((click) => (click += 1));
  }

  return (
    <section className={style.generalQuestions}>
      <h2>General questions </h2>
      <Question
        click={click}
        setTarget={setTarget}
        target={target}
        onClick={handleClick}
        question="Do you accept all major credit card ?"
        response="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt rem dolores error quibusdam. Sed quam reiciendis voluptates maxime libero natus adipisci omnis quas aspernatur nisi."
      />
      <Question
        click={click}
        setTarget={setTarget}
        target={target}
        onClick={handleClick}
        question="Do you support local farmers ?"
        response="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt rem dolores error quibusdam. Sed quam reiciendis voluptates maxime libero natus adipisci omnis quas aspernatur nisi."
      />
      <Question
        click={click}
        setTarget={setTarget}
        target={target}
        onClick={handleClick}
        question="Do you use organic ingredients ?"
        response="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt rem dolores error quibusdam. Sed quam reiciendis voluptates maxime libero natus adipisci omnis quas aspernatur nisi."
      />
    </section>
  );
};

export default GeneralQuestions;
