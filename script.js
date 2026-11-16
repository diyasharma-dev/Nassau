/**
 * HomeStar Inspections NY & Queens Home Inspector NY - Nassau County Division
 * Interactive Client-Side Features & Utilities
 */

// 1. Data Store for 1,700-Point Inspection Systems
const inspectionSystemsData = {
  roof: {
    title: "Roofing, Drainage, Chimneys & Flashing",
    description: "Long Island weather brings heavy coastal nor'easters, winter snow loads, and summer heat. We evaluate every layer of the roof covering and drainage architecture.",
    items: [
      { name: "Roof Surface Coverings", desc: "Asphalt shingles, architectural shingles, slate, clay tile, and rubber flat roof membranes." },
      { name: "Flashing & Diverters", desc: "Step flashing, valley flashing, drip edges, and dormer kickout diverters preventing water intrusion." },
      { name: "Gutters & Downspouts", desc: "Pitch, sizing, blockages, joints, and splash blocks directing water at least 6 ft away from foundations." },
      { name: "Chimney Stacks & Crowns", desc: "Brick mortar joints, step flashing, spark arrestors, chimney crowns, and flue caps." },
      { name: "Skylights & Penetrations", desc: "Flashing seals, weep holes, rubber gaskets, and plumbing vent stack collars." },
      { name: "Fascia & Soffits", desc: "Rotten rafter tails, insect damage, intake vents, and fascia board integrity." }
    ]
  },
  foundation: {
    title: "Foundation, Basement, Crawlspaces & Structure",
    description: "Nassau homes encounter unique structural challenges from high water tables on the South Shore to century-old fieldstone basements on the North Shore.",
    items: [
      { name: "Foundation Walls", desc: "Poured concrete, cinder block, brick, and historic fieldstone walls evaluated for step-cracking and bowing." },
      { name: "Water Seepage & Efflorescence", desc: "Active moisture readings, mineral efflorescence deposits, tide lines, and past flood evidence." },
      { name: "Sump Pumps & French Drains", desc: "Float switches, check valves, discharge routing, battery backups, and perimeter collection trenches." },
      { name: "Support Columns & Lally Columns", desc: "Rust deterioration at base plates, load distribution, and mechanical connection to carrying beams." },
      { name: "Floor Joists & Subflooring", desc: "Sagging, deflection, unauthorized plumber notches, sistered beams, and termite damage." },
      { name: "Crawlspace Vapor Barriers", desc: "Ground moisture barriers, crawlspace vents, insulation placement, and framing clearance." }
    ]
  },
  electrical: {
    title: "Electrical Service, Main Panels & Branch Wiring",
    description: "Thorough testing of service capacity, safety disconnects, breaker compatibility, and branch circuitry to prevent fire and shock hazards.",
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
    title: "Heating Systems, Boilers, Furnaces & Air Conditioning",
    description: "Evaluating central heating plants, heat exchangers, combustion ventilation, and AC cooling loops to ensure winter safety and efficiency.",
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
    title: "Plumbing Supply, Waste Stacks, Water Heaters & Fixtures",
    description: "Complete testing of water pressure, functional drainage, supply piping materials, water heaters, and fixture seals throughout the house.",
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
    title: "Attic Structure, Roof Framing, Insulation & Ventilation",
    description: "Attics reveal hidden roof leaks, dangerous framing alterations, mold from bathroom exhaust vents, and severe energy loss.",
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
    title: "Exteriors, Siding, Grading, Decks, Driveways & Garages",
    description: "Protecting the envelope of your property from weather, poor lot drainage, and dangerous exterior structures.",
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
    title: "Wood Destroying Organisms (Termites, Ants & Beetles)",
    description: "Official NPMA-33 Wood Destroying Insect inspection included FREE with every full home inspection. Required by lenders for mortgage approval.",
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

// 2. DOM Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initChecklistExplorer();
  initRegionTabs();
  initCalculator();
});

// 3. Mobile Navigation Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
}

function closeMobileNav() {
  const mobileNav = document.getElementById("mobileNav");
  if (mobileNav) {
    mobileNav.classList.remove("active");
  }
}

