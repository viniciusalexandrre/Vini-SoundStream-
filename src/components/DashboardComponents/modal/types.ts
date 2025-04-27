
export type Step = {
    id: number;
    title: string;
  };
  
  export type State = {
    currentStep: number;
    steps: Step[];
  };
  
  export type Action = 
    | { type: "NEXT_STEP" }
    | { type: "PREV_STEP" }
    | { type: "RESET" };