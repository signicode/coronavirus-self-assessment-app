import styled from "styled-components";

type SectionProps = any; // TODO: make it more specific

const Section = styled.section<SectionProps>`
    padding: 5vh 0;
    h2{
        margin-top: 0;
        font-size: 3em;
    }
    p{
        font-size: 1.2em;
    }
`;

export default Section;
