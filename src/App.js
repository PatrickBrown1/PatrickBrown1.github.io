import React from "react";
import WorkInProgressPage from "./WorkInProgressPage.js";
import "./App.css";
import Typist from 'react-typist';
import PatrickImage from "./PatrickPicture.jpg";
import LinkView from "./LinkView.js"

function MainHeader(){
  return(
    <Typist
      cursor={{
        show: false,
        blink: true,
        element: '|',
        hideWhenDone: true,
        hideWhenDoneDelay: 0,
      }}
      avgTypingDelay={100}
    >
      <Typist.Delay ms={500} />
      <h1 className="mainHeader">Patrick Brown</h1>
    </Typist>
  );
}
function SubHeader(){
  return(
    <Typist 
      cursor={{
        show: false,
        blink: true,
        element: '|',
        hideWhenDone: true,
        hideWhenDoneDelay: 0,
      }}
      avgTypingDelay={50}
    >
      <Typist.Delay ms={2500} />
      <h2 className="subHeader">Student, Programmer, Baker</h2>
    </Typist>
  );
  
}
function App() {
  return (
    <div className="App">
      <div className="hero-view">
        <div className="hero-panel">
          <div className="image-container">
            <img className="image" src={PatrickImage} alt="Patrick Brown" />
          </div>
          <div className="text-container">
            <MainHeader />
            <SubHeader />
          </div>
        </div>
      </div>
      <LinkView />
    </div>
  );
}

export default App;
