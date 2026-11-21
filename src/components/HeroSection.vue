<template>
  <section class="hero-section" id="hero">
    <!-- Ambient Glow Layers -->
    <div class="hero-ambient-glow"></div>

    <div class="wrap hero-wrap">
      <div class="hero-grid">
        <!-- Left Column: Authority, Headline, Lede & Actions -->
        <div class="hero-left-col">
          <!-- Official Breadcrumb -->
          <nav aria-label="Breadcrumb" class="hero-breadcrumb">
            <span>Home</span>
            <span class="crumb-sep">/</span>
            <span>Service Areas</span>
            <span class="crumb-sep">/</span>
            <span class="crumb-active">Nassau County</span>
          </nav>

          <!-- Official Licensing Tag -->
          <div class="hero-eyebrow-pill">
            <span class="gold-star">&#9733;</span>
            <span class="eyebrow-text">NYS Licensed &bull; Nassau County</span>
          </div>

          <!-- Main Official H1 Headline -->
          <h1 class="hero-headline">
            Nassau County Home Inspection Services
          </h1>

          <!-- Official Subtitle -->
          <p class="hero-subtitle">
            Precision Pre-Purchase Inspections Across Nassau County's North &amp; South Shores
          </p>

          <!-- Official Hyperlocal Lede Paragraphs -->
          <div class="hero-description-block">
            <p class="hero-description">
              From North Shore Gold Coast estates in Great Neck and Oyster Bay to suburban split-levels in Garden City, Syosset, and Merrick, Nassau County home buyers require thorough, meticulous inspection standards.
            </p>
            <p class="hero-description">
              HomeStar brings over 20 years of dedicated Long Island inspection experience. We evaluate older oil-to-gas conversions, central air condensers, subterranean termite risks, roof shingle life, and crawlspace waterproofing so you know exactly what you are purchasing.
            </p>
          </div>

          <!-- CTAs Row Matching Official Page -->
          <div class="hero-cta-group">
            <a href="tel:7182087092" class="btn-call-hero">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" class="phone-ico">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.28-.28.68-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.34.03.73-.24 1.01L6.6 10.8z"/>
              </svg>
              <span>Call 718-208-7092</span>
            </a>

            <button class="btn-schedule-hero" @click="$emit('open-modal', 'Nassau County Home Inspection')">
              <span>Request Quote Online &rarr;</span>
            </button>
          </div>

          <!-- Trust Subtext -->
          <div class="hero-trust-notes">
            <span class="note-pill">&#10003; 80 Nassau County Areas Covered</span>
            <span class="sep">&bull;</span>
            <span class="note-pill">&#10003; Licensed Owner On-Site</span>
            <span class="sep">&bull;</span>
            <span class="note-pill">&#10003; Next-Day Digital Photo Report</span>
          </div>
        </div>

        <!-- Right Column: Inspector Credibility & Dispatch Assurance Card -->
        <div class="hero-right-col">
          <div class="inspector-card">
            <!-- Featured Nassau Inspection Real Property Photo -->
            <div class="card-featured-photo-box">
              <img
                src="/images/nassau-county-official-homestar.webp"
                alt="Official Nassau County Residential Property Inspection by HomeStar"
                class="card-featured-photo"
                loading="eager"
              />
              <div class="card-photo-scrim">
                <span class="photo-live-tag">
                  <span class="live-dot-pulse"></span>
                  Active In Nassau Today
                </span>
                <span class="photo-termite-tag">
                  Free NPMA-33 Termite Form Included
                </span>
              </div>
            </div>

            <!-- Card Header: Profile Info -->
            <div class="card-inspector-header">
              <div class="inspector-photo-wrapper">
                <img
                  src="/images/homestar-logo-big.webp"
                  alt="HomeStar Inspection Services — Nassau County Division"
                  class="inspector-avatar-img logo-avatar"
                  width="72"
                  height="72"
                />
                <span class="status-indicator" title="Available for Nassau County Inspections"></span>
              </div>

              <div class="inspector-meta">
                <div class="inspector-name-row">
                  <h3 class="inspector-name">Daren Koniuk</h3>
                  <span class="verified-badge" title="NYS State Licensed">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    NYS Lic.
                  </span>
                </div>
                <p class="inspector-title">Owner &amp; Lead Home Inspector</p>
                <p class="inspector-license">License #16000009862 &bull; 20+ Yrs Exp.</p>
              </div>
            </div>

            <!-- Rating & Verified Seals Row -->
            <div class="card-rating-bar">
              <div class="rating-stars-box">
                <div class="stars-gold">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <span class="rating-text"><strong>5.0 Google Rating</strong> (180+ Reviews)</span>
              </div>
              <div class="seals-preview">
                <img
                  src="/images/internachi-seal.webp"
                  alt="InterNACHI CPI"
                  class="mini-seal"
                  width="30"
                  height="30"
                  title="InterNACHI Certified Professional Inspector"
                />
                <img
                  src="/images/satisfaction-seal.webp"
                  alt="100% Satisfaction"
                  class="mini-seal"
                  width="30"
                  height="30"
                  title="100% Satisfaction Guarantee"
                />
              </div>
            </div>

            <!-- What You Get Deliverables Checklist -->
            <div class="card-deliverables">
              <span class="deliverables-title">Included With Every Nassau Inspection:</span>
              <ul class="deliverables-list">
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" class="deliv-ico">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span><strong>1,700+ Item Evaluation:</strong> Full structural, roof, basement, electrical &amp; plumbing.</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" class="deliv-ico">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span><strong>Infrared Thermal Scan:</strong> Hidden moisture, insulation gaps &amp; slab leaks.</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" class="deliv-ico">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span><strong>Official NPMA-33 Termite Form:</strong> Bank-certified ($150 value included free).</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" class="deliv-ico">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span><strong>On-Site Plain-English Walkthrough:</strong> Clear answers directly from Daren.</span>
                </li>
              </ul>
            </div>

            <!-- Card Bottom Action -->
            <div class="card-footer-action">
              <button class="btn-card-schedule" @click="$emit('open-modal', 'Schedule Nassau Inspection')">
                <span>Book Nassau Inspection Online</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="btn-arrow">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
              <div class="card-reassurance">
                <span>&#128274; No advance payment &bull; Pay only after inspection is complete</span>
              </div>
            </div>

            <!-- Real-time Municipal Coverage Tag -->
            <div class="card-towns-ticker">
              <span class="ticker-dot"></span>
              <span class="ticker-text">Inspecting North Shore, Central Nassau &amp; South Shore Daily</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-modal']);
