import { Weights } from "../../types/";

const CoronavirusPossibility: Weights = {
    FEVER_QUESTION: { mode: "add", multiplier: 1 },
    COUGH_QUESTION: { mode: "add", multiplier: 1 },
    SHORTNESS_OF_BREATH_QUESTION: { mode: "add", multiplier: 1 },
    CHILLS_QUESTION: { mode: "add", multiplier: 1 },
    SORE_THROAT_QUESTION: { mode: "add", multiplier: 1 },
    RUNNING_NOSE_QUESTION: { mode: "add", multiplier: 1 },
    VOMMITING_QUESTION: { mode: "add", multiplier: 1 },
    DIARRHOEA_QUESTION: { mode: "add", multiplier: 1 },
    DIFICULITY_BREATHING_QUESTION: { mode: "add", multiplier: 1 }
};

const RiskGroup: Weights = {
    AGE_QUESTION: {mode: "mul", "multiplier": 1.5},
    HEART_DISEASES_QUESTION: {mode: "mul", "multiplier": 1.5},
    HIGH_BLOOD_PRESSURE_QUESTION: {mode: "mul", "multiplier": 1.5},
    DIABETES_QUESTION: {mode: "mul", "multiplier": 1.5},
    LUNG_DISEASES_QUESTION: {mode: "mul", "multiplier": 1.5},
    ASTHMA_QUESTION: {mode: "mul", "multiplier": 1.5},
};

export const weights = {
    CoronavirusPossibility,
    RiskGroup
}
