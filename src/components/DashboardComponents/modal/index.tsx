// components/MultiStepModal/MultiStepModal.tsx
"use client";
import { useReducer } from "react";
import { reducer, initialState } from "./reducer";
import "./modal.module.scss";

export const MultiStepModal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Stepper */}
        <div className="modal__stepper">
          {state.steps.map((step) => (
            <div key={step.id} className="modal__step">
              <div
                className={`modal__step-number 
                  ${state.currentStep === step.id ? "modal__step-number--active" : ""}
                  ${state.currentStep > step.id ? "modal__step-number--completed" : ""}
                `}
              >
                {state.currentStep > step.id ? "✓" : step.id}
              </div>
              <span className="modal__step-title">{step.title}</span>
            </div>
          ))}
        </div>

        {/* Conteúdo Dinâmico */}
        <div className="modal__content">
          <p>Etapa {state.currentStep}</p>
        </div>

        {/* Botões */}
        <div className="modal__actions">
          <button 
            onClick={() => dispatch({ type: "PREV_STEP" })}
            disabled={state.currentStep === 1}
          >
            Voltar
          </button>
          <button 
            onClick={() => dispatch({ type: "NEXT_STEP" })}
            disabled={state.currentStep === state.steps.length}
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};