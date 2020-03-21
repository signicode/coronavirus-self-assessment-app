import styled from "styled-components";
type ContainerProps = any; // TODO: make it more specific

const Container = styled.div<ContainerProps>`
    width: ${props => (props.wide ? "calc(100% - 2em)" : "100%")};
    height: 100%;
    margin: auto;
    @media(min-width: 1000px){
        width: 80%;
    }
`;

export default Container;
