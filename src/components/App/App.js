import React from "react";
import Typist from 'react-typist';

import "./App.css";
import LinkView from "../LinkView"

import PatrickImage from "../../assets/PatrickPicture.jpg";

const MainHeader = () => {
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
const SubHeader = () => {
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
const App = () => {
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
