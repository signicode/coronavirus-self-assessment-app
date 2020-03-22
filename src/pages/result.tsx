import React from "react";
import { useLocation, Link } from "@reach/router";
import ViewWrapper from "components/ViewWrapper";
import Container from "components/Container";
import Button from "components/Button";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FormResult } from "../../types";
import { assessResult, createRecommendation } from "../lib/calculator";

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
        <Container>
            <ViewWrapper>
                <pre style={{ overflow: "auto", maxWidth: "100%" }}>
                    <h2>
                        {~~(illnessScore * 100)}%: {t(`assessment:${title}`)}
                    </h2>
                    <div>
                        {t(`assessment:${title}_DESCRIPTION`)}
                    </div>
                    <Actions>
                        <Button as={Link} to={"/app"}  block="true">
                            {t("assessment:what_can_you_do")}
                        </Button>
                    </Actions>
                    <ul>
                        {recommendations.map((answer,i) => {
                            // Return the element. Also pass key
                            return <li key={i}>{t(`assessment:${answer}`)}</li>
                        })}
                    </ul>
                    <Actions>
                        <Button as={Link} to={"/app"}  light="true" block="true">
                            {t("translation:recommend_us")}
                        </Button>
                    </Actions>
                    {JSON.stringify(debug, null, 2)}
                </pre>
            </ViewWrapper>
        </Container>
    );
};

export default Result;
