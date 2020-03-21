import React, { PropsWithChildren } from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";
import { ThemeProvider } from "styled-components";
import Navbar from "components/Navbar";
import { theme } from "./design/theme";
import { GlobalStyle } from "./design/GlobalStyle";
import { Weights, Question, Option } from "../types/";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

require("normalize.css");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MaybeWeights = [{[key: string]: {mode?: any; multiplier?: any}}]

class App extends React.Component {
    constructor(props: PropsWithChildren<{}>) {
        super(props);

        this.state = {
            loading: false,
            questions: {},
            answers: {},
            weights: [{}]
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async fetch(url: string): Promise<any> {
        return (await fetch(url)).json();
    }

    static async loadQuestions(): Promise<Question[]> {
        const questions = await this.fetch('/data/questions.json');
        if (!Array.isArray(questions)) {
            throw new Error("MALFORMED_DATA_FORMAT");
        }

        return questions.map(
            (data): Question => {
                if (typeof data !== 'object') throw new Error("QUESTION_MALFORMED");
                if (!Array.isArray(data.answers)) throw new Error("QUESTION_MALFORMED"); // TODO debug which question and so on.

                const answers = data.answers.map((answer: {name?: unknown; value?: unknown}): Option => {
                    const name = `${answer.name}`;
                    const value = 'value' in answer && ['string', 'number'].includes(typeof answer.value) && !isNaN(+answer.value) ? +answer.value : 0;

                    return { name, value };
                });

                return {
                    name: data.name || '',
                    generalInputType: data.type || 'boolean',
                    answers,
                    inputProps: {},
                    settings: {}
                }
            }
        );
    }

    static async loadWeights(): Promise<Weights[]> {
        const weights: MaybeWeights = await this.fetch('/data/weights.json');
        if (!Array.isArray(weights)) {
            throw new Error("MALFORMED_DATA_FORMAT");
        }

        return weights.map(weights => {
            const output: Weights = {};
            for (const [question, value] of Object.entries(weights)) {
                if (typeof value !== "object"
                    || !(['mul', 'add'].includes(`${value.mode}`))
                    || !(typeof value.multiplier !== 'number')
                ) throw new Error("WEIGHT_MALFORMED");

                output[question] = {
                    mode: value.mode === 'mul' ? 'mul' : 'add',
                    multiplier: +value.multiplier
                };
            }

            return output;
        });
    }

    async componentDidMount(): Promise<void> {
        this.setState({loading: true});

        const [questions, weights] = await Promise.all([
            App.loadQuestions(),
            App.loadWeights()
        ]);

        this.setState({
            loading: false,
            questions,
            weights
        });
    }

    render (): JSX.Element {
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
}

export default App;
