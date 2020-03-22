import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {getColor} from "../utils/colors";
import { Question, Option } from "../../types/";
import styled from "styled-components";
// eslint-disable-next-line react/prop-types
type FieldProps = {
    question: Question;
    register: Function;
    setValue: Function;
};

const RadioWrapper = styled.div`
margin: 0.5rem 0 .5rem 9px;
input[type="radio"] {
  opacity: 0;
  margin-top: -5px;
  
  & + label {
    position: relative;
    display: inline-block;
    cursor: pointer;
    
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      left: -24px;
      border-radius: 50%;
      border: 1px solid ${props => props.theme.colors.primary};
      width: 18px;
      height: 18px;
    }
    
    &::after {
      content: '';
      position: absolute;
      display: inline-block;
      left: -20px;
      top: 4px;
      border-radius: 50%;
      width: 12px;
      height: 12px;
    }
  }
  
  &:checked {
    + label::after {
      background: ${props => props.theme.colors.primary};
    }
  }
}
`;

const Field: React.FC<FieldProps> = ({ question, register, setValue }: FieldProps) => {
    const { t } = useTranslation("questions");
    const [sliderValue, setSliderValue] = useState(0);
    useEffect(() => {
        if(question.generalInputType === 'slider'){
            register({
                name: question.name
            });
            setValue(question.name, question.answers[0].name)
        }
    }, [question])
    switch (question.generalInputType) {
        case "radio":
            const handleRadioChange = (e: any): void => {
                setValue([question.name, question.answers.find(({name}) => name === e.target.value)])
            };
            return <div>
            {question.answers.map((answer: Option) => (
                <RadioWrapper key={answer.name}>
                    <input
                        type="radio"
                        name={`${question.name}`}
                        id={question.name + answer.name}
                        ref={register(question.name)}
                        value={answer.name}
                        onChange={handleRadioChange}
                        key={answer.name}
                        {...question.inputProps}
                    />{" "}
                    <label htmlFor={question.name + answer.name}>
                        {t(`questions:${answer.name}`)}
                    </label>
                </RadioWrapper>
            ))}
            </div>
        case "checkbox":
            return <div>
                {question.answers.map((answer: Option, i: number) => (
                    <div key={answer.name}>
                        <input
                            type="checkbox"
                            name={`${question.name}[${i}]`}
                            id={question.name + answer}
                            ref={register(question.settings)}
                            {...question.inputProps}
                        />{" "}
                        <label htmlFor={question.name + answer}>
                            {t(`questions:${answer.name}`)}
                        </label>
                    </div>
                ))}
            </div>
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
            question.answers.forEach((answer: any, i: number) => {
                marks[~~(i/(question.answers.length-1)*100)] = {
                    label: t(`questions:${answer.name}`),
                    style: {
                        width: '5em'
                    }
                }
            })
            // const keys =
            register({ name: question.name });
            const answerIndex = Object.keys(marks).sort((a, b) => parseFloat(a)-parseFloat(b)).indexOf(sliderValue.toString())
            setValue([question.name, question.answers[Object.keys(marks).indexOf(answerIndex.toString())]])

            const handleSliderChange = (val: any): void => {
                const value = ~~val;
                setSliderValue(value)
                setValue([question.name, question.answers[Object.keys(marks).indexOf(value.toString())]])
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
