import React from 'react';
import * as S from './AboutMe.styles';
import Interest from './Interest';

const AboutMe = () => {
    return (
        <S.AboutMeContainer>
            About Me
            <Interest inverted={false}/>
            <Interest inverted={true}/>
        </S.AboutMeContainer>
    );
}

export default AboutMe;