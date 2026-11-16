<template>
  <section class="section why-section" id="why-daren">
    <div class="wrap">
      <div class="why-grid">
        <!-- Left Content: Philosophy & Comprehensive Comparison Table -->
        <div class="why-content">
          <span class="eyebrow-tag brick-tag">Direct Inspector Accountability</span>
          <h2 class="section-title">Why Nassau Buyers Trust Daren Koniuk Over National Franchises</h2>
          <p class="lead-text">
            Large national home inspection companies often operate like call centers, farming your inspection out to an inexperienced junior trainee or weekend contractor.
          </p>
          <p class="why-body-p">
            When you hire <strong>HomeStar Inspections</strong> &amp; <strong>Queens Home Inspector NY</strong> for your Nassau property, <strong>Daren Koniuk personally conducts your inspection</strong>. With over two decades of residential building experience, NYS License #16000009862, and InterNACHI Certified Master credentials, Daren gives you total clarity without confusing jargon.
          </p>

          <div class="comparison-table-wrapper">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Inspection Feature</th>
                  <th class="col-homestar">HomeStar / Daren Koniuk</th>
                  <th class="col-others">Franchise &amp; Big Box Firms</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, idx) in comparisonRows" :key="idx">
                  <td><strong>{{ row.feature }}</strong></td>
                  <td class="col-homestar text-success">{{ row.homestar }}</td>
                  <td class="col-others text-muted">{{ row.others }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Right Column: Sticky Inspector Profile Card -->
        <aside class="why-sidebar-card">
          <div class="inspector-profile-card">
            <div class="profile-header">
              <div class="profile-photo-wrapper">
                <img
                  src="/images/inspector-daren.jpg"
                  alt="Daren Koniuk - NYS Licensed Home Inspector"
                  class="profile-real-photo"
                  loading="lazy"
                />
                <span class="online-indicator" title="Available 7 Days A Week Across Nassau"></span>
              </div>
              <div class="profile-info">
                <h3>Daren Koniuk</h3>
                <p class="profile-title">Lead Inspector &amp; Owner</p>
                <p class="profile-lic">NYS License #16000009862</p>
              </div>
            </div>

            <div class="profile-quote">
              <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote>
                "A home is the largest purchase most people ever make. You deserve someone who takes their time, walks you through every system, and gives you honest, unvarnished facts so you can protect your investment."
              </blockquote>
            </div>

            <!-- Professional Equipment Highlights -->
            <div class="equipment-tools-bar">
              <span class="tool-tag">FLIR Thermal Camera</span>
              <span class="tool-tag">Protimeter Moisture Meter</span>
              <span class="tool-tag">Combustible Gas Detector</span>
              <span class="tool-tag">Circuit Analyzer</span>
            </div>

            <!-- Certifications List -->
            <div class="profile-certs-list">
              <div class="cert-item" v-for="(cert, cIdx) in certs" :key="cIdx">
                <span class="cert-check">&#10003;</span>
                <span>{{ cert }}</span>
              </div>
            </div>

            <!-- Direct Contact CTA -->
            <div class="profile-cta">
              <a href="tel:7182087092" class="btn btn-primary btn-block">
                Speak Directly with Daren: (718) 208-7092
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { comparisonRows } from '../data/challengesData.js';

const certs = [
  "NYS Dept of State Licensed Home Inspector",
  "InterNACHI Certified Professional Inspector (CPI)",
  "American Society of Home Inspectors (ASHI)",
  "NPMA Certified Wood Destroying Insect Inspector",
  "ITA & BPI Building Science Trained"
];
</script>

<style scoped>
.why-section {
  background-color: var(--surface-page, #f4f6f8);
  padding: 80px 0;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
  overflow: visible !important;
}

.why-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
  align-items: start;
  overflow: visible !important;
}

@media (min-width: 1040px) {
  .why-grid {
    grid-template-columns: 1.25fr 0.75fr;
    gap: 44px;
    align-items: start;
  }
}

.eyebrow-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.brick-tag {
  color: var(--brick, #d94828);
  background: var(--brick-light, #fff1ee);
}

.section-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1.2;
  margin-bottom: 16px;
}

.lead-text {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--charcoal-900, #1a222d);
  line-height: 1.6;
  margin-bottom: 12px;
}

.why-body-p {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.95rem;
  color: var(--text-secondary, #475569);
  line-height: 1.65;
  margin-bottom: 24px;
}

.comparison-table-wrapper {
  overflow-x: auto;
  max-width: 100%;
  background: #ffffff;
  border-radius: 12px;
  border: 1.5px solid var(--border-soft, #d8dee6);
  box-shadow: 0 4px 16px rgba(18, 24, 32, 0.04);
}

.comparison-table {
  width: 100%;
  min-width: 520px;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.88rem;
}

.comparison-table th,
.comparison-table td {
  padding: 14px 18px;
  border-bottom: 1px solid var(--border-soft, #d8dee6);
}

.comparison-table thead th {
  background-color: var(--surface-subtle, #eceef2);
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--charcoal-950, #121820);
  font-weight: 700;
}

.col-homestar {
  background-color: rgba(217, 72, 40, 0.04);
  font-weight: 700;
  color: var(--charcoal-950, #121820);
}

.text-success {
  color: #059669;
}

.text-muted {
  color: #94a3b8;
}

.comparison-table tbody tr:last-child td {
  border-bottom: none;
}

/* ==========================================================================
   Sticky Sidebar Card - Pins as you scroll down the comparison table
   ========================================================================== */
.why-sidebar-card {
  position: relative;
  width: 100%;
}

@media (min-width: 1040px) {
  .why-sidebar-card {
    position: -webkit-sticky;
    position: sticky;
    top: 96px;
    align-self: start;
    z-index: 20;
  }
}

.inspector-profile-card {
  background: #ffffff;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 8px 28px rgba(18, 24, 32, 0.08);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.profile-photo-wrapper {
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2.5px solid var(--brick, #d94828);
  box-shadow: 0 4px 12px rgba(217, 72, 40, 0.2);
  flex-shrink: 0;
}

.profile-real-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.online-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #10b981;
  border: 2.5px solid #ffffff;
}

.profile-info h3 {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  margin-bottom: 2px;
  line-height: 1.2;
}

.profile-title {
  font-size: 0.86rem;
  font-weight: 700;
  color: var(--queens-blue, #0e5a8a);
}

.profile-lic {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  color: #64748b;
  font-weight: 600;
}

.profile-quote {
  background: var(--surface-subtle, #eceef2);
  border-radius: 8px;
  padding: 16px 18px;
  position: relative;
  margin-bottom: 18px;
  border-left: 3px solid var(--brick, #d94828);
}

.quote-icon {
  width: 20px;
  height: 20px;
  color: var(--brick, #d94828);
  margin-bottom: 6px;
  opacity: 0.85;
}

.profile-quote blockquote {
  font-size: 0.86rem;
  color: var(--charcoal-900, #1a222d);
  line-height: 1.55;
  font-style: italic;
  margin: 0;
}

.equipment-tools-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
}

.tool-tag {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.7rem;
  font-weight: 600;
  background: var(--queens-blue-light, #ebf4fa);
  color: var(--queens-blue, #0e5a8a);
  border: 1px solid rgba(14, 90, 138, 0.2);
  border-radius: 4px;
  padding: 4px 8px;
}

.profile-certs-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 22px;
}

.cert-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--charcoal-900, #1a222d);
  font-weight: 600;
}

.cert-check {
  color: #059669;
  font-weight: 800;
  font-size: 0.95rem;
}

.profile-cta {
  width: 100%;
}
</style>
