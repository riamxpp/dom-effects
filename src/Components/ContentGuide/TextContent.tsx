import React from "react";
import { TextContentInterface } from "../../Interfaces/TextContentInterface";
import style from "./TextContent.module.css";

const TextContent = (props: TextContentInterface) => {
  return (
    <div className={style.textContent}>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default TextContent;
