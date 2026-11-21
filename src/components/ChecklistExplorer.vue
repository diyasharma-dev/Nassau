<template>
  <section class="section checklist-section" id="checklist">
    <div class="wrap">
      <!-- Section Head -->
      <div class="section-head text-center">
        <span class="section-tag">What's Checked</span>
        <h2 class="section-title">1,700+ Point Inspection Checklist in Nassau County</h2>
        <p class="section-sub">
          From roof parapets to foundation slabs, every accessible component is rigorously tested.
        </p>
      </div>

      <!-- Systems Diagram Banner -->
      <div class="diagram-feature-box">
        <div class="df-image-col">
          <img
            src="/images/inspection-diagram.webp"
            alt="HomeStar 1,700+ Point Home Inspection Systems Cross-Section Diagram"
            class="inspection-diagram-img"
            loading="lazy"
          />
        </div>
        <div class="df-text-col">
          <span class="df-badge">Cross-Section Engineering Evaluation</span>
          <h3 class="df-title">From Roof Rafters to Foundation Footings</h3>
          <p class="df-desc">
            A comprehensive inspection requires hands-on physical access. We physically climb into accessible attics, walk safe roof surfaces, open electrical panel dead fronts, fire steam boilers and air conditioners, and probe foundation sill plates.
          </p>
          <div class="df-trust-pills">
            <span>&#10003; NYS Licensed Inspector On-Site</span>
            <span>&#10003; 24-Hour Digital Photo Report</span>
            <span>&#10003; Free Bank Termite Report</span>
          </div>
        </div>
      </div>

      <!-- 6 Official Checklist System Cards Grid -->
      <div class="checklist-six-grid">
        <!-- 1. Roofing & Exterior Envelope -->
        <div class="check-card">
          <div class="check-card-header">
            <span class="check-num">01</span>
            <h3 class="check-title">Roofing &amp; Exterior Envelope</h3>
          </div>
          <p class="check-desc">
            Shingles, flat membranes, parapet walls, step flashing, skylights, gutters, drainage scuppers, siding, brickwork, and soil grading.
          </p>
        </div>

        <!-- 2. Electrical Service & Panels -->
        <div class="check-card">
          <div class="check-card-header">
            <span class="check-num">02</span>
            <h3 class="check-title">Electrical Service &amp; Panels</h3>
          </div>
          <p class="check-desc">
            Main service entrance, circuit breaker ratings, grounding, sub-panels, branch wiring, GFCI/AFCI outlets, and reverse polarity hazards.
          </p>
        </div>

        <!-- 3. Heating & Cooling (HVAC) -->
        <div class="check-card">
          <div class="check-card-header">
            <span class="check-num">03</span>
            <h3 class="check-title">Heating &amp; Cooling (HVAC)</h3>
          </div>
          <p class="check-desc">
            Steam and hydronic boilers, gas furnaces, central AC condensers, ductwork, thermostats, zone valves, and combustion safety vents.
          </p>
        </div>

        <!-- 4. Plumbing & Water Heaters -->
        <div class="check-card">
          <div class="check-card-header">
            <span class="check-num">04</span>
            <h3 class="check-title">Plumbing &amp; Water Heaters</h3>
          </div>
          <p class="check-desc">
            Supply piping, waste drainage stacks, vent pipes, water heater tanks, pressure relief valves, functional flow, and fixture leaks.
          </p>
        </div>

        <!-- 5. Foundation & Structure -->
        <div class="check-card">
          <div class="check-card-header">
            <span class="check-num">05</span>
            <h3 class="check-title">Foundation &amp; Structure</h3>
          </div>
          <p class="check-desc">
            Basement walls, floor slabs, crawlspaces, load-bearing wood framing, floor joists, settlement indicators, and water intrusion.
          </p>
        </div>

        <!-- 6. Interiors, Attics & Termite WDO -->
        <div class="check-card">
          <div class="check-card-header">
            <span class="check-num">06</span>
            <h3 class="check-title">Interiors, Attics &amp; Termite WDO</h3>
          </div>
          <p class="check-desc">
            Doors, windows, stairs, ceiling integrity, attic insulation depth, roof ventilation, and official wood destroying organism (termite) check.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.checklist-section {
  background: #faf7f2;
  padding: 88px 0;
  border-bottom: 1px solid #e5dfd5;
  position: relative;
}

.section-head {
  margin-bottom: 52px;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: #8c6d46;
  background: #f6f2ec;
  border: 1px solid #dcd4c7;
  padding: 5px 14px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 14px;
}

.section-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(2rem, 3.4vw, 2.75rem);
  font-weight: 700;
  color: #0c1424;
  line-height: 1.18;
  margin: 0 0 14px 0;
  letter-spacing: -0.02em;
}

.section-sub {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 1.05rem;
  color: #475569;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.65;
}

.diagram-feature-box {
  background: #0c1424;
  color: #ffffff;
  border-radius: 12px;
  padding: 36px 32px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
  align-items: center;
  margin-bottom: 44px;
  border: 1px solid #1e293b;
  box-shadow: 0 12px 36px rgba(12, 20, 36, 0.12);
}

@media (min-width: 900px) {
  .diagram-feature-box {
    grid-template-columns: 0.85fr 1.15fr;
  }
}

.inspection-diagram-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 8px;
  background: #ffffff;
  padding: 16px;
  border: 1px solid #e5dfd5;
}

.df-badge {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #c5a880;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(229, 223, 213, 0.25);
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 14px;
  letter-spacing: 0.05em;
}

.df-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.55rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 14px 0;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

.df-desc {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.95rem;
  line-height: 1.7;
  color: #cbd5e1;
  margin: 0 0 22px 0;
}

.df-trust-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #cbd5e1;
}

.df-trust-pills span {
  background: rgba(255, 255, 255, 0.08);
  padding: 6px 14px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.checklist-six-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}

@media (min-width: 640px) {
  .checklist-six-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .checklist-six-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.check-card {
  background: #ffffff;
  border: 1px solid #e5dfd5;
  border-radius: 10px;
  padding: 26px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
  transition: all 0.25s ease;
}

.check-card:hover {
  transform: translateY(-4px);
  border-color: #8c6d46;
  box-shadow: 0 14px 32px rgba(140, 109, 70, 0.12);
}

.check-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.check-num {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: #8c6d46;
  background: #f6f2ec;
  border: 1px solid #dcd4c7;
  padding: 3px 10px;
  border-radius: 4px;
  flex-shrink: 0;
}

.check-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.15rem;
  font-weight: 700;
  color: #0c1424;
  margin: 0;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.check-desc {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.9rem;
  line-height: 1.65;
  color: #475569;
  margin: 0;
}
</style>
