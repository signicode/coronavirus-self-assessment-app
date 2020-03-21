import React from "react";
import { useLocation, Link } from "@reach/router";
import ViewWrapper from "components/ViewWrapper";
import Container from "components/Container";
import Button from "components/Button";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Actions = styled.div`
    margin-top: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Result = (): JSX.Element => {
    const location = useLocation();
    const { t } = useTranslation(["translation", "results"]);
    const recommendations = [0,1];
    const resultName="healthy";
    // Checking if translation exists
    if (!(location.state as any).response || t(`results:values.${resultName}.title`).indexOf('title')!=-1)
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
                        {t(`results:values.${resultName}.title`)}
                    </h2>
                    <code>
                        {JSON.stringify((location.state as any).response)}
                    </code>
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
                </pre>
            </ViewWrapper>
        </Container>
    );
};

export default Result;
