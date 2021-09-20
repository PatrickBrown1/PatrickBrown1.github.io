import styled from 'styled-components';
import COLORS from '../../../constants/colors';
import { Popup as Popup_ } from 'semantic-ui-react'

export const ExperienceContainer = styled.div`
    position: relative;
    // display: flex;
    // flex-direction: ${props => props.inverted ? `row-reverse` : `row`};

    margin: 4px;
    max-width: 900px;
    min-height: 300px;
    margin: 50px 0px;
    background-color: ${COLORS.white};

    h1 {
        font-family: Average Sans;
        margin: 0 0 10px 0;
    }

    h2 {
        font-family: Average Sans;
        margin: 0 0 10px 0;
    }

    h3 {
        font-family: Average Sans;
        margin: 0 0 10px 0;
    }

     p {
        font-family: Mako;
        margin: 0;
    }
`;

export const IconContainer = styled.div`
    margin-top: 24px;
`;

export const IconWrapper = styled.span`
    font-size: 40px;
    margin: 0px 15px 0px 15px;
    cursor: pointer;
`;

export const Popup = styled(Popup_)`
    padding: 5px;
    text-align: center;
    font-family: Mako;
    font-size: 16px;
    color: ${COLORS.black};
    transition: all 0.5s;

`;