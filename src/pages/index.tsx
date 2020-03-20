import React from "react";
import Button from "components/Button";
import { Link } from "@reach/router";
import Hero from "components/Hero";
import Container from "components/Container";
import { useTranslation } from "react-i18next";

const Index = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <>
            <Hero>
                <Container>
                    <h1>
                        Covid <br />
                        Health <br />
                        Checker
                    </h1>
                    <p>{t("app_description")}</p>
                    <Button as={Link} to={"/app"} light block>
                        {t("call_to_action")}
                    </Button>
                </Container>
            </Hero>
        </>
    );
};

export default Index;
