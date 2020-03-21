export interface Post {
  body: string;
  id: number;
  title: string;
}

export type Option = {
    name: keyof QuestionTranslation;
    tip?: keyof QuestionTranslation;
    value: number;
}

type QuestionTranslation = typeof import("../public/locales/pl/questions.json")

export type Question = {
    name: keyof QuestionTranslation;
    description: keyof QuestionTranslation;
    generalInputType: "radio" | "input" | "checkbox" | "slider" | "boolean";
    answers?: Option[];
    inputProps?: any;
    settings?: any;
}; // TODO: change types to more specific

export type Answer = {
    question: keyof QuestionTranslation;
    choice: Option;
}

export type Weight = {
    multiplier: number;
    mode: 'add' | 'mul';
};

export type Weights = {
    [key: string]: Weight;
};
