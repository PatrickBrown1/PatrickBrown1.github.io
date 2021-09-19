import React from 'react';
import * as S from './ExperiencePane.styles.jsx';
import COLORS from '../../../constants/colors';
import { SiReact, SiRails, SiRuby, SiNodeDotJs, SiRedux } from 'react-icons/si';
const iconMap = {
    "ReactJS": <SiReact />,
    "Rails": <SiRails />,
    "Ruby": <SiRuby />,
    "Node": <SiNodeDotJs />,
    "Redux": <SiRedux />,


}
const TechSection = ({ tech }) => {
    return (
        <S.IconContainer>
            {tech.map(language => (    
                <S.IconWrapper>
                    {iconMap[language]}
                </S.IconWrapper>
            ))}
        </S.IconContainer>
    );
}
// const Border = ({inverted = false, color}) => {
//     return (
//         <>
//             <S.TopBorder color={color} />
//             <S.VerticalBorder color={color} />
//             <S.BottomBorder color={color} />
//         </>
//     );
// }
 // <S.InterestContainer inverted={inverted}>
//     {/* <Border inverted={inverted} color={color}/> */}
//     <S.MainContent color={color}> 
//         <h2>{title}</h2>
//         <p>{content}</p>
//     </S.MainContent>
//     <S.ImageContainer> 
//         {image}
//     </S.ImageContainer>
// </S.InterestContainer>
const ExperiencePane = ({companyName, jobTitle, subtitle, body}) => {
    // { title, content, image, inverted = false, color = COLORS.green}
    return (
        <S.ExperienceContainer>
            <h1>{companyName}</h1>
            <h2>{jobTitle}</h2>
            <h3><i>{subtitle}</i></h3>
            <p>
                {body}
            </p>
            <TechSection tech={["ReactJS", "Ruby", "Node", "Redux", "Rails"]} />
        </S.ExperienceContainer>
    );
}

export default ExperiencePane;