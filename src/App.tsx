import React from "react";
import "./App.css";
import ContentGuide from "./Components/ContentGuide/ContentGuide";
import GeneralQuestions from "./Components/GeneralQuestions/GeneralQuestions";
import Slide from "./Components/ReviewSlide/Slide";
import Video from "./Components/VideoPlayer/Video";

function App() {
  return (
    <div className="App">
      <GeneralQuestions />
      <ContentGuide />
      <Slide />
      <Video />
    </div>
  );
}

export default App;
