<template>
  <section class="section local-nuance-section">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-tag">Long Island Housing Expertise</span>
        <h2 class="section-title">What Nassau County Buyers Must Watch For</h2>
        <p class="section-subtitle">
          Nassau County features homes ranging from 1920s Gold Coast mansions and pre-war colonials to 1950s Levittown Capes and South Shore canal homes. Daren Koniuk knows exactly what hidden issues hide in Nassau houses.
        </p>
      </div>

      <!-- Featured Long Island Regional Insight Banner -->
      <div class="regional-spotlight-banner">
        <div class="spotlight-img-box">
          <img src="/images/waterfront-southshore.jpg" alt="South Shore Long Island Waterfront Canals" class="spotlight-img" />
          <span class="spotlight-tag">South Shore Water Table &amp; Coastal Alert</span>
        </div>
        <div class="spotlight-info">
          <h3>South Shore Tidal Pressure, Bulkheads &amp; Foundation Settling</h3>
          <p>
            Homes in Long Beach, Freeport, Massapequa, and Oceanside face unique environmental stresses. High water tables can cause hydrostatic pressure against basement floors, efflorescence on cinder blocks, and bulkhead wood rot. Daren thoroughly tests active sump pumps, check valves, and crawlspace moisture barriers.
          </p>
          <div class="spotlight-towns-pills">
            <span>Long Beach</span>
            <span>Massapequa</span>
            <span>Freeport</span>
            <span>Oceanside</span>
            <span>Merrick</span>
            <span>Bellmore</span>
          </div>
        </div>
      </div>

      <div class="nuance-grid">
        <div class="nuance-card" v-for="(challenge, idx) in localChallenges" :key="idx">
          <div class="nuance-icon-wrap">
            <svg v-if="challenge.icon === 'water'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
            </svg>
            <svg v-else-if="challenge.icon === 'zap'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <svg v-else-if="challenge.icon === 'flame'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            <svg v-else-if="challenge.icon === 'home'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <svg v-else-if="challenge.icon === 'bug'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
            </svg>
          </div>
          <h3>{{ challenge.title }}</h3>
          <p>{{ challenge.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { localChallenges } from '../data/challengesData.js';
</script>
