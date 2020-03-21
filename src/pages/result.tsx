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
    const { t } = useTranslation(["translation", "results"]);
    const resultName="healthy";

    const formResults = (location.state as any).response;
    const results: FormResult = formResults;

    const assessment = assessResult(results);
    const {title, recommendations, value} = createRecommendation(assessment);

    // Checking if translation exists
    if (!results || t(`assessment:${title}`))
        return (
            <ViewWrapper>
                <Container>
                    <h1>Error</h1>
                </Container>
            </ViewWrapper>
        );
    return (
        <Container>
            <ViewWrapper>
                <pre
                    style={{
                        overflow: "auto",
                        maxWidth: "100%"
                    }}
                >
                    <h2>
                        {value * 100}%: {t(`results:values.${resultName}.title`)}
                    </h2>
                    <div>
                        {t(`results:values.${resultName}.text`)}
                    </div>
                    <Actions>
                        <Button as={Link} to={"/app"}  block="true">
                            {t("translation:what_can_you_do")}
                        </Button>
                    </Actions>
                    {recommendations.map((answer,i) => {
                        // Return the element. Also pass key
                        return <div key={i}>{t(`results:recommendations.${answer}`)}</div>
                        })}
                    <Actions>
                        <Button as={Link} to={"/app"}  light="true" block="true">
                            {t("translation:recommend_us")}
                        </Button>
                    </Actions>
                    <code>
                        {JSON.stringify((location.state as any).response, null, 2)}
                    </code>
                </pre>
            </ViewWrapper>
        </Container>
    );
};

export default Result;
