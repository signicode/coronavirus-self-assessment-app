import React from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
type FieldProps = {
    question: any;
    register: Function;
};
const Field: React.FC<FieldProps> = ({ question, register }) => {
    const { t } = useTranslation("questions");
    switch (question.generalInputType) {
        case "checkbox":
            return question.answers.map((answer: any, i: number) => (
                <div key={answer}>
                    <input
                        type="checkbox"
                        name={`${question.name}[${i}]`}
                        id={question.name + answer}
                        ref={register(question.settings)}
                        {...question.inputProps}
                    />{" "}
                    <label htmlFor={question.name + answer}>
                        {t(`${question.name}_QUESTION_${answer}_ANSWER`)}
                    </label>
                </div>
            ));
        case "input":
            return (
                <input
                    name={question.name}
                    id={question.name}
                    ref={register(question.settings)}
                    {...question.inputProps}
                />
            );
    }
};
export default Field;
