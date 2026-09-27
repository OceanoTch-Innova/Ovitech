type DigitalTwinVisualProps = { compact?: boolean };

export function DigitalTwinVisual({ compact = false }: DigitalTwinVisualProps) {
  return (
    <div className={`twin-visual ${compact ? "twin-visual--compact" : ""}`} aria-label="Diagrama conceptual de un Gemelo Digital">
      <div className="twin-visual__grid" />
      <svg className="twin-visual__lines" viewBox="0 0 620 540" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path className="twin-path twin-path--muted" d="M89 272C154 163 222 111 309 112c94 2 143 63 224 51" />
        <path className="twin-path twin-path--bright" d="M73 362C151 357 181 307 242 289c69-21 128 47 226 14 37-12 54-50 78-83" />
        <path className="twin-path twin-path--green" d="M145 124c40 71 109 80 156 162 33 58 98 62 153 18" />
        <path className="twin-path twin-path--dash" d="M110 437c55-13 75-87 144-97 79-10 106 82 216 82" />
      </svg>
      <div className="twin-node twin-node--source"><span>01</span><small>Sistema</small></div>
      <div className="twin-node twin-node--data"><span>02</span><small>Datos</small></div>
      <div className="twin-core"><div className="twin-core__orb"><i /><i /><i /></div><strong>Digital<br />Twin</strong><em>Modelo vivo</em></div>
      <div className="twin-node twin-node--simulate"><span>03</span><small>Simular</small></div>
      <div className="twin-node twin-node--predict"><span>04</span><small>Anticipar</small></div>
      <div className="twin-visual__label"><span className="status-dot" />Modelo conectado</div>
    </div>
  );
}
