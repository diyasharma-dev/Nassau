<template>
  <section class="section serious-defects-section" id="serious-defects">
    <div class="wrap">
      <div class="section-heading text-center">
        <span class="eyebrow-tag brick-tag">Serious Defects Dossier</span>
        <h2 class="section-title">Costly Defects We Uncover Before You Buy</h2>
        <p class="section-sub">
          These are real photos documented by Daren Koniuk during recent residential inspections across Nassau County. Finding these before closing gave our clients thousands of dollars in seller repair credits.
        </p>
      </div>

      <!-- Defect Cards Grid -->
      <div class="defects-grid">
        <!-- Defect 1: Boiler -->
        <article class="defect-card">
          <div class="defect-img-wrap">
            <img
              src="/images/defect-real-boiler.webp"
              alt="Cracked and rusted residential steam boiler in Nassau basement"
              class="defect-img"
              loading="lazy"
            />
            <span class="defect-badge tag-danger">Major Safety &amp; Heating Hazard</span>
          </div>
          <div class="defect-body">
            <div class="defect-meta-row">
              <span class="defect-loc">Garden City &bull; 1930s Tudor</span>
              <span class="defect-savings">Saved Buyer: $9,500</span>
            </div>
            <h3 class="defect-title">Cracked Cast-Iron Boiler Heat Exchanger</h3>
            <p class="defect-desc">
              Heavy corrosion and thermal stress cracks found in the cast-iron sectional heat exchanger. Posed an active carbon monoxide hazard into living areas above. The seller was forced to credit the buyer for a full boiler replacement before closing.
            </p>
            <div class="defect-takeaway">
              <strong>Inspector Action:</strong> Combustion gas analyzer triggered CO alarm; advised immediate shutdown.
            </div>
          </div>
        </article>

        <!-- Defect 2: Electrical -->
        <article class="defect-card">
          <div class="defect-img-wrap">
            <img
              src="/images/defect-real-electrical.webp"
              alt="Hazardous electrical panel with double taps in Nassau home"
              class="defect-img"
              loading="lazy"
            />
            <span class="defect-badge tag-danger">Fire Hazard</span>
          </div>
          <div class="defect-body">
            <div class="defect-meta-row">
              <span class="defect-loc">Levittown &bull; 1950s Ranch</span>
              <span class="defect-savings">Saved Buyer: $3,200</span>
            </div>
            <h3 class="defect-title">Hazardous Double-Tapped Main Panel &amp; Scorched Neutral</h3>
            <p class="defect-desc">
              Multiple circuits crammed into single breaker terminals with scorched neutral conductors and melted insulation inside a vintage Zinsco panel. Insurance carriers routinely deny coverage for this configuration.
            </p>
            <div class="defect-takeaway">
              <strong>Inspector Action:</strong> FLIR infrared thermal scan identified a 138°F hot spot on the main bus.
            </div>
          </div>
        </article>

        <!-- Defect 3: Roof -->
        <article class="defect-card">
          <div class="defect-img-wrap">
            <img
              src="/images/defect-real-roof.webp"
              alt="Ponding water and blistered roof membrane in Nassau"
              class="defect-img"
              loading="lazy"
            />
            <span class="defect-badge tag-warning">Major Structural Deterioration</span>
          </div>
          <div class="defect-body">
            <div class="defect-meta-row">
              <span class="defect-loc">Great Neck &bull; Split-Level Addition</span>
              <span class="defect-savings">Saved Buyer: $14,000</span>
            </div>
            <h3 class="defect-title">Ponding Water &amp; Delaminated Roof Membrane</h3>
            <p class="defect-desc">
              Improper slope on low-pitch rear roof addition created severe ponding, saturated insulation, and rusted flashing into the master bedroom wall cavities. Completely invisible from street level.
            </p>
            <div class="defect-takeaway">
              <strong>Inspector Action:</strong> Walked the full roof surface and documented active membrane seam splitting.
            </div>
          </div>
        </article>

        <!-- Defect 4: Termites -->
        <article class="defect-card">
          <div class="defect-img-wrap">
            <img
              src="/images/defect-real-termites.webp"
              alt="Subterranean termite mud tube damage on floor joists"
              class="defect-img"
              loading="lazy"
            />
            <span class="defect-badge tag-warning">Wood-Destroying Organism</span>
          </div>
          <div class="defect-body">
            <div class="defect-meta-row">
              <span class="defect-loc">Massapequa &bull; South Shore Colonial</span>
              <span class="defect-savings">Saved Buyer: $4,800</span>
            </div>
            <h3 class="defect-title">Subterranean Termite Mud Tubes on Rim Joists</h3>
            <p class="defect-desc">
              Active eastern subterranean termite mud shelter tubes tunneling into load-bearing sill plates behind finished basement insulation. Covered under our included <strong>Free Official NPMA-33 Termite Report</strong>.
            </p>
            <div class="defect-takeaway">
              <strong>Inspector Action:</strong> Probed hollowed timber and provided official NPMA-33 form for lender mortgage escrow.
            </div>
          </div>
        </article>
      </div>

      <!-- Report Delivery Callout -->
      <div class="report-delivery-banner">
        <div class="rdb-left">
          <span class="rdb-tag">24-Hour Digital Delivery</span>
          <h3 class="rdb-title">Delivered in Plain English with High-Res Photo Proof</h3>
          <p class="rdb-text">
            No 90-page boilerplate checklists. You receive a prioritized, photo-documented digital PDF with color-coded severity tags, exact location references, and clear repair recommendations your attorney can attach directly to the contract rider.
          </p>
        </div>
        <div class="rdb-right">
          <button class="btn btn-primary" @click="$emit('open-modal', 'Sample Report Request')">
            Request Sample Nassau Report
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-modal']);
</script>

