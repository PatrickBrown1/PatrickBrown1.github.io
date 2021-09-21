import React from 'react';

import * as S from './ExperiencePane.styles.jsx';
import COLORS from '../../../constants/colors';

// icon imports
import { 
    SiReact, 
    SiRails, 
    SiRuby, 
    SiNodeDotJs, 
    SiRedux, 
    SiStyledComponents,
    SiMongodb,
    SiGatsby,
    SiTypescript,
    SiJest
} from 'react-icons/si';

import {
    FaLess
} from 'react-icons/fa';

// Icon map, allows parent component to pass in the language as a string
// and have it render as an icon
const iconMap = {
    "React": <SiReact />,
    "Rails": <SiRails />,
    "Ruby": <SiRuby />,
    "Node.js": <SiNodeDotJs />,
    "Redux": <SiRedux />,
    "Styled Components": <SiStyledComponents />,
    "MongoDB": <SiMongodb />,
    "Gatsby": <SiGatsby />,
    "Less.js": <FaLess />,
    "TypeScript": <SiTypescript />,
    "Jest": <SiJest />
}
const TechSection = ({ tech }) => {
    return (
        <S.IconContainer>
            {tech.map(language => (  
                <S.Popup 
                    content={language} 
                    trigger={
                        <S.IconWrapper>
                            {iconMap[language]}
                        </S.IconWrapper>
                    } 
                    position="bottom center"
                />
            ))}
        </S.IconContainer>
    );
}

const ExperiencePane = ({
    companyName,
    jobTitle, 
    secondJobTitle,
    subtitle,
    secondSubtitle, 
    body, 
    secondBody,
    tech,
    link
}) => {
    return (
        <S.ExperienceContainer>
            <h1>{companyName} <a href={link} target='blank_'><S.LinkIcon /></a></h1>
            { jobTitle && <>
                <h2>{jobTitle}</h2>
                <h3><i>{subtitle}</i></h3>
                {body}
            </>}
            { secondJobTitle && <>
                <h2>{secondJobTitle}</h2>
                <h3><i>{secondSubtitle}</i></h3>
                {secondBody}
            </>}
            <TechSection tech={tech}/>
        </S.ExperienceContainer>
    );
}

export default ExperiencePane;