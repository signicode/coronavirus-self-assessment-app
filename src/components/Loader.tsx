import styled, {keyframes} from "styled-components";
import React from "react";
import { TinyColor } from '@ctrl/tinycolor';

const blink = keyframes`
    0%, 100%{
        opacity: 1;
    }
    50%{
        opacity: .5;
    }
`

const LoaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => new TinyColor(props.theme.colors.primary).setAlpha(.8).toRgbString()};
    
    div{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1em;
        grid-row-gap: 1em;
    }
    span{
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background: white;
        
        &:first-child{
            animation: ${blink} 1s linear infinite;
        }
        &:nth-child(2){
            animation: ${blink} 1s .2s linear infinite;
        }
        &:nth-child(3){
            animation: ${blink} 1s .4s linear infinite;
        }
        &:last-child{
            animation: ${blink} 1s .6s linear infinite;
        }
    }
`;

const Loader: React.FC = () => (
    <LoaderWrapper>
        <div>
            <span />
            <span />
            <span />
            <span />
        </div>
    </LoaderWrapper>
);

export default Loader;
