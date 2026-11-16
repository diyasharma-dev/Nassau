<template>
  <section class="section nassau-guide-section" id="nassau-guide">
    <div class="wrap">
      <!-- Section Header -->
      <div class="section-heading text-center">
        <span class="eyebrow-tag blue-tag">New York Real Estate Strategy</span>
        <h2 class="section-title">
          The Nassau County Pre-Contract Inspection Playbook
        </h2>
        <p class="section-sub">
          In New York State, you have zero legal protection until formal contracts are signed and your 10% down payment is in escrow. Here is how our 24-hour turnaround protects your deposit and gives your attorney maximum leverage.
        </p>
      </div>

      <!-- Step-by-Step Flow Cards -->
      <div class="playbook-steps-grid">
        <!-- Step 1 -->
        <div class="step-card">
          <div class="step-header">
            <span class="step-number">01</span>
            <span class="step-timing">Hour 0 &ndash; 24</span>
          </div>
          <h3 class="step-title">The Verbal Offer Trap</h3>
          <p class="step-body">
            You reached an agreed price with the seller, but in Nassau County, an accepted offer is completely non-binding. Until contracts are drafted and executed, other buyers can outbid you. You cannot afford a 7-day wait for a franchise inspector.
          </p>
          <div class="step-action-note">
            <strong>Key Rule:</strong> Schedule your inspection immediately the moment your offer is verbally accepted.
          </div>
        </div>

        <!-- Step 2 -->
        <div class="step-card">
          <div class="step-header">
            <span class="step-number">02</span>
            <span class="step-timing">Hour 24 &ndash; 48</span>
          </div>
          <h3 class="step-title">Rapid On-Site Dispatch</h3>
          <p class="step-body">
            Daren Koniuk is on-site across Nassau County 7 days a week, offering morning and weekend appointments. Daren arrives with specialized diagnostic gear (FLIR thermal imaging, digital combustible gas sniffers, protimeter moisture meters).
          </p>
          <div class="step-action-note">
            <strong>Key Rule:</strong> Attend the inspection! Walk the home with Daren and learn how every major system operates.
          </div>
        </div>

        <!-- Step 3 -->
        <div class="step-card highlight-step">
          <div class="step-header">
            <span class="step-number">03</span>
            <span class="step-timing">Hour 48 &ndash; 72</span>
          </div>
          <h3 class="step-title">Next-Morning Photo-Documented Report</h3>
          <p class="step-body">
            No waiting 4 to 5 days for a report. By the following morning, you and your real estate attorney receive a comprehensive digital PDF with high-resolution photos, annotated defect arrows, and clear cost estimates for major repairs.
          </p>
          <div class="step-action-note">
            <strong>Key Rule:</strong> Every report includes an Official NPMA-33 Termite Form for your mortgage lender.
          </div>
        </div>

        <!-- Step 4 -->
        <div class="step-card">
          <div class="step-header">
            <span class="step-number">04</span>
            <span class="step-timing">Hour 72 &ndash; 96</span>
          </div>
          <h3 class="step-title">Attorney Contract Rider Negotiations</h3>
          <p class="step-body">
            Your real estate attorney utilizes Daren's detailed inspection findings to draft the contract rider. Rather than walking away, you negotiate substantial purchase price reductions, direct repair credits, or seller closing fee concessions.
          </p>
          <div class="step-action-note">
            <strong>Average Result:</strong> Our Nassau clients frequently secure between $5,000 and $20,000+ in seller concessions.
          </div>
        </div>
      </div>

      <!-- Real Legal & Engineering Difference Table -->
      <div class="legal-comparison-box">
        <div class="lcb-header text-center">
          <h3 class="lcb-title">Why Physical Home Inspection + Title Search Must Work Together</h3>
          <p class="lcb-sub">A title search checks paper records; Daren physically checks reality.</p>
        </div>

        <div class="lcb-grid">
          <div class="lcb-col">
            <h4 class="col-head paper-head">Municipal Title / CO Search (Town Hall)</h4>
            <ul class="col-list">
              <li>Checks if original building permits exist on paper.</li>
              <li>Checks for outstanding municipal property tax liens.</li>
              <li>Does NOT know if the boiler heat exchanger is cracked.</li>
              <li>Does NOT know if termites are eating the basement sill plates.</li>
              <li>Does NOT know if in-slab radiant heating coils are leaking.</li>
            </ul>
          </div>

          <div class="lcb-col highlight-col">
            <h4 class="col-head physical-head">HomeStar Physical Nassau Inspection (On-Site)</h4>
            <ul class="col-list">
              <li>Physically tests every mechanical, plumbing, and heating system.</li>
              <li>Scans hidden wall cavities and ceilings for moisture with thermal cameras.</li>
              <li>Verifies physical reality against unpermitted rooms &amp; kitchen additions.</li>
              <li>Provides official bank-required Wood Destroying Insect (NPMA-33) certification.</li>
              <li>Gives you hard negotiating proof before you hand over your 10% contract deposit.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.nassau-guide-section {
  background-color: var(--surface-page, #f4f6f8);
  padding: 84px 0 92px;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
}

.section-heading {
  margin-bottom: 48px;
}

.playbook-steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 48px;
}

