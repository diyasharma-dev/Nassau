<template>
  <section class="section defect-watchlist-section" id="costly-issues">
    <div class="wrap">
      <!-- Section Head -->
      <div class="section-head text-center">
        <span class="section-tag danger-tag">Defect Watchlist</span>
        <h2 class="section-title">Costly Issues We Uncover in Nassau County</h2>
        <p class="section-sub">
          Don't buy an inherited repair bill. We inspect all high-risk systems and look for structural and safety hazards before you close.
        </p>
      </div>

      <!-- 4 Costly Issues Grid -->
      <div class="watchlist-grid">
        <!-- 1. Buried Heating Oil Tanks -->
        <article class="watchlist-card">
          <div class="watchlist-card-top">
            <div class="risk-badge">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              <span>Risk: $10,000&ndash;$40,000+</span>
            </div>
            <h3 class="watchlist-title">Buried Heating Oil Tanks (USTs)</h3>
            <p class="watchlist-desc">
              Disconnected copper fuel lines, patch marks in the basement floor, and exterior vent or fill pipes pointing to an abandoned underground tank with no municipal decommissioning certificate.
            </p>
          </div>
          <div class="watchlist-card-foot">
            <span class="report-proof-text">&#128247; Photo-documented in report</span>
          </div>
        </article>

        <!-- 2. Central Air Condenser End-of-Life -->
        <article class="watchlist-card">
          <div class="watchlist-card-top">
            <div class="risk-badge">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              <span>Risk: $6,000&ndash;$15,000</span>
            </div>
            <h3 class="watchlist-title">Central Air Condenser End-of-Life</h3>
            <p class="watchlist-desc">
              Aging AC condensers with obsolete refrigerant, compressor wear, and failing evaporator coils near the end of their operational lifespan.
            </p>
          </div>
          <div class="watchlist-card-foot">
            <span class="report-proof-text">&#128247; Photo-documented in report</span>
          </div>
        </article>

        <!-- 3. Crawlspace Moisture & Sill Plate Rot -->
        <article class="watchlist-card">
          <div class="watchlist-card-top">
            <div class="risk-badge">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              <span>Risk: $8,000&ndash;$28,000</span>
            </div>
            <h3 class="watchlist-title">Crawlspace Moisture &amp; Sill Plate Rot</h3>
            <p class="watchlist-desc">
              Inadequate crawlspace ventilation causing subfloor wood decay, organic growth, and subterranean termite activity.
            </p>
          </div>
          <div class="watchlist-card-foot">
            <span class="report-proof-text">&#128247; Photo-documented in report</span>
          </div>
        </article>

        <!-- 4. Attic Ventilation & Ice Damming -->
        <article class="watchlist-card">
          <div class="watchlist-card-top">
            <div class="risk-badge">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              <span>Risk: $4,000&ndash;$12,000</span>
            </div>
            <h3 class="watchlist-title">Attic Ventilation &amp; Ice Damming</h3>
            <p class="watchlist-desc">
              Blocked soffit vents, inadequate insulation R-value, and historical roof sheathing moisture staining.
            </p>
          </div>
          <div class="watchlist-card-foot">
            <span class="report-proof-text">&#128247; Photo-documented in report</span>
          </div>
        </article>
      </div>

      <!-- Bottom Banner -->
      <div class="watchlist-bottom-banner">
        <div class="wbb-text">
          <h3>Need a thorough inspection before signing contracts?</h3>
          <p>Every defect is photo-documented with clear repair recommendations for your attorney to attach to contract riders.</p>
        </div>
        <div class="wbb-actions">
          <a href="tel:7182087092" class="btn btn-call-white">Call 718-208-7092</a>
          <button class="btn btn-primary" @click="$emit('open-modal', 'Costly Defect Evaluation')">
            Schedule Nassau Inspection &rarr;
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
.defect-watchlist-section {
  background: #ffffff;
  padding: 88px 0;
  border-bottom: 1px solid #e5dfd5;
  position: relative;
}

.section-head {
  margin-bottom: 52px;
}

.danger-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: #991b1b;
  background: #fef2f2;
  border: 1px solid #fecaca;
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

.watchlist-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 28px;
  margin-bottom: 48px;
}

@media (min-width: 640px) {
  .watchlist-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1040px) {
  .watchlist-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.watchlist-card {
  background: #faf7f2;
  border: 1px solid #e5dfd5;
  border-radius: 10px;
  padding: 26px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.25s ease;
}

.watchlist-card:hover {
  transform: translateY(-4px);
  border-color: #8c6d46;
  box-shadow: 0 14px 32px rgba(140, 109, 70, 0.12);
}

.watchlist-card-top {
  display: flex;
  flex-direction: column;
}

.risk-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 4px;
  padding: 4px 10px;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  color: #991b1b;
  margin-bottom: 16px;
  align-self: flex-start;
  letter-spacing: 0.03em;
}

.watchlist-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: #0c1424;
  margin: 0 0 10px 0;
  line-height: 1.32;
  letter-spacing: -0.01em;
}

.watchlist-desc {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.9rem;
  line-height: 1.65;
  color: #475569;
  margin: 0 0 18px 0;
}

.watchlist-card-foot {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px dashed #e5dfd5;
}

.report-proof-text {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: #8c6d46;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.watchlist-bottom-banner {
  background: #0c1424;
  color: #ffffff;
  border-radius: 12px;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #1e293b;
  box-shadow: 0 12px 36px rgba(12, 20, 36, 0.15);
}

@media (min-width: 860px) {
  .watchlist-bottom-banner {
    flex-direction: row;
  }
}

.wbb-text h3 {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.45rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px 0;
  letter-spacing: -0.01em;
}

.wbb-text p {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.94rem;
  color: #cbd5e1;
  margin: 0;
  max-width: 620px;
  line-height: 1.6;
}

.wbb-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  flex-shrink: 0;
}

.btn-call-white {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.22);
  padding: 12px 22px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-call-white:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: #ffffff;
  color: #ffffff;
  transform: translateY(-1px);
}
</style>
