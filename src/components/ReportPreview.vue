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
  background: #fafbfd;
  padding: 80px 0;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
}

.section-head {
  margin-bottom: 48px;
}

.danger-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  color: #991b1b;
  background: #fef2f2;
  border: 1px solid #fecaca;
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

.watchlist-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
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
  background: #ffffff;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(18, 24, 32, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.watchlist-card:hover {
  transform: translateY(-3px);
  border-color: var(--nassau-gold, #c59b27);
  box-shadow: 0 10px 26px rgba(197, 155, 39, 0.12);
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
  border: 1.5px solid #f87171;
  border-radius: 6px;
  padding: 4px 9px;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 800;
  color: #991b1b;
  margin-bottom: 14px;
  align-self: flex-start;
}

.watchlist-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  margin: 0 0 10px 0;
  line-height: 1.3;
}

.watchlist-desc {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-secondary, #475569);
  margin: 0 0 16px 0;
}

.watchlist-card-foot {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px dashed #e2e8f0;
}

.report-proof-text {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
}

.watchlist-bottom-banner {
  background: linear-gradient(135deg, #0b1a2e 0%, #162a45 100%);
  color: #ffffff;
  border-radius: 14px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(197, 155, 39, 0.3);
  box-shadow: 0 12px 32px rgba(11, 26, 46, 0.12);
}

@media (min-width: 860px) {
  .watchlist-bottom-banner {
    flex-direction: row;
  }
}

.wbb-text h3 {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.35rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 6px 0;
}

.wbb-text p {
  font-size: 0.92rem;
  color: #cbd5e1;
  margin: 0;
  max-width: 620px;
}

.wbb-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  flex-shrink: 0;
}

.btn-call-white {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #ffffff;
  color: #121820;
  padding: 10px 18px;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-call-white:hover {
  background: var(--hazard-gold, #c9a86a);
}
</style>
