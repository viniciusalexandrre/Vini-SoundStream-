function Step2({ onNext, onBack  }: { onNext: () => void, onBack: () => void }) {
    return (
      <div>
        <h3>Etapa 2</h3>
        <button onClick={onBack}>Voltar</button>
        <button onClick={onNext}>Próximo</button>
      </div>
    );
  }