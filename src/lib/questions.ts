export type Question = {
    name: string;
    generalInputType: "input" | "checkbox";
    answers?: string[];
    inputProps: any;
    settings: any;
}; // TODO: change types to more specific

export const questions: Question[] = [
    {
        name: "WHATS_YOUR_AGE",
        generalInputType: "input", // render in Field component depends on it
        inputProps: {
            type: "number",
            min: 0,
            max: 100
        },
        settings: {
            // object used in react-hook-form register function
            validate: (value: any): boolean => {
                const age = parseInt(value);
                return !isNaN(age) && Math.floor(age) === age && age > 0;
            }
        }
    },
    {
        name: "SOME_OPTIONS",
        generalInputType: "checkbox", // render in Field component depends on it
        answers: ["OPT_ONE", "OPT_TWO", "OPT_THREE"],
        inputProps: {
            // type: 'number',
            // min: 0,
            // max: 100
        },
        settings: {
            // object used in react-hook-form register function
            // validate: (value: any): boolean => {
            //     const age = parseInt(value)
            //     return !isNaN(age) && Math.floor(age) === age && age > 0
            // }
        }
    }
];
