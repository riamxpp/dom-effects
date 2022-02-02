import React from "react";

import style from "./ImageContent.module.css";
import porDoSol from "../../Assents/Img/por-do-sol.jpg";

const ImageContent = () => {
  return (
    <div className={style.imageContent}>
      <img src={porDoSol} alt="por do sol" />
    </div>
  );
};

export default ImageContent;
