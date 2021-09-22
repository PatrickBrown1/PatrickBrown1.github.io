import styled from 'styled-components';
import COLORS from '../../../constants/colors';
import { Popup as Popup_ } from 'semantic-ui-react'
import { FiLink } from 'react-icons/fi';

export const ExperienceContainer = styled.div`
    position: relative;

    max-width: 900px;
    min-height: 300px;
    margin: 40px;
    background-color: ${COLORS.white};

    h1 {
        font-family: Istok Web;
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

    h4 {
        font-family: Mako;
        font-weight: normal;
        text-decoration: underline;
    }

    p {
        font-family: Mako;
        margin: 0 0 20px 0;
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

export const LinkIcon = styled(FiLink)`
    color: #14bdf6;
    font-size: 28px;
    margin-left: 5px;
    cursor: pointer;
    :hover {
        color: #08a5da;
    }
`;