import React from "react";
import TextContent from "./TextContent";
import style from "./Content.module.css";

const Content = () => {
  return (
    <div className={style.content}>
      <div className={style.botoes}>
        <button>History</button>
        <button>Vision</button>
        <button>Guide</button>
      </div>
      <TextContent
        title="History"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quia id aut est neque nulla ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quia id aut est neque nulla.ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quia id aut est neque nulla.."
      />
    </div>
  );
};

export default Content;
