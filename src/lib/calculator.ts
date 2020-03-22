
import { Weight, FormResult, Assessment, AssessmentTranslationKey } from '../../types';
import { weights } from './weights';
import { questions } from './questions';


export function calculateScore(answers: FormResult, weights: {[key: string]: Weight}): number {
    const max = questions.reduce((acc, question) => {
        if (!(question.name in weights)) return acc;

        const weight = weights[question.name];
        const maxChoice = Math.max(...question.answers.map(x => x.value));
        if (weight.mode === 'add') return acc + maxChoice * weight.multiplier;
        else return acc;
    }, 1);

    return Object.entries(answers).reduce((acc, [question, choice]) => {
        if (!(question in weights) || !choice) return acc;

        const weight = weights[question];
        switch(weight.mode) {
            case "add":
                return acc + choice.value * weight.multiplier;
            case "mul":
                return acc * (choice.value ? choice.value * weight.multiplier : 1);
        }
    }, 1) / max;
}

type AssessmentGroup = {
    [key in keyof typeof weights]: number;
};

export function assessResult(input: FormResult): AssessmentGroup {
    return {
        CoronavirusPossibility: calculateScore(input, weights.CoronavirusPossibility),
        RiskGroup: calculateScore(input, weights.RiskGroup),
    };
}

export function createRecommendation(assessments: AssessmentGroup): Assessment {
    const value = assessments.CoronavirusPossibility;
    const risk = assessments.RiskGroup;
    let title: AssessmentTranslationKey = "TITLE_HEALTHY";

    if (value > .7) title = "TITLE_INFECTED";
    else if (value > .4) title = "TITLE_AMBIGUOUS";

    const recommendations: AssessmentTranslationKey[] = [];

    if (value < .2) {
        recommendations.push("RECOMMENDATION_WASH_HANDS", "RECOMMENDATION_AVOID_CROWDS", "RECOMMENDATION_LIMIT_TRAVEL", "RECOMMENDATION_KEEP_SOCIAL_DISTANCE");
        if (risk > 1) recommendations.push("RECOMMENDATION_ASK_FRIENDS_OR_FAMILY_TO_DO_SHOPPING", "RECOMMENDATION_MONITOR_YOURSELF", "RECOMMENDATION_WEAR_GLOVES_AND_MASK_WHEN_CONTACTING_OTHERS");
    } else if (value < .6) {
        if (risk > 1) recommendations.push("RECOMMENDATION_CALL_INFORMATION");
        recommendations.push("RECOMMENDATION_WASH_HANDS","RECOMMENDATION_COUGH_SNEEZE_TISSUE","RECOMMENDATION_KEEP_SOCIAL_DISTANCE","RECOMMENDATION_MONITOR_YOURSELF","RECOMMENDATION_ORGANIZE_PET_SITTER","RECOMMENDATION_ASK_FRIENDS_OR_FAMILY_TO_DO_SHOPPING", "RECOMMENDATION_STRICT_QUARANTINE", "RECOMMENDATION_CALL_INFORMATION_WHEN_SYMPTOMS_OCCUR");
    } else {
        if (risk <= 1) recommendations.push("RECOMMENDATION_CALL_INFORMATION");
        else recommendations.push("RECOMMENDATION_CALL_EMERGENCY_NUMBER");
        recommendations.push("RECOMMENDATION_WASH_HANDS","RECOMMENDATION_COUGH_SNEEZE_TISSUE","RECOMMENDATION_KEEP_SOCIAL_DISTANCE","RECOMMENDATION_MONITOR_YOURSELF","RECOMMENDATION_ORGANIZE_PET_SITTER","RECOMMENDATION_ASK_FRIENDS_OR_FAMILY_TO_DO_SHOPPING", "RECOMMENDATION_PREPARE_LIST_OF_SYMPTOMS", "RECOMMENDATION_CALL_INFORMATION");
    }

    return {
        title,
        value,
        recommendations
    }
}