</script>

<style scoped>
.hero-section {
  position: relative;
  background-color: #0c1424;
  background-image: 
    linear-gradient(135deg, rgba(12, 20, 36, 0.94) 0%, rgba(18, 28, 48, 0.90) 50%, rgba(12, 20, 36, 0.96) 100%),
    url('/images/nassau-county-official-homestar.webp');
  background-size: cover;
  background-position: center 30%;
  color: #ffffff;
  padding: 80px 0 96px;
  overflow: hidden;
}

.hero-ambient-glow {
  display: none;
}

.hero-wrap {
  position: relative;
  z-index: 2;
  max-width: 1240px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 52px;
  }
}

/* --- Left Column Styling --- */
.hero-left-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-breadcrumb {
  display: flex;
  align-items: center;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 16px;
}

.crumb-sep {
  margin: 0 8px;
  color: #8c6d46;
  opacity: 0.6;
}

.crumb-active {
  color: #c5a880;
}

.hero-eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(229, 223, 213, 0.25);
  border-radius: 4px;
  padding: 6px 14px;
  margin-bottom: 18px;
}

.gold-star {
  color: #c5a880;
  font-size: 0.85rem;
}

.eyebrow-text {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 600;
  color: #e2e8f0;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-headline {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(2.3rem, 4vw, 3.4rem);
  font-weight: 700;
  line-height: 1.15;
  color: #ffffff;
  letter-spacing: -0.025em;
  margin-bottom: 14px;
}

.hero-subtitle {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-weight: 600;
  font-size: 1.22rem;
  line-height: 1.45;
  color: #c5a880;
  margin: 0 0 20px 0;
  letter-spacing: -0.01em;
}

.hero-description-block {
  margin-bottom: 28px;
  max-width: 620px;
}

.hero-description {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 1rem;
  line-height: 1.7;
  color: #cbd5e1;
  margin-bottom: 14px;
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
}

.btn-call-hero {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 6px;
  padding: 13px 24px;
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.94rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-call-hero:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: #ffffff;
  color: #ffffff;
  transform: translateY(-1px);
}

.phone-ico {
  color: #c5a880;
}

.btn-schedule-hero {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: #8c6d46;
  color: #ffffff;
  border: 1px solid #8c6d46;
  border-radius: 6px;
  padding: 13px 26px;
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.94rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(140, 109, 70, 0.25);
  transition: all 0.2s ease;
  letter-spacing: 0.01em;
}

.btn-schedule-hero:hover {
  background: #a38157;
  border-color: #a38157;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(140, 109, 70, 0.35);
}

