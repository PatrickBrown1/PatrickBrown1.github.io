import styled from 'styled-components';
import COLORS from '../../../constants/colors';
import { Link as _Link } from "react-scroll";

export const HeroContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0;
    width: 100vw;
    height: 100vh; // needs to change
    
    box-sizing: border-box;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

// .hero-panel {
//   display: flex;
//   flex-direction: row;
//   justify-items: space-around;
//   align-items: center;
//   width: 75vw;
//   margin-top: -20vh;
// }
export const ImageContainer = styled.div`
    // min-width: 34%;
    height: ${props => props.mobile ? '200px' : '300px'};
    padding: 25px;
`;
export const Image = styled.img`
    height: 100%;
    border-radius: 50%;
    box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.5);
`;

export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    padding: ${props => props.mobile ? '0' : '25px'};
    
    width: ${props => props.mobile ? '100vw' : '66%'};

    color: ${COLORS.black};

    h1 {
        font-size: ${props => props.mobile ? '3em' : '4.2em'};
        font-weight: 400;
        font-family: Istok Web;
        margin: ${props => props.mobile ? '15px 0' : '0'};;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: ${props => props.mobile ? 'center' : 'flex-start'};
        flex-wrap: wrap;

        font-size: 1.5em;
        font-weight: 300;
        font-family: Average Sans;

        margin: ${props => props.mobile ? '15px 10px' : '0'};
    }
`;
export const Link = styled(_Link)`
    color: ${COLORS.black};
    text-decoration: none;
    padding: 0px 5px;
    white-space: nowrap;
    cursor: pointer;
    :hover {
        color: #44445F;
    }
`;