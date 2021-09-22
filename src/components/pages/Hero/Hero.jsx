import React from 'react';
import * as S from './Hero.styles';

import PatrickImage from "../../../assets/PatrickPicture3.png";

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
                                <S.Link
                                    activeClass="active"
                                    to="aboutme"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    About Me
                                </S.Link>
                                <S.Link
                                    activeClass="active"
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Experience
                                </S.Link>
                            </span>
                            <span>
                                
                                <S.ExternalLink href="https://docs.google.com/document/d/1Zp8EawhbhsOACtGIp4kMzof2Tf7TkZqAimDv45DLMzw/edit?usp=sharing"
                                    target='blank_'>
                                    Resume
                                </S.ExternalLink>
                                <S.Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Contact
                                </S.Link>
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
                            <S.Link
                                activeClass="active"
                                to="aboutme"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                About Me
                            </S.Link>
                            <S.Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Experience
                            </S.Link>
                        </span>
                        <span>
                            <S.Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Resume
                            </S.Link>
                            <S.Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Contact
                            </S.Link>
                        </span>
                    </div>
                </S.HeaderText>
            }
            
        </S.HeroContainer>
    );
}

export default Hero;