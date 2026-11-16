<template>
  <section class="section checklist-section" id="checklist">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-tag">Exhaustive Scope of Inspection</span>
        <h2 class="section-title">The 1,700+ Point Inspection Checklist</h2>
        <p class="section-subtitle">
          We don't do 45-minute drive-by walk-throughs. Click on each system below to see what Daren Koniuk examines on-site in your prospective Nassau County home.
        </p>
      </div>

      <div class="checklist-layout">
        <!-- System Navigation Sidebar -->
        <div class="systems-sidebar">
          <button
            v-for="(system, key) in inspectionSystems"
            :key="key"
            class="system-nav-btn"
            :class="{ active: currentSystemKey === key }"
            @click="currentSystemKey = key"
          >
            <svg class="sys-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path v-if="system.icon === 'roof'" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <g v-else-if="system.icon === 'foundation'">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/>
              </g>
              <polygon v-else-if="system.icon === 'electrical'" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              <g v-else-if="system.icon === 'hvac'">
                <circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10"/>
              </g>
              <path v-else-if="system.icon === 'plumbing'" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
              <polygon v-else-if="system.icon === 'attic'" points="12 2 2 22 22 22"/>
              <g v-else-if="system.icon === 'exterior'">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
              </g>
              <g v-else>
                <circle cx="12" cy="12" r="10"/><path d="M8 12h8"/>
              </g>
            </svg>
            <span>{{ system.title }}</span>
          </button>
        </div>

        <!-- System Details Display -->
        <div class="system-display-card" v-if="currentSystem">
          <div class="sys-header">
            <h3>{{ currentSystem.title }}</h3>
            <p>{{ currentSystem.description }}</p>
          </div>
          <div class="sys-items-grid">
            <div class="sys-item" v-for="(item, iIdx) in currentSystem.items" :key="iIdx">
              <span class="sys-item-bullet">&#9670;</span>
              <div class="sys-item-text">
                <strong>{{ item.name }}</strong>
                <span>{{ item.desc }}</span>
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
