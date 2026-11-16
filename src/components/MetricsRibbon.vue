<template>
  <section class="trust-ribbon" aria-label="Official Inspection Certifications and Guarantees">
    <div class="wrap ribbon-wrap">
      <!-- 100% Satisfaction Guarantee Seal -->
      <div class="trust-item">
        <img
          src="/images/satisfaction-seal.webp"
          alt="100% Money-Back Satisfaction Guarantee"
          class="seal-img"
          width="54"
          height="54"
          loading="lazy"
        />
        <div class="trust-text">
          <strong class="trust-title">100% Satisfaction Guarantee</strong>
          <span class="trust-desc">If unsatisfied at inspection end, you owe $0</span>
        </div>
      </div>

      <!-- InterNACHI Certified Seal -->
      <div class="trust-item">
        <img
          src="/images/internachi-seal.webp"
          alt="InterNACHI Certified Professional Inspector"
          class="seal-img"
          width="48"
          height="50"
          loading="lazy"
        />
        <div class="trust-text">
          <strong class="trust-title">InterNACHI Certified CPI</strong>
          <span class="trust-desc">Rigorous international inspection standard</span>
        </div>
      </div>

      <!-- NYS Licensed Authority -->
      <div class="trust-item">
        <div class="trust-badge-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="svg-icon">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div class="trust-text">
          <strong class="trust-title">NYS DOS Lic. #16000009862</strong>
          <span class="trust-desc">Over 20 years inspecting Long Island</span>
        </div>
      </div>

      <!-- Free Termite NPMA-33 Report -->
      <div class="trust-item">
        <div class="trust-badge-icon gold-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="svg-icon">
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
          </svg>
        </div>
        <div class="trust-text">
          <strong class="trust-title">Free NPMA-33 Termite Form</strong>
          <span class="trust-desc">Official lender-approved report ($150 value)</span>
        </div>
      </div>

      <!-- 24-Hour Digital Report -->
      <div class="trust-item">
        <div class="trust-badge-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="svg-icon">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <div class="trust-text">
          <strong class="trust-title">Next-Day Photo Report</strong>
          <span class="trust-desc">Delivered within 24 hours to beat contingency</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.trust-ribbon {
  background: #ffffff;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
  padding: 18px 0;
  box-shadow: 0 2px 10px rgba(18, 24, 32, 0.04);
}

.ribbon-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 20px;
  align-items: center;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.seal-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  flex-shrink: 0;
}

.trust-badge-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--surface-subtle, #eceef2);
  border: 1.5px solid var(--border-soft, #d8dee6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--queens-blue, #0e5a8a);
  flex-shrink: 0;
}

.gold-badge {
  background: var(--gold-light, #fbf7ee);
  border-color: var(--gold-border, #d6c2a2);
  color: #927238;
}

.svg-icon {
  width: 22px;
  height: 22px;
}

.trust-text {
  display: flex;
  flex-direction: column;
}

.trust-title {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.86rem;
  font-weight: 700;
  color: var(--charcoal-950, #121820);
  line-height: 1.2;
}

.trust-desc {
  font-size: 0.74rem;
  color: var(--text-secondary, #475569);
  line-height: 1.3;
}
</style>
