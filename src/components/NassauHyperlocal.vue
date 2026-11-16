<template>
  <section class="section housing-types-section" id="housing-types">
    <div class="wrap">
      <!-- Section Head -->
      <div class="section-head text-center">
        <span class="section-tag">Property Profiles</span>
        <h2 class="section-title">Common Housing Types in Nassau County</h2>
        <p class="section-sub">
          We bring specialized building-science experience tailored to the specific construction styles found across Nassau County.
        </p>
      </div>

      <!-- 4 Common Housing Types Grid -->
      <div class="housing-types-grid">
        <!-- 1. Suburban Colonials & Split-Levels -->
        <article class="housing-card">
          <div class="housing-img-box">
            <img
              src="/images/garden-city-actual-house.jpg"
              alt="Suburban Colonials & Split-Levels in Garden City, Syosset, Jericho, Plainview, and Merrick"
              class="housing-img"
              loading="lazy"
            />
            <span class="card-loc-pill">Garden City &bull; Syosset &bull; Merrick</span>
          </div>
          <div class="housing-card-body">
            <h3 class="housing-type-title">Suburban Colonials &amp; Split-Levels</h3>
            <p class="housing-type-desc">
              Classic single-family residences in Garden City, Syosset, Jericho, Plainview, and Merrick with attached garages.
            </p>
            <div class="housing-card-foot">
              <span class="checklist-badge">&#10003; Full Checklist Evaluation</span>
            </div>
          </div>
        </article>

        <!-- 2. North Shore Luxury Estates -->
        <article class="housing-card">
          <div class="housing-img-box">
            <img
              src="/images/great-neck-actual-house.jpg"
              alt="North Shore Luxury Estates in Great Neck, Roslyn, Oyster Bay, Sands Point, and Locust Valley"
              class="housing-img"
              loading="lazy"
            />
            <span class="card-loc-pill">Great Neck &bull; Roslyn &bull; Oyster Bay</span>
          </div>
          <div class="housing-card-body">
            <h3 class="housing-type-title">North Shore Luxury Estates</h3>
            <p class="housing-type-desc">
              Expansive multi-acre Gold Coast properties in Great Neck, Roslyn, Oyster Bay, Sands Point, and Locust Valley.
            </p>
            <div class="housing-card-foot">
              <span class="checklist-badge">&#10003; Full Checklist Evaluation</span>
            </div>
          </div>
        </article>

        <!-- 3. South Shore Waterfront Homes -->
        <article class="housing-card">
          <div class="housing-img-box">
            <img
              src="/images/massapequa-actual-house.jpg"
              alt="South Shore Waterfront Homes in Massapequa, Bellmore, Freeport, and Oceanside"
              class="housing-img"
              loading="lazy"
            />
            <span class="card-loc-pill">Massapequa &bull; Bellmore &bull; Freeport</span>
          </div>
          <div class="housing-card-body">
            <h3 class="housing-type-title">South Shore Waterfront Homes</h3>
            <p class="housing-type-desc">
              Canal and bayfront residences in Massapequa, Bellmore, Freeport, and Oceanside requiring bulkhead awareness.
            </p>
            <div class="housing-card-foot">
              <span class="checklist-badge">&#10003; Full Checklist Evaluation</span>
            </div>
          </div>
        </article>

        <!-- 4. Co-Op & Condo Communities -->
        <article class="housing-card">
          <div class="housing-img-box">
            <img
              src="/images/mineola-actual-house.jpg"
              alt="Co-Op & Condo Communities in Great Neck, Mineola, and Floral Park"
              class="housing-img"
              loading="lazy"
            />
            <span class="card-loc-pill">Great Neck &bull; Mineola &bull; Floral Park</span>
          </div>
          <div class="housing-card-body">
            <h3 class="housing-type-title">Co-Op &amp; Condo Communities</h3>
            <p class="housing-type-desc">
              Established garden apartment co-operatives in Great Neck, Mineola, and Floral Park.
            </p>
            <div class="housing-card-foot">
              <span class="checklist-badge">&#10003; Full Checklist Evaluation</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.housing-types-section {
  background: #ffffff;
  padding: 80px 0;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
}

.section-head {
  margin-bottom: 48px;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--brick, #d94828);
  background: var(--brick-light, #fff1ee);
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

.housing-types-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}

@media (min-width: 640px) {
  .housing-types-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1040px) {
  .housing-types-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.housing-card {
  background: #ffffff;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(18, 24, 32, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.housing-card:hover {
  transform: translateY(-3px);
  border-color: var(--brick, #d94828);
  box-shadow: 0 8px 24px rgba(18, 24, 32, 0.08);
}

.housing-img-box {
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;
  background: #121820;
}

.housing-img-box::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(14, 24, 36, 0.75) 0%, rgba(14, 24, 36, 0) 40%);
  pointer-events: none;
}

.housing-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.3s ease;
}

.housing-card:hover .housing-img {
  transform: scale(1.04);
}

.card-loc-pill {
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 2;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.66rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(18, 24, 32, 0.85);
  backdrop-filter: blur(4px);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.housing-card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.housing-type-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.housing-type-desc {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-secondary, #475569);
  margin: 0 0 16px 0;
  flex-grow: 1;
}

.housing-card-foot {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px dashed #e2e8f0;
}

.checklist-badge {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--queens-blue, #0e5a8a);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
</style>
