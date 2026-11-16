<template>
  <section class="section report-preview-section">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-tag">Clarity Over Jargon</span>
        <h2 class="section-title">What Your Nassau Inspection Report Looks Like</h2>
        <p class="section-subtitle">
          Delivered in a clean, modern digital PDF format with high-resolution color photographs, clear defect classifications, and plain-English explanations your attorney and realtor can immediately use to negotiate.
        </p>
      </div>

      <div class="report-showcase-grid">
        <div class="report-mockup-card">
          <div class="mockup-header">
            <span class="mock-dot red"></span>
            <span class="mock-dot yellow"></span>
            <span class="mock-dot green"></span>
            <span class="mock-title">HomeStar Digital Report - Nassau County Walkthrough</span>
          </div>
          <div class="mockup-body">
            <div class="report-meta-header">
              <div>
                <strong>Property:</strong> 142 Cathedral Ave, Garden City, NY 11530<br>
                <strong>Inspector:</strong> Daren Koniuk (NYS Lic #16000009862)
              </div>
              <div class="report-badge-status">Complete &bull; Next-Day Delivered</div>
            </div>

            <div class="sample-findings-list">
              <!-- Finding 1 -->
              <div class="finding-item finding-safety">
                <div class="finding-content-split">
                  <div class="finding-text-side">
                    <div class="finding-tag tag-hazard">Safety Hazard</div>
                    <h4>Electrical: Double Tapped Neutral in 200A Main Panel</h4>
                    <p>Two neutral branch circuit conductors terminated under a single terminal screw on the neutral bus bar. Overheating hazard. Recommend licensed electrician evaluate and separate.</p>
                  </div>
                  <div class="finding-photo-side">
                    <img src="/images/defect-electrical.jpg" alt="Electrical Panel Double Tap Defect" class="report-defect-photo" />
                    <span class="photo-caption">Fig 1.1: Main Breaker Panel</span>
                  </div>
                </div>
              </div>

              <!-- Finding 2 -->
              <div class="finding-item finding-major">
                <div class="finding-content-split">
                  <div class="finding-text-side">
                    <div class="finding-tag tag-major">Major Defect</div>
                    <h4>Plumbing: Cast Iron Main Stack Deterioration &amp; Seepage</h4>
                    <p>Heavy oxidation and active moisture seepage noted along the 4-inch cast iron drain stack in the unfinished basement. Recommend replacement with modern PVC piping.</p>
                  </div>
                  <div class="finding-photo-side">
                    <img src="/images/defect-plumbing.jpg" alt="Plumbing Cast Iron Pipe Seepage Defect" class="report-defect-photo" />
                    <span class="photo-caption">Fig 2.3: Basement Waste Stack</span>
                  </div>
                </div>
              </div>

              <!-- Finding 3 -->
              <div class="finding-item finding-monitor">
                <div class="finding-content-split">
                  <div class="finding-text-side">
                    <div class="finding-tag tag-monitor">Maintenance Item</div>
                    <h4>Roof: Missing Kickout Flashing at Dormer Junction</h4>
                    <p>Sidewall flashing lacks a diverted kickout at the gutter line, allowing stormwater to run behind vinyl trim. Recommend roofing contractor install kickout diverter.</p>
                  </div>
                  <div class="finding-photo-side">
                    <img src="/images/defect-roof.jpg" alt="Roof Shingles and Flashing Defect" class="report-defect-photo" />
                    <span class="photo-caption">Fig 3.2: Dormer Gutter Eave</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="report-perks-list">
          <div class="perk-box">
            <div class="perk-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
            </div>
            <div>
              <h4>Executive Summary for Fast Negotiations</h4>
              <p>Don't wade through 70 pages of boilerplate. We provide a concise executive summary highlighting major defects and safety items so you can immediately submit repair requests to the seller.</p>
            </div>
          </div>

          <div class="perk-box">
            <div class="perk-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <div>
              <h4>High-Resolution Photographic Evidence</h4>
              <p>Every defect is photographed with directional arrows and annotations clearly showing the location, severity, and cause of the issue.</p>
            </div>
          </div>

          <div class="perk-box">
            <div class="perk-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <div>
              <h4>Bank-Approved NPMA-33 Termite Certification</h4>
              <p>Mortgage underwriters require this specific document before issuing your commitment letter. We provide it on official forms ready for your bank.</p>
            </div>
          </div>

          <div class="report-cta-box">
            <a href="tel:7182087092" class="btn btn-primary btn-block">
              Request a Sample Report: (718) 208-7092
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component for report preview with photo findings
</script>
