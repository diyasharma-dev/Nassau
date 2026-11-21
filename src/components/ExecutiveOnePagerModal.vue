<template>
  <div v-if="isOpen" class="one-pager-overlay active" @click="handleBackdropClick">
    <div class="one-pager-container">
      <!-- Non-printing Control Bar -->
      <div class="one-pager-control-bar no-print">
        <div class="control-left">
          <span class="one-pager-pill">Executive 1-Pager Document</span>
          <span class="control-subtitle">Print-Ready &bull; Shareable Client Brief</span>
        </div>
        <div class="control-actions">
          <button class="btn-print" @click="triggerPrint" title="Print or Save as PDF">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            <span>Print / Save PDF (1-Page)</span>
          </button>
          <button class="btn-book-one-pager" @click="handleBookClick">
            <span>Book Inspection</span>
          </button>
          <button class="btn-close-one-pager" @click="$emit('close')" aria-label="Close">&times;</button>
        </div>
      </div>

      <!-- The Printable 1-Pager Document Sheet -->
      <div class="printable-sheet" id="printable-one-pager">
        <!-- Header Row -->
        <header class="doc-header">
          <div class="doc-brand">
            <img
              src="/images/homestar-nassau-logo.svg"
              alt="HomeStar Inspections - Nassau County Division"
              class="doc-logo"
            />
            <div class="doc-brand-sub">
              <strong>Nassau County Division</strong> &bull; NYS Licensed Home Inspector
            </div>
          </div>
          <div class="doc-inspector-card">
            <div class="doc-inspector-name">Daren Koniuk, Lead Inspector &amp; Owner</div>
            <div class="doc-meta-item"><strong>NYS License:</strong> #16000009862 &bull; InterNACHI Certified</div>
            <div class="doc-meta-item"><strong>Direct Dispatch:</strong> (718) 208-7092 &bull; 7 Days (7am-9pm)</div>
            <div class="doc-meta-item"><strong>Official Email:</strong> dkoniuk@yahoo.com</div>
          </div>
        </header>

        <!-- Document Title Banner -->
        <div class="doc-title-bar">
          <div class="dt-main">Nassau County Home Inspection Services &bull; Executive Specification Brief</div>
          <div class="dt-guarantee">100% Money-Back Satisfaction Guarantee &bull; 4.9★ Google Rating (150+ Reviews)</div>
        </div>

        <!-- 3 Pillars Grid (Key Value Props) -->
        <div class="doc-section-grid pillars-3-row">
          <div class="doc-box pillar-box">
            <div class="box-num">01</div>
            <div class="box-body">
              <div class="box-heading">Licensed Owner On-Site</div>
              <p class="box-text">Every Nassau inspection is conducted personally by Daren Koniuk (never trainees or sub-contractors).</p>
            </div>
          </div>
          <div class="doc-box pillar-box">
            <div class="box-num">02</div>
            <div class="box-body">
              <div class="box-heading">Next-Day Digital Report</div>
              <p class="box-text">Comprehensive digital PDF report with high-resolution color photos delivered within 24 hours.</p>
            </div>
          </div>
          <div class="doc-box pillar-box highlight-box">
            <div class="box-num">03</div>
            <div class="box-body">
              <div class="box-heading">Free Bank Termite Report</div>
              <p class="box-text">Includes official lender-required NPMA-33 Wood Destroying Organism report at no extra charge ($150 value).</p>
            </div>
          </div>
        </div>

        <!-- Split Grid: 1,700-Point Systems Scope & Defect Watchlist -->
        <div class="doc-two-col">
          <!-- Left: 1,700-Pt Systems Checklist -->
          <div class="doc-subcol">
            <div class="doc-col-header">
              <span class="dch-icon">&#10003;</span>
              <span>1,700+ Point Inspection Checklist</span>
            </div>
            <ul class="doc-bullet-list">
              <li>
                <strong>Roofing &amp; Exterior Envelope:</strong> Shingles, flat membranes, parapets, flashing, skylights, scuppers, gutters, siding, and soil grading.
              </li>
              <li>
                <strong>Electrical Service &amp; Panels:</strong> Service entrance, 100A/200A main disconnects, grounding, branch wiring, GFCI/AFCI, and reverse polarity.
              </li>
              <li>
                <strong>HVAC Heating &amp; Cooling:</strong> Steam &amp; hydronic boilers, gas furnaces, central AC condensers, ductwork, thermostats, and draft flues.
              </li>
              <li>
                <strong>Plumbing &amp; Water Heaters:</strong> Supply lines, waste stacks, water heater tanks, pressure relief valves, functional flow, and fixture leaks.
              </li>
              <li>
                <strong>Foundation &amp; Sub-Structure:</strong> Basement masonry walls, floor slabs, crawlspaces, load-bearing framing, joists, and moisture intrusion.
              </li>
              <li>
                <strong>Interiors &amp; Attic Science:</strong> Windows, stairs, structural ceilings, insulation R-value depth, ventilation, and NPMA-33 termite check.
              </li>
            </ul>
          </div>

          <!-- Right: Nassau Defect Watchlist -->
          <div class="doc-subcol">
            <div class="doc-col-header danger-head">
              <span class="dch-icon">&#9888;</span>
              <span>Nassau Costly Defect Watchlist</span>
            </div>
            <div class="defect-cards-stack">
              <div class="doc-defect-card">
                <div class="ddc-top">
                  <span class="ddc-title">Buried Heating Oil Tanks (USTs)</span>
                  <span class="ddc-risk">Risk: $10,000–$40,000+</span>
                </div>
                <p class="ddc-text">Inspecting abandoned line penetrations, floor patches, and vent pipes pointing to undecommissioned tanks.</p>
              </div>
              <div class="doc-defect-card">
                <div class="ddc-top">
                  <span class="ddc-title">Central Air Condenser End-of-Life</span>
                  <span class="ddc-risk">Risk: $6,000–$15,000</span>
                </div>
                <p class="ddc-text">Testing aging AC systems, obsolete R-22 refrigerants, compressor amp draw, and coil degradation.</p>
              </div>
              <div class="doc-defect-card">
                <div class="ddc-top">
                  <span class="ddc-title">Crawlspace Moisture &amp; Sill Plate Rot</span>
                  <span class="ddc-risk">Risk: $8,000–$28,000</span>
                </div>
                <p class="ddc-text">Probing foundation sill plates, subfloor framing decay, and active subterranean termite damage.</p>
              </div>
              <div class="doc-defect-card">
                <div class="ddc-top">
                  <span class="ddc-title">Attic Ventilation &amp; Ice Damming</span>
                  <span class="ddc-risk">Risk: $4,000–$12,000</span>
                </div>
                <p class="ddc-text">Documenting blocked soffit airflow, inadequate insulation depth, and sheathing moisture staining.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Housing Specialties & Nassau Townships -->
        <div class="doc-bottom-grid">
          <div class="dbg-item">
            <div class="dbg-title">Common Housing Types Inspected:</div>
            <p class="dbg-text">
              &bull; <strong>Suburban Colonials &amp; Split-Levels:</strong> Garden City, Syosset, Jericho, Plainview, Merrick.<br>
              &bull; <strong>North Shore Luxury Estates:</strong> Great Neck, Roslyn, Oyster Bay, Sands Point, Locust Valley.<br>
              &bull; <strong>South Shore Waterfront Homes:</strong> Massapequa, Bellmore, Freeport, Oceanside (bulkheads &amp; pilings).<br>
              &bull; <strong>Co-Op &amp; Condo Communities:</strong> Great Neck, Mineola, Floral Park (mechanical &amp; shared systems).
            </p>
          </div>
          <div class="dbg-item">
            <div class="dbg-title">Nassau Coverage Scope (80 Neighborhoods):</div>
            <p class="dbg-text">
              Serving all 3 Nassau Townships daily: <strong>Town of Hempstead</strong>, <strong>Town of North Hempstead</strong>, and <strong>Town of Oyster Bay</strong>, plus the Cities of <strong>Long Beach</strong> and <strong>Glen Cove</strong>. Same-day and next-day inspection slots available 7 days a week.
            </p>
          </div>
        </div>

        <!-- Footer / Contact Band -->
        <footer class="doc-footer">
          <div class="df-contact-cell">
            <span class="df-lbl">Direct Phone:</span>
            <span class="df-val"><strong>(718) 208-7092</strong></span>
          </div>
          <div class="df-contact-cell">
            <span class="df-lbl">Direct Email:</span>
            <span class="df-val">dkoniuk@yahoo.com</span>
          </div>
          <div class="df-contact-cell">
            <span class="df-lbl">NYS License #:</span>
            <span class="df-val">#16000009862</span>
          </div>
          <div class="df-contact-cell">
            <span class="df-lbl">Online Dispatch:</span>
            <span class="df-val">nassau-homestar.vercel.app</span>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close', 'open-modal']);

