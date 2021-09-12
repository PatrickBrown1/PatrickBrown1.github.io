import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const HeroContainer = styled.div`
    position: relative;
    display: block;
    margin: 0;
    width: 100vw;
    height: 100vh; // needs to change
    
    box-sizing: border-box;
    border: 2px solid ${COLORS.green};
`;
