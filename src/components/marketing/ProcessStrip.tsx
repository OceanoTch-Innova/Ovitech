const process = ["Observe", "Model", "Simulate", "Predict", "Decide", "Verify"];

export function ProcessStrip() {
  return (
    <ol className="process-strip">
      {process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}
    </ol>
  );
}