@media (min-width: 768px) {
  .playbook-steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1080px) {
  .playbook-steps-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.step-card {
  background: var(--surface-card, #ffffff);
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 12px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
}

.step-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  border-color: var(--charcoal-900, #1a222d);
}

.highlight-step {
  border-color: var(--queens-blue, #0e5a8a);
  background: #fbfdff;
}

.step-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.step-number {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--queens-blue, #0e5a8a);
  line-height: 1;
}

.step-timing {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.68rem;
  font-weight: 700;
  color: #64748b;
  background: var(--surface-subtle, #eceef2);
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
}

.step-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.12rem;
  font-weight: 700;
  color: var(--charcoal-950, #121820);
  margin-bottom: 10px;
  line-height: 1.25;
}

.step-body {
  font-size: 0.82rem;
  line-height: 1.55;
  color: #475569;
  margin-bottom: 16px;
  flex-grow: 1;
}

.step-action-note {
  background: var(--surface-subtle, #eceef2);
  border-left: 3px solid var(--queens-blue, #0e5a8a);
  border-radius: 0 4px 4px 0;
  padding: 8px 10px;
  font-size: 0.76rem;
  line-height: 1.45;
  color: #334155;
}

.step-action-note strong {
  color: var(--charcoal-950, #121820);
}

/* Legal Comparison Box */
.legal-comparison-box {
  background: #ffffff;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 14px;
  padding: 32px 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

.lcb-header {
  margin-bottom: 28px;
}

.lcb-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  margin-bottom: 4px;
}

.lcb-sub {
  font-size: 0.88rem;
  color: #64748b;
  margin: 0;
}

.lcb-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .lcb-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.lcb-col {
  border: 1px solid var(--border-soft, #d8dee6);
  border-radius: 10px;
  padding: 22px 20px;
  background: var(--surface-page, #f4f6f8);
}

.highlight-col {
  background: #fdfefe;
  border-color: var(--queens-blue, #0e5a8a);
  box-shadow: 0 4px 14px rgba(14, 90, 138, 0.08);
}

.col-head {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1.5px solid #e2e8f0;
}

.paper-head {
  color: #475569;
}

.physical-head {
  color: var(--queens-blue, #0e5a8a);
}

.col-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.col-list li {
  position: relative;
  padding-left: 20px;
  font-size: 0.84rem;
  line-height: 1.5;
  color: #334155;
}

.col-list li::before {
  content: "•";
  position: absolute;
  left: 6px;
  color: #94a3b8;
  font-size: 1.1rem;
}

.highlight-col .col-list li::before {
  content: "✓";
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
  left: 3px;
}
</style>
