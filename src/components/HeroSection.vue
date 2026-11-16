<template>
  <section class="hero-section" id="hero">
    <div class="hero-scrim"></div>
    <div class="wrap hero-wrap">
      <div class="hero-grid">
        <!-- Left Column: Editorial Authority -->
        <div class="hero-text-col">
          <!-- Monospace Technical Badge -->
          <div class="hero-eyebrow-badge">
            <span class="mono-badge-text">
              1,700+ PHYSICAL POINTS CHECKED &bull; NYS LICENSED #16000009862
            </span>
          </div>

          <!-- Main Editorial Display Headline -->
          <h1 class="hero-main-title">
            Don't buy a Nassau County home <span class="title-highlight">without knowing what's underneath.</span>
          </h1>

          <!-- Hyperlocal Lede -->
          <p class="hero-lede">
            From 1920s Garden City and Great Neck Colonials and Mid-Century Levittown slab ranches to Massapequa waterfront bulkheads and Syosset luxury estates. We inspect the roofs, foundations, cast-iron oil boilers, and electrical panels before you sign the contract.
          </p>

          <!-- Core Value Badges Row -->
          <div class="hero-value-ribbon">
            <div class="val-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="val-icon">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span><strong>Owner Inspects</strong> (No apprentices)</span>
            </div>
            <div class="val-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="val-icon">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span><strong>Next-Day</strong> Digital Photo Report</span>
            </div>
            <div class="val-pill highlight-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="val-icon text-gold">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <span><strong>FREE Termite Report</strong> ($150 Value)</span>
            </div>
            <div class="val-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="val-icon">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span><strong>100% Money-Back</strong> Guarantee</span>
            </div>
          </div>

          <!-- Direct Contact & Trust Row -->
          <div class="hero-cta-row">
            <a href="tel:7182087092" class="btn-hero-call">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.28-.28.68-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.34.03.73-.24 1.01L6.6 10.8z"/>
              </svg>
              <span>Call Daren Directly: (718) 208-7092</span>
            </a>
            <span class="hero-call-sub">Available 7 Days a Week &bull; Same-Day &amp; Weekend Appointments</span>
          </div>
        </div>

        <!-- Right Column: Clean Instant Nassau Fee & Quote Card -->
        <div class="hero-card-col">
          <div class="instant-quote-card">
            <div class="quote-card-header">
              <span class="card-tag">Instant Nassau Fee Estimator</span>
              <h2 class="card-title">Get an Instant Quote</h2>
              <p class="card-sub">Select your property details for upfront Nassau pricing</p>
            </div>

            <form @submit.prevent="handleQuoteSubmit" class="quote-card-form">
              <!-- Property Type -->
              <div class="form-field">
                <label class="field-label">Property Type</label>
                <div class="type-pill-grid">
                  <button
                    type="button"
                    v-for="type in propertyTypes"
                    :key="type.id"
                    class="type-pill-btn"
                    :class="{ active: selectedType === type.id }"
                    @click="selectedType = type.id"
                  >
                    {{ type.name }}
                  </button>
                </div>
              </div>

              <!-- Nassau Town Input -->
              <div class="form-field">
                <label for="nassauTownInput" class="field-label">Town or Hamlet in Nassau County</label>
                <div class="input-with-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="input-icon">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <input
                    type="text"
                    id="nassauTownInput"
                    v-model="townInput"
                    placeholder="e.g. Garden City, Great Neck, Syosset..."
                    required
                    class="form-input"
                  />
                </div>
              </div>

              <!-- Square Footage Slider -->
              <div class="form-field">
                <div class="slider-label-row">
                  <label class="field-label">Approximate Square Footage</label>
                  <span class="slider-val-badge">{{ sqftDisplay }} sq. ft.</span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="5000"
                  step="100"
                  v-model.number="sqft"
                  class="custom-slider"
                />
              </div>

              <!-- Price Calculation Box -->
              <div class="quote-price-box">
                <div class="price-left">
                  <span class="price-caption">Estimated Full Inspection Fee</span>
                  <div class="price-number">
                    ${{ calculatedPrice }}
                    <span class="price-all-in">All-inclusive</span>
                  </div>
                </div>
                <div class="price-badge-free">
                  <span>FREE NPMA-33 Termite Report</span>
                  <strong>$150 Value Included</strong>
                </div>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="btn-quote-submit">
                <span>Lock In This Rate &amp; Schedule</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="arrow-svg">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>

              <div class="quote-reassurance">
                &#10003; No payment until inspection is complete &bull; 100% Satisfaction Guarantee
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['open-modal', 'quote-submitted']);

const propertyTypes = [
  { id: 'single', name: 'Single Family', base: 495 },
  { id: 'condo', name: 'Condo / Co-Op', base: 395 },
  { id: 'multi', name: '2–4 Family', base: 645 },
  { id: 'townhouse', name: 'Townhouse', base: 465 }
];

const selectedType = ref('single');
const townInput = ref('Garden City');
const sqft = ref(2200);

const sqftDisplay = computed(() => {
  return sqft.value.toLocaleString();
});

const calculatedPrice = computed(() => {
  const currentType = propertyTypes.find(t => t.id === selectedType.value) || propertyTypes[0];
  let price = currentType.base;
  
  if (sqft.value > 1500) {
    const extraBlocks = Math.ceil((sqft.value - 1500) / 500);
    price += extraBlocks * 40;
  }
  
  return price;
});

