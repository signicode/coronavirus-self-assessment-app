import React from "react";
import { useLocation } from "@reach/router";
import ViewWrapper from "components/ViewWrapper";
import Container from "components/Container";

const Result = (): JSX.Element => {
    const location = useLocation();
    if (!(location.state as any).response)
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
                    <code>
                        {JSON.stringify((location.state as any).response)}
                    </code>
                </pre>
            </ViewWrapper>
        </Container>
    );
};

export default Result;
