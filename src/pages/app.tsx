import React, { useState } from "react";
import { questions } from "../lib/questions";
import Question from "components/Question";
import { navigate } from "@reach/router";
import ViewWrapper from "components/ViewWrapper";

const AppView = (): JSX.Element => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [response, setResponse] = useState({});
    const handleNextQuestion = (arg: any) => {
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
            <ViewWrapper>
                <Question
                    question={question}
                    index={currentQuestionIndex}
                    totalQuestions={questions.length}
                    onNext={handleNextQuestion}
                />
            </ViewWrapper>
    );
};

export default AppView;
