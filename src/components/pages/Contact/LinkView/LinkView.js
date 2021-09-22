import React, { useState } from "react";
import "./LinkView.css";
import LinkedInImage from "../../../../assets/linked-in-image.png";
import GithubImage from "../../../../assets/github-image.png";
import EmailImage from "../../../../assets/email-image.png";
import {useSpring, animated} from 'react-spring'

function LinkItem(props){
    const [showInfo, setShowInfo] = useState(false);
    const rightPadding = showInfo ? 40 : 0;
    const width = showInfo ? props.maxWidth : '4em';
    const sty = useSpring({paddingRight: rightPadding, maxWidth: width, minWidth: width, 
      from: {paddingRight: 0, maxWidth: width, minWidth: width}})

    return(
        <animated.div style={{overflow: 'hidden', ...sty}} className="link-item"
          onMouseEnter={() => setShowInfo(true)} 
          onMouseLeave={() => setShowInfo(false)}
        >
            <a className="slider-link" href={props.link}>
              <img className="link-image" src={props.src} alt="Patrick Brown" />
              {showInfo && <h1 className={props.textClass}>{props.name}</h1>}
            </a>
        </animated.div>
    );
}

function LinkView() {
  return (
      <div className="link-view">
        <LinkItem name="Patrick Brown" link="https://www.linkedin.com/in/p-brown" src={LinkedInImage} maxWidth='15em' textClass="big-text"/>
        <LinkItem name="PatrickBrown1" link="https://github.com/PatrickBrown1" src={GithubImage} maxWidth='15em' textClass="big-text"/>
        <LinkItem name="PatrickBrown1312@gmail.com" link="mailto:patrickbrown1312@gmail.com" src={EmailImage} maxWidth='20em' textClass="small-text"/>
      </div>
  );
}

export default LinkView;
