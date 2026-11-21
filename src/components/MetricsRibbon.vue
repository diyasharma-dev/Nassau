<template>
  <section class="section three-pillars-section">
    <div class="wrap">
      <div class="pillars-grid">
        <!-- Pillar 01 -->
        <div class="pillar-card">
          <div class="pillar-top">
            <span class="card-step">01</span>
            <span class="pillar-tag">Guaranteed Authority</span>
          </div>
          <h3 class="pillar-title">Licensed Owner On-Site</h3>
          <p class="pillar-text">
            Every Nassau County inspection is personally conducted by NYS licensed inspector Daren Koniuk (never an apprentice, trainee, or sub-contractor).
          </p>
        </div>

        <!-- Pillar 02 -->
        <div class="pillar-card">
          <div class="pillar-top">
            <span class="card-step">02</span>
            <span class="pillar-tag">Rapid Turnaround</span>
          </div>
          <h3 class="pillar-title">Next-Day Digital Report</h3>
          <p class="pillar-text">
            Receive your comprehensive digital PDF report with high-resolution color photographs delivered to your inbox the next day.
          </p>
        </div>

        <!-- Pillar 03 -->
        <div class="pillar-card">
          <div class="pillar-top">
            <span class="card-step">03</span>
            <span class="pillar-tag highlight-tag">Free $150 Value</span>
          </div>
          <h3 class="pillar-title">Free Bank Termite Report</h3>
          <p class="pillar-text">
            Includes an official Wood Destroying Organism (WDO) inspection report (NPMA-33) required by mortgage lenders at no additional charge.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.three-pillars-section {
  background: #faf7f2;
  padding: 56px 0;
  border-bottom: 1px solid #e5dfd5;
  position: relative;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 28px;
  position: relative;
  z-index: 2;
}

@media (min-width: 840px) {
  .pillars-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pillar-card {
  background: #ffffff;
  border: 1px solid #e5dfd5;
  border-radius: 10px;
  padding: 34px 28px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
  position: relative;
}

.pillar-card:hover {
  transform: translateY(-3px);
  border-color: #8c6d46;
  box-shadow: 0 12px 30px rgba(140, 109, 70, 0.12);
}

.pillar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.card-step {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 2.2rem;
  font-weight: 700;
  color: #8c6d46;
  padding: 0;
  line-height: 1;
  letter-spacing: -0.03em;
}

.pillar-tag {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8c6d46;
  background: #f6f2ec;
  border: 1px solid #dcd4c7;
  padding: 4px 10px;
  border-radius: 4px;
}

.highlight-tag {
  color: #059669;
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
}

.pillar-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.35rem;
  font-weight: 700;
  color: #0c1424;
  margin: 0 0 12px 0;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.pillar-text {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.94rem;
  line-height: 1.65;
  color: #475569;
  margin: 0;
}
</style>
