import React from "react";
import styled from "styled-components";
import Section from "components/Section";
import Container from "components/Container";

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
const Recommendations = (props: RecommendationsProps): JSX.Element => (
    <RecommendationsSection className={"recommendations-section"}>
        <Container>
            <h2>What can I do?</h2>
                <p>
                    desc
                </p>
                <List>
                    {
                        props.recommendations.map((recommendation: string) => (
                            <div>
                                <img src={require('../design/assets/icons/hands.svg')} alt=""/>
                                <p>
                                    {recommendation}
                                </p>
                            </div>
                        ))
                    }
                </List>
        </Container>
    </RecommendationsSection>
);

export default Recommendations
