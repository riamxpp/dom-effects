import React, { useRef, useState } from "react";

import style from "./Video.module.css";
import videoGalaxia from "../../Assents/videos/VideoPlayer/Galaxy-Motion.mp4";

const Video = () => {
  const [activeBackgroundPlay, setActiveBackgroundPlay] = useState(false);
  const [activeBackgroundStop, setActiveBackgroundStop] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function startVideo(): void {
    videoRef.current?.play();
    setActiveBackgroundPlay(false);
    setActiveBackgroundStop(true);
  }

  function pauseVideo(): void {
    videoRef.current?.pause();
    setActiveBackgroundPlay(true);
    setActiveBackgroundStop(false);
  }

  return (
    <section className={style.containerVideo}>
      <aside className={style.video}>
        <video ref={videoRef} src={videoGalaxia} typeof="video/mp4"></video>
        <div className={style.buttonVideo}>
          <button
            className={activeBackgroundPlay ? style.active : ""}
            onClick={startVideo}
          >
            Play
          </button>
          <button
            className={activeBackgroundStop ? style.active : ""}
            onClick={pauseVideo}
          >
            Pause
          </button>
        </div>
      </aside>
    </section>
  );
};

export default Video;