const handleBackdropClick = (e) => {
  if (e.target.classList.contains('one-pager-overlay')) {
    emit('close');
  }
};

const handleBookClick = () => {
  emit('close');
  emit('open-modal', 'Nassau County Home Inspection');
};

const triggerPrint = () => {
  window.print();
};
</script>

<style scoped>
/* Modal Overlay */
.one-pager-overlay {
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: rgba(12, 20, 36, 0.78);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
}

.one-pager-container {
  width: 100%;
  max-width: 920px;
  max-height: 94vh;
  display: flex;
  flex-direction: column;
  background: #fbf9f6;
  border-radius: 12px;
  border: 1px solid #e5dfd5;
  box-shadow: 0 25px 60px rgba(12, 20, 36, 0.35);
  overflow: hidden;
}

/* Control Bar (Top) */
.one-pager-control-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  background: #0c1424;
  color: #ffffff;
  border-bottom: 1px solid #1e293b;
  flex-shrink: 0;
  gap: 16px;
  flex-wrap: wrap;
}

.control-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.one-pager-pill {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: #8c6d46;
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 4px;
}

.control-subtitle {
  font-size: 0.82rem;
  color: #cbd5e1;
}

.control-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-print {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #8c6d46;
  color: #ffffff;
  border: 1px solid #8c6d46;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.84rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-print:hover {
  background: #a38157;
  border-color: #a38157;
}

