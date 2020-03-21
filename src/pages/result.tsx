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
    // Checking if translation exists
    if (!(location.state as any).response || t(`results:${'healthy'}.title`).indexOf('title')!=-1)
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
                        {t(`results:${'healthy'}.title`)}
                    </h2>
                    <code>
                        {JSON.stringify((location.state as any).response)}
                    </code>
                    <div>
                        {t(`results:${'healthy'}.text`)}
                    </div>
                    <Actions>
                        <Button as={Link} to={"/app"}  block>
                            {t("translation:what_can_you_do")}
                        </Button>
                    </Actions>
                    <Actions>
                        <Button as={Link} to={"/app"}  light block>
                            {t("translation:recommend_us")}
                        </Button>
                    </Actions>
                </pre>
            </ViewWrapper>
        </Container>
    );
};

export default Result;
