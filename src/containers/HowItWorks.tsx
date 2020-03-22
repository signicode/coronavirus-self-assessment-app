import React, {useRef} from "react";
import styled from "styled-components";
import Section from "components/Section";
import Container from "components/Container";
import Slider from "react-slick";
import {useWindowSize} from "../utils/useWindowSize";

require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");


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
        @media(max-width: 1000px){
            width: 100%;
        }
    }
    @media(max-width: 1000px){
        background-size: 0;
    }
`;
const StepsGrid = styled.div<any>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5vw;
    grid-row-gap: 2em;
    margin-top: 10vh;
    .step{
        display: flex;
        h3{
            font-size: 3em;
            margin: 0 10px 0 0;
        }
        p{
            margin: 0;
            width: 100%;
        }
        button{
            border: none;
            background: none;
            padding: 0;
            margin: 2em 0 0 0;
            font-size: 1.2em;
            color: ${props => props.theme.colors.primary};
            float: right;
        }
    }
    @media(max-width: 1000px){
        grid-template-columns: 1fr;
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
            display: block;
            @media(max-width: 1000px){
                height: 50px;
            }
            @media(max-width: 550px){
                height: 25px;
            }
        }

    }
    @media(max-width: 1000px){
      margin-top: 5vh;
    }
`;
const partners: string[] = [
    'mc',
    'govtech',
    'hct4g',
    'aws'
];
const HowItWorks = (): JSX.Element => {
    const { width } = useWindowSize();
    const ref = useRef();
    const showSlider = width <= 1000;
    const handleNextSlide = () => {
        if(showSlider && ref.current)
            (ref.current as any).slickNext()
    }
    return (
        <HowItWorksSection>
            <Container>
                <h2>Jak działa <br/>aplikacja?</h2>
                <p>
                    Nasza aplikacja pomoże Ci szybko zdiagnozować Twoje objawy przeprowadzi Cię przez wszystkie kroki choroby.
                </p>
                <StepsGrid as={showSlider ? Slider : 'div'} ref={ref} arrows={false}>
                    <div>
                        <div className={"step"}>
                            <h3>1.</h3>
                            <div>
                                <p>Odpowiedz na 6 pytań. Kilka słów co to za pytania jakiś opis.Kilka słów co to za pytania jakiś opis.Kilka słów co to za pytania jakiś opis.</p>
                                {
                                    showSlider && <button onClick={handleNextSlide}>Next</button>
                                }
                            </div>

                        </div>
                    </div>
                    <div>
                    <div className={"step"}>
                            <h3>2.</h3>
                            <div>
                                <p>Odpowiedz na 6 pytań. Kilka słów co to za pytania jakiś opis.Kilka słów co to za pytania jakiś opis.Kilka słów co to za pytania jakiś opis.</p>
                                {
                                    showSlider && <button onClick={handleNextSlide}>Next</button>
                                }
                            </div>
                    </div>
                    </div>
                    <div>
                    <div className={"step"}>
                            <h3>3.</h3>
                            <div>
                                <p>Odpowiedz na 6 pytań. Kilka słów co to za pytania jakiś opis.Kilka słów co to za pytania jakiś opis.Kilka słów co to za pytania jakiś opis.</p>
                                {
                                    showSlider && <button onClick={handleNextSlide}>Next</button>
                                }
                            </div>
                        </div>
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
}

export default HowItWorks
