import React from 'react';
import * as S from './Hero.styles';

import PatrickImage from "../../../assets/PatrickPicture.jpg";

const Hero = ({ windowSize }) => {
    return (
        <S.HeroContainer>
            {windowSize.width >= 650 ?
                <S.HeaderContainer>
                    <S.ImageContainer>
                        <S.Image src={PatrickImage} alt="Patrick Brown" />
                    </S.ImageContainer>
                    <S.HeaderText>
                        <h1>Patrick Brown</h1>
                        <div>
                            <span>
                                <a href="#aboutme">About Me</a>
                                <a href="#experience">Experience</a>
                            </span>
                            <span>
                                <a href="#experience">Resume</a>
                                <a href="#contact">Contact</a>
                            </span>
                        </div>
                    </S.HeaderText>
                </S.HeaderContainer>
            :
                <S.HeaderText mobile={windowSize.width <= 650}>
                    <h1>Patrick Brown</h1>
                    <S.ImageContainer mobile={windowSize.width <= 650}>
                        <S.Image src={PatrickImage} alt="Patrick Brown" />
                    </S.ImageContainer>
                    <div>
                        <span>
                            <a href="#aboutme">About Me</a>
                            <a href="#experience">Experience</a>
                        </span>
                        <span>
                            <a href="#experience">Resume</a>
                            <a href="#contact">Contact</a>
                        </span>
                    </div>
                </S.HeaderText>
            }
            
        </S.HeroContainer>
    );
}

export default Hero;