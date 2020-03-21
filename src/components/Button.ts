import styled from "styled-components";

type ButtonProps = any; // TODO: make it more specific

const Button = styled.button<ButtonProps>`
    border: none;
    display: ${props => (props.block ? "block" : "inline-block")};
    width: 100%;
    background: ${props =>
        props.light ? "white" : props.theme.colors.primary};
    padding: 10px;
    cursor: pointer;
    color: ${props => (props.light ? props.theme.colors.primary : "white")};
    text-decoration: none;
    text-align: center;
    border-radius: 2em;
`;

export default Button;
