<template>
  <section class="section coverage-section" id="neighborhoods">
    <div class="wrap">
      <!-- Section Head -->
      <div class="section-head text-center">
        <span class="section-tag">Coverage Map</span>
        <h2 class="section-title">Areas We Inspect in Nassau County</h2>
        <p class="section-sub">
          HomeStar performs certified home inspections across all 80 neighborhoods in Nassau County.
        </p>
      </div>

      <!-- Search Input Container -->
      <div class="hood-search-wrap">
        <div class="hood-input-box">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="hood-search-ico" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search Nassau County neighborhoods (e.g. Centre Island)..."
            class="hood-search-input"
            aria-label="Search Nassau County neighborhoods"
          />
          <button v-if="searchQuery" @click="searchQuery = ''" class="clear-btn" title="Clear search">&times;</button>
        </div>
        <div class="search-count">
          Showing {{ filteredAreas.length }} of 80 areas
        </div>
      </div>

      <!-- 80 Neighborhoods Grid -->
      <ul class="hood-grid" aria-label="Neighborhoods in Nassau County">
        <li
          v-for="area in filteredAreas"
          :key="area"
          class="hood-item"
        >
          <span class="hood-pin">&bull;</span>
          <span class="hood-name">{{ area }}</span>
        </li>
      </ul>

      <!-- Bottom Coverage CTA -->
      <div class="coverage-cta-banner">
        <div class="coverage-cta-text">
          <h3>Need a same-day or next-day inspection in Nassau County?</h3>
          <p>Daren Koniuk is in Nassau County daily. Available 7 days a week with fast next-day digital photo reports.</p>
        </div>
        <a href="tel:7182087092" class="btn btn-primary">Call Daren Directly: (718) 208-7092</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchQuery = ref('');

const all80Areas = [
  "Centre Island", "Lattingtown", "Cove Neck", "Sands Point", "Locust Valley",
  "Baxter Estates", "Glen Head", "East Norwich", "Kings Point", "Great Neck",
  "Flower Hill", "Brookville", "Syosset", "Great Neck Estates", "East Hills",
  "Jericho", "Plainview", "University Gardens", "Albertson", "Westbury",
  "Hicksville", "Carle Place", "Bethpage", "Floral Park", "East Meadow",
  "Farmingdale", "South Farmingdale", "Elmont", "Hempstead", "North Bellmore",
  "East Massapequa", "Lakeview", "Roosevelt", "Lynbrook", "Baldwin",
  "Bellmore", "East Rockaway", "Baldwin Harbor", "Cedarhurst", "Lawrence",
  "Barnum Island", "Atlantic Beach", "Lido Beach", "Bayville", "Glen Cove",
  "Oyster Bay", "Upper Brookville", "Muttontown", "Sea Cliff", "Port Washington",
  "Manhasset", "Roslyn", "Roslyn Heights", "Old Westbury", "Mineola",
  "New Cassel", "Salisbury", "Woodbury", "Old Bethpage", "Levittown",
  "Plainedge", "North Wantagh", "Wantagh", "Seaford", "Massapequa",
  "Merrick", "North Merrick", "Freeport", "Garden City", "Franklin Square",
  "New Hyde Park", "Oceanside", "Island Park", "Valley Stream", "North Valley Stream",
  "Hewlett", "Woodmere", "Inwood", "Long Beach"
];

const filteredAreas = computed(() => {
  if (!searchQuery.value.trim()) return all80Areas;
  const q = searchQuery.value.toLowerCase().trim();
  return all80Areas.filter(area => area.toLowerCase().includes(q));
});
</script>

<style scoped>
.coverage-section {
  background: #ffffff;
  padding: 80px 0;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
}

.section-head {
  margin-bottom: 36px;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--nassau-gold-dark, #9d7718);
  background: #fdfaf2;
  border: 1px solid #e6ce8a;
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

.hood-search-wrap {
  max-width: 520px;
  margin: 0 auto 32px;
}

.hood-input-box {
  position: relative;
  display: flex;
  align-items: center;
}

.hood-search-ico {
  position: absolute;
  left: 14px;
  color: #64748b;
  pointer-events: none;
}

.hood-search-input {
  width: 100%;
  padding: 13px 40px 13px 44px;
  border: 2px solid var(--border-soft, #d8dee6);
  border-radius: 10px;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.95rem;
  background: #ffffff;
  color: var(--charcoal-950, #121820);
  box-shadow: 0 2px 8px rgba(18, 24, 32, 0.04);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.hood-search-input:focus {
  border-color: var(--nassau-gold, #c59b27);
  box-shadow: 0 0 0 3px rgba(197, 155, 39, 0.2);
}

.clear-btn {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #94a3b8;
  cursor: pointer;
  padding: 0 4px;
}

.search-count {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  color: #64748b;
  margin-top: 8px;
  text-align: right;
  text-transform: uppercase;
}

.hood-grid {
  list-style: none;
  margin: 0 0 48px 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 10px;
}

.hood-item {
  background: #ffffff;
  color: var(--nassau-navy, #0b1a2e);
  font-weight: 600;
  font-size: 0.88rem;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 8px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 6px rgba(18, 24, 32, 0.02);
  transition: transform 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
}

.hood-item:hover {
  transform: translateY(-2px);
  border-color: var(--nassau-gold, #c59b27);
  color: var(--nassau-navy, #0b1a2e);
  box-shadow: 0 4px 12px rgba(197, 155, 39, 0.15);
}

.hood-pin {
  color: var(--nassau-gold, #c59b27);
  font-size: 1.2rem;
  line-height: 1;
}

.coverage-cta-banner {
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
  .coverage-cta-banner {
    flex-direction: row;
  }
}

.coverage-cta-text h3 {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.35rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 6px 0;
}

.coverage-cta-text p {
  font-size: 0.92rem;
  color: #cbd5e1;
  margin: 0;
  max-width: 620px;
}
</style>