const handleQuoteSubmit = () => {
  const selectedTypeName = propertyTypes.find(t => t.id === selectedType.value)?.name || 'Single Family';
  emit('quote-submitted', {
    propType: selectedTypeName,
    town: townInput.value,
    sqft: sqft.value,
    price: calculatedPrice.value,
    timeline: 'Within 48 hours'
  });
};
</script>

<style scoped>
.hero-section {
  position: relative;
  background-color: #121820;
  background-image: url('/images/nassau-hero-house.webp');
  background-size: cover;
  background-position: center 30%;
  color: #ffffff;
  padding: 64px 0 84px;
  overflow: hidden;
}

.hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(14, 24, 36, 0.94) 0%,
    rgba(14, 24, 36, 0.88) 45%,
    rgba(14, 24, 36, 0.78) 100%
  );
  backdrop-filter: blur(1.5px);
}

.hero-wrap {
  position: relative;
  z-index: 2;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
}

@media (min-width: 1040px) {
  .hero-grid {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 48px;
  }
}

.hero-eyebrow-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  padding: 6px 14px;
  margin-bottom: 20px;
}

.mono-badge-text {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero-main-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(2.2rem, 3.8vw, 3.4rem);
  font-weight: 800;
  line-height: 1.12;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin-bottom: 18px;
}

.title-highlight {
  color: var(--hazard-gold, #c9a86a);
  font-style: italic;
  font-weight: 700;
}

.hero-lede {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 1.05rem;
  line-height: 1.65;
  color: #cbd5e1;
  margin-bottom: 26px;
  max-width: 600px;
}

.hero-value-ribbon {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.val-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  padding: 7px 12px;
  font-size: 0.82rem;
  color: #e2e8f0;
}

.val-pill strong {
  color: #ffffff;
}

.val-icon {
  width: 15px;
  height: 15px;
  color: #94a3b8;
  flex-shrink: 0;
}

.highlight-pill {
  background: rgba(201, 168, 106, 0.15);
  border-color: rgba(201, 168, 106, 0.35);
  color: #fbf7ee;
}

.text-gold {
  color: var(--hazard-gold, #c9a86a);
}

.hero-cta-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.btn-hero-call {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  color: var(--charcoal-950, #121820);
  border-radius: 9999px;
  padding: 13px 24px;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.98rem;
  font-weight: 700;
  text-decoration: none;
  width: fit-content;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}

.btn-hero-call:hover {
  background: var(--hazard-gold, #c9a86a);
  color: #121820;
  transform: translateY(-2px);
}

.hero-call-sub {
  font-size: 0.8rem;
  color: #94a3b8;
}

/* Instant Quote Card */
.instant-quote-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 28px 24px;
  color: var(--charcoal-950, #121820);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
}

.quote-card-header {
  margin-bottom: 20px;
  text-align: center;
}

.card-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--brick, #d94828);
  background: var(--brick-light, #fff1ee);
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 6px;
}

.card-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  margin-bottom: 4px;
}

.card-sub {
  font-size: 0.82rem;
  color: var(--text-secondary, #475569);
}

.quote-card-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-label {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--charcoal-900, #1a222d);
}

.type-pill-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
}

.type-pill-btn {
  background: var(--surface-subtle, #eceef2);
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 6px;
  padding: 8px 10px;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--charcoal-900, #1a222d);
  cursor: pointer;
  transition: all 0.15s ease;
  text-align: center;
}

.type-pill-btn:hover {
  border-color: var(--brick, #d94828);
}

.type-pill-btn.active {
  background: var(--charcoal-950, #121820);
  color: #ffffff;
  border-color: var(--charcoal-950, #121820);
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 12px;
  width: 16px;
  height: 16px;
  color: #94a3b8;
  pointer-events: none;
}

.form-input {
  width: 100%;
  padding: 10px 12px 10px 36px;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 6px;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.88rem;
  color: var(--charcoal-950, #121820);
  background: #ffffff;
}

.form-input:focus {
  outline: none;
  border-color: var(--brick, #d94828);
}

.slider-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slider-val-badge {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--queens-blue, #0e5a8a);
}

.custom-slider {
  width: 100%;
  accent-color: var(--brick, #d94828);
  height: 6px;
  cursor: pointer;
}

.quote-price-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--surface-subtle, #eceef2);
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 8px;
  padding: 12px 16px;
}

.price-caption {
  display: block;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-secondary, #475569);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.price-number {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1;
}

.price-all-in {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.72rem;
  font-weight: 600;
  color: #10b981;
  margin-left: 4px;
}

.price-badge-free {
  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 0.72rem;
  color: #065f46;
}

.price-badge-free strong {
  font-weight: 800;
  color: #047857;
}

.btn-quote-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--brick, #d94828);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 13px 20px;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(217, 72, 40, 0.3);
  transition: all 0.2s ease;
}

.btn-quote-submit:hover {
  background: var(--brick-700, #b83619);
  transform: translateY(-1px);
}

.arrow-svg {
  width: 16px;
  height: 16px;
}

.quote-reassurance {
  font-size: 0.74rem;
  color: var(--text-muted, #64748b);
  text-align: center;
}
</style>
