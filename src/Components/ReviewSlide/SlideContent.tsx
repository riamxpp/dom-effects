import React, { useEffect, useRef } from "react";

import ArticlePeople from "./ArticlePeople";
import style from "./SlideContent.module.css";
import susan from "../../Assents/Img/ImgSlideReviews/person-1.jpg";
import maria from "../../Assents/Img/ImgSlideReviews/person-2.jpg";
import jhon from "../../Assents/Img/ImgSlideReviews/person-3.jpg";
import peter from "../../Assents/Img/ImgSlideReviews/person-4.jpg";
import { SlideContentInterface } from "../../Interfaces/ReviewSlideInterfaces/SlideContentInterface";

let controler: boolean = false;
const SlideContent = (props: SlideContentInterface) => {
  const margin = 32 * 2;

  const widthRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (widthRef.current?.offsetWidth) {
      if (!controler) {
        props.setFixedSize(widthRef.current?.offsetWidth + margin);
        controler = true;
      }
    }
  }, [props, margin]);

  function changeValue() {
    props.setWidthSlide(0);
    props.setActualSlide(0);
    if (widthRef.current?.offsetWidth)
      props.setFixedSize(widthRef.current?.offsetWidth + margin);
  }

  window.addEventListener("resize", changeValue);

  return (
    <div
      ref={props.wrapperRef}
      className={style.wrapper}
      style={{
        transform: `translateX(-${
          props.actualSlide === 0 ? 0 : props.widthSlide
        }px)`,
      }}
    >
      <ArticlePeople
        widthRef={widthRef}
        srcImagem={susan}
        altImagem="Person 1"
        cargo="The boss"
        texto="Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan
        kale chips fingerstache cloud bread mustache twee messenger bag."
        nome="Susan andersen"
      />
      <ArticlePeople
        widthRef={widthRef}
        srcImagem={maria}
        altImagem="Person 2"
        cargo="Office Manager"
        texto="Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan
        kale chips fingerstache cloud bread mustache twee messenger bag."
        nome="Maria Ferguson"
      />
      <ArticlePeople
        widthRef={widthRef}
        srcImagem={jhon}
        altImagem="Person 3"
        cargo="Regular Guy"
        texto="Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan
        kale chips fingerstache cloud bread mustache twee messenger bag."
        nome="Jhon Doe"
      />
      <ArticlePeople
        widthRef={widthRef}
        srcImagem={peter}
        altImagem="Person 4"
        cargo="Product Designer"
        texto="Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan
        kale chips fingerstache cloud bread mustache twee messenger bag."
        nome="Peter Smith"
      />
    </div>
  );
};

export default SlideContent;
