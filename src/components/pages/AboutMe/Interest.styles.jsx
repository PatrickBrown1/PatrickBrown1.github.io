import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const InterestContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props => props.inverted ? `row-reverse` : `row`};

    margin: 4px;
    max-width: 900px;
    min-height: 300px;

    background-color: ${COLORS.white};
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

const BorderSegment = styled.div`
    content: '';
    display: block;
    position: absolute;
    left: ${props => props.inverted ? 
        `right: -4px;`
    :
        `left: -4px;`
    }

    border: 2px solid;
    border-color: ${props => props.color};
    border-radius: 2px;
`;

export const VerticalBorder = styled(BorderSegment)`
    top: -4px;
    height: calc(100% + 4px);
`;

export const TopBorder = styled(BorderSegment)`
    top: -4px;
    width: 40%;
`;

export const BottomBorder = styled(BorderSegment)`
    bottom: -4px;
    width: 40%;
`;