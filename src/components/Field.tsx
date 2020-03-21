import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {getColor} from "../utils/colors";
// eslint-disable-next-line react/prop-types
type FieldProps = {
    question: any;
    register: Function;
    setValue: Function
};
const Field: React.FC<FieldProps> = ({ question, register, setValue }) => {
    const { t } = useTranslation("questions");
    const [sliderValue, setSliderValue] = useState(0);
    useEffect(() => {
        if(question.generalInputType === 'slider'){
            register({
                name: question.name
            })
        }
    }, [])
    switch (question.generalInputType) {
        case "radio":
            return question.answers.map((answer: any, i: number) => (
                <div key={answer}>
                    <input
                        type="radio"
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
        case "slider":
            const marks: any = {};
            const step = 100/(question.answers.length-1);
            question.answers.forEach((answer: string, i: number) => {
                marks[i/(question.answers.length-1)*100] = {
                    label: t(`questions:${question.name}_QUESTION_${answer}_ANSWER`),
                    style: {
                        width: '5em'
                    }
                }
            })
            const answerIndex = Object.keys(marks).indexOf(sliderValue.toString())
            const handleSliderChange = (val: any): void => {
                console.log(val)
                setSliderValue(val)
                setValue(question.name, question.answers[answerIndex])
            };
            const color = getColor(answerIndex)
            return (
                <Slider
                    min={0}
                    max={100}
                    defaultValue={0}
                    marks={marks}
                    step={step}
                    value={sliderValue}
                    onChange={handleSliderChange}
                    trackStyle={{
                        background: color,
                    }}
                    handleStyle={{
                        boxShadow: 'none',
                        borderColor: color
                    }}
                    activeDotStyle={{
                        boxShadow: 'none',
                        borderColor: color
                    }}
                />
            )
    }
};
export default Field;
