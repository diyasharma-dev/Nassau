<template>
  <section class="section calculator-section" id="calculator">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-tag">Upfront &amp; Transparent</span>
        <h2 class="section-title">Instant Nassau County Fee Estimator</h2>
        <p class="section-subtitle">
          Get an immediate estimate based on property type, approximate square footage, and age. Every quote includes the full 1,700-point inspection, next-day digital photo report, and free termite inspection.
        </p>
      </div>

      <div class="calc-wrapper">
        <div class="calc-inputs-column">
          <!-- Step 1: Property Type -->
          <div class="calc-step">
            <label class="calc-label">1. Select Property Type</label>
            <div class="calc-options-grid">
              <button
                type="button"
                v-for="opt in propertyTypes"
                :key="opt.type"
                class="calc-opt-btn"
                :class="{ active: selectedType === opt.type }"
                @click="selectedType = opt.type"
              >
                <svg v-if="opt.type === 'single'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                </svg>
                <svg v-else-if="opt.type === 'condo'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                </svg>
                <svg v-else-if="opt.type === 'multi2'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
                </svg>
                <span>{{ opt.label }}</span>
              </button>
            </div>
          </div>

          <!-- Step 2: Square Footage Slider -->
          <div class="calc-step">
            <div class="calc-label-row">
              <label class="calc-label" for="sqftSlider">2. Approximate Square Footage</label>
              <span class="calc-value-display">{{ formattedSqft }} sq ft</span>
            </div>
            <input
              type="range"
              id="sqftSlider"
              v-model.number="sqft"
              min="800"
              max="5000"
              step="100"
              class="calc-range-slider"
            />
            <div class="slider-ticks">
              <span>800 sq ft</span>
              <span>2,500 sq ft</span>
              <span>5,000+ sq ft</span>
            </div>
          </div>

          <!-- Step 3: Age of Property -->
          <div class="calc-step">
            <label class="calc-label">3. Approximate Age of Property</label>
            <div class="calc-age-grid">
              <label class="radio-label">
                <input type="radio" v-model="propertyAge" value="new" />
                <span>Post-1980 (Modern)</span>
              </label>
              <label class="radio-label">
                <input type="radio" v-model="propertyAge" value="mid" />
                <span>1950 - 1980 (Mid-Century)</span>
              </label>
              <label class="radio-label">
                <input type="radio" v-model="propertyAge" value="historic" />
                <span>Pre-1950 (Pre-War / Vintage)</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Result Column -->
        <div class="calc-result-column">
          <div class="estimate-card">
            <span class="est-tag">Estimated Inspection Fee</span>
            <div class="est-price">${{ feeRange.low }} - ${{ feeRange.high }}</div>
            <p class="est-note">Accurate range for Nassau County. Final price confirmed based on total mechanical systems.</p>

            <div class="est-inclusions">
              <div class="inc-item">
                <span class="inc-check">&#10003;</span>
                <span>Full 1,700-Point Comprehensive Inspection</span>
              </div>
              <div class="inc-item">
                <span class="inc-check">&#10003;</span>
                <span class="text-gold">Free NPMA-33 Termite/WDO Report ($150 Value)</span>
              </div>
              <div class="inc-item">
                <span class="inc-check">&#10003;</span>
                <span>High-Definition Digital Photo Report</span>
              </div>
              <div class="inc-item">
                <span class="inc-check">&#10003;</span>
                <span>Next-Day 24-Hour Guaranteed Delivery</span>
              </div>
              <div class="inc-item">
                <span class="inc-check">&#10003;</span>
                <span>100% Satisfaction Walkthrough Guarantee</span>
              </div>
            </div>

            <button class="btn btn-primary btn-block est-cta-btn" @click="bookWithEstimate">
              Lock In This Estimate &amp; Book &rarr;
            </button>
            <p class="est-call-alt">
              Need immediate advice? <a href="tel:7182087092">Call Daren at (718) 208-7092</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['open-modal']);

const propertyTypes = [
  { type: "single", label: "Single Family", base: 475 },
  { type: "condo", label: "Condo / Co-Op", base: 375 },
  { type: "multi2", label: "2-Family House", base: 625 },
  { type: "multi3", label: "3-4 Family House", base: 750 }
];

const selectedType = ref('single');
const sqft = ref(2000);
const propertyAge = ref('new');

const formattedSqft = computed(() => {
  return sqft.value.toLocaleString();
});

const feeRange = computed(() => {
  const currentOpt = propertyTypes.find(p => p.type === selectedType.value) || propertyTypes[0];
  let base = currentOpt.base;

  // Sqft adjustment
  let sqftAdjustment = 0;
  if (sqft.value > 2000) {
    sqftAdjustment = Math.floor((sqft.value - 2000) / 500) * 45;
  }

  // Age adjustment
  let ageAdjustment = 0;
  if (propertyAge.value === 'mid') ageAdjustment = 35;
  if (propertyAge.value === 'historic') ageAdjustment = 65;

  const low = base + sqftAdjustment + ageAdjustment;
  const high = low + 50;

  return { low, high };
});

const bookWithEstimate = () => {
  const currentOpt = propertyTypes.find(p => p.type === selectedType.value) || propertyTypes[0];
  const summary = `Estimated fee: $${feeRange.value.low} - $${feeRange.value.high} for ~${formattedSqft.value} sq ft (${currentOpt.label})`;
  emit('open-modal', currentOpt.label, summary);
};
</script>
