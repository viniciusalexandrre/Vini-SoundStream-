import { Action, State } from "./types";


export const initialState: State = {
    currentStep: 1,
    steps: [
    { id: 1, title: "Configuração" },
    { id: 2, title: "Personalização" },
    { id: 3, title: "Confirmação" },
    ]
}

export function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "NEXT_STEP":
        return {
          ...state,
          currentStep: state.currentStep < state.steps.length 
            ? state.currentStep + 1 
            : state.currentStep,
        };
      case "PREV_STEP":
        return {
          ...state,
          currentStep: state.currentStep > 1 
            ? state.currentStep - 1 
            : state.currentStep,
        };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  }