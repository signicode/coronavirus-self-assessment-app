import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Button from "components/Button";
import {Link} from "@reach/router";
import {useTranslation} from "react-i18next";

const HeroWrapper = styled.div`
    min-height: calc(100vh - 20vh);
        background: 
        url("${require('../design/assets/blobs/group6.svg')}"),
        url("${require('../design/assets/blobs/group4.svg')}"),
        url("${require('../design/assets/people.svg')}");
    background-position: -60% center, 40% -150%, 90% center;
    background-repeat: no-repeat;
    background-size: 45%;
    color: white;
    padding-top: 20vh;
`;

const HeroContent = styled.div`
    width: 40%;
    h1{
       font-size: 5em;
    }
    p{
       font-size: 1.5em;
    }
    a{
        margin-top: 2em;
    }
`;
const LearnMore = styled.button`
    margin-top: 2em;
    padding: 0;
    background: none;
    border: none;
    color: inherit;
    font-size: 1.2em;
    cursor: pointer;
    display: inline-block;
`;

const Hero = (): JSX.Element => {
    const {t} = useTranslation()
    return (
    <HeroWrapper>
        <Container>
            <HeroContent>
                <h1>
                    How You <br/>
                    Feel World?
                </h1>
                <p>{t("app_description")}</p>
                <Button as={Link} to={"/app"} light big className={"call-to-action"}>
                    {t("call_to_action")}
                </Button>
                <div>
                    <LearnMore>Przeczytaj więcej o naszej aplikacji</LearnMore>
                </div>
            </HeroContent>
        </Container>
    </HeroWrapper>
);
}

export default Hero
