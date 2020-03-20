import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";
import { ThemeProvider } from "styled-components";
import Navbar from "components/Navbar";
import { theme } from "./design/theme";
import { GlobalStyle } from "./design/GlobalStyle";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

require("normalize.css");

function App(): JSX.Element {
    if(typeof window === 'undefined') // don't have an idea how to deal with Suspense and SSR
        return null;

    return (
        <Root>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <React.Suspense fallback={<em>Loading...</em>}>
                    <Navbar />
                    <Router id={"router"}>
                        <Routes path="*" />
                    </Router>
                </React.Suspense>
            </ThemeProvider>
        </Root>
    );
}

export default App;
