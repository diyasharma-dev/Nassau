<template>
  <section class="hero-section" id="hero">
    <div class="hero-bg-overlay"></div>
    <div class="container hero-container">
      <div class="hero-content">
        <div class="hero-badges">
          <span class="badge-trust">
            <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            NYS Licensed Inspector #16000009862
          </span>
          <span class="badge-trust">
            <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            InterNACHI Certified Professional Inspector
          </span>
        </div>

        <h1 class="hero-title">
          Premier Home Inspections in <span class="text-highlight">Nassau County, NY</span>
        </h1>
        <p class="hero-subtitle">
          Built on thoroughness, not shortcuts. Lead inspector <strong>Daren Koniuk</strong> personally examines your property from roof to foundation with an exhaustive <strong>1,700+ item evaluation</strong>. Receive a photo-documented digital report by the next day, plus a <strong>Free Official Termite (NPMA-33) Report</strong>.
        </p>

        <!-- Visual Hero House Banner with Live Status -->
        <div class="hero-image-banner">
          <img src="/images/hero-house.jpg" alt="Premier Nassau County Home Inspection" class="hero-main-img" />
          <div class="hero-img-overlay">
            <div class="hero-live-badge">
              <span class="pulse-dot"></span>
              <span>On-Site Daily Across North Shore, Central &amp; South Shore Nassau</span>
            </div>
            <div class="hero-free-wdo-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-sm">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
              </svg>
              <span><strong>Free Termite (WDO) Report</strong> with Every Inspection ($150 Value)</span>
            </div>
          </div>
        </div>

        <div class="hero-highlights-grid">
          <div class="hero-feat-item">
            <div class="feat-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <strong>Owner Personally Inspects</strong>
              <span>No rookies, apprentices, or subcontractors</span>
            </div>
          </div>
          <div class="hero-feat-item">
            <div class="feat-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <strong>Next-Day Digital Report</strong>
              <span>High-res photos &amp; clear, actionable repair notes</span>
            </div>
          </div>
          <div class="hero-feat-item">
            <div class="feat-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <div>
              <strong>Free Termite (WDO) Report</strong>
              <span>Lender-approved NPMA-33 form ($150 value) included</span>
            </div>
          </div>
          <div class="hero-feat-item">
            <div class="feat-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div>
              <strong>100% Satisfaction Guarantee</strong>
              <span>Inspect with confidence or you owe nothing</span>
            </div>
          </div>
        </div>

        <div class="hero-cta-group">
          <a href="tel:7182087092" class="btn btn-primary btn-lg">
            <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call (718) 208-7092
          </a>
          <button class="btn btn-secondary btn-lg" @click="$emit('open-modal', 'General Inspection')">
            Schedule Nassau Inspection &rarr;
          </button>
          <a href="#calculator" class="btn btn-ghost">
            Calculate Instant Fee
          </a>
        </div>

        <!-- Social Proof -->
        <div class="hero-social-proof">
          <div class="proof-rating">
            <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span class="proof-text">5.0 Star Rated on Google &amp; Yelp across NYC &amp; Long Island</span>
          </div>
          <div class="proof-badges">
            <span class="seal-badge">NYS DOL Licensed</span>
            <span class="seal-badge">InterNACHI CPI</span>
            <span class="seal-badge">ASHI Associate</span>
            <span class="seal-badge">NPMA-33 Certified</span>
          </div>
        </div>
      </div>

      <!-- Quick Lead Capture Card -->
      <div class="hero-card-column">
        <div class="quick-quote-card">
          <div class="card-header">
            <h3>Request Fast Nassau Quote</h3>
            <p>Get a direct response from Daren within 30 minutes</p>
          </div>
          <form @submit.prevent="submitHeroQuote">
            <div class="form-group">
              <label for="heroName">Your Full Name *</label>
              <input type="text" id="heroName" v-model="quoteForm.name" required placeholder="e.g. Michael Miller" />
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="heroPhone">Phone Number *</label>
                <input type="tel" id="heroPhone" v-model="quoteForm.phone" required placeholder="(516) 000-0000" />
              </div>
              <div class="form-group">
                <label for="heroEmail">Email Address</label>
                <input type="email" id="heroEmail" v-model="quoteForm.email" placeholder="yourname@gmail.com" />
              </div>
            </div>
            <div class="form-group">
              <label for="heroTown">Property Town in Nassau *</label>
              <input type="text" id="heroTown" v-model="quoteForm.town" required placeholder="e.g. Garden City, Great Neck, Massapequa..." />
            </div>
            <div class="form-group">
              <label for="heroPropType">Property Type *</label>
              <select id="heroPropType" v-model="quoteForm.propType" required>
                <option value="">Select Property Type</option>
                <option value="Single Family Home">Single Family Home (Colonial, Ranch, Split-Level)</option>
                <option value="Multi-Family House (2-4 Units)">Multi-Family House (2-4 Units)</option>
                <option value="Condominium">Condominium</option>
                <option value="Cooperative (Co-Op)">Cooperative (Co-Op)</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Commercial / Mixed-Use">Commercial / Mixed-Use</option>
              </select>
            </div>
            <div class="form-group">
              <label for="heroTimeline">Inspection Timeframe</label>
              <select id="heroTimeline" v-model="quoteForm.timeline">
                <option value="ASAP (Next 24-48 Hours)">ASAP (Next 24-48 Hours)</option>
                <option value="Within 5-7 Days (In Contract)">Within 5-7 Days (In Contract)</option>
                <option value="Shopping / Pre-Offer Stage">Shopping / Pre-Offer Stage</option>
                <option value="Selling / Pre-Listing">Selling / Pre-Listing</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary btn-block submit-quote-btn">
              <span>Get Free Quote &amp; Check Availability</span>
              <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <p class="form-disclaimer">
              <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              No spam. Direct communication with inspector Daren Koniuk.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['open-modal', 'quote-submitted']);

const quoteForm = reactive({
  name: '',
  phone: '',
  email: '',
  town: '',
  propType: 'Single Family Home',
  timeline: 'ASAP (Next 24-48 Hours)'
});

const submitHeroQuote = () => {
  emit('quote-submitted', { ...quoteForm });
};
</script>
