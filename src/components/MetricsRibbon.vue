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
  background: #fafbfd;
  padding: 42px 0;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}

@media (min-width: 840px) {
  .pillars-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pillar-card {
  background: #ffffff;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 12px;
  padding: 30px 26px;
  box-shadow: 0 4px 16px rgba(11, 26, 46, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  position: relative;
}

.pillar-card:hover {
  transform: translateY(-3px);
  border-color: var(--nassau-gold, #c59b27);
  box-shadow: 0 10px 24px rgba(11, 26, 46, 0.08);
}

.pillar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.card-step {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--nassau-gold, #c59b27);
  background: transparent;
  padding: 0;
  line-height: 1;
}

.pillar-tag {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--nassau-gold-dark, #9d7718);
  background: #fdfaf2;
  border: 1px solid #e6ce8a;
  padding: 4px 10px;
  border-radius: 9999px;
}

.highlight-tag {
  color: #047857;
  background: #ecfdf5;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.pillar-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.22rem;
  font-weight: 800;
  color: var(--nassau-navy, #0b1a2e);
  margin: 0 0 10px 0;
  line-height: 1.3;
}

.pillar-text {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-secondary, #475569);
  margin: 0;
}
</style>
