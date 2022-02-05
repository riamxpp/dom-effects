import React, { useRef, useState } from "react";
import Navigation from "./Navigation";
import PrevNext from "./PrevNext";
import style from "./Slide.module.css";
import SlideContent from "./SlideContent";

const Slide = () => {
  const [actualSlide, setActualSlide] = useState<number>(0);
  const [widthSlide, setWidthSlide] = useState<number>(0);
  const [fixedSize, setFixedSize] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);

  function prevSlide() {
    if (actualSlide === 0) {
      setActualSlide(0);
    } else {
      setActualSlide((prev) => (prev -= 1));
      setWidthSlide((prev) => prev - fixedSize);
    }
  }

  function nextSlide() {
    if (actualSlide === 3) {
      setActualSlide(3);
    } else {
      setActualSlide((next) => (next += 1));
      setWidthSlide((next) => (next += fixedSize));
    }
  }

  return (
    <section className={style.slideContainer}>
      <h1 className={style.title}>
        <span>/</span> Reviews
      </h1>
      <div className={style.slideContent}>
        <div className={style.slideShow}>
          <SlideContent
            wrapperRef={wrapperRef}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            setWidthSlide={setWidthSlide}
            widthSlide={widthSlide}
            actualSlide={actualSlide}
            fixedSize={fixedSize}
            setFixedSize={setFixedSize}
            setActualSlide={setActualSlide}
          />
        </div>
        <PrevNext prevSlide={prevSlide} nextSlide={nextSlide} />
      </div>
      <Navigation actualSlide={actualSlide} />
    </section>
  );
};

export default Slide;
