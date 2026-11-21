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
  background: #faf7f2;
  padding: 88px 0;
  border-bottom: 1px solid #e5dfd5;
  position: relative;
}

.section-head {
  margin-bottom: 48px;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: #8c6d46;
  background: #f6f2ec;
  border: 1px solid #dcd4c7;
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

.hood-search-wrap {
  max-width: 520px;
  margin: 0 auto 36px;
}

.hood-input-box {
  position: relative;
  display: flex;
  align-items: center;
}

.hood-search-ico {
  position: absolute;
  left: 16px;
  color: #8c6d46;
  pointer-events: none;
}

.hood-search-input {
  width: 100%;
  padding: 14px 40px 14px 48px;
  border: 1px solid #dcd4c7;
  border-radius: 8px;
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.95rem;
  background: #ffffff;
  color: #0f172a;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
  outline: none;
  transition: all 0.2s ease;
}

.hood-search-input:focus {
  border-color: #8c6d46;
  box-shadow: 0 0 0 3px rgba(140, 109, 70, 0.15);
}

.hood-search-input::placeholder {
  color: #94a3b8;
}

.clear-btn {
  position: absolute;
  right: 14px;
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #94a3b8;
  cursor: pointer;
  padding: 0 4px;
  transition: color 0.15s ease;
}

.clear-btn:hover {
  color: #0f172a;
}

.search-count {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 600;
  color: #64748b;
  margin-top: 10px;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hood-grid {
  list-style: none;
  margin: 0 0 52px 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 12px;
}

.hood-item {
  background: #ffffff;
  color: #1e293b;
  font-weight: 600;
  font-size: 0.88rem;
  border: 1px solid #e5dfd5;
  border-radius: 6px;
  padding: 11px 16px;
  display: flex;
  align-items: center;
  gap: 9px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.03);
  transition: all 0.2s ease;
}

.hood-item:hover {
  transform: translateY(-2px);
  border-color: #8c6d46;
  color: #8c6d46;
  box-shadow: 0 4px 12px rgba(140, 109, 70, 0.1);
}

.hood-pin {
  color: #8c6d46;
  font-size: 1.2rem;
  line-height: 1;
}

.coverage-cta-banner {
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
  box-shadow: 0 12px 36px rgba(12, 20, 36, 0.12);
}

@media (min-width: 860px) {
  .coverage-cta-banner {
    flex-direction: row;
  }
}

.coverage-cta-text h3 {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.45rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px 0;
  letter-spacing: -0.01em;
}

.coverage-cta-text p {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.94rem;
  color: #cbd5e1;
  margin: 0;
  max-width: 620px;
  line-height: 1.6;
}
</style>
