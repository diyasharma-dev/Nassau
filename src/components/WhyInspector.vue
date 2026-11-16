<template>
  <section class="section why-section" id="why-daren">
    <div class="container">
      <div class="why-grid">
        <div class="why-content">
          <span class="section-tag">Direct Inspector Accountability</span>
          <h2 class="section-title">Why Nassau Buyers Trust Daren Koniuk Over National Franchises</h2>
          <p class="lead-text">
            Large national home inspection companies often operate like call centers, farming your inspection out to an inexperienced junior trainee or weekend contractor.
          </p>
          <p>
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

        <div class="why-sidebar-card">
          <div class="inspector-profile-card">
            <div class="profile-header">
              <div class="profile-photo-wrapper">
                <img src="/images/inspector-daren.jpg" alt="Daren Koniuk - NYS Licensed Home Inspector" class="profile-real-photo" />
                <span class="online-indicator" title="Available 7 Days A Week"></span>
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

            <div class="profile-certs-list">
              <div class="cert-item" v-for="(cert, cIdx) in certs" :key="cIdx">
                <span class="cert-check">&#10003;</span>
                <span>{{ cert }}</span>
              </div>
            </div>

            <div class="profile-cta">
              <a href="tel:7182087092" class="btn btn-primary btn-block">
                Speak Directly with Daren: (718) 208-7092
              </a>
            </div>
          </div>
        </div>
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
