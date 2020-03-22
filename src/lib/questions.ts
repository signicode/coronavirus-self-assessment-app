import { Question } from "../../types/";

export const questions: Question[] = [
    {
        name: "AGE_QUESTION",
        description: "AGE_QUESTION_DESCRIPTION",
        generalInputType: "slider",
        answers: [
            {name: "AGE_QUESTION_0_50_ANSWER", tip: "AGE_QUESTION_0_50_TIP",  value: 0},
            {name: "AGE_QUESTION_50_65_ANSWER", tip: "AGE_QUESTION_50_65_TIP",  value: 0},
            {name: "AGE_QUESTION_65_80_ANSWER", tip: "AGE_QUESTION_65_80_TIP",  value: 1},
            {name: "AGE_QUESTION_80_UP_ANSWER", tip: "AGE_QUESTION_80_UP_TIP",  value: 1},
        ]
    },
    {
        name: "HEART_DISEASES_QUESTION",
        description: "HEART_DISEASES_QUESTION_DESCRIPTION",
        generalInputType: "radio",
        answers: [
            {name: "HEART_DISEASES_QUESTION_NO_ANSWER", tip: "HEART_DISEASES_QUESTION_NO_TIP",  value: 0},
            {name: "HEART_DISEASES_QUESTION_YES_ANSWER", tip: "HEART_DISEASES_QUESTION_YES_TIP",  value: 1}
        ]
    },
    {
        name: "HIGH_BLOOD_PRESSURE_QUESTION",
        description: "HIGH_BLOOD_PRESSURE_QUESTION_DESCRIPTION",
        generalInputType: "radio",
        answers: [
            {name: "HIGH_BLOOD_PRESSURE_QUESTION_NO_ANSWER", tip: "HIGH_BLOOD_PRESSURE_QUESTION_NO_TIP",  value: 0},
            {name: "HIGH_BLOOD_PRESSURE_QUESTION_YES_ANSWER", tip: "HIGH_BLOOD_PRESSURE_QUESTION_YES_TIP",  value: 1}
        ]
    },
    {
        name: "DIABETES_QUESTION",
        description: "DIABETES_QUESTION_DESCRIPTION",
        generalInputType: "radio",
        answers: [
            {name: "DIABETES_QUESTION_NO_ANSWER", tip: "DIABETES_QUESTION_NO_TIP",  value: 0},
            {name: "DIABETES_QUESTION_YES_ANSWER", tip: "DIABETES_QUESTION_YES_TIP",  value: 1}
        ]
    },
    {
        name: "LUNG_DISEASES_QUESTION",
        description: "LUNG_DISEASES_QUESTION_DESCRIPTION",
        generalInputType: "radio",
        answers: [
            {name: "LUNG_DISEASES_QUESTION_NO_ANSWER", tip: "LUNG_DISEASES_QUESTION_NO_TIP",  value: 0},
            {name: "LUNG_DISEASES_QUESTION_YES_ANSWER", tip: "LUNG_DISEASES_QUESTION_YES_TIP",  value: 1}
        ]
    },
    {
        name: "ASTHMA_QUESTION",
        description: "ASTHMA_QUESTION_DESCRIPTION",
        generalInputType: "radio",
        answers: [
            {name: "ASTHMA_QUESTION_NO_ANSWER", tip: "ASTHMA_QUESTION_NO_TIP",  value: 0},
            {name: "ASTHMA_QUESTION_YES_ANSWER", tip: "ASTHMA_QUESTION_YES_TIP",  value: 1}
        ]
    },
    {
        name: "FEVER_QUESTION",
        description: "FEVER_QUESTION_DESCRIPTION",
        generalInputType: "slider",
        answers: [
            {name: "FEVER_QUESTION_LESS_THAN_37_ANSWER", tip: "FEVER_QUESTION_LESS_THAN_37_TIP",  value: 0},
            {name: "FEVER_QUESTION_LESS_THAN_38_ANSWER", tip: "FEVER_QUESTION_LESS_THAN_38_TIP",  value: 5},
            {name: "FEVER_QUESTION_LESS_THAN_39_ANSWER", tip: "FEVER_QUESTION_LESS_THAN_39_TIP",  value: 10},
            {name: "FEVER_QUESTION_OVER_39_ANSWER", tip: "FEVER_QUESTION_OVER_39_TIP",  value: 20},
        ]
    },
    {
        name: "SHORTNESS_OF_BREATH_QUESTION",
        description: "SHORTNESS_OF_BREATH_QUESTION_DESCRIPTION",
        generalInputType: "radio",
        answers: [
            {name: "SHORTNESS_OF_BREATH_QUESTION_NO_ANSWER", tip: "SHORTNESS_OF_BREATH_QUESTION_NO_TIP",  value: 0},
            {name: "SHORTNESS_OF_BREATH_QUESTION_YES_ANSWER", tip: "SHORTNESS_OF_BREATH_QUESTION_YES_TIP",  value: 20},
        ]
    },
    {
        name: "COUGH_QUESTION",
        description: "COUGH_QUESTION_DESCRIPTION",
        generalInputType: "slider", // render in Field component depends on it
        answers: [
            {name: "COUGH_QUESTION_NO_COUGH_ANSWER", tip: "COUGH_QUESTION_NO_COUGH_TIP",  value: 0},
            {name: "COUGH_QUESTION_COUGH_WET_ANSWER", tip: "COUGH_QUESTION_COUGH_WET_TIP",  value: 10},
            {name: "COUGH_QUESTION_COUGH_BOTH_ANSWER", tip: "COUGH_QUESTION_COUGH_BOTH_TIP",  value: 20},
            {name: "COUGH_QUESTION_COUGH_DRY_ANSWER", tip: "COUGH_QUESTION_COUGH_DRY_TIP",  value: 30},
        ]
    },
    {
        name: "CHILLS_QUESTION",
        description: "CHILLS_QUESTION_DESCRIPTION",
        generalInputType: "radio",
        answers: [
            {name: "CHILLS_QUESTION_NO_ANSWER", tip: "CHILLS_QUESTION_NO_TIP",  value: 0},
            {name: "CHILLS_QUESTION_YES_ANSWER", tip: "CHILLS_QUESTION_YES_TIP",  value: 5},
        ]
    },
    {
        name: "SORE_THROAT_QUESTION",
        description: "SORE_THROAT_QUESTION_DESCRIPTION",
        generalInputType: "radio",
        answers: [
            {name: "SORE_THROAT_QUESTION_NO_ANSWER", tip: "SORE_THROAT_QUESTION_NO_TIP",  value: 0},
            {name: "SORE_THROAT_QUESTION_YES_ANSWER", tip: "SORE_THROAT_QUESTION_YES_TIP",  value: 2},
        ]
    },
    {
        name: "RUNNING_NOSE_QUESTION",
        description: "RUNNING_NOSE_QUESTION_DESCRIPTION",
        generalInputType: "radio",
        answers: [
            {name: "RUNNING_NOSE_QUESTION_NO_ANSWER", tip: "RUNNING_NOSE_QUESTION_NO_TIP",  value: 0},
            {name: "RUNNING_NOSE_QUESTION_YES_ANSWER", tip: "RUNNING_NOSE_QUESTION_YES_TIP",  value: 2},
        ]
    },
    {
        name: "VOMMITING_QUESTION",
        description: "VOMMITING_QUESTION_DESCRIPTION",
        generalInputType: "radio",
        answers: [
            {name: "VOMMITING_QUESTION_NO_ANSWER", tip: "VOMMITING_QUESTION_NO_TIP",  value: 0},
            {name: "VOMMITING_QUESTION_YES_ANSWER", tip: "VOMMITING_QUESTION_YES_TIP",  value: 2},
        ]
    },
    {
        name: "DIARRHOEA_QUESTION",
        description: "DIARRHOEA_QUESTION_DESCRIPTION",
        generalInputType: "radio",
        answers: [
            {name: "DIARRHOEA_QUESTION_NO_ANSWER", tip: "DIARRHOEA_QUESTION_NO_TIP",  value: 0},
            {name: "DIARRHOEA_QUESTION_YES_ANSWER", tip: "DIARRHOEA_QUESTION_YES_TIP",  value: 2},
        ]
    },
    {
        name: "DIFICULITY_BREATHING_QUESTION",
        description: "DIFICULITY_BREATHING_QUESTION_DESCRIPTION",
        generalInputType: "slider",
        answers: [
            {name: "DIFICULITY_BREATHING_QUESTION_NONE_ANSWER", tip: "DIFICULITY_BREATHING_QUESTION_NONE_TIP",  value: 0},
            {name: "DIFICULITY_BREATHING_QUESTION_SELDOM_ANSWER", tip: "DIFICULITY_BREATHING_QUESTION_SELDOM_TIP",  value: 5},
            {name: "DIFICULITY_BREATHING_QUESTION_OFTEN_ANSWER", tip: "DIFICULITY_BREATHING_QUESTION_OFTEN_TIP", value: 10},
            {name: "DIFICULITY_BREATHING_QUESTION_ALWAYS_ANSWER", tip: "DIFICULITY_BREATHING_QUESTION_ALWAYS_TIP", value: 20}
        ]
    },
];
