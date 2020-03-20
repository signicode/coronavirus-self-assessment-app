import Field from "./Field";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "components/Button";
import { useTranslation } from "react-i18next";
import { capitalize } from "../utils/text";
import { Question as QuestionType } from "../lib/questions";

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
type QuestionProps = {
    question: QuestionType;
    index: number;
    isLastQuestion: boolean;
    onNext: Function;
};
type FormValue = {
    [key: string]: string;
};
const isObjEmpty = (obj: any): boolean => Object.keys(obj).length === 0;

// eslint-disable-next-line react/prop-types
const Question: React.FC<QuestionProps> = ({
    question,
    isLastQuestion,
    onNext
}): JSX.Element => {
    const { t } = useTranslation(["translation", "questions"]);
    const { handleSubmit, register, errors } = useForm();
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
            <h2>{t(`questions:${question.name}_QUESTION`)}</h2>
            <p>{t(`questions:${question.name}_DESCRIPTION`)}</p>
            <Field question={question} register={register} />
            {!isObjEmpty(errors) && (
                <Error>
                    {capitalize(t(`questions:${question.name}_ERROR`))}
                </Error>
            )}
            <Actions>
                <Button type={"submit"}>
                    {capitalize(
                        isLastQuestion ? t("result") : t("next_question")
                    )}
                </Button>
            </Actions>
        </form>
    );
};

export default Question;
