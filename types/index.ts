export interface Post {
  body: string;
  id: number;
  title: string;
}

export type Option = {
    name: QuestionTranslationKey;
    tip?: QuestionTranslationKey;
    value: number;
}

export type QuestionTranslations = typeof import("../public/locales/pl/questions.json");
export type QuestionTranslationKey = keyof QuestionTranslations;

export type Question = {
    name: QuestionTranslationKey;
    description: QuestionTranslationKey;
    generalInputType: "radio" | "input" | "checkbox" | "slider" | "boolean";
    answers: Option[];
    inputProps?: any;
    settings?: any;
}; // TODO: change types to more specific

export type Answer = {
    question: QuestionTranslationKey;
    choice: Option;
}

export type Weight = {
    multiplier: number;
    mode: 'add' | 'mul';
};

export type Weights = Partial<{
    [key in QuestionTranslationKey]: Weight;
}>;

export type FormResult = Partial<{
    [key in QuestionTranslationKey]: Option;
}>;

export type AssessmentTranslations = typeof import("../public/locales/pl/assessment.json");
export type AssessmentTranslationKey = keyof AssessmentTranslations;

export type Assessment = {
    title: AssessmentTranslationKey;
    value: number;
    recommendations: AssessmentTranslationKey[];
}
