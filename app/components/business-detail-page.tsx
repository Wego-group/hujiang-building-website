import { GlobalHeader, MegaSteelWordmark } from "./global-header";
import { CurtainWallStrengthCarousel } from "./curtain-wall-strength-carousel";
import { PembStrengthCarousel } from "./pemb-strength-carousel";
import { ScrollAnimations } from "./scroll-animations";
import { SteelFabricationStrengthCarousel } from "./steel-fabrication-strength-carousel";

type BusinessPage = {
  eyebrow: string;
  title: string;
  summary: string;
  heroParagraphs?: string[];
  image: string;
  heroCta?: string;
  hideIntro?: boolean;
  hideMetricsIntro?: boolean;
  pembStrengthCarousel?: boolean;
  steelStrengthCarousel?: boolean;
  curtainWallPage?: boolean;
  bipvPage?: boolean;
  metrics: [string, string][];
  strengths: string[];
  strengthTitle?: string;
  strengthIcons?: string[];
  casesTitle?: string;
  cases: [string, string, string, string][];
  testimonials: [string, string][];
  processTitle: string;
  processIntro: string;
  process: [string, string][];
  faqs: [string, string][];
};

// These are the FAQ answers visible on the corresponding service pages. The
// catch-all route imports this source of truth to generate matching FAQPage JSON-LD.
export const businessFaqSchemaMap: Record<string, [string, string][]> = {
  "business/epc-contractor": [
    ["What is a general building contractor?", "A general building contractor oversees a construction project from planning through completion. The contractor coordinates people, materials, schedules, budgets and quality requirements so the work is delivered safely and to the agreed standards."],
    ["What is a General Building Contractor A?", "A Class A general building contractor is qualified to undertake broad building work and coordinate daily site operations, specialist trades, suppliers and communication between the client, consultants and construction team."],
    ["What are the key responsibilities of a general building contractor?", "Core responsibilities include project planning, trade and supplier coordination, permits and compliance, cost and schedule control, quality assurance, site safety, issue resolution and progress reporting."],
    ["What does a Class A contractor license allow in terms of project scope?", "A Class A license generally supports a wide range of residential, commercial, industrial and public building projects. The exact permitted scope remains subject to the regulations in the project location."],
    ["Can EPC services include steel structure fabrication?", "Yes. EPC delivery can integrate steel processing, fabrication, surface treatment, quality inspection, packaging, transport planning and erection coordination within the overall project programme."],
    ["What is included in EPC contractor services?", "Typical EPC services cover engineering coordination, procurement, steel fabrication, building-envelope coordination, construction organization, project management, quality and safety control, completion records and handover support."],
  ],
  "business/pre-engineered-metal-building": [
    ["What does PEMB stand for?", "PEMB stands for Pre-Engineered Metal Building. It describes a coordinated steel building system whose structural frame, secondary members, roof and wall components are engineered and manufactured before being delivered for site assembly."],
    ["What is the life expectancy of a PEB structure?", "A well-designed pre-engineered building can typically remain in service for 25 to 50 years or longer. Service life depends on material quality, protective coatings, environmental exposure, operating conditions and regular inspection and maintenance."],
    ["What does PEMB mean in construction?", "In construction, PEMB refers to a delivery method in which the building is digitally designed and its steel components are cut, drilled, welded and prepared off-site. The coordinated components are then transported and rapidly assembled at the project location."],
    ["What are the benefits of pre-engineered buildings?", "Key benefits include faster construction, predictable quality, efficient steel use, reduced site work, lower material waste, large clear spans and flexible layouts for warehouses, factories, logistics centers and commercial facilities."],
    ["How do pre-engineered buildings compare with traditional construction?", "PEMB systems are generally lighter, faster to manufacture and easier to assemble because more work is completed in a controlled factory. Traditional steel construction can offer greater flexibility for highly complex, multi-story or heavily customized structures."],
  ],
  "business/steel-structure-fabrication": [
    ["What does steel structure fabrication involve?", "Steel structure fabrication transforms raw steel into defined structural components through drawing review, cutting, drilling, assembly, welding, surface treatment, inspection, marking and packaging. Precise engineering and controlled production help ensure quality and reliable site assembly."],
    ["Why is steel structure fabrication widely used in construction?", "Fabricated steel combines high strength, durability, predictable factory quality and efficient installation. Its strength-to-weight ratio and suitability for prefabrication make it effective for industrial buildings, warehouses, commercial structures and infrastructure."],
    ["What are the typical steps in the steel structure manufacturing process?", "The typical sequence includes design and planning, material verification, cutting and drilling, assembly and welding, dimensional inspection, shot blasting or painting, component marking and final packaging."],
    ["What are the main applications of construction steel fabrication?", "Common applications include industrial plants, logistics warehouses, commercial buildings, multi-story structures, parking facilities, bridges, equipment platforms and other projects requiring durable load-bearing frames."],
    ["Which types of steel are commonly used by structural metal fabricators?", "Steel grades are selected according to structural drawings, loads and applicable standards. Fabrication can support project-specified ASTM, EN, JIS or GB materials, subject to engineering review and availability."],
    ["Is steel structure fabrication environmentally sustainable?", "Yes. Structural steel is recyclable and can be reused without losing its core material properties. Accurate cutting, optimized design and controlled factory production can also reduce material waste and site work."],
    ["What should buyers check when choosing Chinese structural steel fabricators?", "Buyers should review workshop capacity, drawing coordination, material traceability, welding control, dimensional accuracy, surface treatment, export packaging, communication and relevant industrial project experience."],
    ["Can Megasteel support overseas structural steel fabrication projects?", "Yes. Megasteel supports overseas projects with drawing coordination, component processing, inspection, surface treatment, marking, modular packaging and delivery planning for industrial buildings, factories and logistics warehouses."],
    ["Why is export packaging important in structural steel fabrication?", "Clear marking and modular packaging help contractors identify, unload and install components in the correct sequence. This reduces sorting time, prevents confusion and supports smoother erection on site."],
  ],
  "business/building-envelope": [
    ["What are the different types of curtain walls used in construction?", "Curtain walls are commonly made with glass, aluminum and other durable materials. The main systems include unitized curtain walls, structural glazing and traditional curtain walls. The right material and system depend on the required appearance, environmental performance and structural conditions."],
    ["What are the primary requirements for a curtain wall design?", "A reliable curtain wall design must address structural integrity, building movement, weather resistance, energy efficiency and acoustic control. These requirements should be coordinated from system selection through detailing, testing and installation."],
    ["How does a window wall differ from a curtain wall system?", "A window wall normally spans one floor and is supported between the floor slabs above and below. A curtain wall is an independent exterior envelope that can extend across several floors beyond the slab edge, making it suitable for continuous large-area facades."],
    ["Are curtain walls load-bearing?", "No. Curtain walls do not carry the building's floor or roof loads. They are lightweight exterior envelope systems anchored to the main structure to resist their own weight, wind and environmental loads while providing weather protection and architectural appearance."],
  ],
  "business/bipv": [
    ["What is a BIPV building integrated photovoltaic system, and how does it function?", "A BIPV system incorporates photovoltaic panels directly into a roof, facade or other building element. The modules provide building-envelope protection while generating electricity and can replace conventional construction materials."],
    ["How are building integrated PV systems designed and planned?", "Design considers energy demand, architectural requirements, module type, daylighting, thermal performance, orientation and site conditions so the system meets both functional and aesthetic goals."],
    ["What are the benefits of integrating BIPV solar modules into building facades and roofs?", "BIPV modules combine weather protection, architectural expression and renewable generation. They may replace roofing or facade materials and can also reduce heat gain and building energy demand."],
    ["What types of PV systems are commonly used in BIPV installations?", "BIPV may use grid-connected, standalone or battery-backed systems. Roof and facade solutions are selected around the building's energy strategy, architecture and operational needs."],
    ["How do BIPV systems contribute to energy savings and return on investment (ROI)?", "Integrated generation reduces purchased electricity and may lower cooling demand. Return depends on system cost, local electricity prices, generation yield, maintenance and the value of replaced envelope materials."],
    ["What is the difference between BIPV and rooftop solar panels?", "Rooftop panels are mounted above an existing roof. BIPV is integrated into the building envelope and can replace or combine with roof panels, facade panels, curtain walls or skylights."],
    ["What is a photovoltaic building?", "A photovoltaic building integrates solar generation into its roof, facade or envelope so the building fabric also produces electricity."],
    ["What is a BIPV roofing system?", "A BIPV roof combines photovoltaic modules with weather protection. Industrial systems must coordinate roof load, purlins, drainage, waterproofing, fire safety, cabling and maintenance access."],
    ["How should buyers compare BIPV companies?", "Compare structural engineering, roof and facade integration, waterproofing design, electrical coordination, construction support, project references and long-term maintenance planning."],
    ["Is BIPV suitable for steel structure buildings?", "Yes. BIPV suits steel buildings when roof loads, purlins, waterproofing, cable routing, construction sequence and maintenance requirements are evaluated during design."],
  ],
};

