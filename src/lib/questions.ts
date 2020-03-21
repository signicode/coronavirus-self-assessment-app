import { Question } from "../../types/";

export const questions: Question[] = [
    {
        name: "AGE",
        generalInputType: "slider",
        answers: [
            {name: "0_50", value: 0},
            {name: "50_65", value: 1},
            {name: "65_80", value: 2},
            {name: "80_UP", value: 3},
        ]
    },
    {
        name: "HEART_DISEASES",
        generalInputType: "slider",
        answers: [
            {name: "YES", value: 0},
            {name: "NO", value: 1}
        ]
    },
    {
        name: "HIGH_BLOOD_PRESSURE",
        generalInputType: "slider",
        answers: [
            {name: "YES", value: 0},
            {name: "NO", value: 1}
        ]
    },
    {
        name: "DIABETES",
        generalInputType: "slider",
        answers: [
            {name: "YES", value: 0},
            {name: "NO", value: 1}
        ]
    },
    {
        name: "LUNG_DISEASES",
        generalInputType: "slider",
        answers: [
            {name: "YES", value: 0},
            {name: "NO", value: 1}
        ]
    },
    {
        name: "ASTHMA",
        generalInputType: "slider",
        answers: [
            {name: "YES", value: 0},
            {name: "NO", value: 1}
        ]
    },
    {
        name: "FEVER",
        generalInputType: "slider",
        answers: [
            {name: "LESS_THAN_37", value: 0},
            {name: "LESS_THAN_38", value: 1},
            {name: "LESS_THAN_39", value: 2},
            {name: "OVER_39", value: 3},
        ]
    },
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
        name: "SHORTNESS_OF_BREATH",
        generalInputType: "slider",
        answers: [
            {name: "YES", value: 0},
            {name: "NO", value: 1}
        ]
    },
    {
        name: "CHILLS",
        generalInputType: "slider",
        answers: [
            {name: "YES", value: 0},
            {name: "NO", value: 1}
        ]
    },
    {
        name: "SORE_THROAT",
        generalInputType: "slider",
        answers: [
            {name: "YES", value: 0},
            {name: "NO", value: 1}
        ]
    },
    {
        name: "RUNNING_NOSE",
        generalInputType: "slider",
        answers: [
            {name: "YES", value: 0},
            {name: "NO", value: 1}
        ]
    },
    {
        name: "VOMMITING",
        generalInputType: "slider",
        answers: [
            {name: "YES", value: 0},
            {name: "NO", value: 1}
        ]
    },
    {
        name: "DIARRHOEA",
        generalInputType: "slider",
        answers: [
            {name: "YES", value: 0},
            {name: "NO", value: 1}
        ]
    },
    {
        name: "DIFICULITY_BREATHING",
        generalInputType: "slider",
        answers: [
            {name: "YES", value: 0},
            {name: "NO", value: 1}
        ]
    },
];
