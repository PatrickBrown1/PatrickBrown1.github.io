import React from 'react';
import * as S from './AboutMe.styles';
import Interest from './Interest';
import COLORS from '../../../constants/colors';
const AboutMe = ({windowSize}) => {
    return (
        <S.AboutMeContainer id="aboutme">
            <h1>A Little Bit About Me</h1>
             <Interest 
                color={COLORS.blue} 
                inverted={false}
                title="Software Development and Entrepreneurship"
                content=
                    "
                        I've been interested in technology and programming since I was a kid making games with MIT's Scratch!
                        Although my technical understanding has improved a bit since then, understanding the impacts of new technologies
                        (both positive and negative) has made me interested in business and entrepreneurship. Watching tech companies over
                        the past few years, I've come to understand how much a couple of brains and some code can change the world.
                        As my understanding of both business and programming have expanded, I've become more focused on the present and future of
                        Low Code and No Code development solutions, personalized education systems, social networking platforms and security.
                    "            
                image="👨‍💻"
                mobile={windowSize.width <= 650}
            />
            <Interest 
                color={COLORS.yellow} 
                inverted={true}
                title="Lifting"
                content=
                    "
                        My lifting journey started almost three years ago at this point, but I only started getting serious about my health
                        and fitness closer to two years ago. Although it took a bit of a dip during the pandemic, as the gyms open back up I'm going to be heading there
                        as often as I can (if I have time after school and other commitments). I'm not exactly sure what my goals are when 
                        it comes to the time I spend in the gym, but I've always been interested in powerlifting and weightlifting, and am joining
                        Triton Barbell to further pursue both of them!
                    "image="🦍 💪"
                mobile={windowSize.width <= 650}
            />
            <Interest 
                color={COLORS.red} 
                inverted={false}
                title="Baking"
                content=
                    "
                        Ever since I made my first set of cookies with my mom I was hooked! I've always been
                        fascinated by food, and whenever I go out to eat at a nice restaurant I'm left wondering
                        how the chefs were able to bake the food taste so good. Paired with my (probably unhealthy)
                        sweet tooth, I fell in love with baking and sharing whatever I make with others. Although
                        I've slowed down through the pandemic (because sharing what I bake is the only way I stop myself
                        from eating it all), I've built up a long list of recipe's I'm dying to try and share with my roommates!
                    "
                image="👨‍🍳 🍰"/*🎂🍰*/
                mobile={windowSize.width <= 650}
            />
            <Interest 
                color={COLORS.green} 
                inverted={true}
                title="Music"
                content=
                    "
                        Since I started lifting and walking so far between classes, I've begun to really enjoy music. It's super interesting to see
                        the different music people make based on their preferred genres, styles, and different sounds musicians can produce
                        and incorporate into their songs.
                    "   
                image="🎶 🎧"
                mobile={windowSize.width <= 650}
            />
        </S.AboutMeContainer>
    );
}

export default AboutMe;