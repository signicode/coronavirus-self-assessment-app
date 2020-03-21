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
const isObjEmpty = (obj: any): boolean => Object.keys(obj).length === 0;

// eslint-disable-next-line react/prop-types
const Question: React.FC<QuestionProps> = ({
    question,
    totalQuestions,
    index,
    onNext
}: QuestionProps): JSX.Element => {
    const { t } = useTranslation(["translation", "questions"]);
    const { handleSubmit, register, errors, setValue } = useForm();
    const isLastQuestion = index === totalQuestions - 1;
    const onSubmit = (value: FormValue): void => {
        onNext({
            meta: {
                isLastQuestion
            },
            value
        });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Progress max={totalQuestions} value={index+1} />
            <QuestionNo>Pytanie {index+1}/{totalQuestions}</QuestionNo>
            <h2>{t(`questions:${question.name}_QUESTION`)}</h2>
            <p>{t(`questions:${question.name}_DESCRIPTION`)}</p>
            <Field question={question} register={register} setValue={setValue} />
            {!isObjEmpty(errors) && (
                <Error>
                    {capitalize(t(`questions:${question.name}_ERROR`))}
                </Error>
            )}
            <Tip>
                <p>
                    {t(`questions:${question.name}_TIP`)}
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
