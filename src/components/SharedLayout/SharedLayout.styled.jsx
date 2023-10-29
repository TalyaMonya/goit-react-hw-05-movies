import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyleHeader = styled.header`
    padding: 20px 30px;
    text-align: center;
    box-shadow: 0px 4px 4px steelblue;
    background-color: #3f3f3f;
`;

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    font-size: 24px;
    font-weight: 500px;
    text-decoration: none;
    transition: color 200ms ease-in-out;
    color: #E0FFFF;

    &:not(:last-child) {
        margin-right: 40px;
    }

    &:active,
    &:hover,
    &:focus {
        color: #1c85ff;
        text-decoration: underline;
    }
`;