.btn-book-one-pager {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.84rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-book-one-pager:hover {
  background: rgba(255, 255, 255, 0.2);
}

.btn-close-one-pager {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #cbd5e1;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-close-one-pager:hover {
  background: #ffffff;
  color: #0c1424;
}

/* Printable Sheet - The 1-Pager Itself */
.printable-sheet {
  background: #ffffff;
  padding: 28px 32px;
  overflow-y: auto;
  color: #0f172a;
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 13px;
  line-height: 1.5;
}

/* Header Row */
.doc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 2px solid #0c1424;
  gap: 20px;
}

.doc-logo {
  height: 42px;
  width: auto;
  display: block;
  margin-bottom: 4px;
}

.doc-brand-sub {
  font-size: 11px;
  color: #475569;
  letter-spacing: 0.02em;
}

.doc-inspector-card {
  text-align: right;
  font-size: 11.5px;
  color: #334155;
}

.doc-inspector-name {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 15px;
  font-weight: 700;
  color: #0c1424;
  margin-bottom: 2px;
}

.doc-meta-item {
  line-height: 1.4;
}

/* Title Bar */
.doc-title-bar {
  background: #faf7f2;
  border: 1px solid #e5dfd5;
  border-radius: 6px;
  padding: 8px 14px;
  margin: 14px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.dt-main {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 13.5px;
  font-weight: 700;
  color: #0c1424;
}

.dt-guarantee {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 10.5px;
  font-weight: 700;
  color: #8c6d46;
  text-transform: uppercase;
}

/* 3 Pillars */
.pillars-3-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}

