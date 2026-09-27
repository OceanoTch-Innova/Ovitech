type ArchitectureFlowProps = {
  steps: string[];
  compact?: boolean;
};

export function ArchitectureFlow({ steps, compact = false }: ArchitectureFlowProps) {
  return (
    <ol className={`architecture-flow ${compact ? "architecture-flow--compact" : ""}`}>
      {steps.map((step, index) => (
        <li key={step}>
          <span className="architecture-flow__number">{String(index + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
        </li>
      ))}
    </ol>
  );
}
