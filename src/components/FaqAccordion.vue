<template>
  <section class="section faq-section" id="faq">
    <div class="wrap">
      <!-- Section Head -->
      <div class="section-head text-center">
        <span class="section-tag">Frequently Asked</span>
        <h2 class="section-title">Nassau County Home Inspection Questions</h2>
        <p class="section-sub">
          Direct answers to common questions about buying and inspecting homes in Nassau County.
        </p>
      </div>

      <!-- Official FAQs Container -->
      <div class="faq-container">
        <!-- FAQ 1 -->
        <div class="faq-card">
          <h3 class="faq-question">How do you check for abandoned oil tanks in Nassau County?</h3>
          <p class="faq-answer">
            We inspect basement foundation penetrations for disconnected copper fuel lines, patch marks, and exterior vent/fill pipes that suggest a buried tank on the property.
          </p>
        </div>

        <!-- FAQ 2 -->
        <div class="faq-card">
          <h3 class="faq-question">When do I receive my Nassau County inspection report?</h3>
          <p class="faq-answer">
            You will receive your full digital inspection report with detailed color photos the next day.
          </p>
        </div>

        <!-- FAQ 3 -->
        <div class="faq-card">
          <h3 class="faq-question">Are all built-in kitchen and mechanical appliances tested?</h3>
          <p class="faq-answer">
            Yes, we test built-in kitchen appliances, heating systems, water heaters, central AC units, and electrical safety disconnects.
          </p>
        </div>
      </div>

      <!-- Direct Assistance Footer -->
      <div class="faq-footer-callout text-center">
        <p>Have a question about a specific Nassau County home or property type?</p>
        <a href="tel:7182087092" class="btn btn-call-direct">
          Call Inspector Daren Koniuk: (718) 208-7092
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.faq-section {
  background: #fafbfd;
  padding: 80px 0;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
}

.section-head {
  margin-bottom: 44px;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--queens-blue, #0e5a8a);
  background: #e0f2fe;
  padding: 4px 12px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1.2;
  margin: 0 0 12px 0;
}

.section-sub {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 1.05rem;
  color: var(--text-secondary, #475569);
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
}

.faq-container {
  max-width: 860px;
  margin: 0 auto 36px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-card {
  background: #ffffff;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 12px;
  padding: 24px 28px;
  box-shadow: 0 2px 10px rgba(18, 24, 32, 0.03);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.faq-card:hover {
  transform: translateY(-2px);
  border-color: var(--queens-blue, #0e5a8a);
}

.faq-question {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  margin: 0 0 10px 0;
  line-height: 1.35;
}

.faq-answer {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.95rem;
  line-height: 1.68;
  color: var(--text-secondary, #475569);
  margin: 0;
}

.faq-footer-callout {
  max-width: 600px;
  margin: 0 auto;
}

.faq-footer-callout p {
  font-size: 0.95rem;
  color: var(--text-secondary, #475569);
  margin-bottom: 14px;
}

.btn-call-direct {
  display: inline-flex;
  align-items: center;
  background: #ffffff;
  color: var(--charcoal-950, #121820);
  border: 1.5px solid var(--border-soft, #d8dee6);
  padding: 10px 20px;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(18, 24, 32, 0.04);
  transition: all 0.2s ease;
}

.btn-call-direct:hover {
  border-color: var(--queens-blue, #0e5a8a);
  color: var(--queens-blue, #0e5a8a);
  transform: translateY(-1px);
}
</style>
