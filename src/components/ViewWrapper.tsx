import styled from "styled-components";
import PropTypes from 'prop-types';
import React from "react";
import Container from "components/Container";

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background:
        url("${require('../design/assets/blobs/group5.svg')}"),
        url("${require('../design/assets/blobs/group2.svg')}"),
        url("${require('../design/assets/blobs/group4.svg')}"),
        url("${require('../design/assets/people.svg')}");
    background-position: -45% 160%, 60% 180%, 40% -35vh, 90% center;
    background-repeat: no-repeat;
    background-size: 40%;
    display: flex;
    align-items: center;
    @media(max-width: 850px){
        background-position: -45% 160%, 60% 180%, 40% -35vh, center 20%;
        background-size: 0,0,0, 80%;
        align-items: flex-end;
    }
`;
const Content = styled.div`
    background: white;
    padding: 10px 10px 2em 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-left: 10%;
    border-radius: 20px;
    width: 40%;
    @media(max-width: 850px){
        width: 100%;
        margin-left: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        overflow: hidden;
    }
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
