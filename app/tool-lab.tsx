"use client";

import { useMemo, useState } from "react";

type ToolKey = "exergy" | "pump" | "intensity";

const tools: { key: ToolKey; label: string; description: string }[] = [
  {
    key: "exergy",
    label: "Heat exergy",
    description: "Estimate the maximum useful work associated with a heat transfer.",
  },
  {
    key: "pump",
    label: "Pump power",
    description: "Screen the hydraulic power and input power required by a pumping duty.",
  },
  {
    key: "intensity",
    label: "Energy intensity",
    description: "Normalize annual building energy use by floor area for a first comparison.",
  },
];

const Field = ({
  id,
  label,
  value,
  onChange,
  unit,
  min,
  max,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit: string;
  min?: number;
  max?: number;
}) => (
  <label className="tool-field" htmlFor={id}>
    <span>{label}</span>
    <span className="input-shell">
      <input
        id={id}
        type="number"
        value={value}
        min={min}
        max={max}
        step="any"
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <small>{unit}</small>
    </span>
  </label>
);

export default function ToolLab() {
  const [active, setActive] = useState<ToolKey>("exergy");
  const [sourceTemp, setSourceTemp] = useState(180);
  const [ambientTemp, setAmbientTemp] = useState(25);
  const [heat, setHeat] = useState(100);
  const [flow, setFlow] = useState(25);
  const [head, setHead] = useState(18);
  const [efficiency, setEfficiency] = useState(72);
  const [annualEnergy, setAnnualEnergy] = useState(850);
  const [area, setArea] = useState(5200);

  const result = useMemo(() => {
    if (active === "exergy") {
      const sourceK = sourceTemp + 273.15;
      const ambientK = ambientTemp + 273.15;
      const factor = sourceK > 0 ? 1 - ambientK / sourceK : 0;
      const valid = sourceK > ambientK && heat >= 0;
      return {
        value: valid ? heat * factor : 0,
        unit: "kW",
        detail: valid
          ? `Carnot factor: ${(factor * 100).toFixed(1)}%`
          : "The source temperature must be higher than the ambient temperature.",
      };
    }
    if (active === "pump") {
      const hydraulicKw = (1000 * 9.80665 * (flow / 1000) * head) / 1000;
      const inputKw = efficiency > 0 ? hydraulicKw / (efficiency / 100) : 0;
      return {
        value: inputKw,
        unit: "kW",
        detail: `Hydraulic power: ${hydraulicKw.toFixed(2)} kW`,
      };
    }
    const intensity = area > 0 ? (annualEnergy * 1000) / area : 0;
    return {
      value: intensity,
      unit: "kWh/m²·yr",
      detail: `${annualEnergy.toLocaleString()} MWh across ${area.toLocaleString()} m²`,
    };
  }, [active, sourceTemp, ambientTemp, heat, flow, head, efficiency, annualEnergy, area]);

  return (
    <div className="tool-lab">
      <div className="tool-tabs" role="tablist" aria-label="Engineering screening tools">
        {tools.map((tool) => (
          <button
            key={tool.key}
            type="button"
            role="tab"
            aria-selected={active === tool.key}
            onClick={() => setActive(tool.key)}
          >
            <span>{tool.label}</span>
            <small>{tool.description}</small>
          </button>
        ))}
      </div>

      <div className="tool-workspace" role="tabpanel">
        <div className="tool-inputs">
          {active === "exergy" && (
            <>
              <Field id="source-temp" label="Source temperature" value={sourceTemp} onChange={setSourceTemp} unit="°C" />
              <Field id="ambient-temp" label="Ambient temperature" value={ambientTemp} onChange={setAmbientTemp} unit="°C" />
              <Field id="heat-duty" label="Heat transfer" value={heat} onChange={setHeat} unit="kW" min={0} />
            </>
          )}
          {active === "pump" && (
            <>
              <Field id="flow" label="Volumetric flow" value={flow} onChange={setFlow} unit="L/s" min={0} />
              <Field id="head" label="Head" value={head} onChange={setHead} unit="m" min={0} />
              <Field id="efficiency" label="Pump efficiency" value={efficiency} onChange={setEfficiency} unit="%" min={1} max={100} />
            </>
          )}
          {active === "intensity" && (
            <>
              <Field id="annual-energy" label="Annual site energy" value={annualEnergy} onChange={setAnnualEnergy} unit="MWh/yr" min={0} />
              <Field id="area" label="Floor area" value={area} onChange={setArea} unit="m²" min={1} />
            </>
          )}
        </div>

        <output className="tool-result" aria-live="polite">
          <small>{active === "exergy" ? "Maximum useful work" : active === "pump" ? "Estimated input power" : "Site energy intensity"}</small>
          <strong>{Number.isFinite(result.value) ? result.value.toFixed(2) : "—"}</strong>
          <span>{result.unit}</span>
          <p>{result.detail}</p>
        </output>
      </div>
      <p className="tool-note">Educational screening estimates only. Confirm assumptions and use an appropriate engineering model for design decisions.</p>
    </div>
  );
}