// 4. Checklist Explorer System Handler
function initChecklistExplorer() {
  const navButtons = document.querySelectorAll(".system-nav-btn");
  const displayCard = document.getElementById("systemDisplayCard");

  if (!navButtons.length || !displayCard) return;

  // Render initial system (roof)
  renderSystemDetails("roof");

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      navButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const systemKey = btn.getAttribute("data-system");
      renderSystemDetails(systemKey);
    });
  });
}

function renderSystemDetails(systemKey) {
  const data = inspectionSystemsData[systemKey];
  const displayCard = document.getElementById("systemDisplayCard");
  if (!data || !displayCard) return;

  let itemsHtml = data.items.map(item => `
    <div class="sys-item">
      <span class="sys-item-bullet">&#9670;</span>
      <div class="sys-item-text">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.desc)}</span>
      </div>
    </div>
  `).join("");

  displayCard.innerHTML = `
    <div class="sys-header">
      <h3>${escapeHtml(data.title)}</h3>
      <p>${escapeHtml(data.description)}</p>
    </div>
    <div class="sys-items-grid">
      ${itemsHtml}
    </div>
  `;
}

// 5. Nassau Region Tabs & Town Filtering
function initRegionTabs() {
  const tabs = document.querySelectorAll(".region-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const region = tab.getAttribute("data-region");
      filterTownsByRegion(region);
    });
  });
}

function filterTownsByRegion(region) {
  const townCards = document.querySelectorAll(".town-card");
  const searchInput = document.getElementById("townSearchInput");
  if (searchInput) searchInput.value = "";

  townCards.forEach(card => {
    const cardRegion = card.getAttribute("data-region");
    if (region === "all" || cardRegion === region) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

function filterTowns() {
  const query = (document.getElementById("townSearchInput").value || "").toLowerCase().trim();
  const townCards = document.querySelectorAll(".town-card");
  const tabs = document.querySelectorAll(".region-tab");

  // Reset active tab to 'all' while searching
  tabs.forEach(t => {
    if (t.getAttribute("data-region") === "all") t.classList.add("active");
    else t.classList.remove("active");
  });

  townCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

// 6. Fee Calculator Logic
let currentSelectedPropType = "single";
let currentBasePrice = 475;

function initCalculator() {
  const optButtons = document.querySelectorAll(".calc-opt-btn");
  optButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      optButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSelectedPropType = btn.getAttribute("data-type");
      currentBasePrice = parseInt(btn.getAttribute("data-base"), 10) || 475;
      updateCalculator();
    });
  });

  updateCalculator();
}

function updateCalculator() {
  const slider = document.getElementById("sqftSlider");
  const sqftDisplay = document.getElementById("sqftDisplay");
  const priceDisplay = document.getElementById("calcPriceDisplay");
  if (!slider || !sqftDisplay || !priceDisplay) return;

  const sqft = parseInt(slider.value, 10);
  sqftDisplay.textContent = sqft.toLocaleString() + " sq ft";

  // Square footage fee adjustments
  let sqftAdjustment = 0;
  if (sqft > 2000) {
    sqftAdjustment = Math.floor((sqft - 2000) / 500) * 45;
  }

  // Age adjustment
  const ageRadios = document.getElementsByName("propAge");
  let ageAdjustment = 0;
  for (const radio of ageRadios) {
    if (radio.checked) {
      if (radio.value === "mid") ageAdjustment = 35;
      if (radio.value === "historic") ageAdjustment = 65;
      break;
    }
  }

  const lowEstimate = currentBasePrice + sqftAdjustment + ageAdjustment;
  const highEstimate = lowEstimate + 50;

  priceDisplay.textContent = `$${lowEstimate} - $${highEstimate}`;
}

function openBookingFromCalculator() {
  const slider = document.getElementById("sqftSlider");
  const sqft = slider ? slider.value : "2,000";
  const price = document.getElementById("calcPriceDisplay").textContent;

  let propLabel = "Single Family Home";
  if (currentSelectedPropType === "condo") propLabel = "Condominium";
  if (currentSelectedPropType === "multi2") propLabel = "2-Family House";
  if (currentSelectedPropType === "multi3") propLabel = "3-4 Family House";

  openBookingModal(propLabel, `Estimated range: ${price} for ~${sqft} sq ft`);
}