export const businessDetailPages: Record<string, BusinessPage> = {
  "business/epc-contractor": {
    eyebrow: "EPC CONTRACTOR",
    title: "EPC Contractor for Steel Structure Buildings",
    summary: "Megasteel general building contractor focuses on the general contracting of high-quality industrial and logistics construction projects. Since its establishment at the end of 2007, Megasteel construction contractor company has rapidly entered the domestic and overseas market. To serve customers with high quality general contractor services in the Southeast Asia market better, we set up branch companies in Vietnam, Thailand and Mexico, combining the management experience and resources of Megasteel China with local capability advantages. We provide local customers with high-quality, high-efficiency and cost-effective services, hold first-class qualifications for general contracting and steel structures, and execute more than 10 global projects per year.",
    image: "/images/epc-hero-project.png",
    heroCta: "Request an EPC Project Quote",
    hideIntro: true,
    metrics: [["2007", "Established"], ["10+", "Global projects yearly"], ["4", "Regional delivery teams"], ["EPC", "Single-point responsibility"]],
    strengths: ["Strong Project Operation Capabilities among Building Contracting Companies", "Provides High Quality Customers Turn-Key Projects with Integrated General Contractor Services", "Whole Process Quality, Progress, Safety Management of Our General Contractor Business", "Rich Design & Management Experience in Engineering Procurement and Construction"],
    strengthTitle: "Why Choose Megasteel as Your EPC Contractor",
    strengthIcons: ["/images/epc-strength-operation.png", "/images/epc-strength-turnkey.png", "/images/epc-strength-quality.png", "/images/epc-strength-engineering.png"],
    casesTitle: "EPC Contracting Cases",
    cases: [["Dongbai Hebei Gu'an Huiyuan Standard Plant Projects", "Gu'an, Hebei", "144,353 m²", "/images/epc-project-dongbai.png"], ["GLP Anhui Intelligent Storage Project", "Hefei, Anhui", "76,323 m²", "/images/epc-project-glp-anhui.png"], ["GLP Building 12th Project", "Suzhou, Jiangsu", "16,800 m²", "/images/epc-project-glp-building-12.png"], ["GLP Cuizhai Project", "Jinan, Shandong", "140,000 m²", "/images/epc-project-glp-cuizhai.png"], ["GLP Yueqing Project", "Yueqing, Zhejiang", "338,000 m²", "/images/epc-project-glp-yueqing.png"], ["Chongqing GLP Airport Intelligent Manufacturing Industrial Park", "Chongqing", "67,517 m²", "/images/epc-project-chongqing-airport.png"], ["ESR Nanning Xinrong Zhonglang Project", "Nanning, Guangxi", "39,700 m²", "/images/epc-project-esr-nanning.png"], ["Shenzhen Dekai Building External Wall Fencing Project", "Shenzhen", "87,059 m²", "/images/epc-project-shenzhen-dekai.png"]],
    testimonials: [["The team aligned schedule, design decisions and site execution around our operating deadline.", "Industrial logistics client"], ["Clear ownership and fast coordination helped the project move through difficult milestones with confidence.", "Manufacturing developer"]],
    processTitle: "Integrated Engineering, Procurement and Construction",
    processIntro: "The delivery model connects every major decision so cost, quality, schedule and safety are managed as one programme.",
    process: [["Requirement review", "Confirm use, location, standards, schedule and investment priorities."], ["Engineering coordination", "Align planning, structure, envelope and construction sequence."], ["Procurement planning", "Coordinate materials, specialist systems, suppliers and logistics."], ["Construction organization", "Manage site resources, erection methods and subcontract interfaces."], ["Control and reporting", "Track quality, safety, progress, change and documentation."], ["Handover support", "Complete inspections, records, training and post-delivery support."]],
    faqs: [["What does an EPC contractor manage?", "Engineering, procurement and construction are coordinated under one delivery responsibility, including schedule, quality, safety and handover."], ["Can EPC include steel fabrication?", "Yes. Fabrication planning, component production, coating, packaging and erection sequencing can be integrated into the overall programme."], ["Which projects suit EPC delivery?", "Factories, warehouses, logistics parks and complex industrial facilities benefit when multiple disciplines must be tightly coordinated."], ["How is project risk controlled?", "Early technical reviews, clear responsibility, milestone reporting and coordinated change management reduce avoidable gaps between teams."]],
  },
  "business/pre-engineered-metal-building": {
    eyebrow: "PRE-ENGINEERED METAL BUILDING",
    title: "Pre-Engineered Metal Building Manufacturer & PEMB Contractor",
    summary: "Custom PEMB solutions for warehouses, factories, logistics parks and industrial facilities, backed by structural design, steel fabrication, delivery and project management support.",
    heroParagraphs: [
      "Custom PEMB solutions for warehouses, factories, logistics parks and industrial facilities, backed by structural design, steel fabrication, delivery and project management support.",
      "As one of the leading pre-engineered metal building manufacturers, Megasteel has focused on prefabricated steel construction for 20 years, delivering more than 50 projects each year for high-end customers including Fortune Global 500 and China Top 500 companies, and establishing an excellent industry reputation.",
      "Our returning-customer ratio exceeds 70%. To date, we have completed more than 20 million square metres of prefabricated steel buildings across more than 35 provinces and cities in China and overseas markets. Customer satisfaction with our engineered building systems exceeds 95%.",
    ],
    image: "/images/pemb-hero-factory.png",
    heroCta: "RFQs for PEMB Structure",
    hideMetricsIntro: true,
    pembStrengthCarousel: true,
    casesTitle: "Pre-Engineered Metal Building System Cases",
    metrics: [["20+", "Years of expertise"], ["50+", "Projects each year"], ["20M+", "Square metres delivered"], ["95%+", "Client satisfaction"]],
    strengths: ["Early technical support and feasibility review", "Structural optimization and scheme analysis", "Coordinated structural and detail design", "Quality-controlled component manufacturing", "Protective packaging and planned transportation", "Project management and after-sales support"],
    cases: [
      ["GLP Kunshan Huacheng Intelligent Manufacturing Technology Industrial Park", "Kunshan, Jiangsu", "204,000 m²", "/images/pemb-project-01.png"],
      ["GLP Suzhou Logistics Park Phase 10", "Suzhou, Jiangsu", "55,000 m²", "/images/pemb-project-02.png"],
      ["Shanghai Fengxian International Automobile Industrial Park", "Shanghai", "116,000 m²", "/images/pemb-project-03.png"],
      ["Bacchus Chengdu Project", "Chengdu, Sichuan", "125,457.46 m²", "/images/pemb-project-04.png"],
      ["GLP Dongguan Machong Project", "Dongguan, Guangdong", "76,000 m²", "/images/pemb-project-05.png"],
      ["GLP Dongguan Xinsha Project", "Dongguan, Guangdong", "270,000 m²", "/images/pemb-project-06.png"],
      ["Hohhot Scitop Project", "Hohhot City, Inner Mongolia", "10,100 m²", "/images/pemb-project-07.png"],
      ["Suzhou Adidas Project", "Suzhou, Jiangsu", "85,000 m²", "/images/pemb-project-08.png"],
      ["Suzhou Adidas Project - X", "Suzhou, Jiangsu", "40,000 m²", "/images/pemb-project-09.png"],
      ["Tuhu Car Maintenance South China Center Project", "Guangzhou, Guangdong", "131,520.02 m²", "/images/pemb-project-10.png"],
    ],
    testimonials: [["Standardized components and coordinated detailing shortened assembly while maintaining the required quality.", "Logistics developer"], ["The structural solution supported a fast factory expansion and left room for future production changes.", "Manufacturing client"]],
    processTitle: "A Faster Route from Design to Assembly",
    processIntro: "PEMB systems are engineered as coordinated kits of parts, reducing site complexity and improving predictability.",
    process: [["Design brief", "Define span, clear height, loads, crane requirements and operating use."], ["System engineering", "Optimize frames, bracing, purlins, connections and envelope interfaces."], ["Digital detailing", "Issue coordinated fabrication information and component schedules."], ["Factory production", "Cut, drill, weld, coat, identify and package every member."], ["Site assembly", "Sequence deliveries and erection for safe, efficient installation."]],
    faqs: [["What is a pre-engineered metal building?", "It is a steel building whose primary frames, secondary members and connections are engineered and fabricated as one coordinated system."], ["How does PEMB differ from conventional construction?", "More work is standardized and completed in the factory, which can reduce site labour and shorten erection time."], ["Can the building be customized?", "Yes. Span, height, facade, roof, loading, crane systems and internal functions can be adapted to the project."], ["What information is needed for a quotation?", "Location, dimensions, use, design loads, standards, envelope requirements and target schedule provide a strong starting point."]],
  },
  "business/steel-structure-fabrication": {
    eyebrow: "STEEL STRUCTURE FABRICATION",
    title: "Steel Structure Fabrication Company for Industrial Buildings",
    summary: "Megasteel provides intelligent, high-capacity structural steel fabrication for industrial buildings and overseas construction projects.",
    heroParagraphs: [
      "Megasteel Intelligent Assembly Base covers 162,000 m² including 116,000 m²of built area, and combines intelligent steel assembly with high-performance cladding technologies to achieve an annual capacity of 250,000 tons. German automated fabrication systems, advanced production software and low-carbon facilities support accurate, traceable manufacturing, while cooperation with Xi'an University of Architecture and Technology strengthens research and development in prefabricated steel construction.",
      "As a Chinese structural steel fabricator serving overseas industrial projects, Megasteel supports contractors, developers and building owners with drawing review, material preparation, cutting, welding, drilling, surface treatment, inspection, component marking and modular packaging. The service is designed for warehouses, factories, logistics centers, pre-engineered metal buildings and industrial steel structures that require accurate components and efficient site assembly.",
    ],
    image: "/images/fabrication-hero-factory.png",
    heroCta: "Heavy Steel Structure Fabrication Price",
    hideMetricsIntro: true,
    steelStrengthCarousel: true,
    metrics: [["162,000", "m² production base"], ["116,000", "m² built area"], ["250,000", "Ton annual capacity"], ["Digital", "Production control"]],
    strengths: ["Verified structural steel and plate materials", "Automated cutting and mechanical processing", "Controlled assembly and welding procedures", "Shot blasting, coating and finish inspection", "Component identification and modular packaging"],
    cases: [
      ["Jiangxi Yuzu Village", "Jiangxi, China", "Structural steel project", "/images/fabrication-project-01.png"],
      ["Areva Research and Development Building and Restaurant Project", "China", "Research facility", "/images/fabrication-project-02.png"],
      ["Shanghai Bayer R & D Center", "Shanghai", "R&D center", "/images/fabrication-project-03.png"],
      ["Tuhu Car Maintenance South China Center Project", "Guangzhou, Guangdong", "131,520.02 m²", "/images/fabrication-project-04.png"],
      ["Bacchus Chengdu Project", "Chengdu, Sichuan", "125,457.46 m²", "/images/fabrication-project-05.png"],
      ["Hohhot Scitop Project", "Hohhot City, Inner Mongolia", "10,100 m²", "/images/fabrication-project-06.png"],
      ["Suzhou Adidas Project - X", "Suzhou, Jiangsu", "40,000 m²", "/images/fabrication-project-07.png"],
      ["GLP Dongguan Xinsha Project", "Dongguan, Guangdong", "270,000 m²", "/images/fabrication-project-08.png"],
      ["GLP Dongguan Machong Project", "Dongguan, Guangdong", "76,000 m²", "/images/fabrication-project-09.png"],
    ],
    testimonials: [["Accurate cutting and clear component marking made the erection sequence faster and easier to control.", "Overseas logistics contractor"], ["Production visibility and inspection records gave our team confidence before shipment.", "Industrial project developer"]],
    processTitle: "Factory-Controlled Structural Steel Workflow",
    processIntro: "Each component moves through defined quality gates before it is released for protective treatment and shipment.",
    process: [["Drawing review", "Check connections, tolerances, materials and delivery requirements."], ["Material preparation", "Verify plates and sections before nesting, cutting and drilling."], ["Assembly and welding", "Control alignment, welding sequence and dimensional accuracy."], ["Surface treatment", "Complete blasting, coating and finish checks to the project specification."], ["Quality inspection", "Record dimensions, weld quality, coating and component identification."], ["Modular packaging", "Group and label members around transport and erection priorities."]],
    faqs: [["Which fabrication services are included?", "Typical scope covers drawing review, cutting, drilling, assembly, welding, treatment, inspection, marking and packaging."], ["How is dimensional accuracy controlled?", "Digital production data, calibrated equipment and staged inspections are used from material preparation through final release."], ["Can components be prepared for overseas shipment?", "Yes. Packaging, identification and loading plans can be coordinated around container limits and erection sequence."], ["What standards can be supported?", "The applicable material, welding, coating and inspection standards should be confirmed at project start and reflected in the quality plan."]],
  },
  "business/building-envelope": {
    eyebrow: "MEGASKY CURTAIN WALL",
    title: "Megasky Curtain Wall Manufacturer",
    summary: "Megasky provides curtain wall integration services from system design and detailed engineering through construction and site installation.",
    heroParagraphs: [
      "Megasky provides curtain wall integration services, from system curtain wall design and detailed design to curtain wall construction and site installation. As a curtain wall manufacturer, we create energy-saving buildings and provide practical, high-quality curtain wall solutions.",
      "Our project experience includes the Shanghai Disney Flagship Store, Dalian New Era Technology Curtain Wall Project, Jiangsu Goodwe Curtain Wall System Project, Zhuhai Rongtai River Project, Jiangxi Yuzu Village and Suzhou Heyuan Environmental Protection Technology Project.",
    ],
    image: "/images/curtain-wall-hero.png",
    heroCta: "Megasky Price",
    hideMetricsIntro: true,
    curtainWallPage: true,
    metrics: [],
    strengths: ["System Design", "Detailed Design", "Design Review", "Sample Submission & Approval", "Site Installation", "Inspection & Hand Over"],
    casesTitle: "Megasky Curtain Wall Cases",
    cases: [
      ["Dalian New Era Science and Technology Project", "Dalian, Liaoning", "Curtain wall project", "/images/curtain-wall-project-01.png"],
      ["Goodwe Jiangsu New Plant", "Jiangsu", "New plant facade", "/images/curtain-wall-project-02.png"],
      ["Lujiazui Disney Flagship Store Project", "Shanghai", "Flagship store facade", "/images/curtain-wall-project-03.png"],
      ["Shanghai Bayer R & D Center", "Shanghai", "R&D center facade", "/images/curtain-wall-project-04.png"],
      ["Areva Research and Development Building and Restaurant Project", "China", "Research facility facade", "/images/curtain-wall-project-05.png"],
      ["Chengdu Kowloon Warehouse-Abercrombie & Fitch Project", "Chengdu, Sichuan", "Commercial facade", "/images/curtain-wall-project-06.png"],
    ],
    testimonials: [],
    processTitle: "Curtain Wall Integration from Concept to Handover",
    processIntro: "A coordinated envelope process protects design intent while resolving movement, drainage, airtightness and installation interfaces.",
    process: [["System design", "Select the facade type, grid, materials and performance targets."], ["Detailed engineering", "Resolve anchors, panels, interfaces, tolerances and movement."], ["Design review", "Coordinate structure, waterproofing, fire, thermal and maintenance requirements."], ["Mock-up approval", "Review samples, finishes and performance tests before production."], ["Installation and handover", "Manage site quality, inspection, sealing, cleaning and final records."]],
    faqs: [],
  },
  "business/bipv": {
    eyebrow: "MEGA-BIPV",
    title: "Mega-BIPV Roofing System & Building Integrated Photovoltaics Company",
    summary: "Megasteel provides coordinated BIPV roofing and building-integrated photovoltaic solutions for industrial and commercial buildings.",
    heroParagraphs: [
      "Megasteel focuses on the research, development and application of Mega-BIPV building integrated photovoltaic systems for industrial and logistics facilities, helping projects generate clean energy through safe, efficient and durable photovoltaic building solutions.",
      "Our BIPV roofing and facade solutions coordinate the steel structure, roof system, waterproofing, drainage, electrical layout and construction delivery as one integrated building system.",
    ],
    image: "/images/bipv-hero-factory.png",
    heroCta: "Request a BIPV Project Quote",
    hideMetricsIntro: true,
    bipvPage: true,
    metrics: [],
    strengths: ["Integration of BIPV System", "Integrated Construction in BIPV Solar Modules", "Completed Synchronously with the Photovoltaic Building"],
    casesTitle: "Mega-BIPV Project Case",
    cases: [["GLP Anhui Intelligent Storage Project", "Hefei, Anhui", "76,323 m²", "/images/bipv-project-01.png"], ["Suzhou Adidas Project - X", "Suzhou, Jiangsu", "40,000 m²", "/images/bipv-project-02.png"]],
    testimonials: [["Megasteel's BIPV system gave us a hybrid solution—structural steel with seamlessly integrated photovoltaics. The result is a self-supporting solar facade that meets both load-bearing and energy-generation demands.", "Industrial Park Developer"], ["Megasteel delivered a BIPV system engineered for heavy snow loads and sub-zero temperatures. Its steel-framed solar panels provided high structural rigidity while energy yields exceeded projections.", "Urban High-Rise Contractor"]],
    processTitle: "BIPV Coordinated as Part of the Building",
    processIntro: "The photovoltaic system is designed with the structure and envelope instead of being treated as a late rooftop addition.",
    process: [["Structural coordination", "Check module loads with purlins, bracing, span, wind and snow actions."], ["Envelope integration", "Coordinate modules with waterproofing, insulation, drainage and roof details."], ["Electrical planning", "Plan strings, inverters, cable routes, safety zones and grid connection."], ["Synchronized construction", "Sequence steel erection, roof work and module installation as one plan."], ["Operations planning", "Provide access, walkways, inspection points and maintainable interfaces."]],
    faqs: [["What is BIPV?", "Building-integrated photovoltaics replace or become part of roof and facade materials while generating electricity."], ["How is BIPV different from rooftop solar?", "BIPV is designed as part of the envelope, while conventional panels are generally mounted above a completed roof."], ["Can BIPV be used on industrial warehouses?", "Yes. Large roofs can support integrated generation when structure, waterproofing, fire safety and maintenance are coordinated."], ["What should be confirmed first?", "Building location, energy target, roof geometry, design loads, grid conditions, waterproofing strategy and operating requirements."]],
  },
};

