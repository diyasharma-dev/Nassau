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
  background: #faf7f2;
  padding: 88px 0;
  border-bottom: 1px solid #e5dfd5;
  position: relative;
}

.section-head {
  margin-bottom: 52px;
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

.housing-types-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 28px;
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
  border: 1px solid #e5dfd5;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
}

.housing-card:hover {
  transform: translateY(-4px);
  border-color: #8c6d46;
  box-shadow: 0 14px 32px rgba(140, 109, 70, 0.12);
}

.housing-img-box {
  position: relative;
  height: 210px;
  width: 100%;
  overflow: hidden;
  background: #f1ece4;
  border-bottom: 1px solid #e5dfd5;
}

.housing-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.5s ease;
}

.housing-card:hover .housing-img {
  transform: scale(1.04);
}

.card-loc-pill {
  position: absolute;
  bottom: 12px;
  left: 12px;
  z-index: 2;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.68rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
  background: rgba(12, 20, 36, 0.88);
  backdrop-filter: blur(4px);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  letter-spacing: 0.04em;
}

.housing-card-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.housing-type-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.22rem;
  font-weight: 700;
  color: #0c1424;
  margin: 0 0 10px 0;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.housing-type-desc {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.9rem;
  line-height: 1.65;
  color: #475569;
  margin: 0 0 18px 0;
  flex-grow: 1;
}

.housing-card-foot {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px dashed #e5dfd5;
}

.checklist-badge {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: #8c6d46;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
</style>