// 7. FAQ Accordion Logic
function toggleFaq(button) {
  const item = button.closest(".faq-item");
  if (!item) return;

  const isActive = item.classList.contains("active");
  
  // Close all other items for clean accordion behavior
  document.querySelectorAll(".faq-item").forEach(other => {
    other.classList.remove("active");
  });

  if (!isActive) {
    item.classList.add("active");
  }
}

// 8. Booking Modal Logic
function openBookingModal(serviceType, notesPreFill) {
  const modal = document.getElementById("bookingModalOverlay");
  const form = document.getElementById("modalBookingForm");
  const success = document.getElementById("modalSuccessState");
  const propSelect = document.getElementById("modalPropType");

  if (!modal) return;

  // Reset states
  if (form) form.style.display = "block";
  if (success) success.style.display = "none";

  if (serviceType && propSelect) {
    for (let i = 0; i < propSelect.options.length; i++) {
      if (propSelect.options[i].value.toLowerCase().includes(serviceType.toLowerCase())) {
        propSelect.selectedIndex = i;
        break;
      }
    }
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModalOverlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function handleModalBackdropClick(event) {
  if (event.target.id === "bookingModalOverlay") {
    closeBookingModal();
  }
}

// 9. Form Submission Handlers
function handleHeroQuote(event) {
  event.preventDefault();
  const name = document.getElementById("heroName").value;
  const phone = document.getElementById("heroPhone").value;
  const town = document.getElementById("heroTown").value;
  const propType = document.getElementById("heroPropType").value;
  const timeline = document.getElementById("heroTimeline").value;

  // Open modal with prefilled data and show success message
  openBookingModal(propType);
  
  const form = document.getElementById("modalBookingForm");
  const success = document.getElementById("modalSuccessState");
  if (form && success) {
    form.style.display = "none";
    success.style.display = "block";
    const p = success.querySelector("p");
    if (p) {
      p.innerHTML = `Thank you, <strong>${escapeHtml(name)}</strong>! Daren Koniuk has received your request for <strong>${escapeHtml(propType)}</strong> in <strong>${escapeHtml(town)}</strong> (${escapeHtml(timeline)}). He will call/text you at <strong>${escapeHtml(phone)}</strong> within 30 minutes.`;
    }
  }

  event.target.reset();
}

function handleFullBooking(event) {
  event.preventDefault();
  const name = document.getElementById("bookName").value;
  const phone = document.getElementById("bookPhone").value;
  const address = document.getElementById("bookAddress").value;
  const service = document.getElementById("bookServiceType").value;

  openBookingModal(service);
  const form = document.getElementById("modalBookingForm");
  const success = document.getElementById("modalSuccessState");
  if (form && success) {
    form.style.display = "none";
    success.style.display = "block";
    const p = success.querySelector("p");
    if (p) {
      p.innerHTML = `Thank you, <strong>${escapeHtml(name)}</strong>! Your inspection request for <strong>${escapeHtml(address)}</strong> has been received directly by Daren Koniuk. Daren will contact you shortly at <strong>${escapeHtml(phone)}</strong> to confirm timing and fee.`;
    }
  }

  event.target.reset();
}

function handleModalBooking(event) {
  event.preventDefault();
  const name = document.getElementById("modalName").value;
  const phone = document.getElementById("modalPhone").value;
  const town = document.getElementById("modalPropertyTown").value;
  const prop = document.getElementById("modalPropType").value;

  const form = document.getElementById("modalBookingForm");
  const success = document.getElementById("modalSuccessState");
  if (form && success) {
    form.style.display = "none";
    success.style.display = "block";
    const p = success.querySelector("p");
    if (p) {
      p.innerHTML = `Thank you, <strong>${escapeHtml(name)}</strong>! Daren Koniuk has received your request for <strong>${escapeHtml(prop)}</strong> in <strong>${escapeHtml(town)}</strong>. He will contact you at <strong>${escapeHtml(phone)}</strong> within 30 minutes.`;
    }
  }
}

// 10. Escape utility for safety
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
