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
  padding: 60px 0 80px;
  background: #ffffff;
}

.cta-band {
  background: linear-gradient(135deg, #0b1a2e 0%, #162a45 100%);
  border-radius: 20px;
  padding: 64px 36px;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 20px 48px rgba(11, 26, 46, 0.25);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(197, 155, 39, 0.35);
}

.cta-band::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(197, 155, 39, 0.22) 0%, rgba(197, 155, 39, 0) 70%);
  pointer-events: none;
}

.cta-band::after {
  content: '';
  position: absolute;
  bottom: -60px;
  left: -60px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(197, 155, 39, 0.18) 0%, rgba(197, 155, 39, 0) 70%);
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 780px;
  margin: 0 auto;
}

.cta-pill {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: rgba(201, 168, 106, 0.2);
  color: var(--hazard-gold, #f59e0b);
  border: 1px solid rgba(201, 168, 106, 0.4);
  padding: 4px 14px;
  border-radius: 9999px;
  margin-bottom: 20px;
}

.cta-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(2rem, 3.8vw, 3rem);
  font-weight: 800;
  line-height: 1.18;
  margin: 0 0 18px 0;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.cta-subtitle {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: clamp(1rem, 1.3vw, 1.15rem);
  line-height: 1.65;
  color: #cbd5e1;
  margin: 0 0 36px 0;
}

.cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.btn-accent-cta {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: linear-gradient(135deg, #c59b27 0%, #b08719 100%);
  color: #0b1a2e;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 1rem;
  font-weight: 800;
  padding: 14px 30px;
  border-radius: 9999px;
  text-decoration: none;
  box-shadow: 0 4px 18px rgba(197, 155, 39, 0.35);
  transition: all 0.2s ease;
  border: 1px solid #e6ce8a;
  cursor: pointer;
}

.btn-accent-cta:hover {
  background: linear-gradient(135deg, #d8ac32 0%, #c59b27 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(197, 155, 39, 0.5);
  color: #0b1a2e;
}

.btn-outline-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 1rem;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 9999px;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-outline-cta:hover {
  background: #ffffff;
  color: #0b1a2e;
  border-color: #ffffff;
  transform: translateY(-2px);
}

.btn-email-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #94a3b8;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.95rem;
  font-weight: 600;
  padding: 14px 20px;
  border-radius: 9999px;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-email-cta:hover {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.05);
}

.cta-trust-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.76rem;
  color: #94a3b8;
  flex-wrap: wrap;
}

.trust-badge {
  color: #e2e8f0;
}

.bullet {
  color: #64748b;
}

@media (max-width: 640px) {
  .cta-band {
    padding: 44px 20px;
    border-radius: 16px;
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
