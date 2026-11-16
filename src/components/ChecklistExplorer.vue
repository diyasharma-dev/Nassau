<template>
  <section class="section checklist-section" id="checklist">
    <div class="wrap">
      <div class="section-heading text-center">
        <span class="eyebrow-tag blue-tag">Exhaustive Scope</span>
        <h2 class="section-title">Over 1,700 Items, Inside and Out</h2>
        <p class="section-sub">
          We don't do 45-minute drive-by walk-throughs. Lead inspector Daren Koniuk evaluates every primary structural, mechanical, and environmental system across your Nassau property.
        </p>
      </div>

      <!-- Systems Diagram Banner -->
      <div class="diagram-feature-box">
        <div class="df-image-col">
          <img
            src="/images/inspection-diagram.webp"
            alt="HomeStar 1,700+ Point Home Inspection Systems Cross-Section Diagram"
            class="inspection-diagram-img"
            loading="lazy"
          />
        </div>
        <div class="df-text-col">
          <span class="df-badge">Cross-Section Engineering Evaluation</span>
          <h3 class="df-title">From Roof Rafters to Foundation Footings</h3>
          <p class="df-desc">
            A comprehensive inspection requires hands-on physical access. We physically climb into accessible attics, walk safe roof surfaces, open electrical panel dead fronts, fire steam boilers and air conditioners, and probe foundation sill plates.
          </p>
          <div class="df-points-grid">
            <div class="df-point">
              <strong>Exterior &amp; Grading</strong>
              <span>Driveways, drainage slope, masonry, stoops</span>
            </div>
            <div class="df-point">
              <strong>Roofing &amp; Flashing</strong>
              <span>Shingles, valley metal, skylights, gutters</span>
            </div>
            <div class="df-point">
              <strong>Structure &amp; Framing</strong>
              <span>Sill plates, rim joists, subfloors, main beams</span>
            </div>
            <div class="df-point">
              <strong>Heating &amp; Boilers</strong>
              <span>Cast iron boilers, steam loops, radiators, burners</span>
            </div>
            <div class="df-point">
              <strong>Electrical Service</strong>
              <span>200A panels, grounding, branch wiring, GFCI/AFCI</span>
            </div>
            <div class="df-point">
              <strong>Plumbing &amp; Waste</strong>
              <span>Supply lines, cast iron waste stacks, water heaters</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive System Tabs -->
      <div class="systems-interactive-wrap">
        <div class="systems-nav-strip">
          <button
            v-for="(system, key) in inspectionSystems"
            :key="key"
            class="sys-tab-btn"
            :class="{ active: currentSystemKey === key }"
            @click="currentSystemKey = key"
          >
            {{ system.title }}
          </button>
        </div>

        <div class="system-panel" v-if="currentSystem">
          <div class="sys-panel-header">
            <div>
              <span class="sys-scope-tag">System Inspection Scope</span>
              <h3 class="sys-panel-title">{{ currentSystem.title }}</h3>
              <p class="sys-panel-desc">{{ currentSystem.description }}</p>
            </div>
          </div>

          <div class="sys-checklist-grid">
            <div class="checklist-item-card" v-for="(item, iIdx) in currentSystem.items" :key="iIdx">
              <span class="check-bullet">&#10003;</span>
              <div class="check-content">
                <strong>{{ item.name }}</strong>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { inspectionSystems } from '../data/inspectionSystems.js';

const currentSystemKey = ref('roof');

const currentSystem = computed(() => {
  return inspectionSystems[currentSystemKey.value] || inspectionSystems.roof;
});
</script>

<style scoped>
.checklist-section {
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

.blue-tag {
  color: var(--queens-blue, #0e5a8a);
  background: var(--queens-blue-light, #ebf4fa);
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

.diagram-feature-box {
  background: var(--surface-page, #f4f6f8);
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 14px;
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;
  margin-bottom: 48px;
}

@media (min-width: 960px) {
  .diagram-feature-box {
    grid-template-columns: 1fr 1.2fr;
    gap: 40px;
  }
}

.df-image-col {
  background: #ffffff;
  border: 1px solid var(--border-soft, #d8dee6);
  border-radius: 10px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inspection-diagram-img {
  width: 100%;
  max-width: 480px;
  height: auto;
  object-fit: contain;
  display: block;
}

.df-badge {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--brick, #d94828);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  display: block;
  margin-bottom: 6px;
}

.df-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1.25;
  margin-bottom: 10px;
}

.df-desc {
  font-size: 0.92rem;
  color: var(--text-secondary, #475569);
  line-height: 1.6;
  margin-bottom: 20px;
}

.df-points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.df-point {
  background: #ffffff;
  border: 1px solid var(--border-soft, #d8dee6);
  border-radius: 6px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
}

.df-point strong {
  font-size: 0.82rem;
  color: var(--charcoal-950, #121820);
  margin-bottom: 2px;
}

.df-point span {
  font-size: 0.74rem;
  color: #64748b;
}

/* Systems Interactive Tabs */
.systems-interactive-wrap {
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
}

.systems-nav-strip {
  display: flex;
  overflow-x: auto;
  background: var(--surface-subtle, #eceef2);
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
  padding: 6px 6px 0;
  gap: 4px;
}

.sys-tab-btn {
  padding: 10px 16px;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.86rem;
  font-weight: 600;
  background: none;
  border: none;
  border-radius: 6px 6px 0 0;
  color: var(--text-secondary, #475569);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.sys-tab-btn:hover {
  color: var(--charcoal-950, #121820);
}

.sys-tab-btn.active {
  background: #ffffff;
  color: var(--brick, #d94828);
  font-weight: 700;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.04);
}

.system-panel {
  padding: 28px 32px;
}

.sys-scope-tag {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.7rem;
  color: #94a3b8;
  font-weight: 700;
  text-transform: uppercase;
}

.sys-panel-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  margin-bottom: 4px;
}

.sys-panel-desc {
  font-size: 0.9rem;
  color: var(--text-secondary, #475569);
  margin-bottom: 24px;
}

.sys-checklist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.checklist-item-card {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: var(--surface-page, #f4f6f8);
  border: 1px solid var(--border-soft, #d8dee6);
  border-radius: 8px;
  padding: 14px;
}

.check-bullet {
  color: #059669;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.2;
}

.check-content strong {
  display: block;
  font-size: 0.86rem;
  color: var(--charcoal-950, #121820);
  margin-bottom: 2px;
}

.check-content p {
  font-size: 0.78rem;
  color: var(--text-secondary, #475569);
  line-height: 1.45;
  margin: 0;
}
</style>
