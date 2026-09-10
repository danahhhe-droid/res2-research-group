"use client";

import { useState } from "react";

const applications = [
  {
    id: "equipment",
    title: "Equipment",
    examples: "Heat exchangers · chillers · heat pumps · thermal storage",
  },
  {
    id: "buildings",
    title: "Buildings & Facilities",
    examples: "HVAC · comfort · heat recovery · building performance",
  },
  {
    id: "power",
    title: "Power & Energy Systems",
    examples: "Power generation · renewables · storage · hydrogen · biomass",
  },
  {
    id: "industry",
    title: "Industrial Processes",
    examples: "Process integration · waste heat · carbon capture · decarbonization",
  },
  {
    id: "digital",
    title: "Digital Infrastructure",
    examples: "Data centers · advanced cooling · energy–water systems · digital twins",
  },
  {
    id: "communities",
    title: "Communities & Regional Systems",
    examples: "Transportation · district energy · spatial analysis · resilience planning",
  },
];

export function Res2ConceptMap() {
  const [active, setActive] = useState<string | null>(null);
  const selected = applications.find((item) => item.id === active);

  return (
    <div className="res2-map" aria-label="Interactive RES squared research concept map">
      <div className="capacity-ring" aria-hidden="true" />
      <p className="capacity-label"><span>Workforce &amp; Scientific</span><span>Capacity Development</span></p>
      <div className="map-connections" aria-hidden="true">
        {applications.map((item) => <i className={`connector connector-${item.id}`} key={item.id} />)}
      </div>

      <div className="map-core">
        <strong>RES<sup>2</sup></strong>
        <small>Research in Energy Systems<br />&amp; Sustainability</small>
        <div className="core-methods">
          <span>Thermodynamics</span>
          <span>Process integration</span>
          <span>Systems analysis</span>
        </div>
      </div>

      {applications.map((item) => (
        <button
          type="button"
          key={item.id}
          className={`map-node map-node-${item.id}${active === item.id ? " is-active" : ""}`}
          aria-expanded={active === item.id}
          aria-controls="map-detail"
          onMouseEnter={() => setActive(item.id)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(item.id)}
          onBlur={() => setActive(null)}
          onClick={() => setActive(active === item.id ? null : item.id)}
        >
          <span>{item.title}</span>
        </button>
      ))}

      <div id="map-detail" className={`map-detail${selected ? " is-visible" : ""}`} aria-live="polite">
        {selected ? (
          <><strong>{selected.title}</strong><span>{selected.examples}</span></>
        ) : (
          <><strong>Applications across scales</strong><span>Hover, focus, or tap an area to explore examples.</span></>
        )}
      </div>
    </div>
  );
}
