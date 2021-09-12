import React from 'react';
import * as S from './AboutMe.styles';
import Interest from './Interest';
import COLORS from '../../../constants/colors';

const AboutMe = () => {
    return (
        <S.AboutMeContainer>
            About Me
            <Interest color={COLORS.red} inverted={false}/>
            <Interest color={COLORS.yellow} inverted={true}/>
            <Interest color={COLORS.blue} inverted={false}/>
            <Interest color={COLORS.green} inverted={true}/>
        </S.AboutMeContainer>
    );
}

export default AboutMe;