function EpcSeoSection() {
  const scope = [
    ["Engineering", "Project planning, structural coordination, design review, drawing coordination and construction planning."],
    ["Procurement", "Steel materials, envelope systems, project components, fabrication resources, suppliers and logistics."],
    ["Construction", "Site organization, steel erection, progress management, quality control, safety and handover preparation."],
    ["Project Management", "Schedule, budget, technical changes, documentation, communication and multi-party coordination."],
  ];
  const delivery = [
    ["Project Requirement Review", "Confirm building use, location, land conditions, standards, schedule and investment priorities."],
    ["Concept and Engineering Coordination", "Align the building layout, structural system, enclosure requirements and construction sequence."],
    ["Procurement and Fabrication Planning", "Coordinate materials, steel fabrication, envelope components, suppliers and project logistics."],
    ["Construction Organization", "Plan site resources, erection methods, subcontract interfaces and daily progress management."],
    ["Quality, Safety and Schedule Control", "Manage inspections, safety requirements, progress tracking, changes and project records."],
    ["Handover and After-Sales Support", "Complete inspections, handover documentation, client communication and technical support."],
  ];
  const controls = [
    ["Cost Control", "Early design coordination, steel optimization and procurement planning improve budget predictability."],
    ["Schedule Control", "Connected engineering, fabrication, logistics and site planning reduce fragmented delays."],
    ["Quality Control", "Drawing review, material inspection, factory control and installation checks protect delivery quality."],
    ["Safety Management", "Method reviews, workforce coordination and site risk controls are integrated into execution."],
  ];

  return (
    <section className="epc-seo-section patterned">
      <div className="wide-container business-detail-pad">
        <div className="business-detail-heading"><span>04</span><div><small>EPC DELIVERY MODEL</small><h2>What Does an EPC Contractor Do?</h2></div></div>
        <article className="epc-seo-content">
          <div className="epc-seo-lead">
            <p>An EPC contractor takes responsibility for engineering, procurement and construction within one integrated delivery model. For industrial buildings, this includes design coordination, material sourcing, steel fabrication, site management, quality, safety and project handover.</p>
            <p>Compared with appointing separate designers, suppliers and contractors, EPC delivery gives the owner one accountable project partner and improves communication, cost coordination and schedule control.</p>
          </div>

          <section className="epc-seo-block">
            <h3>Megasteel EPC Service Scope</h3>
            <div className="epc-scope-grid">{scope.map(([title, copy]) => <div key={title}><h4>{title}</h4><p>{copy}</p></div>)}</div>
          </section>

          <section className="epc-seo-block">
            <h3>Integrated Steel Building Systems</h3>
            <p>Megasteel coordinates structural engineering, fabrication, enclosure systems and low-carbon building technologies as one industrial delivery platform.</p>
            <ul className="epc-system-list">
              <li><strong>Steel Structure System</strong><span>Coordinated structural solutions for industrial and commercial buildings.</span></li>
              <li><strong>Steel Structure Fabrication</strong><span>Factory-controlled production, treatment, packaging and delivery.</span></li>
              <li><strong>Pre-Engineered Metal Buildings</strong><span>Efficient systems for warehouses, factories and logistics facilities.</span></li>
              <li><strong>Megasky Curtain Wall</strong><span>Facade and envelope coordination for modern buildings.</span></li>
              <li><strong>Mega-BIPV</strong><span>Integrated photovoltaic systems for low-carbon industrial facilities.</span></li>
            </ul>
          </section>

          <section className="epc-seo-block">
            <h3>Our EPC Project Delivery Process</h3>
            <ol className="epc-delivery-list">{delivery.map(([title, copy]) => <li key={title}><div><h4>{title}</h4><p>{copy}</p></div></li>)}</ol>
          </section>

          <section className="epc-seo-block">
            <h3>Cost, Schedule, Quality and Safety Control</h3>
            <div className="epc-control-grid">{controls.map(([title, copy]) => <div key={title}><h4>{title}</h4><p>{copy}</p></div>)}</div>
          </section>
        </article>
      </div>
    </section>
  );
}

