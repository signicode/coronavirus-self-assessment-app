import React from "react";
import styled from "styled-components";
import Section from "components/Section";
import Container from "components/Container";

const AboutSection = styled<any>(Section)`
    background: ${props => props.light ? 'white' : 'none'};
    color: ${props => props.light ? props.theme.colors.primary : 'white'};
    p{
        font-size: 1.2em;
    }
`;
const AboutContent = styled.div`
    display: flex;
    justify-content: space-between;
    
    .contact-us{
        text-align: right;
        margin-left: 10vw;
        @media(max-width: 1000px){
            margin-top: 2em;
        }
    }
    @media(max-width: 1000px){
        display: block;
    }
`;
type AboutProps = {
    light?: boolean
}
const About = (props: AboutProps): JSX.Element => (
    <AboutSection light={props.light}>
        <Container>
            <AboutContent>
                <div>
                    <h2>O nas</h2>
                    <p>
                        Podziel się naszą aplikacja z innymi, tak żeby każdy mógł czuć się bezpieczniej i wiedział co ma robić :)
                    </p>
                </div>
                <div className={"contact-us"}>
                    <h2>Kontakt</h2>
                    <p>
                        Tel. 00 0000 0000 <br/>
                        Mail: mail@mail.com
                    </p>
                </div>
            </AboutContent>
        </Container>
    </AboutSection>
);

export default About
