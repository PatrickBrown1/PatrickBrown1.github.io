import React from 'react';
import * as S from './Interest.styles.jsx';
import COLORS from '../../../constants/colors';


const Border = ({inverted = false, color}) => {
    return (
        <>
            <S.TopBorder color={color} />
            <S.VerticalBorder color={color} />
            <S.BottomBorder color={color} />
        </>
    );
}

const Interest = ({ inverted = false, color = COLORS.green}) => {
    return (
        <S.InterestContainer inverted={inverted}>
            <Border inverted={inverted} color={color}/>

            <S.MainContent color={color}> 
                <h1>Coding</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante mauris, 
                    maximus quis luctus vel, facilisis sit amet lacus. Morbi in sagittis ligula. 
                    Mauris eu luctus justo. Donec consequat augue at nunc pharetra, vitae vulputate nisi
                    fermentum. Phasellus porttitor felis maximus, dignissim orci feugiat, gravida orci.
                    Fusce tortor magna, tincidunt in dui id, pellentesque mattis nunc. Etiam massa magna,
                    luctus eu lectus blandit, blandit interdum enim. In mi tortor, dignissim ac pellentesque
                    sed, viverra quis nisi. Morbi libero ligula, iaculis sed lectus eget, posuere rhoncus
                    dolor. Cras sit amet elementum elit, cursus venenatis nisl.
                </p>
            </S.MainContent>
            <S.ImageContainer> 
                Something else here
            </S.ImageContainer>
        </S.InterestContainer>
    );
}

export default Interest;