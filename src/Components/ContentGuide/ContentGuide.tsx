import React, { useState } from "react";

import Title from "./Title";
import Content from "./Content";
import ImageContent from "./ImageContent";
import style from "./ContentGuide.module.css";

const ContentGuide = () => {
  const [contentActive, setContentActive] = useState<string>("History");

  function guideChoice(event: React.MouseEvent<HTMLButtonElement>) {
    setContentActive(event.currentTarget.innerText);
  }

  return (
    <section className={style.contentGuide}>
      <Title />
      <div className={style.content}>
        <ImageContent contentActive={contentActive} />
        <Content contentActive={contentActive} guideChoice={guideChoice} />
      </div>
    </section>
  );
};

export default ContentGuide;
