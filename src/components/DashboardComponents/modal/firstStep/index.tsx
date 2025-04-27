export function Step1({ onNext }: { onNext: () => void }) {
    return (
      <div>
        <h3>Etapa 1</h3>
        <button onClick={onNext}>Próximo</button>
      </div>
    );
  }