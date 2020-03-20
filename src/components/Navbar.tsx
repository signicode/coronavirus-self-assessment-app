import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "@reach/router";

const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`;

type NavProps = {
    isLightVersion: boolean;
};
const Nav = styled.nav<NavProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 0;
    color: ${props => (props.isLightVersion ? "white" : "inherit")};
`;

const Brand = styled(Link)`
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    span {
        display: block;
        height: 1em;
        width: 1em;
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
            height: 0.5em;
            width: 0.5em;
            border-radius: 50%;
            background: ${props => props.theme.colors.primary};
        }
    }
    h4 {
        margin: 0;
    }
`;

type LangSwitcherProps = {
    readonly active: boolean;
};
const LangSwitcher = styled.button<LangSwitcherProps>`
    border: none;
    background: none;
    font-size: 1em;
    color: inherit;
    font-weight: ${props => (props.active ? "bold" : "normal")};

    &:first-of-type {
        margin-right: 1em;
    }
`;
// eslint-disable-next-line react/prop-types
const Navbar: React.FC = () => {
    const { i18n } = useTranslation();
    const { pathname } = useLocation();
    const isLightVersion = ["/"].includes(pathname);

    const langs = i18n.languages.sort();
    return (
        <React.Suspense fallback={"Loading"}>
            <NavbarWrapper>
                <Container>
                    <Nav isLightVersion={isLightVersion}>
                        <Brand to={"/"}>
                            <span></span>
                            <h4>
                                Covid <br />
                                Checker
                            </h4>
                        </Brand>
                        <div>
                            {langs.map((lang: string) => (
                                <LangSwitcher
                                    active={i18n.language === lang}
                                    onClick={() => i18n.changeLanguage(lang)}
                                >
                                    {lang.toUpperCase()}
                                </LangSwitcher>
                            ))}
                        </div>
                    </Nav>
                </Container>
            </NavbarWrapper>
        </React.Suspense>
    );
};
export default Navbar;
