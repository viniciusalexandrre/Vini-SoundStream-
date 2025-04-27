export function Step3({ onFinish }: { onFinish: () => void }) {
    return (
      <div>
        <h3>Etapa 3</h3>
        <button onClick={onFinish}>Finalizar</button>
      </div>
    );
  }