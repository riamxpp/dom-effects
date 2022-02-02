import React from "react";

import Title from "./Title";
import Content from "./Content";
import ImageContent from "./ImageContent";
import style from "./ContentGuide.module.css";

const ContentGuide = () => {
  return (
    <section className={style.contentGuide}>
      <Title />
      <div className={style.content}>
        <ImageContent />
        <Content />
      </div>
    </section>
  );
};

export default ContentGuide;
