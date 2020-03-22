import React from "react";
import styled from "styled-components";
import {Link} from "@reach/router";
import PropTypes from "prop-types";

type BrandProps = {
    big?: boolean,
    primary?: boolean
};

const BrandWrapper = styled<any>(Link)`
    color: ${props => props.primary ? props.theme.colors.primary : 'inherit'};
    text-decoration: none;
    display: flex;
    align-items: center;
    span {
        display: block;
        height: ${props => props.big ? '2em' : '1em'};
        width: ${props => props.big ? '2em' : '1em'};
        border-radius: 50%;
        background: red;
        margin-right: 0.5em;
        position: relative;

        &::after {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: ${props => props.big ? '1em' : '.5em'};
            width: ${props => props.big ? '1em' : '.5em'};
            border-radius: 50%;
            background: ${props => props.primary ? 'white' : props.theme.colors.primary};;
        }
    }
    h4 {
        margin: 0;
        font-size: ${props => props.big ? '2em' : 'inherit'};
    }
`;
const Brand = (props: BrandProps): JSX.Element => (
    <BrandWrapper to={"/"} {...props}>
        <span></span>
        <h4>
            How You <br />
            Feel World
        </h4>
    </BrandWrapper>
);
Brand.propTypes = {
    big: PropTypes.bool,
    primary: PropTypes.bool
};
export default Brand;
