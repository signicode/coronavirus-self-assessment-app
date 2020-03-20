import styled from "styled-components";

const Hero = styled.div`
    min-height: calc(100% - 20vh);
    background: ${props => props.theme.colors.primary};
    color: white;
    padding-top: 20vh;
    h1 {
        font-family: "Roboto", sans-serif;
    }
`;

export default Hero;
