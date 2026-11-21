<template>
  <section class="section cta-section" id="book-inspection">
    <div class="wrap">
      <div class="cta-band">
        <div class="cta-content">
          <span class="cta-pill">100% Satisfaction Guarantee</span>
          <h2 class="cta-title">Know what you're buying before you buy it.</h2>
          <p class="cta-subtitle">
            The most expensive purchase you'll ever make deserves a professional inspection. Not satisfied? You don't pay. Direct line answered 24/7/365.
          </p>

          <div class="cta-actions">
            <!-- Direct Phone Call Button -->
            <a href="tel:+17182087092" class="btn btn-accent-cta" aria-label="Call 718-208-7092">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.28-.28.68-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.34.03.73-.24 1.01L6.6 10.8z"/>
              </svg>
              <span>Call 718-208-7092</span>
            </a>

            <!-- Request Quote / Schedule Online Button -->
            <button class="btn btn-outline-cta" @click="$emit('open-modal', 'Nassau County Home Inspection')">
              <span>Request Quote Online &rarr;</span>
            </button>

            <!-- Email Direct Link -->
            <a href="mailto:dkoniuk@yahoo.com" class="btn btn-email-cta">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>Email us</span>
            </a>
          </div>

          <!-- Feature Trust Badges Row -->
          <div class="cta-trust-row">
            <span class="trust-badge">&#10003; Owner Daren Koniuk Personally On-Site</span>
            <span class="bullet">&bull;</span>
            <span class="trust-badge">&#10003; Next-Day Digital Photo Report</span>
            <span class="bullet">&bull;</span>
            <span class="trust-badge">&#10003; Free Bank Termite (NPMA-33) Report</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-modal']);
</script>

<style scoped>
.cta-section {
  padding: 80px 0 96px;
  background: #faf7f2;
  position: relative;
}

.cta-band {
  background: #0c1424;
  border-radius: 16px;
  padding: 72px 40px;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 20px 50px rgba(12, 20, 36, 0.2);
  position: relative;
  overflow: hidden;
  border: 1px solid #1e293b;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.cta-pill {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: rgba(255, 255, 255, 0.08);
  color: #c5a880;
  border: 1px solid rgba(229, 223, 213, 0.25);
  padding: 5px 16px;
  border-radius: 4px;
  margin-bottom: 24px;
}

.cta-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 20px 0;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.cta-subtitle {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: clamp(1.02rem, 1.3vw, 1.15rem);
  line-height: 1.7;
  color: #cbd5e1;
  margin: 0 0 40px 0;
}

.cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.btn-accent-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #8c6d46;
  color: #ffffff;
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 1rem;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 6px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(140, 109, 70, 0.25);
  transition: all 0.2s ease;
  border: 1px solid #8c6d46;
  cursor: pointer;
  letter-spacing: 0.01em;
}

.btn-accent-cta:hover {
  background: #a38157;
  border-color: #a38157;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(140, 109, 70, 0.35);
  color: #ffffff;
}

.btn-outline-cta {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 1rem;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-outline-cta:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: #ffffff;
  color: #ffffff;
  transform: translateY(-1px);
}

.btn-email-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #cbd5e1;
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.95rem;
  font-weight: 600;
  padding: 14px 22px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-email-cta:hover {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.cta-trust-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.76rem;
  color: #cbd5e1;
  flex-wrap: wrap;
}

.trust-badge {
  color: #e2e8f0;
}

.bullet {
  color: #8c6d46;
}

@media (max-width: 640px) {
  .cta-band {
    padding: 48px 24px;
    border-radius: 12px;
  }
  .cta-actions {
    flex-direction: column;
    width: 100%;
  }
  .btn-accent-cta,
  .btn-outline-cta,
  .btn-email-cta {
    width: 100%;
    justify-content: center;
  }
  .cta-trust-row {
    flex-direction: column;
    gap: 6px;
  }
  .cta-trust-row .bullet {
    display: none;
  }
}
</style>
