import React from "react";
import "./App.css";
import GeneralQuestions from "./Components/GeneralQuestions/GeneralQuestions";
import ContentGuide from "./Components/ContentGuide/ContentGuide";
import Slide from "./Components/ReviewSlide/Slide";
import Video from "./Components/VideoPlayer/Video";
import MobileButton from "./Components/MobileButton/MobileButton";

function App() {
  return (
    <div className="App">
      <GeneralQuestions />
      <ContentGuide />
      <Slide />
      <Video />
      <MobileButton />
    </div>
  );
}

export default App;
