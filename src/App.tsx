import React from "react";
import "./App.css";
import ContentGuide from "./Components/ContentGuide/ContentGuide";
import GeneralQuestions from "./Components/GeneralQuestions/GeneralQuestions";

function App() {
  return (
    <div className="App">
      <GeneralQuestions />
      <ContentGuide />
    </div>
  );
}

export default App;
