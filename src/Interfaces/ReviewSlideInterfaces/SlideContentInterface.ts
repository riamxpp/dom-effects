import React from "react";

export interface SlideContentInterface {
  actualSlide: number;
  setActualSlide: React.Dispatch<React.SetStateAction<number>>;
  widthSlide: number;
  setWidthSlide: React.Dispatch<React.SetStateAction<number>>;
  fixedSize: number;
  setFixedSize: React.Dispatch<React.SetStateAction<number>>;
  prevSlide: () => void;
  nextSlide: () => void;
  wrapperRef: React.RefObject<HTMLDivElement>;
}
