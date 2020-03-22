import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Container from "./Container";
import { useTranslation } from "react-i18next";
import Brand from "components/Brand";

const NavbarWrapper = styled.div<{isTransparent: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    background: ${props => props.isTransparent ? 'transparent' : props.theme.colors.primary};
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5vh 0;
    color: white;
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
    const [isTransparent, setTransparent] = useState(typeof window !== 'undefined' && window.scrollY === 0);
    useEffect(() => {
        if (typeof window !== 'undefined'){
            const handleScroll = (): void => {
                setTransparent(window.scrollY === 0)
            };
            document.addEventListener('scroll', handleScroll);
            return (): void => {
                document.removeEventListener('scroll', handleScroll);
            }
        }
    }, []);
    const langs = i18n.languages.sort();
    return (
            <NavbarWrapper isTransparent={isTransparent}>
                <Container>
                    <Nav>
                        <Brand />
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