.hero-trust-notes {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  font-size: 0.82rem;
  color: #94a3b8;
}

.note-pill {
  color: #cbd5e1;
}

.sep {
  color: #8c6d46;
  opacity: 0.5;
}

/* --- Right Column: Architectural Inspector Card (Crisp White Gallery Card) --- */
.hero-right-col {
  width: 100%;
}

.inspector-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  color: #0f172a;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35), 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5dfd5;
  overflow: hidden;
}

.card-featured-photo-box {
  position: relative;
  width: calc(100% + 48px);
  margin: -24px -24px 20px -24px;
  border-radius: 11px 11px 0 0;
  overflow: hidden;
  height: 250px;
  border-bottom: 1px solid #e5dfd5;
}

.card-featured-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 38%;
  display: block;
  transition: transform 0.6s ease;
}

.inspector-card:hover .card-featured-photo {
  transform: scale(1.02);
}

.card-photo-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, rgba(12, 20, 36, 0.75) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 12px 16px;
  gap: 8px;
}

.photo-live-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(12, 20, 36, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  padding: 4px 10px;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.68rem;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.live-dot-pulse {
  width: 7px;
  height: 7px;
  background: #10b981;
  border-radius: 50%;
}

.photo-termite-tag {
  background: #faf7f2;
  color: #6e5432;
  border: 1px solid #dcd4c7;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
  white-space: nowrap;
}

.card-inspector-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0ebe2;
}

.inspector-photo-wrapper {
  position: relative;
  flex-shrink: 0;
}

.inspector-avatar-img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #dcd4c7;
}

.inspector-avatar-img.logo-avatar {
  background: #fbf9f6;
  padding: 4px;
  object-fit: contain;
}

.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #10b981;
  border: 2px solid #ffffff;
  border-radius: 50%;
}

.inspector-meta {
  display: flex;
  flex-direction: column;
}

.inspector-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.inspector-name {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.35rem;
  font-weight: 700;
  color: #0c1424;
  line-height: 1.2;
}

.verified-badge {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  background: #f6f2ec;
  color: #8c6d46;
  border: 1px solid #dcd4c7;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 4px;
  text-transform: uppercase;
}

.inspector-title {
  font-size: 0.86rem;
  font-weight: 600;
  color: #8c6d46;
  margin-top: 3px;
}

.inspector-license {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  color: #64748b;
  margin-top: 2px;
}

/* Rating Bar */
.card-rating-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #f0ebe2;
}

.rating-stars-box {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stars-gold {
  color: #8c6d46;
  font-size: 0.95rem;
  letter-spacing: 2px;
}

.rating-text {
  font-size: 0.82rem;
  color: #334155;
}

.seals-preview {
  display: flex;
  align-items: center;
  gap: 6px;
}

.mini-seal {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

/* Deliverables Checklist */
.card-deliverables {
  padding: 16px 0 14px;
}

.deliverables-title {
  display: block;
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8c6d46;
  margin-bottom: 12px;
}

.deliverables-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.deliverables-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.84rem;
  line-height: 1.45;
  color: #334155;
}

.deliv-ico {
  width: 16px;
  height: 16px;
  color: #8c6d46;
  flex-shrink: 0;
  margin-top: 2px;
}

.deliv-ico strong {
  color: #0f172a;
}

/* Card Footer Action */
.card-footer-action {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.btn-card-schedule {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #0c1424;
  color: #ffffff;
  border: 1px solid #0c1424;
  border-radius: 6px;
  padding: 14px 20px;
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.94rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(12, 20, 36, 0.12);
  transition: all 0.2s ease;
  letter-spacing: 0.01em;
}

.btn-card-schedule:hover {
  background: #8c6d46;
  border-color: #8c6d46;
  color: #ffffff;
  transform: translateY(-1px);
}

.btn-arrow {
  width: 16px;
  height: 16px;
}

.card-reassurance {
  font-size: 0.76rem;
  color: #64748b;
  text-align: center;
}

.card-towns-ticker {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px dashed #dcd4c7;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.74rem;
  color: #64748b;
}

.ticker-dot {
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 48px 0 60px;
  }

  .hero-headline {
    font-size: 2.1rem;
  }

  .hero-cta-group {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }

  .btn-call-hero,
  .btn-schedule-hero {
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  .hero-trust-notes {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .sep {
    display: none;
  }

  .inspector-card {
    padding: 20px;
  }

  .card-featured-photo-box {
    width: calc(100% + 40px);
    margin: -20px -20px 18px -20px;
    height: 220px;
  }

  .card-photo-scrim {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
}
</style>
