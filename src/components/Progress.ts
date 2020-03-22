import styled from "styled-components";

const Progress = styled.progress`
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: ${props => props.theme.colors.light};
    
    &::-webkit-progress-bar {
        border-radius: 5px;
        background: ${props => props.theme.colors.light};
    }
    &::-webkit-progress-value {
        border-radius: 5px;
        background: ${props => props.theme.colors.primary};
        transition: .2s all;
    }
    &::-moz-progress-bar {
        border-radius: 5px;
        background: ${props => props.theme.colors.light};
    }
`;

export default Progress;
