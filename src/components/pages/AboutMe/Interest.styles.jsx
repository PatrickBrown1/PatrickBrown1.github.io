import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const InterestContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props => props.inverted ? `row-reverse` : `row`};

    margin: 15px;
    max-width: 900px;
    min-height: 300px;

    background-color: ${props => props.inverted ? COLORS.red : COLORS.green};
`;

export const MainContent = styled.div`
    position: relative;
    display: block;
    padding: 30px;

    width: 60%;

    h1 {
        margin: 0 0 10px 0;
    }

    p {
        margin: 0;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    
    width: 40%;

`;
