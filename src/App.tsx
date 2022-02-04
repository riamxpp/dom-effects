import React from "react";
import "./App.css";
import ContentGuide from "./Components/ContentGuide/ContentGuide";
import GeneralQuestions from "./Components/GeneralQuestions/GeneralQuestions";
import Slide from "./Components/ReviewSlide/Slide";

function App() {
  return (
    <div className="App">
      <GeneralQuestions />
      <ContentGuide />
      <Slide />
    </div>
  );
}

export default App;
