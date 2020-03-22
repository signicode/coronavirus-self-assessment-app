import Field from "./Field";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "components/Button";
import Progress from "components/Progress";
import { useTranslation } from "react-i18next";
import { capitalize } from "../utils/text";
import { Question as QuestionType } from "../../types";
const QuestionNo = styled.span`
    display: block;
    font-size: .9em;
    margin: 1em 0 2em 0;
`;
const Error = styled.div`
    margin: 1em 0;
    color: red;
`;
const Actions = styled.div`
    margin-top: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Tip = styled.div`
    margin: 10vh 0 5vh 0;
`
type QuestionProps = {
    question: QuestionType;
    index: number;
    totalQuestions: number;
    onNext: Function;
};
type FormValue = {
    [key: string]: string;
};
const isObjEmpty = (obj: object): boolean => Object.keys(obj).length === 0;

// eslint-disable-next-line react/prop-types
const Question: React.FC<QuestionProps> = ({
    question,
    totalQuestions,
    index,
    onNext
}: QuestionProps): JSX.Element => {
    const { t } = useTranslation(["translation", "questions"]);
    const { handleSubmit, register, errors, setValue} = useForm();
    const isLastQuestion = index === totalQuestions - 1;
    const onSubmit = (value: FormValue): void => {
        onNext({
            meta: {
                isLastQuestion
            },
            value
        });
    };
    const setValueTemp = (value: FormValue): void => {
        console.log(question.name, value);
        setValue(value[0], value[1])
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Progress max={totalQuestions} value={index+1} />
            <QuestionNo>Pytanie {index+1}/{totalQuestions}</QuestionNo>
            <h2>{t(`questions:${question.name}`)}</h2>
            <p>{t(`questions:${question.description}`)}</p>
            <Field key={question.name} question={question} register={register} setValue={setValueTemp} />
            {!isObjEmpty(errors) && (
                <Error>
                    {capitalize(t(`${question.generalInputType}_error`))}
                </Error>
            )}
            <Tip>
                <p>
                    {t(`${question.generalInputType}_tip`)}
                </p>
            </Tip>
            <Actions>
                <Button type={"submit"} block>
                    {capitalize(
                        isLastQuestion ? t("result") : t("next_question")
                    )}
                </Button>
            </Actions>
        </form>
    );
};

export default Question;
