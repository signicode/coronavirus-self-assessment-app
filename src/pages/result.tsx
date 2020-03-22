import React from "react";
import { useLocation } from "@reach/router";
import ViewWrapper from "components/ViewWrapper";
import Container from "components/Container";
import Button from "components/Button";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FormResult } from "../../types";
import { assessResult, createRecommendation } from "../lib/calculator";
import Share from "containers/Share";
import DataInfo from "containers/DataInfo";
import Recommendations from "containers/Recommendations";
import About from "containers/About";
import SEO from "components/SEO";

const Actions = styled.div`
    margin-top: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Result = (): JSX.Element => {
    const location = useLocation();
    const { t } = useTranslation(["translation", "results", "assessment"]);

    const formResults = (location.state as any).response;
    const results: FormResult = formResults;

    const assessment = assessResult(results);
    const {title, recommendations, riskScore, illnessScore} = createRecommendation(assessment);

    const debug = {
        illnessScore,
        riskScore,
        title,
        recommendations,
        answers: Object.entries(results).map(
            data => `${data[0]}: ${data[1] && data[1].name}(${data[1] && data[1].value})`
        )
    };

    console.log(debug);

    // Checking if translation exists
    if (!results || !t(`assessment:${title}`))
        return (
            <ViewWrapper>
                <Container>
                    <h1>Error</h1>
                    <code>
                        {JSON.stringify({title, recommendations, value: illnessScore}, null, 2)}
                    </code>
                </Container>
            </ViewWrapper>
        );
    return (
        <>
            <SEO title={"Result"}/>
            <ViewWrapper>
                    <h2>
                        {~~(illnessScore * 100)}%: {t(`assessment:${title}`)}
                    </h2>
                    <div>
                        {t(`assessment:${title}_DESCRIPTION`)}
                    </div>
                    <Actions>
                        <Button
                            onClick={() => {
                                if(typeof window !== 'undefined'){
                                    document.querySelector('.recommendations-section').scrollIntoView({behavior: "smooth"})
                                }
                            }}
                            block="true">
                            {t("assessment:what_can_you_do")}
                        </Button>
                    </Actions>
                    <Actions>
                        <Button
                            onClick={() => {
                                if(typeof window !== 'undefined'){
                                    document.querySelector('.share-section').scrollIntoView({behavior: "smooth"})
                                }
                            }}
                            light="true"
                            block="true">
                            {t("translation:recommend_us")}
                        </Button>
                    </Actions>
            </ViewWrapper>
        <Share />
        <DataInfo/>
        <Recommendations recommendations={recommendations}/>
        <About light={true}/>
                </>
    );
};

export default Result;
