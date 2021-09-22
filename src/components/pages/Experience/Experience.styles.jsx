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

    h1 {
        font-family: Istok Web;
        margin: 70px 0px 10px 0;
    }
`;

export const Divider = styled.div`
    width: 100%;
    max-width: 1100px;
    min-height: 2px;
    background-color: ${props => props.color};
`;