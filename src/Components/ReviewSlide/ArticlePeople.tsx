import React from "react";
import { ArticlePeopleInterface } from "../../Interfaces/ReviewSlideInterfaces/ArticlePeopleInterface";
import style from "./ArticlePeople.module.css";

const ArticlePeople = (props: ArticlePeopleInterface) => {
  return (
    <article ref={props.widthRef} className={style.content}>
      <img src={props.srcImagem} alt={props.altImagem} />
      <h3>{props.nome}</h3>
      <span>{props.cargo}</span>
      <p>{props.texto}</p>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="3rem"
        width="3rem"
        color="#ff7b00"
      >
        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
      </svg>
    </article>
  );
};

export default ArticlePeople;
