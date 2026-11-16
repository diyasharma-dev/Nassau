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
  background: #ffffff;
  padding: 80px 0;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
}

.section-head {
  margin-bottom: 44px;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--nassau-gold-dark, #9d7718);
  background: #fdfaf2;
  border: 1px solid #e6ce8a;
  padding: 4px 12px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1.2;
  margin: 0 0 12px 0;
}

.section-sub {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 1.05rem;
  color: var(--text-secondary, #475569);
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
}

.diagram-feature-box {
  background: linear-gradient(135deg, #0b1a2e 0%, #162a45 100%);
  color: #ffffff;
  border-radius: 14px;
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;
  margin-bottom: 40px;
  border: 1px solid rgba(197, 155, 39, 0.3);
  box-shadow: 0 12px 32px rgba(11, 26, 46, 0.12);
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
  padding: 12px;
}

.df-badge {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--hazard-gold, #c9a86a);
  background: rgba(201, 168, 106, 0.15);
  border: 1px solid rgba(201, 168, 106, 0.3);
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.df-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 12px 0;
  line-height: 1.25;
}

.df-desc {
  font-size: 0.94rem;
  line-height: 1.65;
  color: #cbd5e1;
  margin: 0 0 20px 0;
}

.df-trust-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #94a3b8;
}

.df-trust-pills span {
  background: rgba(255, 255, 255, 0.08);
  padding: 4px 10px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e2e8f0;
}

.checklist-six-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
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
  background: #fafbfd;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.check-card:hover {
  transform: translateY(-3px);
  border-color: var(--nassau-gold, #c59b27);
  box-shadow: 0 8px 24px rgba(11, 26, 46, 0.08);
}

.check-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.check-num {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--nassau-gold, #c59b27);
  background: #fdfaf2;
  border: 1px solid #e6ce8a;
  padding: 2px 9px;
  border-radius: 6px;
  flex-shrink: 0;
}

.check-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.08rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  margin: 0;
  line-height: 1.3;
}

.check-desc {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-secondary, #475569);
  margin: 0;
}
</style>
