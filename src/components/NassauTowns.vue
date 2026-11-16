<template>
  <section class="section coverage-section" id="coverage">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-tag">Nassau County Exclusive</span>
        <h2 class="section-title">Serving Every Township, Village &amp; Hamlet in Nassau County</h2>
        <p class="section-subtitle">
          From historic North Shore Gold Coast estates to classic South Shore split-levels and suburban central ranch homes, Daren Koniuk brings deep knowledge of Nassau County's distinct building codes, foundations, and heating systems.
        </p>
      </div>

      <!-- Region Filter Tabs by Nassau Jurisdictions -->
      <div class="region-tabs">
        <button
          v-for="region in nassauRegions"
          :key="region.id"
          class="region-tab"
          :class="{ active: selectedRegion === region.id }"
          @click="selectRegion(region.id)"
        >
          {{ region.label }}
        </button>
      </div>

      <!-- Search Filter Input -->
      <div class="town-search-wrapper">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search any Nassau town (e.g. Garden City, Great Neck, Syosset, Massapequa...)"
          @input="onSearchInput"
        />
      </div>

      <!-- Towns Grid -->
      <div class="towns-grid" v-if="filteredTowns.length > 0">
        <div class="town-card" v-for="town in filteredTowns" :key="town.name" :data-region="town.region">
          <div class="town-header">
            <span class="town-jurisdiction" v-if="town.township">{{ town.township }}</span>
            <h4 class="town-name">{{ town.name }}</h4>
          </div>
          <p class="town-desc">{{ town.description }}</p>
          <div class="town-footer">
            <span class="town-zip">ZIP: {{ town.zip }}</span>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center" style="padding: 30px; color: var(--text-muted);">
        <p>No towns matched "{{ searchQuery }}". But don't worry, we inspect every neighborhood in Nassau County!</p>
      </div>

      <div class="coverage-cta-banner">
        <div class="coverage-cta-text">
          <h3>Need a same-day or next-day inspection in Nassau County?</h3>
          <p>Daren Koniuk is in Nassau County daily. Available 7 days a week with fast 24-hour digital photo reports.</p>
        </div>
        <a href="tel:7182087092" class="btn btn-primary">Call Daren Directly: (718) 208-7092</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { nassauRegions, nassauTowns } from '../data/townsData.js';

const selectedRegion = ref('all');
const searchQuery = ref('');

const selectRegion = (regionId) => {
  selectedRegion.value = regionId;
  searchQuery.value = '';
};

const onSearchInput = () => {
  if (searchQuery.value.trim().length > 0) {
    selectedRegion.value = 'all';
  }
};

const filteredTowns = computed(() => {
  let list = nassauTowns;
  if (selectedRegion.value !== 'all') {
    list = list.filter(t => t.region === selectedRegion.value);
  }
  if (searchQuery.value.trim() !== '') {
    const q = searchQuery.value.toLowerCase().trim();
    list = list.filter(t => 
      t.name.toLowerCase().includes(q) || 
      t.description.toLowerCase().includes(q) || 
      t.zip.toLowerCase().includes(q) ||
      (t.township && t.township.toLowerCase().includes(q))
    );
  }
  return list;
});
</script>

<style scoped>
.town-card {
  background: #ffffff;
  padding: 22px;
  border-radius: 12px;
  border: 1.5px solid var(--border-soft, #d8dee6);
  box-shadow: 0 2px 8px rgba(18, 24, 32, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.town-card:hover {
  transform: translateY(-3px);
  border-color: var(--brick, #d94828);
  box-shadow: 0 8px 20px rgba(18, 24, 32, 0.08);
}

.town-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 12px;
}

.town-jurisdiction {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.68rem;
  font-weight: 700;
  background: var(--surface-subtle, #eceef2);
  color: var(--queens-blue, #0e5a8a);
  border: 1px solid var(--border-soft, #d8dee6);
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.2;
}

.town-name {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1.25;
  margin: 0;
}

.town-desc {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.88rem;
  color: var(--text-secondary, #475569);
  line-height: 1.55;
  margin-bottom: 16px;
  flex-grow: 1;
}

.town-footer {
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px dashed var(--border-soft, #d8dee6);
}

.town-zip {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--queens-blue, #0e5a8a);
  background: var(--queens-blue-light, #ebf4fa);
  padding: 3px 8px;
  border-radius: 4px;
}
</style>
