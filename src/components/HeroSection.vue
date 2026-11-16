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
  background-color: #0b1523;
  background-image: 
    radial-gradient(circle at 80% 20%, rgba(201, 168, 106, 0.12) 0%, transparent 45%),
    radial-gradient(circle at 10% 80%, rgba(14, 90, 138, 0.18) 0%, transparent 50%),
    linear-gradient(135deg, rgba(11, 21, 35, 0.94) 0%, rgba(15, 29, 48, 0.88) 50%, rgba(11, 21, 35, 0.92) 100%),
    url('/images/nassau-county-official-homestar.webp');
  background-size: cover;
  background-position: center 30%;
  color: #ffffff;
  padding: 68px 0 84px;
  overflow: hidden;
}

.hero-ambient-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  height: 280px;
  background: radial-gradient(ellipse at top, rgba(201, 168, 106, 0.15), transparent 70%);
  pointer-events: none;
}

.hero-wrap {
  position: relative;
  z-index: 2;
  max-width: 1240px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 48px;
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
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 14px;
}

.crumb-sep {
  margin: 0 8px;
  opacity: 0.6;
}

.crumb-active {
  color: var(--hazard-gold, #c9a86a);
}

.hero-eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(201, 168, 106, 0.14);
  border: 1px solid rgba(201, 168, 106, 0.4);
  border-radius: 9999px;
  padding: 6px 14px;
  margin-bottom: 16px;
}

.gold-star {
  color: #d4af37;
  font-size: 0.85rem;
}

.eyebrow-text {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: #fbf7ee;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero-headline {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(2.2rem, 3.8vw, 3.2rem);
  font-weight: 800;
  line-height: 1.15;
  color: #ffffff;
  letter-spacing: -0.025em;
  margin-bottom: 12px;
}

.hero-subtitle {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-weight: 700;
  font-size: 1.18rem;
  line-height: 1.4;
  color: var(--hazard-gold, #c9a86a);
  margin: 0 0 18px 0;
}

.hero-description-block {
  margin-bottom: 24px;
  max-width: 620px;
}

.hero-description {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.98rem;
  line-height: 1.65;
  color: #cbd5e1;
  margin-bottom: 12px;
}

.hero-badges-ribbon {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;
}

.badge-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 7px 12px;
  font-size: 0.82rem;
  color: #e2e8f0;
}

.badge-item strong {
  color: #ffffff;
}

.badge-svg {
  width: 15px;
  height: 15px;
  color: #94a3b8;
  flex-shrink: 0;
}

.badge-highlight {
  background: rgba(201, 168, 106, 0.16);
  border-color: rgba(201, 168, 106, 0.45);
  color: #fbf7ee;
}

.text-gold {
  color: var(--hazard-gold, #c9a86a);
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
}

.btn-call-hero {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: #ffffff;
  color: var(--charcoal-950, #121820);
  border-radius: 9999px;
  padding: 13px 22px;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.96rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.28);
  transition: all 0.2s ease;
}

.btn-call-hero:hover {
  background: var(--hazard-gold, #c9a86a);
  color: #121820;
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(201, 168, 106, 0.4);
}

.live-pulse-dot {
  width: 9px;
  height: 9px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
  70% { box-shadow: 0 0 0 7px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.phone-ico {
  color: var(--charcoal-950, #121820);
}

.btn-schedule-hero {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--brick, #d94828);
  color: #ffffff;
  border: 1.5px solid var(--brick, #d94828);
  border-radius: 9999px;
  padding: 13px 22px;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.96rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(217, 72, 40, 0.35);
  transition: all 0.2s ease;
}

.btn-schedule-hero:hover {
  background: var(--brick-700, #b83619);
  border-color: var(--brick-700, #b83619);
  transform: translateY(-2px);
}

.btn-pricing-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 9999px;
  padding: 12px 18px;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.9rem;
  font-weight: 600;
  color: #e2e8f0;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-pricing-link:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.4);
  color: #ffffff;
}

.hero-trust-notes {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  font-size: 0.8rem;
  color: #94a3b8;
}

.note-pill {
  color: #cbd5e1;
}

.sep {
  color: rgba(255, 255, 255, 0.25);
}

/* --- Right Column: Credibility & Dispatch Assurance Card --- */
.hero-right-col {
  width: 100%;
}

.inspector-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  color: var(--charcoal-950, #121820);
  box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.card-featured-photo-box {
  position: relative;
  width: calc(100% + 48px);
  margin: -24px -24px 18px -24px;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  height: 265px;
}

.card-featured-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 38%;
  display: block;
}

.card-photo-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(14, 24, 36, 0.75) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px 14px;
  gap: 8px;
}

.photo-live-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(18, 24, 32, 0.85);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  padding: 4px 10px;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.68rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.live-dot-pulse {
  width: 7px;
  height: 7px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.35);
  animation: pulse-dot 2s infinite ease-in-out;
}

@keyframes pulse-dot {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.7;
  }
}

.photo-termite-tag {
  background: rgba(201, 168, 106, 0.95);
  color: #121820;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 9999px;
  white-space: nowrap;
}

.card-inspector-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e2e8f0;
}

.inspector-photo-wrapper {
  position: relative;
  flex-shrink: 0;
}

.inspector-avatar-img {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  object-fit: cover;
  border: 2.5px solid var(--hazard-gold, #c9a86a);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.inspector-avatar-img.logo-avatar {
  background: #ffffff;
  padding: 4px;
  object-fit: contain;
}

.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  background: #10b981;
  border: 2.5px solid #ffffff;
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
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1.2;
}

.verified-badge {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  background: #e0f2fe;
  color: #0284c7;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  text-transform: uppercase;
}

.inspector-title {
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--queens-blue, #0e5a8a);
  margin-top: 2px;
}

.inspector-license {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  color: #64748b;
  margin-top: 1px;
}

/* Rating Bar */
.card-rating-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #e2e8f0;
}

.rating-stars-box {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stars-gold {
  color: #f59e0b;
  font-size: 0.95rem;
  letter-spacing: 1px;
}

.rating-text {
  font-size: 0.8rem;
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
  font-size: 0.76rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-bottom: 10px;
}

.deliverables-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.deliverables-list li {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  font-size: 0.82rem;
  line-height: 1.45;
  color: #1e293b;
}

.deliv-ico {
  width: 16px;
  height: 16px;
  color: #10b981;
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
  gap: 8px;
  margin-top: 8px;
}

.btn-card-schedule {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--brick, #d94828);
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  padding: 13px 20px;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(217, 72, 40, 0.32);
  transition: all 0.2s ease;
}

.btn-card-schedule:hover {
  background: var(--brick-700, #b83619);
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(217, 72, 40, 0.42);
}

.btn-arrow {
  width: 16px;
  height: 16px;
}

.card-reassurance {
  font-size: 0.74rem;
  color: #64748b;
  text-align: center;
}

.card-towns-ticker {
  margin-top: 14px;
  padding-top: 10px;
  border-top: 1px dashed #cbd5e1;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.72rem;
  color: #475569;
}

.ticker-dot {
  width: 6px;
  height: 6px;
  background: #0284c7;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 44px 0 54px;
  }

  .hero-headline {
    font-size: 2rem;
  }

  .hero-cta-group {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }

  .btn-call-hero,
  .btn-schedule-hero,
  .btn-pricing-link {
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  .hero-trust-notes {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .sep {
    display: none;
  }

  .inspector-card {
    padding: 18px;
  }

  .card-featured-photo-box {
    width: calc(100% + 36px);
    margin: -18px -18px 16px -18px;
    height: 215px;
  }

  .card-photo-scrim {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
}
</style>
