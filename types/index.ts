export interface Post {
  body: string;
  id: number;
  title: string;
}

export type Option = {
    name: string;
    value: number;
}

export type Question = {
    name: string;
    generalInputType: "radio" | "input" | "checkbox" | "slider" | "boolean";
    answers?: Option[];
    inputProps?: any;
    settings?: any;
}; // TODO: change types to more specific

export type Answer = {
    question: string;
    choice: Option;
}

export type Weight = {
    multiplier: number;
    mode: 'add' | 'mul';
};

export type Weights = {
    [key: string]: Weight;
};
