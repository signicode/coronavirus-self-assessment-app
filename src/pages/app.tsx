import React, { useState } from "react";
import { questions } from "../lib/questions";
import Question from "components/Question";
import { navigate } from "@reach/router";
import ViewWrapper from "components/ViewWrapper";
import Button from "components/Button";
import Brand from "components/Brand";
import SEO from "components/SEO";

const AppView = (): JSX.Element => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
    const [response, setResponse] = useState({});

    const start = () => setCurrentQuestionIndex(0);
    const handleNextQuestion = (arg: any) => {
        console.log('arg', arg);
        const res = {
            ...response,
            ...arg.value
        };
        if (arg.meta.isLastQuestion) {
            navigate("/result", {
                state: {
                    response: res
                }
            });
        } else {
            setResponse(res);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };
    const question = questions[currentQuestionIndex];
    return (
        <>
            <SEO title={"Form"}/>
            <ViewWrapper>
                {
                    currentQuestionIndex === -1 ? (
                        <div>
                            <Brand primary={true} big={true} />
                            <p>sdadsasdasdasd</p>
                            <Button
                                style={{
                                    marginTop: '5vh'
                                }}
                                primary={true}
                                block={true}
                                onClick={start}>Get started</Button>
                        </div>
                    ) : (
                        <Question
                            question={question}
                            index={currentQuestionIndex}
                            totalQuestions={questions.length}
                            onNext={handleNextQuestion}
                        />
                    )
                }
            </ViewWrapper>
            </>
    );
};

export default AppView;
