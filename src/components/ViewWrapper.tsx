import styled from "styled-components";
import PropTypes from 'prop-types';
import React from "react";
import Container from "components/Container";

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
    @media(min-width: 1000px){
        width: 60%;
        margin: auto;
    }
`;
const Content = styled.div`
    height: 80%;
    width: 100%;
    background: white;
    padding: 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;
const ViewWrapper: React.FC = ({children}) => (
    <Wrapper>
        <Content>
            <Container>
                {children}
            </Container>
        </Content>
    </Wrapper>
);

ViewWrapper.propTypes = {
    children: PropTypes.element.isRequired
};

export default ViewWrapper;
