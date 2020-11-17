import React, { useState } from "react";
import "./LinkView.css";
import LinkedInImage from "./linked-in-image.png";
import GithubImage from "./github-image.png";
import EmailImage from "./email-image.png";
import {useSpring, animated} from 'react-spring'

function LinkItem(props){
    const [showInfo, setShowInfo] = useState(false);
    const rightPadding = showInfo ? 150 : 0;
    const width = showInfo ? '10em' : '5em';
    const sty = useSpring({paddingRight: rightPadding, maxWidth: width, minWidth: width, 
      from: {paddingRight: 0, maxWidth: width, minWidth: width}})
    return(
        <animated.div style={{overflow: 'hidden', ...sty}} className="link-item"
          onMouseEnter={() => setShowInfo(true)} 
          onMouseLeave={() => setShowInfo(false)}
        >
            <img className="link-image" src={props.src} alt="Patrick Brown" />
            {showInfo && <h1 className='link-text'>{props.name}</h1>}
        </animated.div>
    );
}

function LinkView() {
  return (
      <div className="link-view">
        <LinkItem name="LinkedIn" link="linkedin.com" src={LinkedInImage}/>
        <LinkItem name="GitHub" link="linkedin.com" src={GithubImage}/>
        <LinkItem name="Email" link="linkedin.com" src={EmailImage}/>
      </div>
  );
}

export default LinkView;
