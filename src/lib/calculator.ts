
import { Weight, FormResult } from '../../types';
import { weights } from './weights';

export function calculateScore(answers: FormResult, weights: {[key: string]: Weight}): number {
    return Object.entries(answers).reduce((acc, [question, choice]) => {
        if (!(question in weights)) return acc;

        const weight = weights[question];
        switch(weight.mode) {
            case "add":
                return acc + choice.value * weight.multiplier;
            case "mul":
                return acc * (choice.value ? choice.value * weight.multiplier : 1);
        }
    }, 0);
}

export function assessResult(input: FormResult): {[assessmentName: string]: number} {
    const result: {[assessmentName: string]: number} = {};

    for (const [assessmentName, groupWeights] of Object.entries(weights)) {
        result[assessmentName] = calculateScore(input, groupWeights);
    }

    return result;
}
