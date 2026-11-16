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
            <h4>{{ town.name }}</h4>
            <span class="town-jurisdiction" v-if="town.township">{{ town.township }}</span>
          </div>
          <p>{{ town.description }}</p>
          <span class="town-zip">{{ town.zip }}</span>
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
.town-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  gap: 8px;
}
.town-jurisdiction {
  font-size: 0.7rem;
  background: #f1f5f9;
  color: #64748b;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
}
</style>
