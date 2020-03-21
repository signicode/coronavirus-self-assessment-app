import React from "react";
import styled from "styled-components";
import Section from "components/Section";
import Container from "components/Container";

const HowItWorksSection = styled(Section)`
    background: 
        url("${require('../design/assets/blobs/group1.svg')}"),
        url("${require('../design/assets/blobs/group2.svg')}"),
        url("${require('../design/assets/blobs/group3.svg')}"),
        white;
    background-repeat: no-repeat;
    background-position: -20% center, 40% -20%, 110% 40%;
    color: #3F3D56;
    padding: 5vh 0;
    h2{
        color: ${props=> props.theme.colors.primary};
    }
    p{
        font-size: 1.5em;
        width: 50%;
    }
`;
const StepsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5vw;
    margin-top: 10vh;
    div{
        display: flex;
        h3{
            font-size: 3em;
            margin: 0 10px 0 0;
        }
        p{
            margin: 0;
            width: 100%;
        }
    }
`;
const Partners = styled.div`
    margin-top: 20vh;
    h3{
        font-size: 2em;
        font-weight: normal;
        margin: 1em 0;
        color: ${props => props.theme.colors.primary};
    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        img{
            height: 75px;
        }
    }
`;
const partners: string[] = [
    'mc',
    'govtech',
    'hct4g',
    'aws'
];
const HowItWorks = (): JSX.Element => (
    <HowItWorksSection>
        <Container>
            <h2>Jak działa <br/>aplikacja?</h2>
            <p>
                Nasza aplikacja pomoże Ci szybko zdiagnozować Twoje objawy przeprowadzi Cię przez wszystkie kroki choroby.
            </p>
            <StepsGrid>
                <div>
                    <h3>1.</h3>
                    <p>Odpowiedz na 6 pytań. Kilka słów co to za pytania jakiś opis.Kilka słów co to za pytania jakiś opis.Kilka słów co to za pytania jakiś opis.</p>
                </div>
                <div>
                    <h3>2.</h3>
                    <p>Odpowiedz na 6 pytań. Kilka słów co to za pytania jakiś opis.Kilka słów co to za pytania jakiś opis.Kilka słów co to za pytania jakiś opis.</p>
                </div>
                <div>
                    <h3>3.</h3>
                    <p>Odpowiedz na 6 pytań. Kilka słów co to za pytania jakiś opis.Kilka słów co to za pytania jakiś opis.Kilka słów co to za pytania jakiś opis.</p>
                </div>
            </StepsGrid>
            <Partners>
                <h3>Patronat:</h3>
                <div>
                    {
                        partners.map((partner: string) => (
                            <img key={partner} src={require(`../design/assets/partners/${partner}.png`)} alt=""/>
                        ))
                    }
                </div>
            </Partners>
        </Container>
    </HowItWorksSection>
);

export default HowItWorks
