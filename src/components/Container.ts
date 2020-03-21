import styled from "styled-components";

const Container = styled.div<{}>`
    width: calc(100% - 2em);
    height: 100%;
    margin: auto;
    @media(min-width: 1000px){
        width: 80%;
    }
`;

export default Container;
