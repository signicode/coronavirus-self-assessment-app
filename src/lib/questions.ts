import { Question } from "../../types/";

export const questions: Question[] = [
    {
        name: "COUGH",
        generalInputType: "slider", // render in Field component depends on it
        answers: [
            {name: "NO_COUGH", value: 0},
            {name: "COUGH_WET", value: 1},
            {name: "COUGH_DRY", value: 2},
            {name: "COUGH_BOTH", value: 3},
        ]
    },
    {
        name: "WHATS_YOUR_AGE",
        generalInputType: "slider", // render in Field component depends on it
        answers: [
            {name: "ANSWER_AGE_0_50", value: 0},
            {name: "ANSWER_AGE_50_65", value: 1},
            {name: "ANSWER_AGE_65_80", value: 2},
            {name: "ANSWER_AGE_80_UP", value: 3},
        ]
    }
];
