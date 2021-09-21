import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const ExperienceContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;    
    
    margin: 0;
    width: 100vw;
    min-height: 100vh; // needs to change
    
    box-sizing: border-box;
    border: 2px solid ${COLORS.yellow};

    h1 {
        font-family: Istok Web;
        margin: 30px 0px;
    }
`;

export const Divider = styled.div`
    width: 100%;
    max-width: 1100px;
    min-height: 2px;
    background-color: ${props => props.color};
`;