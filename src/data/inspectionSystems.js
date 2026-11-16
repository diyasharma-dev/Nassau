export const inspectionSystems = {
  roof: {
    id: "roof",
    title: "Roofing, Drainage, Chimneys & Flashing",
    description: "Long Island weather brings heavy coastal nor'easters, winter snow loads, and humid summer heat. We evaluate every layer of the roof covering and drainage architecture.",
    icon: "roof",
    items: [
      { name: "Roof Surface Coverings", desc: "Asphalt shingles, architectural shingles, slate, clay tile, and rubber flat roof membranes inspected for granule loss, cupping, and missing shingles." },
      { name: "Flashing & Diverters", desc: "Step flashing, valley flashing, drip edges, and dormer kickout diverters preventing water from intruding behind wall cladding." },
      { name: "Gutters & Downspouts", desc: "Pitch, sizing, blockages, joints, and splash blocks directing stormwater at least 6 ft away from foundations." },
      { name: "Chimney Stacks & Crowns", desc: "Brick mortar joints, step flashing, spark arrestors, chimney crowns, and flue caps inspected for spalling." },
      { name: "Skylights & Penetrations", desc: "Flashing seals, weep holes, rubber gaskets, and plumbing vent stack collars checked for dry rot and leaks." },
      { name: "Fascia & Soffits", desc: "Rotten rafter tails, insect damage, intake vents, and fascia board integrity." }
    ]
  },
  foundation: {
    id: "foundation",
    title: "Foundation, Basement, Crawlspaces & Structure",
    description: "Nassau homes encounter unique structural challenges from high water tables on the South Shore to century-old fieldstone basements on the North Shore.",
    icon: "foundation",
    items: [
      { name: "Foundation Walls", desc: "Poured concrete, cinder block, brick, and historic fieldstone walls evaluated for step-cracking and lateral bowing." },
      { name: "Water Seepage & Efflorescence", desc: "Active moisture readings, mineral efflorescence deposits, tide lines, and past flood evidence." },
      { name: "Sump Pumps & French Drains", desc: "Float switches, check valves, discharge routing, battery backups, and perimeter collection trenches." },
      { name: "Support Columns & Lally Columns", desc: "Rust deterioration at base plates, load distribution, and mechanical connection to carrying beams." },
      { name: "Floor Joists & Subflooring", desc: "Sagging, deflection, unauthorized plumber notches, sistered beams, and termite damage." },
      { name: "Crawlspace Vapor Barriers", desc: "Ground moisture barriers, crawlspace vents, insulation placement, and framing clearance." }
    ]
  },
  electrical: {
    id: "electrical",
    title: "Electrical Service, Main Panels & Branch Wiring",
    description: "Thorough testing of service capacity, safety disconnects, breaker compatibility, and branch circuitry to prevent fire and shock hazards.",
    icon: "electrical",
    items: [
      { name: "Service Drop & Meter Base", desc: "Overhead service cables, weatherheads, drip loops, 100A / 150A / 200A capacity, and grounding rods." },
      { name: "Main Service Panel & Breakers", desc: "Overcurrent protection, panel manufacturer check (screening for hazardous Federal Pacific or Zinsco)." },
      { name: "Double-Tapped Neutral / Hot Wires", desc: "Checking that every wire has its own terminal to prevent overheating and arc failures." },
      { name: "Branch Wiring Verification", desc: "Romex NM cable, BX armored cable, ungrounded cloth-covered wiring, and knob-and-tube remnants." },
      { name: "GFCI & AFCI Safety Testing", desc: "Ground-fault protection in kitchens, bathrooms, basements, and exteriors tested with circuit analyzer." },
      { name: "Smoke & Carbon Monoxide Alarms", desc: "NYS Building Code compliance check for interconnected alarms on every floor and bedroom." }
    ]
  },
  hvac: {
    id: "hvac",
    title: "Heating Systems, Boilers, Furnaces & Air Conditioning",
    description: "Evaluating central heating plants, heat exchangers, combustion ventilation, and AC cooling loops to ensure winter safety and efficiency.",
    icon: "hvac",
    items: [
      { name: "Boiler Safety & Operation", desc: "Steam and hydronic hot water boilers, pressure relief valves, low-water cutoffs, and aquastats." },
      { name: "Furnace Heat Exchanger", desc: "Forced hot air burners, flame characteristics, carbon monoxide rollout risks, and filter housings." },
      { name: "Central Air & Heat Pumps", desc: "Outdoor compressor coils, temperature split differentials across supply and return, and condenser pads." },
      { name: "Distribution Ductwork & Radiators", desc: "Cast iron radiators, convector valves, duct leaks, damper controls, and balance across levels." },
      { name: "Flue Pipes & Venting", desc: "Metal venting pitch, barometric dampers, chimney flue draft, and clearances from combustibles." },
      { name: "Oil Storage & Fuel Lines", desc: "Above-ground oil tanks, fuel gauge operation, emergency shutoff switches, and signs of abandoned tanks." }
    ]
  },
  plumbing: {
    id: "plumbing",
    title: "Plumbing Supply, Waste Stacks, Water Heaters & Fixtures",
    description: "Complete testing of water pressure, functional drainage, supply piping materials, water heaters, and fixture seals throughout the house.",
    icon: "plumbing",
    items: [
      { name: "Main Water Service & Shutoff", desc: "Street shutoff valve, municipal meter, water pressure test, and lead service line check." },
      { name: "Supply Line Materials", desc: "Copper, PEX, CPVC, and older galvanized steel pipes prone to internal corrosion and pressure drop." },
      { name: "Drain, Waste & Vent (DWV)", desc: "Cast iron stacks, PVC transitions, venting pipes through roof, and drum trap identification." },
      { name: "Water Heater Performance", desc: "Tank age, temperature/pressure relief (TPR) valve and discharge pipe, burner operation, and expansion tank." },
      { name: "Fixture Operation & Leak Tests", desc: "Sinks, faucets, showers, tubs, toilets, bidets, and hidden trap seal leaks under cabinets." },
      { name: "Exterior Hose Bibbs", desc: "Frost-free sillcocks, anti-siphon vacuum breakers, and winter shutoff isolation valves." }
    ]
  },
  attic: {
    id: "attic",
    title: "Attic Structure, Roof Framing, Insulation & Ventilation",
    description: "Attics reveal hidden roof leaks, dangerous framing alterations, mold from bathroom exhaust vents, and severe energy loss.",
    icon: "attic",
    items: [
      { name: "Roof Trusses & Rafters", desc: "Rafter framing, collar ties, ridge boards, sagging, and cut framing from unauthorized remodeling." },
      { name: "Roof Sheathing & Delamination", desc: "Plywood or tongue-and-groove deck inspection for moisture stains, rot, and localized discoloration." },
      { name: "Insulation Depth & R-Value", desc: "Blown fiberglass, cellulose, rockwool, or foam depth evaluated against modern efficiency targets." },
      { name: "Ventilation Dynamics", desc: "Ridge vents, soffit baffles, gable vents, and power attic fans ensuring moisture doesn't rot rafters." },
      { name: "Bathroom Exhaust Termination", desc: "Confirming fan exhaust ducts vent outside rather than illegally blowing humid air into the attic." },
      { name: "Pest / Rodent Activity", desc: "Screening insulation for squirrel, raccoon, rodent nesting, or bat guano." }
    ]
  },
  exterior: {
    id: "exterior",
    title: "Exteriors, Siding, Grading, Decks, Driveways & Garages",
    description: "Protecting the envelope of your property from weather, poor lot drainage, and dangerous exterior structures.",
    icon: "exterior",
    items: [
      { name: "Siding & Wall Cladding", desc: "Vinyl, cedar shingles, aluminum, brick veneer, and stucco inspected for gaps and thermal clearance." },
      { name: "Lot Grading & Topography", desc: "Site drainage slope diverting rainwater away from foundation walls rather than pooling." },
      { name: "Decks, Porches & Railings", desc: "Ledger board attachment, joist hangers, structural posts, baluster spacing, and rot resistance." },
      { name: "Driveways, Walkways & Steps", desc: "Settling concrete, trip hazards, handrail safety, and slope towards garage entries." },
      { name: "Detached Garages", desc: "Framing stability, roof covering, garage door auto-reverse safety sensors, and subpanel wiring." },
      { name: "Retaining Walls & Fencing", desc: "Timber and masonry retaining walls, weep holes, soil surcharge pressure, and drainage." }
    ]
  },
  termite: {
    id: "termite",
    title: "Wood Destroying Organisms (Termites, Ants & Beetles)",
    description: "Official NPMA-33 Wood Destroying Insect inspection included FREE with every full home inspection. Required by lenders for mortgage approval.",
    icon: "termite",
    items: [
      { name: "Subterranean Termite Evidence", desc: "Mud shelter tubes on foundation walls, wood frass, hollowed timber, and swarmer wings." },
      { name: "Carpenter Ant Activity", desc: "Coarse sawdust-like wood shavings (frass), excavated galleries in damp structural sill plates." },
      { name: "Powderpost Beetles", desc: "Shotgun-style pinholes in basement joists and fine powdery wood residue from larvae." },
      { name: "Carpenter Bees", desc: "Smooth round half-inch entry holes bored into cedar trim, deck joists, and fascia boards." },
      { name: "Official NPMA-33 Form", desc: "Official state-approved document signed by certified inspector, ready for submission to your mortgage lender." },
      { name: "Treatment Recommendations", desc: "Immediate perimeter or spot treatment advice if active infestation or past damage is uncovered." }
    ]
  }
};
