import React from "react";
import TextContent from "./TextContent";
import style from "./Content.module.css";
import { ContentInterface } from "../../Interfaces/CotentGuideInterfaces/ContentInterface";

const Content = (props: ContentInterface) => {
  return (
    <div className={style.content}>
      <div className={style.botoes}>
        <button
          className={props.contentActive === "History" ? style.active : ""}
          onClick={props.guideChoice}
        >
          History
        </button>
        <button
          className={props.contentActive === "Vision" ? style.active : ""}
          onClick={props.guideChoice}
        >
          Vision
        </button>
        <button
          className={props.contentActive === "Guide" ? style.active : ""}
          onClick={props.guideChoice}
        >
          Guide
        </button>
      </div>
      {props.contentActive === "History" ? (
        <TextContent
          title="History"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quia id aut est neque nulla ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quia id aut est neque nulla.ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quia id aut est neque nulla.."
        />
      ) : (
        ""
      )}
      {props.contentActive === "Vision" ? (
        <TextContent
          title="Vision"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quia id aut est neque nulla. Exercitationem dolor quia id aut est neque nulla.ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quia id aut est neque nulla.."
        />
      ) : (
        ""
      )}
      {props.contentActive === "Guide" ? (
        <TextContent
          title="Guide"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quia id aut est neque nulla ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quia id aut est neque nulla."
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Content;
