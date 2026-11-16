<template>
  <section class="section co-traps-section" id="co-traps">
    <div class="wrap">
      <div class="section-heading text-center">
        <span class="eyebrow-tag brick-tag">Municipal Protection</span>
        <h2 class="section-title">The Nassau County Certificate of Occupancy (CO) Traps</h2>
        <p class="section-sub">
          Unlike other counties, Nassau County town halls strictly enforce municipal building codes. Unpermitted improvements don't just delay closings—they can leave you with $15,000+ in mandatory demolition and legalization fees.
        </p>
      </div>

      <!-- Town Building Departments Grid -->
      <div class="town-depts-strip">
        <div class="dept-col">
          <span class="dept-name">Town of Hempstead</span>
          <span class="dept-loc">200 N Franklin St &bull; Hempstead, NY</span>
        </div>
        <div class="dept-sep">|</div>
        <div class="dept-col">
          <span class="dept-name">Town of North Hempstead</span>
          <span class="dept-loc">220 Plandome Rd &bull; Manhasset, NY</span>
        </div>
        <div class="dept-sep">|</div>
        <div class="dept-col">
          <span class="dept-name">Town of Oyster Bay</span>
          <span class="dept-loc">74 Audrey Ave &bull; Oyster Bay, NY</span>
        </div>
        <div class="dept-sep">|</div>
        <div class="dept-col">
          <span class="dept-name">Cities of Long Beach &amp; Glen Cove</span>
          <span class="dept-loc">Independent Municipal Building Bureaus</span>
        </div>
      </div>

      <!-- The 2 Big Nassau CO Traps We Check -->
      <div class="traps-grid">
        <div class="trap-card">
          <div class="trap-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="trap-icon">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <span class="trap-num">Trap 01</span>
          <h3 class="trap-title">Unpermitted Finished Basements &amp; Kitchens</h3>
          <p class="trap-desc">
            Countless Nassau homes have beautifully finished basements that lack municipal building permits. If there is a stove, kitchenette, or full bath without an official CO, the town building inspector can order immediate removal of fixtures or mandate costly egress window cutouts before closing.
          </p>
          <div class="trap-leverage">
            <strong>Typical Buyer Risk:</strong> $8,000 &ndash; $20,000 legalization / demo costs.
          </div>
        </div>

        <div class="trap-card">
          <div class="trap-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="trap-icon">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <span class="trap-num">Trap 02</span>
          <h3 class="trap-title">Converted Garages into Living Space</h3>
          <p class="trap-desc">
            Converting a 1- or 2-car garage into a den, master bedroom, or in-law suite is rampant across Hempstead and Oyster Bay. Without an updated Certificate of Occupancy, the property is legally in violation of off-street parking minimums, creating major mortgage underwriting halts.
          </p>
          <div class="trap-leverage">
            <strong>Typical Buyer Risk:</strong> Bank refuses to fund mortgage without escrow.
          </div>
        </div>
      </div>

      <!-- Attorney Inspection Contingency Banner -->
      <div class="contingency-box">
        <div class="cb-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="cb-svg">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        </div>
        <div class="cb-content">
          <h4>Nassau County Attorney Contingency Window: 5 Business Days</h4>
          <p>
            In Nassau County real estate transactions, standard buyer inspection clauses grant a strictly enforced 5-to-7 day window to conduct engineering inspections and submit repair requests before non-contingent contract signing. Daren guarantees your comprehensive digital report within <strong>24 hours</strong> so your real estate attorney can negotiate repair credits immediately.
          </p>
        </div>
        <a href="tel:7182087092" class="btn btn-primary cb-btn">
          Call Daren: 718-208-7092
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.co-traps-section {
  background-color: #ffffff;
  padding: 80px 0;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
}

.section-heading {
  margin-bottom: 40px;
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
  max-width: 760px;
  margin: 0 auto;
  line-height: 1.6;
}

.town-depts-strip {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--surface-subtle, #eceef2);
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 10px;
  padding: 16px 24px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 12px;
}

.dept-col {
  display: flex;
  flex-direction: column;
}

.dept-name {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--charcoal-950, #121820);
}

.dept-loc {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  color: #64748b;
}

.dept-sep {
  color: #cbd5e1;
  font-weight: bold;
}

@media (max-width: 900px) {
  .dept-sep {
    display: none;
  }
  .town-depts-strip {
    flex-direction: column;
    align-items: flex-start;
  }
}

.traps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 40px;
}

@media (min-width: 768px) {
  .traps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.trap-card {
  background: var(--surface-page, #f4f6f8);
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.trap-card:hover {
  transform: translateY(-2px);
  border-color: var(--brick, #d94828);
}

.trap-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: #ffffff;
  border: 1.5px solid var(--border-soft, #d8dee6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brick, #d94828);
  margin-bottom: 14px;
}

.trap-icon {
  width: 22px;
  height: 22px;
}

.trap-num {
  position: absolute;
  top: 24px;
  right: 24px;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.76rem;
  font-weight: 700;
  color: #94a3b8;
}

.trap-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.18rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1.3;
  margin-bottom: 10px;
}

.trap-desc {
  font-size: 0.88rem;
  color: var(--text-secondary, #475569);
  line-height: 1.55;
  margin-bottom: 16px;
  flex-grow: 1;
}

.trap-leverage {
  background: #ffffff;
  border: 1px solid var(--border-soft, #d8dee6);
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 0.8rem;
  color: var(--charcoal-950, #121820);
}

.trap-leverage strong {
  color: var(--brick, #d94828);
}

.contingency-box {
  background: var(--charcoal-950, #121820);
  color: #ffffff;
  border-radius: 12px;
  padding: 28px 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.cb-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--hazard-gold, #c9a86a);
  flex-shrink: 0;
}

.cb-svg {
  width: 26px;
  height: 26px;
}

.cb-content {
  flex: 1;
  min-width: 280px;
}

.cb-content h4 {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 6px;
}

.cb-content p {
  font-size: 0.88rem;
  color: #cbd5e1;
  line-height: 1.55;
  margin: 0;
}

.cb-content strong {
  color: var(--hazard-gold, #c9a86a);
}

.cb-btn {
  white-space: nowrap;
  flex-shrink: 0;
}
</style>