function EpcFaqSection() {
  const faqs: [string, string][] = [
    ["What is a general building contractor?", "A general building contractor oversees a construction project from planning through completion. The contractor coordinates people, materials, schedules, budgets and quality requirements so the work is delivered safely and to the agreed standards."],
    ["What is a General Building Contractor A?", "A Class A general building contractor is qualified to undertake broad building work and coordinate daily site operations, specialist trades, suppliers and communication between the client, consultants and construction team."],
    ["What are the key responsibilities of a general building contractor?", "Core responsibilities include project planning, trade and supplier coordination, permits and compliance, cost and schedule control, quality assurance, site safety, issue resolution and progress reporting."],
    ["What does a Class A contractor license allow in terms of project scope?", "A Class A license generally supports a wide range of residential, commercial, industrial and public building projects. The exact permitted scope remains subject to the regulations in the project location."],
    ["Can EPC services include steel structure fabrication?", "Yes. EPC delivery can integrate steel processing, fabrication, surface treatment, quality inspection, packaging, transport planning and erection coordination within the overall project programme."],
    ["What is included in EPC contractor services?", "Typical EPC services cover engineering coordination, procurement, steel fabrication, building-envelope coordination, construction organization, project management, quality and safety control, completion records and handover support."],
  ];

  return (
    <section className="epc-faq-section patterned">
      <div className="wide-container business-detail-pad">
        <header className="epc-faq-heading">
          <span aria-hidden="true">05</span>
          <p>PROJECT PLANNING GUIDANCE</p>
          <h2>General Building Contractor FAQs</h2>
        </header>
        <div className="epc-faq-static-list">
          {faqs.map(([question, answer]) => (
            <article key={question}>
              <div className="epc-faq-question"><b aria-hidden="true">Q</b><h3>{question}</h3></div>
              <div className="epc-faq-answer"><b aria-hidden="true">A</b><p>{answer}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PembFaqSection() {
  const faqs: [string, string][] = [
    ["What does PEMB stand for?", "PEMB stands for Pre-Engineered Metal Building. It describes a coordinated steel building system whose structural frame, secondary members, roof and wall components are engineered and manufactured before being delivered for site assembly."],
    ["What is the life expectancy of a PEB structure?", "A well-designed pre-engineered building can typically remain in service for 25 to 50 years or longer. Service life depends on material quality, protective coatings, environmental exposure, operating conditions and regular inspection and maintenance."],
    ["What does PEMB mean in construction?", "In construction, PEMB refers to a delivery method in which the building is digitally designed and its steel components are cut, drilled, welded and prepared off-site. The coordinated components are then transported and rapidly assembled at the project location."],
    ["What are the benefits of pre-engineered buildings?", "Key benefits include faster construction, predictable quality, efficient steel use, reduced site work, lower material waste, large clear spans and flexible layouts for warehouses, factories, logistics centers and commercial facilities."],
    ["How do pre-engineered buildings compare with traditional construction?", "PEMB systems are generally lighter, faster to manufacture and easier to assemble because more work is completed in a controlled factory. Traditional steel construction can offer greater flexibility for highly complex, multi-story or heavily customized structures."],
  ];

  return (
    <section className="epc-faq-section pemb-faq-section patterned">
      <div className="wide-container business-detail-pad">
        <header className="epc-faq-heading">
          <span aria-hidden="true">05</span>
          <p>PEMB KNOWLEDGE</p>
          <h2>Pre-Engineered Metal Building FAQs</h2>
        </header>
        <div className="epc-faq-static-list">
          {faqs.map(([question, answer]) => <article key={question}><div className="epc-faq-question"><b aria-hidden="true">Q</b><h3>{question}</h3></div><div className="epc-faq-answer"><b aria-hidden="true">A</b><p>{answer}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}

export function EpcContactSection({ plain = false }: { plain?: boolean } = {}) {
  return (
    <section className={`epc-contact-panel ${plain ? "epc-contact-panel-plain" : ""}`} id="contact">
      {!plain && <img className="epc-contact-background" src="/images/epc-collaboration.jpg" alt="Project team collaborating around a table" />}
      {!plain && <div className="epc-contact-shade" />}
      <div className="wide-container epc-contact-grid">
        <div className="epc-contact-copy">
          <p className="eyebrow">START A CONVERSATION</p>
          <h2>Ready to elevate your next building project?</h2>
          <p>Tell us what you plan to build. Our team will help you organize the next steps for engineering, procurement and construction.</p>
          <div className="epc-contact-information">
            <div><span aria-hidden="true">→</span><p><small>TEL</small><a href="tel:+8619553105520">0086-19553105520 (WHATSAPP/WECHAT)</a></p></div>
            <div><span aria-hidden="true">→</span><p><small>EMAIL</small><a href="mailto:megasteelstructure@126.com">megasteelstructure@126.com</a></p></div>
            <div><span aria-hidden="true">→</span><p><small>ADDRESS</small><em>No.1068, Chongde 7th Avenue, Economic and Technological Development Zone, Dezhou City, Shandong Province</em></p></div>
          </div>
        </div>
        <form className="epc-contact-form">
          <label><span>Full Name</span><input type="text" name="name" placeholder="Full Name" /></label>
          <label><span>Phone</span><input type="tel" name="phone" placeholder="Phone" /></label>
          <label><span>Email</span><input type="email" name="email" placeholder="Email" /></label>
          <label><span>Company</span><input type="text" name="company" placeholder="Company" /></label>
          <label className="full"><span>Project Brief</span><textarea name="message" placeholder="What can we help you build?" rows={7} /></label>
          <button type="button">Contact Us <i aria-hidden="true">→</i></button>
        </form>
      </div>
    </section>
  );
}

function PembTestimonialsSection() {
  const testimonials: [string, string][] = [
    ["Megasteel delivered our industrial warehouse ahead of schedule without compromising quality. The pre-engineered metal building system reduced construction time by 30% compared with traditional methods. We highly recommend their turnkey solution.", "Logistics Company"],
    ["We chose Megasteel for our factory expansion, and the PEMB structure exceeded expectations. The corrosion-resistant materials and optimized design saved both construction time and long-term maintenance costs.", "Manufacturing Firm"],
    ["From initial CAD drawings to final assembly, Megasteel's team provided seamless coordination. Their BIM-integrated approach minimized errors and ensured a smooth construction process for our complex project.", "Industrial Park Developer"],
  ];

  return (
    <section className="pemb-testimonial-section">
      <div className="wide-container business-detail-pad">
        <header className="pemb-testimonial-heading"><span aria-hidden="true">03</span><h2>What Our Clients Say About Our Pre-Engineered Metal Buildings</h2></header>
        <div className="pemb-testimonial-list">
          {testimonials.map(([quote, client]) => <blockquote className="pemb-testimonial-card" key={client}><p><b aria-hidden="true">“</b>{quote}</p><cite><i aria-hidden="true" />{client}</cite></blockquote>)}
        </div>
      </div>
    </section>
  );
}

function PembSeoSection() {
  const comparisons = [
    ["Design and fabrication", "Computer-aided engineering with pre-cut and pre-punched components manufactured off-site.", "Custom engineering with more fabrication and coordination completed project by project."],
    ["Construction speed", "Prefabricated components support rapid delivery and site assembly.", "More cutting, welding and coordination on site generally extend the programme."],
    ["Cost control", "Optimized steel, lower waste and simpler foundations improve budget predictability.", "Heavier sections, additional labour and complex foundations can increase cost."],
    ["Structural weight", "Efficient tapered sections reduce building weight and foundation demand.", "Hot-rolled members are typically heavier and may require more substantial foundations."],
    ["Clear-span space", "Well suited to large open interiors for warehouses, factories and logistics facilities.", "Wide spans are possible but may require additional supports or heavier members."],
    ["Best-fit projects", "Industrial, logistics, commercial and agricultural buildings where speed and repeatability matter.", "Complex, high-rise or highly customized structures requiring exceptional geometry or future modification."],
  ];
  const applications = [
    ["Industrial Warehouses", "Open interiors, efficient storage layouts and fast construction for industrial and commercial storage."],
    ["Logistics & Distribution Centers", "Large-span layouts, loading areas and phased delivery for modern logistics operations."],
    ["Manufacturing Plants", "Adaptable space for production lines, equipment loads, cranes, mezzanines and future expansion."],
    ["Commercial Steel Buildings", "Efficient structures for retail, showrooms, offices and mixed-use commercial facilities."],
  ];
  const costs = [
    ["Building Size and Span", "Longer spans, greater clear heights and larger spaces affect frame design and steel quantities."],
    ["Design Loads", "Wind, snow, seismic, crane and equipment loads shape the final structural solution."],
    ["Roof and Wall Systems", "Insulated panels, skylights, curtain walls and BIPV systems create different envelope costs."],
    ["Project Scope", "Material supply, fabrication, delivery and complete construction support represent different service levels."],
  ];

  return (
    <section className="pemb-seo-section patterned">
      <div className="wide-container business-detail-pad">
        <header className="pemb-seo-heading"><span aria-hidden="true">04</span><div><small>PEMB KNOWLEDGE GUIDE</small><h2>Pre-Engineered Metal Building Systems</h2></div></header>
        <article className="pemb-seo-content">
          <section className="pemb-seo-intro">
            <p className="eyebrow">WHAT DOES PEMB MEAN IN CONSTRUCTION?</p>
            <h3>Engineered off-site for efficient on-site assembly</h3>
            <p>A pre-engineered metal building is designed, detailed and manufactured as one coordinated steel building system. Primary framing, secondary members, roof and wall components are prepared off-site to meet the project's loads, dimensions and operating requirements.</p>
            <p>This integrated approach can shorten delivery, reduce material waste and improve cost control while providing durable, adaptable space for warehouses, factories, logistics parks and commercial buildings.</p>
          </section>

          <section className="pemb-comparison-block">
            <div className="pemb-subheading"><small>SYSTEM COMPARISON</small><h3>PEMB vs. Traditional Steel Structure</h3></div>
            <div className="pemb-table-wrap">
              <table className="pemb-comparison-table">
                <thead><tr><th>Aspect</th><th>Pre-Engineered Metal Building</th><th>Traditional Steel Structure</th></tr></thead>
                <tbody>{comparisons.map(([aspect, pemb, traditional]) => <tr key={aspect}><th>{aspect}</th><td>{pemb}</td><td>{traditional}</td></tr>)}</tbody>
              </table>
            </div>
          </section>

          <section className="pemb-application-block">
            <div className="pemb-subheading"><small>PROJECT APPLICATIONS</small><h3>Where PEMB Systems Perform Best</h3></div>
            <div className="pemb-application-grid">{applications.map(([title, copy], index) => <article key={title}><b>{String(index + 1).padStart(2, "0")}</b><h4>{title}</h4><p>{copy}</p></article>)}</div>
          </section>

          <section className="pemb-cost-block">
            <div className="pemb-subheading"><small>PROJECT BUDGET</small><h3>What Affects Pre-Engineered Metal Building Cost?</h3><p>Reliable pricing should be based on real design conditions rather than a fixed square-metre rate.</p></div>
            <div className="pemb-cost-grid">{costs.map(([title, copy]) => <article key={title}><i aria-hidden="true" /><div><h4>{title}</h4><p>{copy}</p></div></article>)}</div>
          </section>

          <aside className="pemb-selection-note"><strong>Choosing the right system</strong><p>PEMB is ideal when speed, cost efficiency and large open interiors are priorities. Traditional steel construction remains suitable for complex, high-rise or heavily customized structures. Final selection should consider loads, geometry, future expansion, local standards and total project scope.</p></aside>
        </article>
      </div>
    </section>
  );
}

function SteelFabricationTestimonialsSection() {
  const testimonials: [string, string][] = [
    ["Megasteel's precision cutting, advanced equipment and modular packaging made our project installation fast and cost-effective. Quality and efficiency were excellent.", "Southeast Asian Logistics Project"],
    ["Their automated production lines ensured accurate assembly, while shot blasting and painting met international standards. Real-time production updates gave us confidence throughout delivery.", "Chinese High-Tech Industrial Building"],
    ["Faced with a tight schedule, Megasteel optimized materials, controlled costs and delivered high-quality structures. Their after-sales support completed a reliable service experience.", "Commercial Project Developer"],
  ];

  return (
    <section className="pemb-testimonial-section fabrication-testimonial-section">
      <div className="wide-container business-detail-pad">
        <header className="pemb-testimonial-heading"><span aria-hidden="true">03</span><h2>What Our Clients Say About Our Steel Structure Fabrication</h2></header>
        <div className="pemb-testimonial-list">
          {testimonials.map(([quote, client]) => <blockquote className="pemb-testimonial-card" key={client}><p><b aria-hidden="true">“</b>{quote}</p><cite><i aria-hidden="true" />{client}</cite></blockquote>)}
        </div>
      </div>
    </section>
  );
}

function SteelFabricationSeoSection() {
  const process = [
    ["Drawing Review and Planning", "Review structural drawings, connection details, specifications, component lists and delivery requirements before production."],
    ["Material Preparation and Cutting", "Verify steel plates, sections and profiles before accurate nesting, cutting and identification."],
    ["Assembly and Welding", "Assemble and weld members under controlled procedures for strength, alignment and dimensional accuracy."],
    ["Drilling and Connection Processing", "Process bolt holes, connection plates, stiffeners and base plates to support efficient erection."],
    ["Shot Blasting and Surface Treatment", "Apply blasting, primer coating or painting according to corrosion protection and project requirements."],
    ["Inspection, Marking and Packaging", "Inspect, identify and package components by installation sequence for transport and site assembly."],
  ];
  const quality = [
    ["Material Traceability", "Check materials and documentation against project specifications before fabrication."],
    ["Dimensional Accuracy", "Control cutting, drilling and assembly tolerances to reduce site deviation and rework."],
    ["Welding Inspection", "Verify procedures, weld quality and connection reliability through defined inspections."],
    ["Surface Treatment", "Control blasting, coating thickness, painting and corrosion-protection requirements."],
    ["Component Marking", "Use clear identification so contractors can sort and install members efficiently."],
    ["Export Packaging", "Plan modular bundles and loading sequences for overseas transport and erection."],
  ];
  const checklist = [
    ["Drawing Review", "Connection details and component lists", "Reduces design conflicts and production errors"],
    ["Workshop Capacity", "Cutting, welding, drilling, lifting and assembly resources", "Supports large industrial project volumes"],
    ["Material Control", "Traceability, inspection and document management", "Confirms compliance with specifications"],
    ["Welding Quality", "Qualified procedures, personnel and inspection records", "Protects structural reliability"],
    ["Dimensional Control", "Tolerance checks throughout production", "Improves erection speed and limits rework"],
    ["Surface Protection", "Blasting, primer, paint and corrosion control", "Improves long-term durability"],
    ["Export Readiness", "Marking, packaging and loading sequence", "Simplifies overseas unloading and installation"],
    ["Communication", "Production updates, issue tracking and delivery planning", "Reduces gaps across project teams"],
  ];

  return (
    <section className="pemb-seo-section fabrication-seo-section patterned">
      <div className="wide-container business-detail-pad">
        <header className="pemb-seo-heading fabrication-seo-heading"><span aria-hidden="true">04</span><div><small>FABRICATION DELIVERY GUIDE</small><h2>Steel Structure Fabrication Process and Quality Control</h2></div></header>
        <article className="pemb-seo-content fabrication-seo-content">
          <section className="pemb-seo-intro fabrication-seo-intro">
            <p className="eyebrow">FROM DRAWING REVIEW TO EXPORT PACKAGING</p>
            <h3>A controlled workflow for accurate steel components</h3>
            <p>A reliable Chinese structural steel fabricator should connect engineering review, production planning, quality inspection and packaging within one traceable workflow.</p>
            <p>Megasteel's process is designed to reduce production uncertainty, improve component accuracy and prepare steel members for efficient delivery and site erection.</p>
          </section>

          <section className="fabrication-process-block">
            <div className="pemb-subheading"><small>PRODUCTION PROCESS</small><h3>Our Structural Steel Fabrication Workflow</h3></div>
            <ol className="fabrication-process-grid">{process.map(([title, copy], index) => <li key={title}><b>{String(index + 1).padStart(2, "0")}</b><h4>{title}</h4><p>{copy}</p></li>)}</ol>
          </section>

          <section className="fabrication-quality-block">
            <div className="pemb-subheading"><small>QUALITY ASSURANCE</small><h3>Quality Control Across the Fabrication Chain</h3><p>Quality should be managed at every production stage, not only during final inspection.</p></div>
            <div className="fabrication-quality-grid">{quality.map(([title, copy]) => <article key={title}><i aria-hidden="true" /><h4>{title}</h4><p>{copy}</p></article>)}</div>
          </section>

          <section className="fabrication-checklist-block">
            <div className="pemb-subheading"><small>BUYER CHECKLIST</small><h3>How to Choose a Chinese Structural Steel Fabricator</h3><p>Compare capability, control and delivery readiness rather than unit price alone.</p></div>
            <div className="pemb-table-wrap"><table className="pemb-comparison-table fabrication-checklist-table"><thead><tr><th>Evaluation Factor</th><th>What Buyers Should Check</th><th>Why It Matters</th></tr></thead><tbody>{checklist.map(([factor, check, value]) => <tr key={factor}><th>{factor}</th><td>{check}</td><td>{value}</td></tr>)}</tbody></table></div>
          </section>

          <aside className="pemb-selection-note"><strong>Integrated project support</strong><p>For warehouses, factories, logistics centers and pre-engineered metal buildings, Megasteel connects fabrication planning, production management, quality control, modular packaging and delivery coordination to support reliable site assembly.</p></aside>
        </article>
      </div>
    </section>
  );
}

function SteelFabricationFaqSection() {
  const faqs: [string, string][] = [
    ["What does steel structure fabrication involve?", "Steel structure fabrication transforms raw steel into defined structural components through drawing review, cutting, drilling, assembly, welding, surface treatment, inspection, marking and packaging. Precise engineering and controlled production help ensure quality and reliable site assembly."],
    ["Why is steel structure fabrication widely used in construction?", "Fabricated steel combines high strength, durability, predictable factory quality and efficient installation. Its strength-to-weight ratio and suitability for prefabrication make it effective for industrial buildings, warehouses, commercial structures and infrastructure."],
    ["What are the typical steps in the steel structure manufacturing process?", "The typical sequence includes design and planning, material verification, cutting and drilling, assembly and welding, dimensional inspection, shot blasting or painting, component marking and final packaging."],
    ["What are the main applications of construction steel fabrication?", "Common applications include industrial plants, logistics warehouses, commercial buildings, multi-story structures, parking facilities, bridges, equipment platforms and other projects requiring durable load-bearing frames."],
    ["Which types of steel are commonly used by structural metal fabricators?", "Steel grades are selected according to structural drawings, loads and applicable standards. Fabrication can support project-specified ASTM, EN, JIS or GB materials, subject to engineering review and availability."],
    ["Is steel structure fabrication environmentally sustainable?", "Yes. Structural steel is recyclable and can be reused without losing its core material properties. Accurate cutting, optimized design and controlled factory production can also reduce material waste and site work."],
    ["What should buyers check when choosing Chinese structural steel fabricators?", "Buyers should review workshop capacity, drawing coordination, material traceability, welding control, dimensional accuracy, surface treatment, export packaging, communication and relevant industrial project experience."],
    ["Can Megasteel support overseas structural steel fabrication projects?", "Yes. Megasteel supports overseas projects with drawing coordination, component processing, inspection, surface treatment, marking, modular packaging and delivery planning for industrial buildings, factories and logistics warehouses."],
    ["Why is export packaging important in structural steel fabrication?", "Clear marking and modular packaging help contractors identify, unload and install components in the correct sequence. This reduces sorting time, prevents confusion and supports smoother erection on site."],
  ];

  return (
    <section className="epc-faq-section fabrication-faq-section patterned">
      <div className="wide-container business-detail-pad">
        <header className="epc-faq-heading"><span aria-hidden="true">05</span><p>FABRICATION KNOWLEDGE</p><h2>Steel Structure Fabrication FAQs</h2></header>
        <div className="epc-faq-static-list">{faqs.map(([question, answer]) => <article key={question}><div className="epc-faq-question"><b aria-hidden="true">Q</b><h3>{question}</h3></div><div className="epc-faq-answer"><b aria-hidden="true">A</b><p>{answer}</p></div></article>)}</div>
      </div>
    </section>
  );
}

function CurtainWallTestimonialsSection() {
  const testimonials: [string, string][] = [
    ["Megasteel's curtain wall system elevated our high-rise design while ensuring unmatched structural strength. The sleek, thermally broken profiles improved energy efficiency by 30%, and the installation was flawlessly executed. A partner we trust for iconic facades.", "Commercial Developer"],
    ["After three years in harsh coastal conditions, Megasteel's curtain wall shows zero corrosion or leakage. Their high-performance seals and marine-grade aluminum proved why they remain the gold standard for durability.", "Architecture Firm"],
    ["We challenged Megasteel with a double-skin, geometrically complex facade. They delivered innovative solar-responsive louvers within budget, proving their expertise in blending aesthetics with functionality.", "Industrial Developer"],
  ];

  return (
    <section className="pemb-testimonial-section curtain-wall-testimonial-section">
      <div className="wide-container business-detail-pad">
        <header className="pemb-testimonial-heading"><span aria-hidden="true">03</span><h2>What Our Clients Say About Our Megasky Curtain Wall</h2></header>
        <div className="pemb-testimonial-list">
          {testimonials.map(([quote, client]) => <blockquote className="pemb-testimonial-card" key={client}><p><b aria-hidden="true">“</b>{quote}</p><cite><i aria-hidden="true" />{client}</cite></blockquote>)}
        </div>
      </div>
    </section>
  );
}

function CurtainWallFaqSection() {
  const faqs: [string, string][] = [
    ["What are the different types of curtain walls used in construction?", "Curtain walls are commonly made with glass, aluminum and other durable materials. The main systems include unitized curtain walls, structural glazing and traditional curtain walls. The right material and system depend on the required appearance, environmental performance and structural conditions."],
    ["What are the primary requirements for a curtain wall design?", "A reliable curtain wall design must address structural integrity, building movement, weather resistance, energy efficiency and acoustic control. These requirements should be coordinated from system selection through detailing, testing and installation."],
    ["How does a window wall differ from a curtain wall system?", "A window wall normally spans one floor and is supported between the floor slabs above and below. A curtain wall is an independent exterior envelope that can extend across several floors beyond the slab edge, making it suitable for continuous large-area facades."],
    ["Are curtain walls load-bearing?", "No. Curtain walls do not carry the building's floor or roof loads. They are lightweight exterior envelope systems anchored to the main structure to resist their own weight, wind and environmental loads while providing weather protection and architectural appearance."],
  ];

  return (
    <section className="epc-faq-section curtain-wall-faq-section patterned">
      <div className="wide-container business-detail-pad">
        <header className="epc-faq-heading"><span aria-hidden="true">04</span><p>CURTAIN WALL KNOWLEDGE</p><h2>Curtain Wall System FAQs</h2></header>
        <div className="epc-faq-static-list">{faqs.map(([question, answer]) => <article key={question}><div className="epc-faq-question"><b aria-hidden="true">Q</b><h3>{question}</h3></div><div className="epc-faq-answer"><b aria-hidden="true">A</b><p>{answer}</p></div></article>)}</div>
      </div>
    </section>
  );
}

function BipvStrengthSection() {
  const items = ["Integration of BIPV System", "Integrated Construction in BIPV Solar Modules", "Completed Synchronously with the Photovoltaic Building"];
  return <section className="pemb-strength-section bipv-strength-section">
    <header className="pemb-strength-heading bipv-strength-heading"><span aria-hidden="true">01</span><h2>Why Choose Megasteel as Your Mega-BIPV Manufacturer</h2></header>
    <div className="wide-container bipv-strength-list">{items.map((item) => <article key={item}><i aria-hidden="true" /><h3>{item}</h3></article>)}</div>
  </section>;
}

function BipvContentSection({ testimonials }: { testimonials: [string, string][] }) {
  const integrations = [
    ["Structural Coordination", "Coordinate BIPV loads with the roof structure, purlins, bracing, building span, wind and snow actions."],
    ["Envelope Integration", "Resolve photovoltaic panels with waterproofing, drainage, insulation and the complete enclosure system."],
    ["Construction Synchronization", "Plan BIPV installation together with steel erection and building-envelope construction."],
    ["Electrical Coordination", "Define module layout, inverter positions, cable routes and grid connection requirements early."],
    ["Operation and Maintenance", "Provide safe access, walkways and inspection points for reliable long-term performance."],
  ];
  const solutions = [
    ["BIPV Roof System", "Integrated solar roofing for warehouses, factories and logistics parks, combining generation with weather protection."],
    ["BIPV Facade System", "Architectural photovoltaic facades for commercial buildings, industrial offices and landmark projects."],
    ["BIPV Curtain Wall Integration", "Coordinated curtain wall and solar design that unifies facade performance, appearance and power generation."],
    ["Steel Building Solar Integration", "A complete approach aligning roof loads, waterproofing, maintenance access and the construction schedule."],
  ];
  const process = [
    ["Project Requirement Review", "Confirm building type, climate, energy demand, available area, programme and grid conditions."],
    ["Solar and Envelope Analysis", "Evaluate orientation, shading, generation potential and roof or facade requirements."],
    ["Structural and Waterproofing Coordination", "Resolve loads, uplift, drainage, purlins, waterproofing and safe maintenance access."],
    ["BIPV System Design", "Develop module arrangement, envelope details, electrical routing and installation coordination."],
    ["Fabrication and Construction Support", "Coordinate BIPV components with steel fabrication, roof panels and envelope construction."],
    ["Delivery and Technical Support", "Support project execution, technical communication, handover and ongoing coordination."],
  ];
  const costs = [
    ["Building Area", "Available roof and facade area determines potential installation capacity."],
    ["System Type", "Roof, facade and curtain-wall BIPV require different details and installation methods."],
    ["Structural Load", "Wind, snow, roof capacity and maintenance access shape the engineering solution."],
    ["Electrical Design", "Module layout, inverters, cable routes and grid connection influence system cost."],
    ["Project Scope", "Design, material supply, construction coordination and EPC support affect the quotation."],
  ];
  return <>
    <section className="pemb-testimonial-section bipv-testimonial-section"><div className="wide-container business-detail-pad">
      <header className="pemb-testimonial-heading"><span aria-hidden="true">03</span><h2>What Our Clients Say About Our Mega-BIPV Building Integrated PV System</h2></header>
      <div className="pemb-testimonial-list">{testimonials.map(([quote, client]) => <blockquote className="pemb-testimonial-card" key={client}><p><b aria-hidden="true">“</b>{quote}</p><cite><i aria-hidden="true" />{client}</cite></blockquote>)}</div>
    </div></section>
    <section className="bipv-seo-section patterned"><div className="wide-container business-detail-pad">
      <header className="bipv-seo-heading"><p>BIPV SYSTEM ENGINEERING</p><h2>How Megasteel Integrates BIPV with Steel Structure Buildings</h2><span>Industrial BIPV performs best when photovoltaic modules, steel structure, roof, facade, drainage, waterproofing and electrical systems are engineered together.</span></header>
      <div className="bipv-integration-grid">{integrations.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <header className="bipv-subheading"><h2>BIPV Roof, Facade and Building Envelope Solutions</h2><p>Megasteel develops coordinated photovoltaic building systems for industrial and commercial facilities.</p></header>
      <div className="bipv-solution-grid">{solutions.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <header className="bipv-subheading"><h2>Our BIPV Design and Construction Process</h2></header>
      <ol className="bipv-process-list">{process.map(([title, copy], index) => <li key={title}><b>{String(index + 1).padStart(2, "0")}</b><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
      <header className="bipv-subheading"><h2>What Affects BIPV System Cost and ROI?</h2><p>Cost and return depend on the building, photovoltaic system, local energy conditions and delivery scope.</p></header>
      <div className="bipv-cost-grid">{costs.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <aside className="bipv-selection-note"><p>CHOOSING A BIPV COMPANY</p><h2>Integrated capability reduces interface risk</h2><span>For industrial steel buildings, compare structural engineering, waterproofing, electrical coordination, installation planning, maintenance access and proven project delivery rather than photovoltaic modules alone.</span></aside>
    </div></section>
  </>;
}

function BipvFaqSection() {
  const faqs: [string, string][] = [
    ["What is a BIPV building integrated photovoltaic system, and how does it function?", "A BIPV system incorporates photovoltaic panels directly into a roof, facade or other building element. The modules provide building-envelope protection while generating electricity and can replace conventional construction materials."],
    ["How are building integrated PV systems designed and planned?", "Design considers energy demand, architectural requirements, module type, daylighting, thermal performance, orientation and site conditions so the system meets both functional and aesthetic goals."],
    ["What are the benefits of integrating BIPV solar modules into building facades and roofs?", "BIPV modules combine weather protection, architectural expression and renewable generation. They may replace roofing or facade materials and can also reduce heat gain and building energy demand."],
    ["What types of PV systems are commonly used in BIPV installations?", "BIPV may use grid-connected, standalone or battery-backed systems. Roof and facade solutions are selected around the building's energy strategy, architecture and operational needs."],
    ["How do BIPV systems contribute to energy savings and return on investment (ROI)?", "Integrated generation reduces purchased electricity and may lower cooling demand. Return depends on system cost, local electricity prices, generation yield, maintenance and the value of replaced envelope materials."],
    ["What is the difference between BIPV and rooftop solar panels?", "Rooftop panels are mounted above an existing roof. BIPV is integrated into the building envelope and can replace or combine with roof panels, facade panels, curtain walls or skylights."],
    ["What is a photovoltaic building?", "A photovoltaic building integrates solar generation into its roof, facade or envelope so the building fabric also produces electricity."],
    ["What is a BIPV roofing system?", "A BIPV roof combines photovoltaic modules with weather protection. Industrial systems must coordinate roof load, purlins, drainage, waterproofing, fire safety, cabling and maintenance access."],
    ["How should buyers compare BIPV companies?", "Compare structural engineering, roof and facade integration, waterproofing design, electrical coordination, construction support, project references and long-term maintenance planning."],
    ["Is BIPV suitable for steel structure buildings?", "Yes. BIPV suits steel buildings when roof loads, purlins, waterproofing, cable routing, construction sequence and maintenance requirements are evaluated during design."],
  ];
  return <section className="epc-faq-section bipv-faq-section patterned"><div className="wide-container business-detail-pad">
    <header className="epc-faq-heading"><span aria-hidden="true">04</span><p>BIPV KNOWLEDGE</p><h2>BIPV Building Integrated Photovoltaic FAQs</h2></header>
    <div className="epc-faq-static-list">{faqs.map(([question, answer]) => <article key={question}><div className="epc-faq-question"><b aria-hidden="true">Q</b><h3>{question}</h3></div><div className="epc-faq-answer"><b aria-hidden="true">A</b><p>{answer}</p></div></article>)}</div>
  </div></section>;
}

export function BusinessDetailPage({ data }: { data: BusinessPage }) {
  const iconStrengths = Boolean(data.strengthIcons?.length);

  return (
    <main className={`business-detail-page ${data.hideIntro ? "epc-detail-page" : ""} ${data.pembStrengthCarousel ? "pemb-detail-page" : ""} ${data.steelStrengthCarousel ? "fabrication-detail-page" : ""} ${data.curtainWallPage ? "curtain-wall-detail-page" : ""} ${data.bipvPage ? "bipv-detail-page" : ""}`}>
      <GlobalHeader active="business" />
      <ScrollAnimations />

      <section className={`business-detail-hero ${data.heroParagraphs ? "detailed-hero" : ""}`}>
        <img src={data.image} alt={`${data.title} industrial project`} />
        <div className="business-detail-hero-shade" />
        <div className="wide-container business-detail-hero-copy">
          <p className="eyebrow">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          {data.heroParagraphs ? data.heroParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>{data.summary}</p>}
          <a className="round-button" href="/contact">{data.heroCta ?? "Request a Project Quote"} <i>→</i></a>
        </div>
      </section>

      {!data.hideIntro && !data.hideMetricsIntro && <section className="business-detail-intro">
        <div className="wide-container">
          <p>{data.summary}</p>
          <div className="business-detail-metrics">{data.metrics.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
        </div>
      </section>}

      {data.bipvPage ? <BipvStrengthSection /> : data.curtainWallPage ? <CurtainWallStrengthCarousel /> : data.steelStrengthCarousel ? <SteelFabricationStrengthCarousel /> : data.pembStrengthCarousel ? <PembStrengthCarousel /> : <section className={`business-detail-why patterned ${iconStrengths ? "epc-why-reference" : ""}`}>
        <div className="wide-container business-detail-pad">
          <div className="business-detail-heading"><span>01</span><div>{!iconStrengths && <small>WHY CHOOSE MEGASTEEL</small>}<h2>{data.strengthTitle ?? "Capability Built Around Project Certainty"}</h2></div></div>
          <div className={`business-strength-grid ${iconStrengths ? "icon-list" : ""}`}>{data.strengths.map((item, index) => <article key={item}><b>{String(index + 1).padStart(2, "0")}</b>{data.strengthIcons?.[index] ? <span className="business-strength-icon"><img src={data.strengthIcons[index]} alt="" /></span> : <i aria-hidden="true" />}<h3>{item}</h3></article>)}</div>
        </div>
      </section>}

      <section className="business-detail-cases">
        <div className="wide-container business-detail-pad">
          <div className="business-detail-heading"><span>02</span><div><small>SELECTED CASES</small><h2>{data.casesTitle ?? "Representative Project Experience"}</h2></div></div>
          <div className="business-case-grid">{data.cases.map(([name, place, area, image]) => <article key={name}><img src={image} alt={name} /><div><h3>{name}</h3><p><span>{place}</span><span>{area}</span></p></div></article>)}</div>
        </div>
      </section>

      {data.bipvPage ? <BipvContentSection testimonials={data.testimonials} /> : data.curtainWallPage ? <CurtainWallTestimonialsSection /> : data.steelStrengthCarousel ? <SteelFabricationTestimonialsSection /> : data.pembStrengthCarousel ? <PembTestimonialsSection /> : !data.hideIntro && <section className="business-detail-testimonials">
        <div className="wide-container business-detail-pad">
          <div className="business-detail-heading light"><span>03</span><div><small>CLIENT PERSPECTIVE</small><h2>What Project Teams Value</h2></div></div>
          <div className="business-quote-grid">{data.testimonials.map(([quote, client]) => <blockquote key={client}><b>“</b><p>{quote}</p><cite>{client}</cite></blockquote>)}</div>
        </div>
      </section>}

      {data.bipvPage ? <BipvFaqSection /> : data.curtainWallPage ? <CurtainWallFaqSection /> : data.hideIntro ? <EpcSeoSection /> : data.pembStrengthCarousel ? <PembSeoSection /> : data.steelStrengthCarousel ? <SteelFabricationSeoSection /> : <section className="business-detail-process patterned">
        <div className="wide-container business-detail-pad">
          <div className="business-detail-heading"><span>04</span><div><small>DELIVERY SYSTEM</small><h2>{data.processTitle}</h2><p>{data.processIntro}</p></div></div>
          <div className="business-process-list">{data.process.map(([title, copy], index) => <article key={title}><b>{String(index + 1).padStart(2, "0")}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </div>
      </section>}

      {!data.curtainWallPage && !data.bipvPage && (data.hideIntro ? <EpcFaqSection /> : data.pembStrengthCarousel ? <PembFaqSection /> : data.steelStrengthCarousel ? <SteelFabricationFaqSection /> : <section className="business-detail-faq">
        <div className="wide-container business-detail-pad business-faq-layout">
          <div className="business-detail-heading"><span>05</span><div><small>FREQUENTLY ASKED QUESTIONS</small><h2>Practical Answers for Project Planning</h2></div></div>
          <div className="business-faq-list">{data.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><i /></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>)}

      {data.hideIntro || data.pembStrengthCarousel || data.steelStrengthCarousel || data.curtainWallPage || data.bipvPage ? <EpcContactSection /> : <section className="contact-cta layer-cta" id="contact">
        <div className="wide-container cta-card"><img src="/images/steel-laser.jpg" alt="" /><div className="cta-overlay" /><div><h2>Ready to plan your next industrial building?</h2><p>Share the project location, intended use, target area and delivery schedule.</p></div><a className="round-button light-button" href="/contact">Contact Us <i>→</i></a></div>
      </section>}

      <footer>
        <div className="wide-container footer-grid">
          <div><MegaSteelWordmark /><p>Integrated industrial construction solutions.</p></div>
          <div><h3>Contact</h3><a href="tel:+8619553105520">0086-19553105520 (WHATSAPP/WECHAT)</a><a href="mailto:megasteelstructure@126.com">megasteelstructure@126.com</a><address>No.1068, Chongde 7th Avenue, Economic and Technological Development Zone, Dezhou City, Shandong Province</address></div>
          <div><h3>Business</h3><a href="/business/epc-contractor">EPC Contractor</a><a href="/business/pre-engineered-metal-building">Metal Buildings</a><a href="/business/steel-structure-fabrication">Steel Fabrication</a><a href="/business/bipv">Mega-BIPV</a></div>
          <div><h3>Quick Links</h3><a href="/products/steel-structure-system">Products</a><a href="/company-profile">About Us</a><a href="/blog">NEWS</a><a href="/contact">Contact</a></div>
        </div>
        <div className="wide-container copyright"><span>© 2026 MEGASTEEL. All rights reserved.</span><span>www.chinamegasteel.com</span></div>
      </footer>
      <a className="email-us" href="mailto:megasteelstructure@126.com">Email Us</a>
    </main>
  );
}

