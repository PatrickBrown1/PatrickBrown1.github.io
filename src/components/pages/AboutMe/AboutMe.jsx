import React from 'react';
import * as S from './AboutMe.styles';
import Interest from './Interest';
import COLORS from '../../../constants/colors';
const AboutMe = ({windowSize}) => {
    return (
        <S.AboutMeContainer id="aboutme">
            <h1>A Little Bit About Me</h1>
            <Interest 
                color={COLORS.red} 
                inverted={false}
                title="Baking"
                content=
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante mauris, 
                    maximus quis luctus vel, facilisis sit amet lacus. Morbi in sagittis ligula. 
                    Mauris eu luctus justo. Donec consequat augue at nunc pharetra, vitae vulputate nisi
                    fermentum. Phasellus porttitor felis maximus, dignissim orci feugiat, gravida orci.
                    Fusce tortor magna, tincidunt in dui id, pellentesque mattis nunc. Etiam massa magna,
                    luctus eu lectus blandit, blandit interdum enim. In mi tortor, dignissim ac pellentesque
                    sed, viverra quis nisi. Morbi libero ligula, iaculis sed lectus eget, posuere rhoncus
                    dolor. Cras sit amet elementum elit, cursus venenatis nisl."   
                image="👨‍🍳 🍰"/*🎂🍰*/
                mobile={windowSize.width <= 650}
            />
            <Interest 
                color={COLORS.yellow} 
                inverted={true}
                title="Lifting"
                content=
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante mauris, 
                    maximus quis luctus vel, facilisis sit amet lacus. Morbi in sagittis ligula. 
                    Mauris eu luctus justo. Donec consequat augue at nunc pharetra, vitae vulputate nisi
                    fermentum. Phasellus porttitor felis maximus, dignissim orci feugiat, gravida orci.
                    Fusce tortor magna, tincidunt in dui id, pellentesque mattis nunc. Etiam massa magna,
                    luctus eu lectus blandit, blandit interdum enim. In mi tortor, dignissim ac pellentesque
                    sed, viverra quis nisi. Morbi libero ligula, iaculis sed lectus eget, posuere rhoncus
                    dolor. Cras sit amet elementum elit, cursus venenatis nisl."   
                image="🦍 💪"
                mobile={windowSize.width <= 650}
            />
            <Interest 
                color={COLORS.blue} 
                inverted={false}
                title="Coding"
                content=
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante mauris, 
                    maximus quis luctus vel, facilisis sit amet lacus. Morbi in sagittis ligula. 
                    Mauris eu luctus justo. Donec consequat augue at nunc pharetra, vitae vulputate nisi
                    fermentum. Phasellus porttitor felis maximus, dignissim orci feugiat, gravida orci.
                    Fusce tortor magna, tincidunt in dui id, pellentesque mattis nunc. Etiam massa magna,
                    luctus eu lectus blandit, blandit interdum enim. In mi tortor, dignissim ac pellentesque
                    sed, viverra quis nisi. Morbi libero ligula, iaculis sed lectus eget, posuere rhoncus
                    dolor. Cras sit amet elementum elit, cursus venenatis nisl."            
                image="👨‍💻"
                mobile={windowSize.width <= 650}
            />
            <Interest 
                color={COLORS.green} 
                inverted={true}
                title="Music"
                content=
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante mauris, 
                    maximus quis luctus vel, facilisis sit amet lacus. Morbi in sagittis ligula. 
                    Mauris eu luctus justo. Donec consequat augue at nunc pharetra, vitae vulputate nisi
                    fermentum. Phasellus porttitor felis maximus, dignissim orci feugiat, gravida orci.
                    Fusce tortor magna, tincidunt in dui id, pellentesque mattis nunc. Etiam massa magna,
                    luctus eu lectus blandit, blandit interdum enim. In mi tortor, dignissim ac pellentesque
                    sed, viverra quis nisi. Morbi libero ligula, iaculis sed lectus eget, posuere rhoncus
                    dolor. Cras sit amet elementum elit, cursus venenatis nisl."   
                image="🎶 🎧"
                mobile={windowSize.width <= 650}
            />
        </S.AboutMeContainer>
    );
}

export default AboutMe;