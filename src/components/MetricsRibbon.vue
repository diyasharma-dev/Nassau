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
  padding: 28px 24px;
  box-shadow: 0 4px 16px rgba(18, 24, 32, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.pillar-card:hover {
  transform: translateY(-2px);
  border-color: var(--queens-blue, #0e5a8a);
}

.pillar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.card-step {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--queens-blue, #0e5a8a);
  background: #e0f2fe;
  padding: 2px 10px;
  border-radius: 6px;
}

.pillar-tag {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #64748b;
  background: #f1f5f9;
  padding: 3px 8px;
  border-radius: 4px;
}

.highlight-tag {
  color: #047857;
  background: #ecfdf5;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.pillar-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
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
