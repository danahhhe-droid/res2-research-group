"use client";

import { ReactNode, useMemo, useState } from "react";

type CategoryKey = "thermal" | "process" | "sustainable";
type ToolKey = "cop" | "physical" | "heat" | "pinch" | "ntu" | "lcoe" | "solar" | "wind";

const categories: { key: CategoryKey; label: string }[] = [
  { key: "thermal", label: "Thermal & Exergy" },
  { key: "process", label: "Process Integration" },
  { key: "sustainable", label: "Sustainable Energy" },
];

const tools: { key: ToolKey; category: CategoryKey; label: string; description: string }[] = [
  { key: "cop", category: "thermal", label: "COP", description: "Compare actual and ideal refrigeration or heat-pump performance." },
  { key: "physical", category: "thermal", label: "Physical exergy", description: "Estimate the specific exergy of a flowing stream relative to its environment." },
  { key: "heat", category: "thermal", label: "Exergy carried by heat", description: "Estimate the maximum useful work associated with heat transfer." },
  { key: "pinch", category: "process", label: "Composite curves", description: "Target utilities and explore curves for one hot and two cold streams." },
  { key: "ntu", category: "process", label: "Effectiveness–NTU", description: "Estimate heat-exchanger effectiveness, duty, and outlet temperatures." },
  { key: "lcoe", category: "sustainable", label: "LCOE", description: "Estimate the discounted levelized cost of electricity." },
  { key: "solar", category: "sustainable", label: "Solar power", description: "Screen photovoltaic peak power and annual energy production." },
  { key: "wind", category: "sustainable", label: "Wind power", description: "Compare available, Betz-limit, rotor, and electrical power." },
];

const Field = ({ id, label, value, onChange, unit, min, max }: { id: string; label: string; value: number; onChange: (value: number) => void; unit: string; min?: number; max?: number }) => (
  <label className="tool-field" htmlFor={id}><span>{label}</span><span className="input-shell"><input id={id} type="number" value={value} min={min} max={max} step="any" onChange={(event) => onChange(Number(event.target.value))} /><small>{unit}</small></span></label>
);

