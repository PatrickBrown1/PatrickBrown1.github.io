import React from "react";
import WorkInProgressPage from "./WorkInProgressPage.js";
import "./App.css";
import PatrickImage from "./PatrickPicture.jpg";
function App() {
  return (
    <div className="App">
      <div className="hero-view">
        <div className="hero-panel">
          <div className="image-container">
            <img className="image" src={PatrickImage} />
          </div>
          <div className="text-container">
            <h1 className="mainHeader">Patrick Brown</h1>
            <h2 className="subHeader">Student | Programmer | Baker</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
