import React from "react";
import styled from "styled-components";
import Section from "components/Section";
import Container from "components/Container";
import Button from "components/Button";

const ShareSection = styled(Section)`
    background: #EC4B7C;
    color: white;
`;
const ShareContent = styled.div`
    display: grid;
    grid-template-columns 1fr 1fr;
    grid-column-gap 2em;
    
    .share-buttons{
        display: flex;
        align-items:center;
        justify-content: center;
    }
    @media(max-width: 1000px){
        grid-template-columns 1fr;
    }
`;
const ShareButton = styled(Button)`
    background: none;
    border: 2px solid white;
    padding: 10px 2em;
    margin: 1.5em;
    display: inline-flex;
    align-items:center;
    justify-content: center;
    img{
        height: 1.5em;
    }
    @media(max-width: 550px){
        margin: 10px;
    }
    @media(max-width: 400px){
        padding: 10px 1em;
    }
`;
const Share = (): JSX.Element => (
    <ShareSection>
        <Container>
            <ShareContent>
                <div>
                    <h2>Udostępnij</h2>
                    <p>
                        Podziel się naszą aplikacja z innymi, tak żeby każdy mógł czuć się bezpieczniej i wiedział co ma robić :)
                    </p>
                </div>
                <div className={"share-buttons"}>
                    <div>
                        <ShareButton>
                            <img src={require('../design/assets/icons/fb.svg')} alt=""/>
                        </ShareButton>
                        <ShareButton>
                            <img src={require('../design/assets/icons/share.svg')} alt=""/>
                        </ShareButton>
                        <ShareButton>
                            <img src={require('../design/assets/icons/twitter.svg')} alt=""/>
                        </ShareButton>
                    </div>
                </div>
            </ShareContent>
        </Container>
    </ShareSection>
);

export default Share
