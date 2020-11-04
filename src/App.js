import React from "react";
import WorkInProgressPage from "./WorkInProgressPage.js";
import "./App.css";
import PatrickImage from "./PatrickPicture.jpg";
function App() {
  return (
    <div className="App">
      <div className="hero-panel">
        <div className="hero-item hero-left">
          <img className="image" src={PatrickImage} />
        </div>
        <div className="hero-item hero-right">
          <div className="text-box">
            <h1 className="mainHeader">Patrick Brown</h1>
            <h2 className="subHeader">Student | Programmer | Baker</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
