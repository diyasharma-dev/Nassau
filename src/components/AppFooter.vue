<template>
  <footer class="site-footer">
    <div class="wrap footer-container">
      <div class="footer-top-grid">
        <div class="footer-col brand-col">
          <div class="footer-logo-wrap">
            <img
              src="/images/homestar-nassau-logo-white.svg"
              alt="HomeStar Inspections - Nassau County Division"
              class="footer-logo-img"
              width="240"
              height="48"
              loading="lazy"
            />
          </div>
          <h4 class="brand-subname">HomeStar Inspection Services, LLC</h4>
          <p class="footer-desc">
            Nassau County's dedicated home inspection authority. Providing thorough, unbiased 1,700-point residential building evaluations across every village and hamlet in Nassau County, Long Island.
          </p>
          <p class="footer-license">
            <strong>NYS Licensed Home Inspector:</strong> #16000009862<br>
            <strong>Lead Inspector &amp; Owner:</strong> Daren Koniuk<br>
            <strong>Nassau Direct Line:</strong> (718) 208-7092
          </p>
        </div>

        <div class="footer-col">
          <h4>Nassau County Townships</h4>
          <ul class="footer-links">
            <li><a href="#neighborhoods">Town of North Hempstead (Great Neck, Manhasset, Roslyn)</a></li>
            <li><a href="#neighborhoods">Town of Hempstead (Garden City, Levittown, Merrick)</a></li>
            <li><a href="#neighborhoods">Town of Oyster Bay (Syosset, Massapequa, Plainview)</a></li>
            <li><a href="#neighborhoods">City of Long Beach (Beachfront &amp; Canals)</a></li>
            <li><a href="#neighborhoods">City of Glen Cove (North Shore Harbor)</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Nassau Inspection Scope</h4>
          <ul class="footer-links">
            <li><a href="#housing-types">Common Housing Types</a></li>
            <li><a href="#costly-issues">Costly Issues We Uncover</a></li>
            <li><a href="#checklist">1,700-Point Systems Evaluation</a></li>
            <li><a href="#neighborhoods">80 Areas We Inspect</a></li>
            <li><a href="#reviews">Google Verified Reviews (4.9★)</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Direct Nassau Inspector Contact</h4>
          <div class="footer-contact-item">
            <span class="contact-lbl">Direct Phone / Text:</span>
            <a href="tel:7182087092" class="footer-phone">(718) 208-7092</a>
          </div>
          <div class="footer-contact-item">
            <span class="contact-lbl">Inspector Direct Email:</span>
            <a href="mailto:dkoniuk@yahoo.com" class="footer-email">
              dkoniuk@yahoo.com
            </a>
          </div>
          <div class="footer-contact-item">
            <span class="contact-lbl">Availability:</span>
            <span class="contact-val">7 Days a Week &bull; 7:00 AM – 9:00 PM</span>
            <span class="sub-availability">Same-day &amp; next-day Nassau bookings available</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright-p">&copy; 2026 HomeStar Inspection Services, LLC &bull; Nassau County Division. All Rights Reserved.</p>
        <p class="footer-disclaimer-text">
          NYS Licensed Home Inspector License #16000009862. Free official NPMA-33 Wood Destroying Insect inspection report included with all paid single and multi-family residential inspections.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
  background-color: #0c1424;
  color: #94a3b8;
  padding: 76px 0 36px;
  border-top: 1px solid rgba(229, 223, 213, 0.15);
  position: relative;
}

.footer-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-top-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
  padding-bottom: 44px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

@media (min-width: 640px) {
  .footer-top-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1040px) {
  .footer-top-grid {
    grid-template-columns: 1.35fr 1fr 1fr 1.15fr;
  }
}

.footer-logo-wrap {
  margin-bottom: 14px;
}

.footer-logo-img {
  height: 44px;
  width: auto;
  max-width: 250px;
  display: block;
}

.brand-subname {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.12rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
}

.footer-desc {
  font-size: 0.84rem;
  line-height: 1.6;
  color: #cbd5e1;
  margin-bottom: 14px;
  max-width: 320px;
}

.footer-license {
  font-size: 0.82rem;
  line-height: 1.6;
  color: #e2e8f0;
}

.footer-license strong {
  color: #ffffff;
}

.footer-col h4 {
  color: #ffffff;
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 18px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.footer-links a {
  color: #cbd5e1;
  font-size: 0.84rem;
  line-height: 1.45;
  text-decoration: none;
  transition: color 0.15s ease;
}

.footer-links a:hover {
  color: #c5a880;
}

.footer-contact-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 14px;
}

.contact-lbl {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #94a3b8;
}

.footer-phone {
  font-size: 1.2rem;
  font-weight: 800;
  color: #ffffff !important;
  text-decoration: none;
  transition: color 0.15s ease;
}

.footer-phone:hover {
  color: #c5a880 !important;
}

.footer-email {
  font-size: 0.92rem;
  font-weight: 600;
  color: #c5a880 !important;
  text-decoration: underline;
  text-decoration-color: rgba(197, 168, 128, 0.4);
  transition: all 0.2s ease;
  word-break: break-all;
}

.footer-email:hover {
  color: #ffffff !important;
  text-decoration-color: #ffffff;
}

.contact-val {
  font-size: 0.84rem;
  color: #e2e8f0;
}

.sub-availability {
  font-size: 0.76rem;
  color: #94a3b8;
}

.footer-bottom {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 0.78rem;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    text-align: left;
  }
}

.copyright-p {
  color: #94a3b8;
  margin: 0;
}

.footer-disclaimer-text {
  font-size: 0.74rem;
  color: #64748b;
  margin: 0;
  max-width: 520px;
}
</style>