<style scoped>
.serious-defects-section {
  background-color: var(--surface-page, #f4f6f8);
  padding: 80px 0;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
}

.section-heading {
  margin-bottom: 48px;
}

.eyebrow-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.brick-tag {
  color: var(--brick, #d94828);
  background: var(--brick-light, #fff1ee);
}

.section-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1.2;
  margin-bottom: 12px;
}

.section-sub {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 1.02rem;
  color: var(--text-secondary, #475569);
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
}

.defects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

@media (min-width: 1040px) {
  .defects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.defect-card {
  background: #ffffff;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(18, 24, 32, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
}

.defect-card:hover {
  transform: translateY(-2px);
  border-color: var(--brick, #d94828);
}

.defect-img-wrap {
  position: relative;
  height: 230px;
  width: 100%;
  background: #121820;
}

.defect-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.defect-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.tag-danger {
  background: #dc2626;
  color: #ffffff;
}

.tag-warning {
  background: #d97706;
  color: #ffffff;
}

.defect-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.defect-meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  margin-bottom: 10px;
}

.defect-loc {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  color: #64748b;
  font-weight: 600;
}

.defect-savings {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-weight: 800;
  color: #059669;
  background: #ecfdf5;
  padding: 3px 8px;
  border-radius: 4px;
}

.defect-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1.3;
  margin-bottom: 10px;
}

.defect-desc {
  font-size: 0.88rem;
  color: var(--text-secondary, #475569);
  line-height: 1.6;
  margin-bottom: 16px;
  flex-grow: 1;
}

.defect-takeaway {
  background: var(--surface-subtle, #eceef2);
  border: 1px solid var(--border-soft, #d8dee6);
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 0.8rem;
  color: var(--charcoal-900, #1a222d);
}

.defect-takeaway strong {
  color: var(--brick, #d94828);
}

.report-delivery-banner {
  background: #ffffff;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 12px;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  box-shadow: 0 4px 20px rgba(18, 24, 32, 0.05);
}

.rdb-left {
  flex: 1;
  min-width: 300px;
}

.rdb-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--queens-blue, #0e5a8a);
  background: var(--queens-blue-light, #ebf4fa);
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.rdb-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  margin-bottom: 6px;
}

.rdb-text {
  font-size: 0.9rem;
  color: var(--text-secondary, #475569);
  line-height: 1.55;
  margin: 0;
}
</style>