const SelectField = ({ id, label, value, onChange, options }: { id: string; label: string; value: string; onChange: (value: string) => void; options: { value: string; label: string }[] }) => (
  <label className="tool-field" htmlFor={id}><span>{label}</span><span className="input-shell select-shell"><select id={id} value={value} onChange={(event) => onChange(event.target.value)}>{options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select></span></label>
);

function ResultPanel({ title, value, unit, details, children }: { title: string; value: number; unit: string; details: string[]; children?: ReactNode }) {
  return <output className="tool-result"><small>{title}</small><strong>{Number.isFinite(value) ? value.toFixed(2) : "—"}</strong><span>{unit}</span><div className="tool-result-details">{details.map((detail) => <p key={detail}>{detail}</p>)}</div>{children}</output>;
}

function CurveChart({ hot, cold, gcc }: { hot: [number, number][]; cold: [number, number][]; gcc: [number, number][] }) {
  const composite = [...hot, ...cold];
  const maxX = Math.max(1, ...composite.map(([x]) => x));
  const minT = Math.min(...composite.map(([, y]) => y));
  const maxT = Math.max(minT + 1, ...composite.map(([, y]) => y));
  const maxG = Math.max(1, ...gcc.map(([x]) => x));
  const minGT = Math.min(...gcc.map(([, y]) => y));
  const maxGT = Math.max(minGT + 1, ...gcc.map(([, y]) => y));
  const points = (data: [number, number][], left: number, width: number, xMax: number, low: number, high: number) => data.map(([x, y]) => `${left + (x / xMax) * width},${174 - ((y - low) / (high - low)) * 128}`).join(" ");
  return <figure className="curve-chart" aria-label="Composite and grand composite curves"><svg viewBox="0 0 600 210" role="img"><line x1="42" y1="174" x2="342" y2="174" /><line x1="42" y1="46" x2="42" y2="174" /><polyline className="curve-hot" points={points(hot, 42, 300, maxX, minT, maxT)} /><polyline className="curve-cold" points={points(cold, 42, 300, maxX, minT, maxT)} /><line x1="400" y1="174" x2="570" y2="174" /><line x1="400" y1="46" x2="400" y2="174" /><polyline className="curve-gcc" points={points(gcc, 400, 170, maxG, minGT, maxGT)} /><text x="42" y="24">Composite curves</text><text x="400" y="24">Grand composite</text><text className="axis-label" x="160" y="201">Cumulative heat</text><text className="axis-label" x="442" y="201">Net heat</text></svg><figcaption><span className="legend-hot">Hot</span><span className="legend-cold">Cold</span><span className="legend-gcc">Grand composite</span></figcaption></figure>;
}

export default function ToolLab() {
  const [category, setCategory] = useState<CategoryKey>("thermal");
  const [active, setActive] = useState<ToolKey>("cop");
  const [copMode, setCopMode] = useState("refrigerator"); const [usefulHeat, setUsefulHeat] = useState(12); const [work, setWork] = useState(4); const [coldTemp, setColdTemp] = useState(5); const [hotTemp, setHotTemp] = useState(35);
  const [h, setH] = useState(325); const [h0, setH0] = useState(105); const [s, setS] = useState(1.05); const [s0, setS0] = useState(.37); const [deadTemp, setDeadTemp] = useState(25); const [velocity, setVelocity] = useState(0); const [elevation, setElevation] = useState(0);
  const [sourceTemp, setSourceTemp] = useState(180); const [ambientTemp, setAmbientTemp] = useState(25); const [heat, setHeat] = useState(100);
  const [hotSupply, setHotSupply] = useState(180); const [hotTarget, setHotTarget] = useState(60); const [hotCp, setHotCp] = useState(2);
  const [cold1Supply, setCold1Supply] = useState(20); const [cold1Target, setCold1Target] = useState(120); const [cold1Cp, setCold1Cp] = useState(1.2);
  const [cold2Supply, setCold2Supply] = useState(80); const [cold2Target, setCold2Target] = useState(150); const [cold2Cp, setCold2Cp] = useState(1.5); const [deltaTmin, setDeltaTmin] = useState(20);
  const [arrangement, setArrangement] = useState("counter"); const [ua, setUa] = useState(4); const [hotCapacity, setHotCapacity] = useState(6); const [coldCapacity, setColdCapacity] = useState(4); const [hxHotIn, setHxHotIn] = useState(140); const [hxColdIn, setHxColdIn] = useState(25);
  const [capital, setCapital] = useState(1500000); const [annualOm, setAnnualOm] = useState(45000); const [annualFuel, setAnnualFuel] = useState(0); const [annualMwh, setAnnualMwh] = useState(1800); const [life, setLife] = useState(25); const [discount, setDiscount] = useState(6); const [degradation, setDegradation] = useState(.5);
  const [solarArea, setSolarArea] = useState(500); const [irradiance, setIrradiance] = useState(1000); const [panelEfficiency, setPanelEfficiency] = useState(21); const [performanceRatio, setPerformanceRatio] = useState(80); const [sunHours, setSunHours] = useState(4.5);
  const [rotorDiameter, setRotorDiameter] = useState(40); const [windSpeed, setWindSpeed] = useState(8); const [airDensity, setAirDensity] = useState(1.225); const [powerCoefficient, setPowerCoefficient] = useState(42); const [driveEfficiency, setDriveEfficiency] = useState(92);

  const results = useMemo(() => {
    const tc = coldTemp + 273.15, th = hotTemp + 273.15;
    const actualCop = work > 0 ? usefulHeat / work : NaN;
    const idealCop = th > tc && tc > 0 ? (copMode === "refrigerator" ? tc / (th - tc) : th / (th - tc)) : NaN;
    const physical = (h - h0) - (deadTemp + 273.15) * (s - s0) + velocity ** 2 / 2000 + 9.80665 * elevation / 1000;
    const heatFactor = sourceTemp + 273.15 > 0 ? 1 - (ambientTemp + 273.15) / (sourceTemp + 273.15) : NaN;
    const shiftedHot: [number, number, number] = [hotSupply - deltaTmin / 2, hotTarget - deltaTmin / 2, hotCp];
    const shiftedCold: [number, number, number][] = [[cold1Supply + deltaTmin / 2, cold1Target + deltaTmin / 2, cold1Cp], [cold2Supply + deltaTmin / 2, cold2Target + deltaTmin / 2, cold2Cp]];
    const shiftedTemps = Array.from(new Set([shiftedHot[0], shiftedHot[1], ...shiftedCold.flatMap((stream) => [stream[0], stream[1]])])).sort((a, b) => b - a);
    let cascade = 0, minimum = 0; const intervalChanges: number[] = [];
    for (let i = 0; i < shiftedTemps.length - 1; i++) { const upper = shiftedTemps[i], lower = shiftedTemps[i + 1], middle = (upper + lower) / 2; const hotActive = middle <= Math.max(shiftedHot[0], shiftedHot[1]) && middle >= Math.min(shiftedHot[0], shiftedHot[1]) ? shiftedHot[2] : 0; const coldActive = shiftedCold.reduce((sum, stream) => sum + (middle <= Math.max(stream[0], stream[1]) && middle >= Math.min(stream[0], stream[1]) ? stream[2] : 0), 0); const change = (hotActive - coldActive) * (upper - lower); intervalChanges.push(change); cascade += change; minimum = Math.min(minimum, cascade); }
    const qhMin = Math.max(0, -minimum); let residual = qhMin; const gcc: [number, number][] = [[residual, shiftedTemps[0]]]; let pinchShifted = shiftedTemps[0];
    intervalChanges.forEach((change, i) => { residual += change; gcc.push([Math.max(0, residual), shiftedTemps[i + 1]]); if (Math.abs(residual) < 1e-7) pinchShifted = shiftedTemps[i + 1]; });
    const qcMin = Math.max(0, residual); const hotDuty = Math.max(0, hotCp * (hotSupply - hotTarget)); const hotCurve: [number, number][] = [[0, hotTarget], [hotDuty, hotSupply]];
    const coldTemps = Array.from(new Set([cold1Supply, cold1Target, cold2Supply, cold2Target])).sort((a, b) => a - b); let coldQ = qhMin; const coldCurve: [number, number][] = [[coldQ, coldTemps[0]]];
    for (let i = 0; i < coldTemps.length - 1; i++) { const low = coldTemps[i], high = coldTemps[i + 1], middle = (low + high) / 2; const cp = (middle >= cold1Supply && middle <= cold1Target ? cold1Cp : 0) + (middle >= cold2Supply && middle <= cold2Target ? cold2Cp : 0); coldQ += cp * (high - low); coldCurve.push([coldQ, high]); }
    const cmin = Math.min(hotCapacity, coldCapacity), cmax = Math.max(hotCapacity, coldCapacity), cr = cmax > 0 ? cmin / cmax : NaN, ntu = cmin > 0 ? ua / cmin : NaN; let effectiveness = NaN;
    if (Number.isFinite(ntu) && Number.isFinite(cr)) { if (arrangement === "parallel") effectiveness = (1 - Math.exp(-ntu * (1 + cr))) / (1 + cr); else effectiveness = Math.abs(1 - cr) < 1e-8 ? ntu / (1 + ntu) : (1 - Math.exp(-ntu * (1 - cr))) / (1 - cr * Math.exp(-ntu * (1 - cr))); }
    const hxDuty = effectiveness * cmin * (hxHotIn - hxColdIn);
    const years = Math.max(1, Math.round(life)); let pvEnergy = 0, pvCost = Math.max(0, capital);
    for (let year = 1; year <= years; year++) { const factor = (1 + discount / 100) ** year; pvEnergy += Math.max(0, annualMwh) * (1 - degradation / 100) ** (year - 1) / factor; pvCost += (Math.max(0, annualOm) + Math.max(0, annualFuel)) / factor; }
    const lcoe = pvEnergy > 0 ? pvCost / pvEnergy : NaN; const solarPeak = solarArea * irradiance * panelEfficiency / 100 / 1000; const solarAnnual = solarPeak * sunHours * 365 * performanceRatio / 100;
    const rotorArea = Math.PI * (rotorDiameter / 2) ** 2; const windAvailable = .5 * airDensity * rotorArea * windSpeed ** 3 / 1000; const windElectric = windAvailable * powerCoefficient / 100 * driveEfficiency / 100;
    return { actualCop, idealCop, physical, heatFactor, heatExergy: heat * heatFactor, qhMin, qcMin, pinchShifted, hotCurve, coldCurve, gcc, effectiveness, ntu, hxDuty, hxHotOut: hxHotIn - hxDuty / hotCapacity, hxColdOut: hxColdIn + hxDuty / coldCapacity, lcoe, pvCost, pvEnergy, solarPeak, solarAnnual, windAvailable, windBetz: windAvailable * .593, windRotor: windAvailable * powerCoefficient / 100, windElectric };
  }, [copMode, usefulHeat, work, coldTemp, hotTemp, h, h0, s, s0, deadTemp, velocity, elevation, sourceTemp, ambientTemp, heat, hotSupply, hotTarget, hotCp, cold1Supply, cold1Target, cold1Cp, cold2Supply, cold2Target, cold2Cp, deltaTmin, arrangement, ua, hotCapacity, coldCapacity, hxHotIn, hxColdIn, capital, annualOm, annualFuel, annualMwh, life, discount, degradation, solarArea, irradiance, panelEfficiency, performanceRatio, sunHours, rotorDiameter, windSpeed, airDensity, powerCoefficient, driveEfficiency]);

  const categoryTools = tools.filter((tool) => tool.category === category);
  const chooseCategory = (next: CategoryKey) => { setCategory(next); setActive(tools.find((tool) => tool.category === next)!.key); };

  return <div className="tool-lab"><div className="tool-categories" aria-label="Calculator categories">{categories.map((item) => <button key={item.key} className={category === item.key ? "active" : ""} onClick={() => chooseCategory(item.key)}>{item.label}</button>)}</div><div className="tool-tabs" style={{ gridTemplateColumns: `repeat(${categoryTools.length}, minmax(0, 1fr))` }}>{categoryTools.map((tool) => <button key={tool.key} aria-selected={active === tool.key} onClick={() => setActive(tool.key)}><span>{tool.label}</span><small>{tool.description}</small></button>)}</div><div className="tool-workspace"><div className="tool-inputs">
    {active === "cop" && <><SelectField id="cop-mode" label="System" value={copMode} onChange={setCopMode} options={[{ value: "refrigerator", label: "Refrigerator / chiller" }, { value: "heatpump", label: "Heat pump" }]} /><Field id="useful-heat" label={copMode === "refrigerator" ? "Cooling load" : "Heating delivered"} value={usefulHeat} onChange={setUsefulHeat} unit="kW" min={0} /><Field id="cop-work" label="Power input" value={work} onChange={setWork} unit="kW" min={0} /><Field id="cold-temp" label="Cold-side temperature" value={coldTemp} onChange={setColdTemp} unit="°C" /><Field id="hot-temp" label="Hot-side temperature" value={hotTemp} onChange={setHotTemp} unit="°C" /></>}
    {active === "physical" && <><Field id="h" label="Stream enthalpy, h" value={h} onChange={setH} unit="kJ/kg" /><Field id="h0" label="Reference enthalpy, h₀" value={h0} onChange={setH0} unit="kJ/kg" /><Field id="s" label="Stream entropy, s" value={s} onChange={setS} unit="kJ/kg·K" /><Field id="s0" label="Reference entropy, s₀" value={s0} onChange={setS0} unit="kJ/kg·K" /><Field id="dead-temp" label="Reference temperature, T₀" value={deadTemp} onChange={setDeadTemp} unit="°C" /><Field id="velocity" label="Velocity" value={velocity} onChange={setVelocity} unit="m/s" min={0} /><Field id="elevation" label="Elevation above reference" value={elevation} onChange={setElevation} unit="m" /></>}
    {active === "heat" && <><Field id="source-temp" label="Boundary temperature" value={sourceTemp} onChange={setSourceTemp} unit="°C" /><Field id="ambient-temp" label="Reference temperature" value={ambientTemp} onChange={setAmbientTemp} unit="°C" /><Field id="heat-rate" label="Heat-transfer rate" value={heat} onChange={setHeat} unit="kW" min={0} /></>}
    {active === "pinch" && <><div className="tool-stream-label">Hot stream</div><Field id="hot-supply" label="Supply temperature" value={hotSupply} onChange={setHotSupply} unit="°C" /><Field id="hot-target" label="Target temperature" value={hotTarget} onChange={setHotTarget} unit="°C" /><Field id="hot-cp" label="Heat-capacity flow rate" value={hotCp} onChange={setHotCp} unit="kW/K" min={0} /><div className="tool-stream-label">Cold stream 1</div><Field id="cold1-supply" label="Supply temperature" value={cold1Supply} onChange={setCold1Supply} unit="°C" /><Field id="cold1-target" label="Target temperature" value={cold1Target} onChange={setCold1Target} unit="°C" /><Field id="cold1-cp" label="Heat-capacity flow rate" value={cold1Cp} onChange={setCold1Cp} unit="kW/K" min={0} /><div className="tool-stream-label">Cold stream 2</div><Field id="cold2-supply" label="Supply temperature" value={cold2Supply} onChange={setCold2Supply} unit="°C" /><Field id="cold2-target" label="Target temperature" value={cold2Target} onChange={setCold2Target} unit="°C" /><Field id="cold2-cp" label="Heat-capacity flow rate" value={cold2Cp} onChange={setCold2Cp} unit="kW/K" min={0} /><Field id="dtmin" label="Minimum approach, ΔTmin" value={deltaTmin} onChange={setDeltaTmin} unit="°C" min={0} /></>}
    {active === "ntu" && <><SelectField id="arrangement" label="Flow arrangement" value={arrangement} onChange={setArrangement} options={[{ value: "counter", label: "Counterflow" }, { value: "parallel", label: "Parallel flow" }]} /><Field id="ua" label="Overall conductance, UA" value={ua} onChange={setUa} unit="kW/K" min={0} /><Field id="hot-capacity" label="Hot capacity rate, Cₕ" value={hotCapacity} onChange={setHotCapacity} unit="kW/K" min={0} /><Field id="cold-capacity" label="Cold capacity rate, C𝒸" value={coldCapacity} onChange={setColdCapacity} unit="kW/K" min={0} /><Field id="hx-hot-in" label="Hot inlet temperature" value={hxHotIn} onChange={setHxHotIn} unit="°C" /><Field id="hx-cold-in" label="Cold inlet temperature" value={hxColdIn} onChange={setHxColdIn} unit="°C" /></>}
    {active === "lcoe" && <><Field id="capital" label="Initial capital cost" value={capital} onChange={setCapital} unit="$" min={0} /><Field id="annual-om" label="Annual operations & maintenance" value={annualOm} onChange={setAnnualOm} unit="$/yr" min={0} /><Field id="annual-fuel" label="Annual fuel cost" value={annualFuel} onChange={setAnnualFuel} unit="$/yr" min={0} /><Field id="annual-mwh" label="First-year electricity generation" value={annualMwh} onChange={setAnnualMwh} unit="MWh" min={0} /><Field id="life" label="Project life" value={life} onChange={setLife} unit="years" min={1} /><Field id="discount" label="Real discount rate" value={discount} onChange={setDiscount} unit="%" min={0} /><Field id="degradation" label="Annual output degradation" value={degradation} onChange={setDegradation} unit="%" min={0} max={100} /></>}
    {active === "solar" && <><Field id="solar-area" label="Active panel area" value={solarArea} onChange={setSolarArea} unit="m²" min={0} /><Field id="irradiance" label="Design irradiance" value={irradiance} onChange={setIrradiance} unit="W/m²" min={0} /><Field id="panel-eff" label="Module efficiency" value={panelEfficiency} onChange={setPanelEfficiency} unit="%" min={0} max={100} /><Field id="performance-ratio" label="System performance ratio" value={performanceRatio} onChange={setPerformanceRatio} unit="%" min={0} max={100} /><Field id="sun-hours" label="Average peak-sun hours" value={sunHours} onChange={setSunHours} unit="h/day" min={0} max={24} /></>}
    {active === "wind" && <><Field id="rotor-diameter" label="Rotor diameter" value={rotorDiameter} onChange={setRotorDiameter} unit="m" min={0} /><Field id="wind-speed" label="Wind speed" value={windSpeed} onChange={setWindSpeed} unit="m/s" min={0} /><Field id="air-density" label="Air density" value={airDensity} onChange={setAirDensity} unit="kg/m³" min={0} /><Field id="power-coefficient" label="Power coefficient, Cₚ" value={powerCoefficient} onChange={setPowerCoefficient} unit="%" min={0} max={59.3} /><Field id="drive-eff" label="Generator and drivetrain efficiency" value={driveEfficiency} onChange={setDriveEfficiency} unit="%" min={0} max={100} /></>}
  </div>
    {active === "cop" && <ResultPanel title="Actual coefficient of performance" value={results.actualCop} unit="COP" details={[`Ideal Carnot COP: ${results.idealCop.toFixed(2)}`, `Actual / ideal: ${(100 * results.actualCop / results.idealCop).toFixed(1)}%`]} />}
    {active === "physical" && <ResultPanel title="Specific physical exergy" value={results.physical} unit="kJ/kg" details={["eᴾᴴ = (h − h₀) − T₀(s − s₀) + V²/2 + gz", "Use properties evaluated at consistent reference conditions."]} />}
    {active === "heat" && <ResultPanel title="Exergy carried by heat" value={results.heatExergy} unit="kW" details={[`Exergy factor: ${(results.heatFactor * 100).toFixed(1)}%`, "Based on heat transfer at a constant boundary temperature."]} />}
    {active === "pinch" && <ResultPanel title="Minimum hot utility" value={results.qhMin} unit="kW" details={[`Minimum cold utility: ${results.qcMin.toFixed(2)} kW`, `Pinch shifted temperature: ${results.pinchShifted.toFixed(1)} °C`]}><CurveChart hot={results.hotCurve} cold={results.coldCurve} gcc={results.gcc} /></ResultPanel>}
    {active === "ntu" && <ResultPanel title="Heat-transfer rate" value={results.hxDuty} unit="kW" details={[`Effectiveness: ${(results.effectiveness * 100).toFixed(1)}% · NTU: ${results.ntu.toFixed(2)}`, `Outlet temperatures: hot ${results.hxHotOut.toFixed(1)} °C · cold ${results.hxColdOut.toFixed(1)} °C`]} />}
    {active === "lcoe" && <ResultPanel title="Levelized cost of electricity" value={results.lcoe} unit="$/MWh" details={[`Present-value cost: $${results.pvCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}`, `Present-value generation: ${results.pvEnergy.toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh`]} />}
    {active === "solar" && <ResultPanel title="Estimated annual electricity" value={results.solarAnnual} unit="kWh/year" details={[`Rated DC peak power: ${results.solarPeak.toFixed(1)} kW`, "Annual output uses peak-sun hours and the selected performance ratio."]} />}
    {active === "wind" && <ResultPanel title="Estimated electrical power" value={results.windElectric} unit="kW" details={[`Available in wind: ${results.windAvailable.toFixed(1)} kW · Betz limit: ${results.windBetz.toFixed(1)} kW`, `Rotor power: ${results.windRotor.toFixed(1)} kW`]} />}
  </div><p className="tool-note">Educational and early-stage screening only. Results depend on the entered assumptions and should be verified with an appropriate engineering model before design decisions.</p></div>;
}
