import React, { PropsWithChildren } from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";
import { ThemeProvider } from "styled-components";
import Navbar from "components/Navbar";
import { theme } from "./design/theme";
import { GlobalStyle } from "./design/GlobalStyle";
import Loader from "components/Loader";
// import { Weights, Question, Option } from "../types/";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

require("normalize.css");

class App extends React.Component {
    constructor(props: PropsWithChildren<{}>) {
        super(props);

        this.state = {
            loading: false
        }
    }

    async componentDidMount(): Promise<void> {
        this.setState({loading: true});

        this.setState({
            loading: false
        });
    }

    render (): JSX.Element {
        if(typeof window === 'undefined') // don't have an idea how to deal with Suspense and SSR
            return null;

        return (
            <Root>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <React.Suspense fallback={<Loader/>}>
                        <Navbar />
                        <Router id={"router"}>
                            <Routes path="*" />
                        </Router>
                    </React.Suspense>
                </ThemeProvider>
            </Root>
        );
    }
}

export default App;
