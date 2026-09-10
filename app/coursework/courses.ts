export type Course = {
  slug: string;
  code: string;
  title: string;
  category: "process" | "fundamentals";
  summary: string;
  description: string;
  focus: string[];
  applications: string[];
};

export const courses: Course[] = [
  {
    slug: "sustainable-energy-systems",
    code: "SLU · MENG 4930 / 5720",
    title: "Sustainable Energy Systems",
    category: "process",
    summary: "Sustainable energy resources, systems thinking, economics, environmental performance, and engineering decisions across interconnected energy systems.",
    description: "This undergraduate and graduate course evaluates energy technologies as parts of larger technical, economic, environmental, and social systems. Students compare alternatives, quantify performance, and communicate defensible engineering recommendations.",
    focus: ["Energy resources and conversion", "Systems thinking and sustainability", "Economics and levelized cost", "Environmental and community impacts"],
    applications: ["Utility generation and resource planning", "Renewable-energy project evaluation", "Industrial and institutional decarbonization", "Community energy and resilience planning"],
  },
  {
    slug: "thermal-systems-design",
    code: "SLU · MENG 4304",
    title: "Thermal Systems Design",
    category: "process",
    summary: "Thermodynamics, heat transfer, system modeling, economics, and open-ended design applied to feasible thermal-system concepts.",
    description: "A senior design experience in which teams move from stakeholder needs to requirements, concepts, analysis, selection, and verification. Technical rigor is integrated with economic, environmental, safety, and implementation considerations.",
    focus: ["Requirements and stakeholder analysis", "Thermodynamic cycle design", "Heat-transfer equipment", "Economics, tradeoffs, and verification"],
    applications: ["HVAC and building thermal systems", "Power and cogeneration systems", "Refrigeration and heat-pump systems", "Industrial heat recovery and waste-heat use"],
  },
  {
    slug: "energy-systems-analysis-optimization",
    code: "SLU · MENG 4930 / 5930",
    title: "Energy Systems Analysis and Optimization",
    category: "process",
    summary: "Pinch analysis, heat integration, energy targeting, process optimization, and systematic improvement of energy-intensive systems.",
    description: "Students learn to identify minimum utility targets and develop heat-recovery strategies before committing to equipment design. Pinch analysis is paired with engineering economics and optimization to evaluate realistic improvement pathways.",
    focus: ["Pinch analysis", "Heat-exchanger networks", "Energy and utility targeting", "Optimization and decision support"],
    applications: ["Refineries and chemical plants", "Food, beverage, and biofuel processing", "District and campus energy systems", "Industrial decarbonization studies"],
  },
  {
    slug: "thermodynamics",
    code: "SLU · MENG 2310 / UGTO · BFT-04",
    title: "Thermodynamics",
    category: "process",
    summary: "Energy, entropy, properties, cycles, and the first and second laws as foundations for analyzing engineering systems.",
    description: "Thermodynamics develops the energy and entropy balances used to understand processes and cycles. Emphasis is placed on physical interpretation, appropriate assumptions, property evaluation, and verification of engineering results.",
    focus: ["Properties and state relations", "Mass and energy balances", "Entropy and the second law", "Power and refrigeration cycles"],
    applications: ["Power plants and propulsion", "Compressors, turbines, and pumps", "Refrigeration and air conditioning", "Process heating and energy conversion"],
  },
  {
    slug: "heat-transfer",
    code: "SLU · MENG 4310",
    title: "Heat Transfer",
    category: "process",
    summary: "Conduction, convection, radiation, heat exchangers, and thermal analysis for equipment and system design.",
    description: "The course connects heat-transfer fundamentals with the analysis and sizing of thermal equipment. Students model temperature fields, thermal resistance, convection behavior, radiation exchange, and heat-exchanger performance.",
    focus: ["Steady and transient conduction", "Internal and external convection", "Thermal radiation", "Heat-exchanger analysis"],
    applications: ["Heat exchangers and boilers", "Electronics and data-center cooling", "Building envelopes and HVAC", "Manufacturing and thermal processing"],
  },
  {
    slug: "chemical-process-design",
    code: "UGTO · GIDP-07",
    title: "Chemical Process Design",
    category: "process",
    summary: "Integrated process design, equipment selection, flowsheet development, economics, safety, and technical feasibility.",
    description: "Students integrate material and energy balances, equipment design, process simulation, economics, and safety into a coherent process concept. The course emphasizes decisions made across an entire plant rather than isolated unit operations.",
    focus: ["Process flowsheets", "Equipment selection and sizing", "Process simulation", "Economics, safety, and feasibility"],
    applications: ["Chemical and petrochemical production", "Biofuels and bioprocessing", "Separation and purification systems", "Process retrofit and capacity expansion"],
  },
  {
    slug: "alternative-energy-systems",
    code: "UGTO · PITSEA-08",
    title: "Selected Topics on Alternative Energy Sources",
    category: "process",
    summary: "Renewable and alternative energy technologies evaluated through thermodynamic, environmental, and systems perspectives.",
    description: "This course examines emerging and alternative energy pathways through resource availability, conversion performance, environmental implications, and integration with existing infrastructure.",
    focus: ["Solar and wind energy", "Biomass and alternative fuels", "Energy conversion and storage", "Technology comparison"],
    applications: ["Renewable generation projects", "Hybrid power systems", "Alternative-fuel production", "Distributed and off-grid energy"],
  },
  {
    slug: "exergy-analysis",
    code: "UGTO · TFE",
    title: "Exergy Analysis",
    category: "process",
    summary: "Second-law assessment, exergy destruction, efficiency definitions, and opportunities for improving industrial and energy processes.",
    description: "A graduate course focused on locating and interpreting thermodynamic irreversibilities. Students use exergy balances and efficiency measures to distinguish energy quantity from energy quality and identify meaningful system improvements.",
    focus: ["Physical and chemical exergy", "Exergy balances", "Exergy efficiencies", "Irreversibility and improvement potential"],
    applications: ["Power-cycle improvement", "Low-temperature and cryogenic processes", "Heat-integration studies", "Industrial energy audits"],
  },
  {
    slug: "operations-research",
    code: "UGTO · GEAIO-04",
    title: "Operations Research",
    category: "process",
    summary: "Mathematical modeling, optimization, and quantitative decision methods for engineering and operational systems.",
    description: "Students translate operational decisions into mathematical models, evaluate constraints, and select solutions using quantitative optimization methods. Interpretation and sensitivity are treated as essential parts of the analysis.",
    focus: ["Model formulation", "Linear optimization", "Resource allocation", "Sensitivity and decision analysis"],
    applications: ["Production planning and scheduling", "Supply-chain and logistics decisions", "Energy-system dispatch", "Maintenance and resource optimization"],
  },
  {
    slug: "energy-utilization-process-integration",
    code: "NTNU · TEP4215",
    title: "Energy Utilization and Process Integration in Industrial Plants",
    category: "process",
    summary: "Theoretical and practical analysis of industrial energy use and process integration at the Norwegian University of Science and Technology.",
    description: "The course links industrial energy use with systematic process-integration methods. Theoretical foundations are reinforced through practical problem solving for large-scale plants and utility systems.",
    focus: ["Industrial energy use", "Process integration", "Heat recovery", "Utilities and plant-wide analysis"],
    applications: ["Oil, gas, and LNG facilities", "Chemical and process plants", "Steam and utility networks", "Energy-efficiency retrofit projects"],
  },
  {
    slug: "engineering-fundamentals",
    code: "SLU · SE 1700",
    title: "Engineering Fundamentals",
    category: "fundamentals",
    summary: "Team-based systems design, disciplinary exploration, prototyping, communication, and entrepreneurial mindset.",
    description: "A first-year engineering experience that introduces students to the ways engineers define problems, collaborate, prototype, test, and communicate. Projects connect multiple engineering disciplines with stakeholder needs and measurable value.",
    focus: ["Engineering design process", "Systems and disciplinary exploration", "Prototyping and testing", "Teamwork and communication"],
    applications: ["Product and system development", "Multidisciplinary project teams", "Technical presentations and documentation", "Customer and stakeholder discovery"],
  },
  {
    slug: "statics",
    code: "SLU · MENG 2100",
    title: "Statics",
    category: "fundamentals",
    summary: "Equilibrium, structures, friction, centroids, and moments of inertia through visual models and problem-solving studios.",
    description: "Statics builds the free-body-diagram and equilibrium reasoning needed to analyze structures and machines. Physical demonstrations and mini-labs connect idealized models with measured forces and real components.",
    focus: ["Free-body diagrams", "Force and moment equilibrium", "Structures and machines", "Friction, centroids, and area moments"],
    applications: ["Structural and aerospace components", "Machine frames and mechanisms", "Fixtures, supports, and connections", "Load paths and preliminary design"],
  },
  {
    slug: "dynamics",
    code: "SLU · MENG 2150",
    title: "Dynamics",
    category: "fundamentals",
    summary: "Particle and rigid-body kinematics and kinetics, energy, momentum, and engineering applications.",
    description: "Dynamics develops models for motion and the forces that cause it. Students move among diagrams, coordinate descriptions, governing equations, computation, and physical interpretation while checking whether results make engineering sense.",
    focus: ["Particle kinematics and kinetics", "Rigid-body motion", "Work and energy", "Impulse and momentum"],
    applications: ["Vehicles and flight systems", "Machines and mechanisms", "Robotics and automation", "Impact, vibration, and motion analysis"],
  },
];

export const processSystemsCourses = courses.filter((course) => course.category === "process");
export const fundamentalsCourses = courses.filter((course) => course.category === "fundamentals");

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
