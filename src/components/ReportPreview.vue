<template>
  <section class="section serious-defects-section" id="serious-defects">
    <div class="wrap">
      <div class="section-heading text-center">
        <span class="eyebrow-tag brick-tag">Nassau Home Inspection Case Studies</span>
        <h2 class="section-title">Real Nassau County Homes We Inspect &amp; The Costly Defects Uncovered</h2>
        <p class="section-sub">
          Every Nassau County town has unique architectural vulnerabilities. Here is how our comprehensive pre-contract inspections protected home buyers across Garden City, Levittown, Great Neck, and Massapequa.
        </p>
      </div>

      <!-- Defect Cards Grid -->
      <div class="defects-grid">
        <!-- Card 1: Garden City -->
        <article class="defect-card">
          <div class="defect-img-wrap">
            <img
              src="/images/garden-city-actual-house.jpg"
              alt="Historic Garden City Residence in Town of Hempstead, Nassau County"
              class="defect-img"
              loading="lazy"
            />
            <span class="defect-badge tag-warning">Town of Hempstead &bull; Historic Colonial</span>
          </div>
          <div class="defect-body">
            <div class="defect-meta-row">
              <span class="defect-loc">Garden City &bull; Historic Estate</span>
              <span class="defect-savings">Saved Buyer: $9,500</span>
            </div>
            <h3 class="defect-title">Cracked Cast-Iron Boiler &amp; Vintage Hydronic Piping</h3>
            <p class="defect-desc">
              During the basement mechanical evaluation, heavy corrosion and thermal stress cracks were uncovered in the cast-iron sectional heat exchanger, creating an active carbon monoxide hazard. The seller was forced to credit the buyer $9,500 for a full boiler replacement before closing.
            </p>
            <div class="defect-takeaway">
              <strong>Inspector Action:</strong> Combustion gas analyzer &amp; FLIR thermal imaging verified heat exchanger failure.
            </div>
          </div>
        </article>

        <!-- Card 2: Levittown -->
        <article class="defect-card">
          <div class="defect-img-wrap">
            <img
              src="/images/levittown-weber-house-color.jpg"
              alt="Original 1950s Concrete Slab Home in Levittown, Town of Hempstead, Nassau County"
              class="defect-img"
              loading="lazy"
            />
            <span class="defect-badge tag-danger">Town of Hempstead &bull; Post-War Slab</span>
          </div>
          <div class="defect-body">
            <div class="defect-meta-row">
              <span class="defect-loc">Levittown &bull; 1950s Slab Ranch</span>
              <span class="defect-savings">Saved Buyer: $3,200</span>
            </div>
            <h3 class="defect-title">Hazardous Double-Tapped Main Panel &amp; Slab In-Piping</h3>
            <p class="defect-desc">
              Multiple circuits were crammed into single breaker terminals with scorched neutral conductors inside an obsolete vintage Zinsco panel. Infrared scanning was also deployed to inspect copper radiant heating coils embedded in the concrete slab for pinhole pressure loss.
            </p>
            <div class="defect-takeaway">
              <strong>Inspector Action:</strong> FLIR scan documented a 138°F bus hot spot; seller funded full 200A electrical service replacement.
            </div>
          </div>
        </article>

        <!-- Card 3: Great Neck -->
        <article class="defect-card">
          <div class="defect-img-wrap">
            <img
              src="/images/great-neck-actual-house.jpg"
              alt="Historic North Shore Residence in Great Neck Estates, Nassau County"
              class="defect-img"
              loading="lazy"
            />
            <span class="defect-badge tag-danger">Town of North Hempstead &bull; Gold Coast</span>
          </div>
          <div class="defect-body">
            <div class="defect-meta-row">
              <span class="defect-loc">Great Neck Estates &bull; North Shore</span>
              <span class="defect-savings">Saved Buyer: $14,000</span>
            </div>
            <h3 class="defect-title">Delaminated Flat Roof Membrane &amp; Hidden Flashing Leaks</h3>
            <p class="defect-desc">
              Improper slope on a low-pitch rear architectural addition created severe water ponding, saturated wood framing, and rusted copper valley flashing leaking into upper wall cavities—completely invisible from street level.
            </p>
            <div class="defect-takeaway">
              <strong>Inspector Action:</strong> Walked the full roof surface and documented active seam splitting; secured a $14,000 credit.
            </div>
          </div>
        </article>

        <!-- Card 4: Massapequa -->
        <article class="defect-card">
          <div class="defect-img-wrap">
            <img
              src="/images/massapequa-actual-house.jpg"
              alt="South Shore Canalfront Property on Ocean Avenue, Massapequa, Nassau County"
              class="defect-img"
              loading="lazy"
            />
            <span class="defect-badge tag-warning">Town of Oyster Bay &bull; South Shore Waterfront</span>
          </div>
          <div class="defect-body">
            <div class="defect-meta-row">
              <span class="defect-loc">Massapequa &bull; Ocean Ave Coastal</span>
              <span class="defect-savings">Saved Buyer: $4,800</span>
            </div>
            <h3 class="defect-title">Subterranean Termite Mud Tubes on Timber Sill Plates</h3>
            <p class="defect-desc">
              Active eastern subterranean termite mud shelter tubes tunneling into load-bearing sill plates behind finished basement sheetrock. Discovered during our included <strong>Free Official NPMA-33 Termite Inspection</strong>.
            </p>
            <div class="defect-takeaway">
              <strong>Inspector Action:</strong> Probed structural timber and provided official NPMA-33 form requiring professional seller treatment.
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
  height: 290px;
  width: 100%;
  background: #121820;
  overflow: hidden;
}

.defect-img-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(14, 24, 36, 0.55) 0%, rgba(14, 24, 36, 0) 30%);
  pointer-events: none;
}

@media (max-width: 640px) {
  .defect-img-wrap {
    height: 220px;
  }
}

.defect-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
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
