import React, { useState } from "react";
import "./LinkView.css";
import LinkedInImage from "./linked-in-image.png";
import GithubImage from "./github-image.png";
import EmailImage from "./email-image.png";

function LinkItem(props){
    const [showInfo, setShowInfo] = useState(false);
    return(
        <div className="link-item"
          onMouseEnter={() => setShowInfo(true)} 
          onMouseLeave={() => setShowInfo(false)}
        >
            <img className="link-image" src={props.src} alt="Patrick Brown" />
        </div>
    );
}

function LinkView() {
  return (
      <div className="link-view">
        <LinkItem name="linkedin" link="linkedin.com" src={LinkedInImage}/>
        <LinkItem name="linkedin" link="linkedin.com" src={GithubImage}/>
        <LinkItem name="linkedin" link="linkedin.com" src={EmailImage}/>
      </div>
  );
}

export default LinkView;
