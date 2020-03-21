import { Question } from "../../types/";

export const questions: Question[] = [
    {
        name: "COUGH",
        generalInputType: "slider", // render in Field component depends on it
        // answers: ["OPT_ONE", "OPT_TWO", "OPT_THREE"],
        inputProps: {},
        settings: {}
    },
    {
        name: "WHATS_YOUR_AGE",
        generalInputType: "slider", // render in Field component depends on it
        answers: [
            {name: "ANSWER_AGE_0_50", value: 0},
            {name: "ANSWER_AGE_50_65", value: 1},
            {name: "ANSWER_AGE_65_80", value: 2},
            {name: "ANSWER_AGE_80_UP", value: 3},
        ],
        inputProps: {
            type: "number",
            min: 0,
            max: 100
        },
        settings: {
            // object used in react-hook-form register function
            validate: (age: number): boolean => {
                return !isNaN(age) && Math.floor(age) === age && age > 0;
            }
        }
    },
    {
        name: "SOME_OPTIONS",
        generalInputType: "checkbox", // render in Field component depends on it
        // answers: [{"OPT_ONE", "OPT_TWO", "OPT_THREE"}],
        inputProps: {
            // type: 'number',
            // min: 0,
            // max: 100
        },
        settings: {
            // object used in react-hook-form register function
            // validate: (value: any): boolean => {
            //     const age = parseInt(value)
            //     return !isNaN(age) && Math.floor(age) === age && age > 0
            // }
        }
    }
];
