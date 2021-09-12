import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const AboutMeContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100vw;
    min-height: 100vh; // needs to change
    padding: 20px 0px;
    box-sizing: border-box;
    border: 2px solid ${COLORS.red};

    h1 {
        font-family: Istok Web;
        margin: 30px 0px;
    }
`;
