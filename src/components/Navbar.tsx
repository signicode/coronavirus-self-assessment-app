import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { useTranslation } from "react-i18next";
import { Link } from "@reach/router";

const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 0;
    color: white;
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

    const langs = i18n.languages.sort();
    return (
            <NavbarWrapper>
                <Container>
                    <Nav>
                        <Brand to={"/"}>
                            <span></span>
                            <h4>
                                How You <br />
                                Feel World
                            </h4>
                        </Brand>
                        <div>
                            {langs.map((lang: string) => (
                                <LangSwitcher
                                    key={lang}
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
    );
};
export default Navbar;
