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

const Interest = ({ title, content, image, inverted = false, color = COLORS.green}) => {
    return (
        <S.InterestContainer inverted={inverted}>
            <Border inverted={inverted} color={color}/>
            <S.MainContent color={color}> 
                <h2>{title}</h2>
                <p>{content}</p>
            </S.MainContent>
            <S.ImageContainer> 
                {image}
            </S.ImageContainer>
        </S.InterestContainer>
    );
}

export default Interest;