.doc-box {
  background: #fbf9f6;
  border: 1px solid #e5dfd5;
  border-radius: 6px;
  padding: 10px 12px;
  display: flex;
  gap: 10px;
}

.box-num {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 18px;
  font-weight: 700;
  color: #8c6d46;
  line-height: 1;
}

.box-heading {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 12.5px;
  font-weight: 700;
  color: #0c1424;
  margin-bottom: 3px;
}

.box-text {
  font-size: 11px;
  line-height: 1.4;
  color: #475569;
  margin: 0;
}

/* Two Column Layout */
.doc-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.doc-col-header {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 13px;
  font-weight: 700;
  color: #0c1424;
  padding-bottom: 6px;
  border-bottom: 1px solid #0c1424;
  margin-bottom: 10px;
}

.danger-head {
  color: #991b1b;
  border-bottom-color: #991b1b;
}

.doc-bullet-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.doc-bullet-list li {
  font-size: 11px;
  line-height: 1.45;
  color: #334155;
  position: relative;
  padding-left: 14px;
}

.doc-bullet-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #8c6d46;
  font-weight: bold;
}

.doc-bullet-list li strong {
  color: #0c1424;
}

/* Defect Stack */
.defect-cards-stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.doc-defect-card {
  background: #faf7f2;
  border: 1px solid #e5dfd5;
  border-radius: 6px;
  padding: 8px 10px;
}

.ddc-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3px;
}

.ddc-title {
  font-size: 11.5px;
  font-weight: 700;
  color: #0c1424;
}

.ddc-risk {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 10px;
  font-weight: 700;
  color: #991b1b;
  background: #fef2f2;
  border: 1px solid #fecaca;
  padding: 1px 6px;
  border-radius: 3px;
}

.ddc-text {
  font-size: 10.5px;
  color: #475569;
  line-height: 1.35;
  margin: 0;
}

/* Bottom Grid */
.doc-bottom-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  background: #faf7f2;
  border: 1px solid #e5dfd5;
  border-radius: 6px;
  padding: 10px 14px;
  margin-bottom: 14px;
}

.dbg-title {
  font-size: 11px;
  font-weight: 700;
  color: #0c1424;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.dbg-text {
  font-size: 10.5px;
  line-height: 1.45;
  color: #475569;
  margin: 0;
}

/* Document Footer */
.doc-footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding-top: 10px;
  border-top: 1px solid #e5dfd5;
  font-size: 11px;
}

.df-contact-cell {
  display: flex;
  flex-direction: column;
}

.df-lbl {
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #64748b;
}

.df-val {
  color: #0c1424;
}

/* PRINT MEDIA QUERY - GUARANTEED EXACTLY 1 PHYSICAL PAGE */
@media print {
  body * {
    visibility: hidden;
  }

  .one-pager-overlay,
  .one-pager-container,
  .printable-sheet,
  .printable-sheet * {
    visibility: visible;
  }

  .one-pager-overlay {
    position: absolute;
    inset: 0;
    padding: 0;
    margin: 0;
    background: transparent !important;
  }

  .one-pager-container {
    box-shadow: none !important;
    border: none !important;
    max-width: 100% !important;
    max-height: none !important;
  }

  .no-print {
    display: none !important;
  }

  .printable-sheet {
    padding: 0.25in !important;
    font-size: 11px !important;
  }

  @page {
    size: letter portrait;
    margin: 0.35in;
  }
}

@media (max-width: 680px) {
  .doc-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .doc-inspector-card {
    text-align: left;
  }
  .pillars-3-row,
  .doc-two-col,
  .doc-bottom-grid,
  .doc-footer {
    grid-template-columns: 1fr;
  }
  .dt-main, .dt-guarantee {
    font-size: 11px;
  }
}
</style>
