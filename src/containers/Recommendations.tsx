import React from "react";
import styled from "styled-components";
import Section from "components/Section";
import Container from "components/Container";
import {useTranslation} from "react-i18next";

const RecommendationsSection = styled(Section)`
    color: white;

    .links{
        font-size: 1.2em;
    }
    a:first-of-type{
        margin-right: 2em;
    }
`;
const List = styled.div`
    margin-top: 5vh;
    div{
        display: flex;
        margin-bottom: 5vh;

        img{
            height: 50px;
            margin-right: 2em;
        }
        p{
            margin-top: 0;
            width: 50%;
        }
    }
`
type RecommendationsProps = {
    recommendations: string[];
}


function getRecommendationIcon(recommendation: string): string {
    if (recommendation === "RECOMMENDATION_AVOID_CROWDS")
        return require(`../design/assets/icons/hands.svg`);

    return require(`../design/assets/icons/hands.svg`);
}

const Recommendations = (props: RecommendationsProps): JSX.Element => {
    const {t} = useTranslation(["translation", "results", "assessment"]);

    return (<RecommendationsSection className={"recommendations-section"}>
        <Container>
            <h2>{t("what_can_i_do")}</h2>
                <p>
                    {t("recommendation_screen_description")}
                </p>
                <List>
                    {
                        props.recommendations.map((recommendation: string) => (
                            <div key={recommendation}>
                                <img src={getRecommendationIcon(recommendation)} alt=""/>
                                <p>
                                    {t(`assessment:${recommendation}`)}
                                </p>
                            </div>
                        ))
                    }
                </List>
        </Container>
    </RecommendationsSection>)
};

export default Recommendations
