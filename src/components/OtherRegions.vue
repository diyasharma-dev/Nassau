<template>
  <section class="section other-regions-section" id="regions">
    <div class="wrap">
      <!-- Section Head -->
      <div class="section-head text-center">
        <span class="section-tag">All Service Areas</span>
        <h2 class="section-title">Explore other NYC &amp; Long Island regions</h2>
        <p class="section-sub">
          We cover all 5 boroughs of New York City plus Nassau and Suffolk counties.
        </p>
      </div>

      <!-- 6 Region Cards Grid -->
      <div class="regions-grid">
        <div
          v-for="reg in regionsList"
          :key="reg.name"
          class="region-card"
        >
          <div class="region-img-box">
            <img
              :src="reg.img"
              :alt="reg.name"
              class="region-img"
              loading="lazy"
            />
            <span class="region-count-badge">{{ reg.count }}</span>
          </div>
          <div class="region-body">
            <h3 class="region-name">{{ reg.name }}</h3>
            <p class="region-desc">{{ reg.desc }}</p>
            <span class="region-link">Explore {{ reg.name }} &rarr;</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const regionsList = [
  {
    name: 'Queens',
    count: '102 areas',
    img: '/images/region-queens.webp',
    desc: 'Queens is an extremely diverse community with a rich architectural spectrum. From historic attached rowhouses to brick Tudor single-family homes.'
  },
  {
    name: 'Brooklyn',
    count: '90 areas',
    img: '/images/region-brooklyn.webp',
    desc: 'Many home inspections in Brooklyn require deep knowledge of century-old brownstone masonry, timber floor framing, and party wall settling.'
  },
  {
    name: 'Bronx',
    count: '73 areas',
    img: '/images/region-bronx.webp',
    desc: 'Famous as the greenest of New York City\'s five boroughs, the Bronx offers detached multi-family homes, Riverdale estates, and pre-war cooperatives.'
  },
  {
    name: 'Manhattan',
    count: '84 areas',
    img: '/images/region-manhattan.webp',
    desc: 'Manhattan real estate represents some of the highest-value property in the world. Comprehensive evaluations for pre-war condos and historic co-ops.'
  },
  {
    name: 'Staten Island',
    count: '91 areas',
    img: '/images/region-staten-island.webp',
    desc: 'HomeStar performs complete home inspections across all regions of Staten Island, from North Shore Colonials to South Shore suburban ranches.'
  },
  {
    name: 'Suffolk County',
    count: '58 areas',
    img: '/images/region-suffolk-county.webp',
    desc: 'Covering a wide geographical territory from Huntington and Melville out to Port Jefferson, featuring private septic systems and deep well pumps.'
  }
];
</script>

<style scoped>
.other-regions-section {
  background: #fafbfd;
  padding: 80px 0;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
}

.section-head {
  margin-bottom: 44px;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--queens-blue, #0e5a8a);
  background: #e0f2fe;
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

.regions-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}

@media (min-width: 640px) {
  .regions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .regions-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.region-card {
  background: #ffffff;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(18, 24, 32, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.region-card:hover {
  transform: translateY(-3px);
  border-color: var(--queens-blue, #0e5a8a);
  box-shadow: 0 8px 24px rgba(18, 24, 32, 0.08);
}

.region-img-box {
  position: relative;
  height: 150px;
  width: 100%;
  background: #0f172a;
  overflow: hidden;
}

.region-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.region-card:hover .region-img {
  transform: scale(1.05);
}

.region-count-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(11, 37, 69, 0.88);
  backdrop-filter: blur(4px);
  color: #ffffff;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.region-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.region-name {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  margin: 0 0 8px 0;
}

.region-desc {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.86rem;
  line-height: 1.58;
  color: var(--text-secondary, #475569);
  margin: 0 0 16px 0;
  flex-grow: 1;
}

.region-link {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--queens-blue, #0e5a8a);
  text-transform: uppercase;
}
</style>
