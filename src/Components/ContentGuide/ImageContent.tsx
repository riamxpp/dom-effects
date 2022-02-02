import React from "react";

import style from "./ImageContent.module.css";
import porDoSol from "../../Assents/Img/por-do-sol.jpg";
import lago from "../../Assents/Img/lago.jpg";
import estradaComNevoa from "../../Assents/Img/estrada-com-nevoa.jpg";
import { ImageContentInterface } from "../../Interfaces/CotentGuideInterfaces/ImageContentInterface";

const ImageContent = (props: ImageContentInterface) => {
  return (
    <div className={style.imageContent}>
      {props.contentActive === "History" ? (
        <img src={porDoSol} alt="por do sol" />
      ) : null}
      {props.contentActive === "Vision" ? <img src={lago} alt="lago" /> : null}
      {props.contentActive === "Guide" ? (
        <img src={estradaComNevoa} alt="Estrada com nevoa" />
      ) : null}
    </div>
  );
};

export default ImageContent;
