import styled from "styled-components";

type ButtonProps = any; // TODO: make it more specific

const Button = styled.button<ButtonProps>`
    border: none;
    display: ${props => (props.block ? "block" : "inline-block")};
    width: ${props => (props.block ? "100%" : "auto")};
    background: ${props =>
        props.light ? "white" : props.theme.colors.primary};
    padding: ${props => props.big ? '.8em 4em' : '10px'};
    cursor: pointer;
    color: ${props => (props.light ? props.theme.colors.primary : "white")};
    text-decoration: none;
    text-align: center;
    font-size: ${props => props.big ? '1.2em' : 'inherit'};
    border-radius: 2em;
    box-sizing:border-box;
`;

export default Button;
