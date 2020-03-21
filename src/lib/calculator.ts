
import { Answer, Weight } from '../../types';

export function calculateScore(answers: Answer[], weights: {[key: string]: Weight}): number {
    return answers.reduce((acc, {question, choice}) => {
        if (!(question in weights)) return acc;

        const weight = weights[question];
        switch(weight.mode) {
            case "add":
                return acc + choice.value * weight.multiplier;
            case "mul":
                return acc * choice.value * weight.multiplier;
        }
    }, 0);
}
