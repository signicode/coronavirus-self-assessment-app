import React from "react";
import styled from "styled-components";
import Section from "components/Section";
import Container from "components/Container";

const DataInfoSection = styled(Section)`
    background: white;
    color: ${props => props.theme.colors.primary};
    
    .links{
        font-size: 1.2em;
    }
    a:first-of-type{
        margin-right: 2em;
    }
`;
const DataInfo = (): JSX.Element => (
    <DataInfoSection>
        <Container>
                <p>
                    The data and self-assessment algorithm has been created according to WHO and CDC recommendations from the following documents:
                </p>
                <div className="links">
                    <a href="#">CDC</a>
                    <a href="#">WHO</a>
                </div>
                <p>
                    Updated on 22.02.2020
                </p>
        </Container>
    </DataInfoSection>
);

export default DataInfo
